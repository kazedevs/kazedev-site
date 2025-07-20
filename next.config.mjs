/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/kazedev-site' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/kazedev-site/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
