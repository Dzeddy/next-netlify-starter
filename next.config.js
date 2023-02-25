/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['upload.wikimedia.org', 'cdn.discordapp.com', 'help.twitter.com'],
  }
}

module.exports = nextConfig
