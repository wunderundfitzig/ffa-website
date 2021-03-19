/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()
const withImages = require('next-images')

module.exports = {
  ...withImages(),
  env: {
    WP_API_URL: process.env.WP_API_URL,
  },
  images: {
    domains: ['ffaback.uber.space'],
    deviceSizes: [640, 750, 1080, 1200, 1920]
  },
}
