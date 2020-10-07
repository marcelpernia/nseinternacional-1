export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nseinternacional',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@assets/css/bulma.css',
    '@assets/css/global.scss',
    '@assets/css/fa/css/all.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '@plugins/vue-carousel.js', mode: 'client' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    'nuxt-purgecss',
    ['@nuxtjs/google-analytics', {
      id: 'UA-179974711-1'
    }]
  ],
  purgeCSS: {
   // your settings here
    whitelist: [
      'class-radio', 
      'class-tv', 
      'class-cine',
      'nuxt-link-exact-active',
      'notification.is-success',
      'notification.is-danger'
    ]
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
  },
  target: 'static',
  loading: {
    color: '#BD9B60',
    height: '3px'
  }
  // loading: '~/components/LoadingBar.vue',
}
