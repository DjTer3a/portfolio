// next.config.js
const withImages = require('next-images');
require('dotenv').config();
module.exports = {
    images: {
      disableStaticImages: false
    },
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true
    },
  }

// const { i18n } = require('./next-i18next.config');

// module.exports = {
//   i18n,
// };