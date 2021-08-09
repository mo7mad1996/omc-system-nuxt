let dev = process.env.NODE_ENV !== 'production'

export default {
  // server
  server: {
    port: 1996,
    host: '0.0.0.0',
  },
  dev,
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - عمال مصر',
    htmlAttrs: {
      lang: 'ar',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/bootstrap.min.css',
    '~/assets/css/reset.css',
    '~/assets/scss/main.scss',
    '~/assets/scss/tables.scss',
    '~/assets/css/print.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // on localhost
    // json server host [  my ip + json-server::port  ]

    baseURL: dev ? 'http://localhost:3000/' : 'http://192.168.1.33:3000/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    
  },
}
