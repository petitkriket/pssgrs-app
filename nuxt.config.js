export default {
  // Target: https://go.nuxtjs.dev/config-target, static is relevent for Netifly static hosting
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'pssgrs-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // Axios customization (transformRequest, transformResponse, etc.)
    // '@/plugins/axios',
    // https://github.com/Kaperskyguru/nuxt-with-repository-pattern
    '@/plugins/repositories.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://github.com/Gomah/nuxt-graphql-request
    'nuxt-graphql-request'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/chakra
    '@chakra-ui/nuxt',
    // https://go.nuxtjs.dev/emotion
    '@nuxtjs/emotion',
    // https://i18n.nuxtjs.org/
    '@nuxtjs/i18n',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/netlify-cms
    '@nuxtjs/dayjs'

  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_URL || 'http://localhost:1337',
    debug: process.env.NODE_ENV !== 'production'
  },

  // i18n module configuration: https://i18n.nuxtjs.org/options-reference
  i18n: {
    locales: [
      { code: 'fr', name: 'Francais', iso: 'fr-FR', file: 'fr.js', dir: 'ltr' },
      { code: 'en', name: 'English', iso: 'en-US', file: 'en.js', dir: 'ltr' },
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en',
    baseUrl: process.env.NUXT_APP_URL || 'http://localhost:3000',
    strategy: 'prefix_except_default',
    vueI18n: {
      fallbackLocale: 'en',
    },
  },

  // dayjs module configuration
  dayjs: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    plugins: [
      'localizedFormat',
    ],
  },

  // graphql-request configuration: https://nuxt-graphql-request.vercel.app/setup
  graphql: {
      clients: {
        default: {
          endpoint: process.env.GRAPHQL_URL || 'http://localhost:1337/graphql',
          /**
           * Per-client options overrides
           * See: https://github.com/prisma-labs/graphql-request#passing-more-options-to-fetch
           */
          options: {},
        },
      },

      /**
       * Options
       * See: https://github.com/prisma-labs/graphql-request#passing-more-options-to-fetch
       */
      options: {},

      /**
       * Optional
       * default: true (this includes cross-fetch/polyfill before creating the graphql client)
       */
      useFetchPolyfill: true,

      /**
       * Optional
       * default: false (this includes graphql-tag for node_modules folder)
       */
      includeNodeModules: true,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // nuxt-graphql-request public runtime configuration
  publicRuntimeConfig: {
    graphql: {
      clients: {
        default: {
          endpoint: process.env.BACKEND_URL || 'http://localhost:1337/graphql',
        },
      },
    },
  },
}
