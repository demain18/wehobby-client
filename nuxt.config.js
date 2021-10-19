export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false, // false => SPA
  // target: 'server', // default is 'server'

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    // titleTemplate: '%s',
    title: '위하비 - 사람과 취미를 만나는 곳',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'WeHobby' },
      { name: 'google-signin-client_id', content: '616505649106-lli8nqfqdv9acjae00bve7cdtb4gfhhu.apps.googleusercontent.com' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' },
    ],
    script: [
      { hid: 'stripe', src: 'https://apis.google.com/js/platform.js', sync: true, defer: true }, // google social login
      { hid: 'stripe', src: 'https://www.googletagmanager.com/gtag/js?id=G-4899MQZJJT', sync: true } // google tag manager
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

  /**
   * 이 파일에서 axios설정이 먹히는건 $axios(nuxt/axios 문서)뿐이다.
   * development(로컬)에서는 proxy 키고(proxy:true) 
   * production(실서버)에서는 proxy 끄고 baseurl 사용(proxy:true, baeURL:env.url)
   * 코드 자동교체는 process.env.NODE_ENV 값을 사용한 조건문으로 구현
   */
  axios: {
    /* development */
    // proxy: true,

    /* Production */
    // proxy: false,

    proxy: 
      process.env.NODE_ENV === 'development'
      // process.env.NODE_ENV === 'production'
      ? true 
      : false
    ,
    baseURL: process.env.API_URL,
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
