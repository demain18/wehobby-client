export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false, // false -> SPA

  dotenv: { 
    filename: 
      process.env.NODE_ENV === 'development' 
      ? '.env.development' 
      : '.env.development'
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'google-signin-client_id', content: '616505649106-lli8nqfqdv9acjae00bve7cdtb4gfhhu.apps.googleusercontent.com' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' },
    ],
    script: [
      { hid: 'stripe', src: 'https://apis.google.com/js/platform.js', sync: true, defer: true }, // google social login
      // { hid: 'stripe', 'data-ad-client': 'ca-pub-7099403550820594', src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', sync: true }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~assets/css/common.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    // { src: '~plugins/ckeditor', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/vuetify',
    'moment',
    'vue-social-sharing/nuxt'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // '@nuxtjs/vuetify',
    // '@nuxtjs/axios',
    // 'moment',
    // 'vue-social-sharing/nuxt'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  axios: {
    // proxy: true,
    baseURL: process.env.API_URL
  },

  proxy: {
    '/api/': {
      target: process.env.API_URL,
    }
  },

  // Vuetify theme color custom
  vuetify: {
    theme: {
      light: true,
      themes: {
        light: {
          primary: '#ff4e54', // proejct main color
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
        }
      }
    }
  },
}
