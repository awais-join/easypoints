const responseHeaders = require('./headers');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    DOMAIN_BASE_URL: process.env.DOMAIN_BASE_URL,
    MAIN_APP_URL: process.env.MAIN_APP_URL
  },
  output: 'standalone',
  headers: async () => {
    return [
      {
        source: '/(.*)',
        headers: responseHeaders
      }
    ];
  },
}

module.exports = nextConfig
