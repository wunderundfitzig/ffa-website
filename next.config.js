/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()
const withImages = require('next-images')

module.exports = {
  ...withImages(),
  env: {
    WP_API_URL: 'https://ffaback.uber.space/wp-json/wp/v2', //process.env.WP_API_URL,
  },
}
