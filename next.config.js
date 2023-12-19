/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: { unoptimized: true },
  //assetPrefix: "/docs/",
};

module.exports = nextConfig;
