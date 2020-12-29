export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  // Custom Settings
  // loading: true,

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
    '@nuxtjs/vuetify',
    // '@ckeditor/ckeditor5-build-classic',
    // '@ckeditor/ckeditor5-vue'
    // '@ckeditor/ckeditor5-build-classic'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  // Vuetify Theme Custom
  vuetify: {
    theme: {
      light: true,
      themes: {
        light: {
          primary: '#ff4e54',
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
