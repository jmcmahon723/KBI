// const config = require('./.contentful.json')
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/KBI/'
  }
} : {}

export default {
  ...routerBase
}


module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'kbi-data',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:"stylesheet", href:"https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" }

    ]
    // plugins: ['~plugins/vue-instantsearch.js']
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  // env: {
  //   CTF_SPACE_ID: config.CTF_SPACE_ID,
  //   CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN
    
  // },

  

  // pluginOptions: {
  //   ssr: {
  //     nodeExternalsWhitelist: [
  //       /\.css$/,
  //       /\?vue&type=style/,
  //       /vue-instantsearch/,
  //       /instantsearch.js/
  //     ]
  //   }
  // },
  /*
  ** Build configuration
  */
  build: {

    transpile: ['vue-instantsearch', 'instantsearch.js/es'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

