// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy from "http-proxy";

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
  // don't send cookies to API Server
  req.headers.cookie = "";

  // /api/students
  proxy.web(req, res, {
    target: process.env.API_URL,
    changeOrigin: true,
    selfHandleResponse: false, // trả về response từ server cho client luôn proxy kh xử lý
  });

  // res.status(200).json({ name: "PATH - Match all here" });
}
