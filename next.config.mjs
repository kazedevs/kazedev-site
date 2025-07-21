/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['s3.coinmarketcap.com'],
  },
};

export default nextConfig;
