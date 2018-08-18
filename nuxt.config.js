module.exports = {
  css: [
    '@/styles/main.scss'
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'Mehreen Stavri - UX Designer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Mehreen Stavri - UX Designer' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Playfair+Display' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#76323f' },
  /*
  ** Build configuration
  */
  build: {
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
  },
  mode: "spa",
  plugins: ["~/plugins/modernizr-plugin"],
  router: {
    middleware: "meta",
  }
}
