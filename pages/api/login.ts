// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy, { ProxyReqCallback } from "http-proxy";
import Cookies from "cookies";
type Data = {
  message: string;
};
const proxy = httpProxy.createProxyServer({});
export const config = {
  api: {
    bodyParser: false,
  },
};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(404).json({
      message: "method not supported",
    });
  }
  return new Promise<void>((resolve) => {
    console.log("login");
    // don't send cookies to API Server
    req.headers.cookie = "";

    //  khi có response trả về nó chạy vào hàm này
    proxy.once("proxyRes", (proxyRes, req, res) => {
      let body = "";
      proxyRes.on("data", function (chuck) {
        body += chuck;
      });
      proxyRes.on("end", function () {
        try {
          const { accessToken, expiredAt } = JSON.parse(body);

          // convert token to cookies
          const cookies = new Cookies(req, res, {
            secure: process.env.NODE_ENV === "production",
          });
          cookies.set("access_token", accessToken, {
            httpOnly: true,
            sameSite: "lax",
            expires: new Date(expiredAt),
          });

          // - API server ko có API logout. nó chỉ cung cấp JWT, rồi bên client tự lưu mà dùng, khi ko cần nữa thì xoá token đi là được.
          // - NextJS server của mình mới là ông thần dựng nên cookies,
          // mà cookies với httpOnly chỉ được can thiệp từ phía server,
          //   nên chỉ có server mới xoá được cookie đó. Thành ra BẮT BUỘC phải có hàm logout() để gọi lên nhờ xoá cookies đi nhen Hà.

          (res as NextApiResponse).status(200).json({
            message: "login successfully",
          });
        } catch (error) {
          (res as NextApiResponse).status(500).json({
            message: "something went wrong",
          });
        }
      });
    });

    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: true, // tự handler response trả về từ server
    });

    // res.status(200).json({ name: "PATH - Match all here" });
  });
}
