/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "images.unsplash.com/",
  //       port: "",
  //       pathname: "/**",
  //     },
  //   ],
  // },
  images: {
    domains: ["images.unsplash.com", "plus.unsplash.com", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
