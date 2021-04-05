export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false, // false -> SPA

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
    // '@nuxtjs/vuetify',
    // '@nuxtjs/axios'

    // '@ckeditor/ckeditor5-build-classic',
    // '@ckeditor/ckeditor5-vue'
    // '@ckeditor/ckeditor5-build-classic'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/axios',
    'moment',
    'vue-social-sharing/nuxt'
    // vue cookies는 불러오지도 않았는데 어떻게 되는지 모르겠다
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  // Axios Custom
  // axios: {
  //   baseURL: 'http://112.150.218.99:8888/1.0/api',
  //   proxyHeaders: false,
  //   credentials: false
  // },

  axios: {
    proxy: true
  },

  proxy: {
    '/api/': {
      target: 'http://api.wehobby.kr/1.0', // Error에 localhos:3000 이라고 나와도 실제로는 8888번 포트로 요청이 가능 중임(request 발신처가 3000이라는 뜻)
      // pathRewrite: {'^/api/': ''} 
    },

    // '/api/': 'http://localhost:8888/1.0'
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
