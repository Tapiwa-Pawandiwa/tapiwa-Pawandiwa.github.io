/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental:{
    reactRefresh: true,
  },
  reactStrictMode: true,
  // Add basePath
  basePath: '/tapiwa-pawandiwa.github.io',
  //assetPrefix: '/tapiwa-Pawandiwa.github.io/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
