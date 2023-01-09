/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'www.notion.so', 's3.us-west-2.amazonaws.com'],
  },
}

module.exports = nextConfig
