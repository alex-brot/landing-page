/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
  output: "export",
  assetPrefix: "/" + process.env.NEXT_PUBLIC_REPOSITORY_NAME || "",
  basePath: process.env.NEXT_PUBLIC_REPOSITORY_NAME || "",
};

export default nextConfig;
