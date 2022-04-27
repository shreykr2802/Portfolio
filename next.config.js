/** @type {import('next').NextConfig} */

const path = require('path')
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

// module.exports = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
//   basePath: '',
//   trailingSlash: true
// }

module.exports = withPlugins([
  optimizedImages,
]);