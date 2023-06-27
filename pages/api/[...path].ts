// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy from "http-proxy";
import Cookies from "cookies";
const proxy = httpProxy.createProxyServer({});
export const config = {
  api: {
    bodyParser: false,
  },
};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  return new Promise<void>((resolve) => {
    // convert cookies to header Authorization
    const cookies = new Cookies(req, res);
    const accessToken = cookies.get("access_token");
    if (accessToken) {
      req.headers.Authorization = `Bearer ${accessToken}`;
    }

    // don't send cookies to API Server
    req.headers.cookie = "";

    // /api/students
    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: false, // trả về response từ server cho client luôn proxy kh xử lý
    });

    // res.status(200).json({ name: "PATH - Match all here" });

    //  khi có response trả về nó sẽ báo hàm handler
    proxy.once("proxyRes", () => {
      resolve();
    });
  });
}
