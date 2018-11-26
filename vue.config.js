const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const copyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        routes: [
          '/',
          '/icons',
          '/testing',
          '/bootstrap',
        ],
      })
    ]
  },
  chainWebpack: config => {
    config
        .plugin('copy')
        .use(copyWebpackPlugin, [[{
          from: 'public',
          ignore: ['./index.html', 'DS_Store']
        }]])
  },
  css: {
    loaderOptions: {
      sass: {
        // Files defined here will be available in all our Components
        data: [
          '@import "@/assets/scss/globals.scss";',
        ],
      },
    },
  },
};
