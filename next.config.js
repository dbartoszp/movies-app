/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['m.media-amazon.com'],
  },
  env: {
    NEXT_PUBLIC_IMDB_API_KEY: process.env.NEXT_PUBLIC_IMDB_API_KEY,
  },
};
module.exports = nextConfig;
