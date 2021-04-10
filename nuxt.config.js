import routes from './src/pages/index'
import spriteLogic from './src/assets/spritesmith.js'

export default {
  ssr: false,
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    script: [
      {
        src: '/js/fixedviewport.js'
      },
      {
        src: '/js/preloadjs.min.js'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }]
  },

  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  // SCSS to inner styles
  css: ['@/assets/styles/pre-style.scss', '@/assets/styles/destyle.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/components.js', ssr: false },
    { src: '~/plugins/localStorage.js', ssr: false },
    { src: '~/plugins/preload.js', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  devModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/style-resources'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    '@nuxtjs/eslint-module',
    [
      'vue-sweetalert2/nuxt',
      {
        confirmButtonColor: '#337ab7'
      }
    ]
  ],
  /*
   ** Style Resources configuration
   */
  styleResources: {
    scss: ['@/assets/styles/_variables.scss', '@/assets/styles/_mixins.scss']
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    cache: true,
    extend(config, ctx) {
      if (!ctx.isDev) {
        // relative links, please.
        config.output.publicPath = './_nuxt/'
      }
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
      spriteLogic.forEach((s) => config.plugins.push(s))

      return config
    }
  },

  generate: {
    subFolders: false
  },

  router: {
    mode: 'hash',
    middleware: ['auth'],
    extendRoutes(nuxtRoutes, resolve) {
      nuxtRoutes.splice(
        0,
        nuxtRoutes.length,
        ...routes.map((route) => {
          return {
            ...route,
            component: resolve(__dirname, route.component)
          }
        })
      )
    }
  },

  srcDir: 'src/',

  pageTransition: {
    name: 'page-transition',
    mode: 'out-in',
    enterClass: 'page-enter',
    leaveToClass: 'page-enter',
    enterActiveClass: 'page-transition',
    leaveActiveClass: 'page-transition'
  }
}
