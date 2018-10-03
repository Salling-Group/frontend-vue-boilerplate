const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

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
