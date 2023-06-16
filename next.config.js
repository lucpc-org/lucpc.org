/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  experimental: {
    appDir: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
