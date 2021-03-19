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
  },
}
