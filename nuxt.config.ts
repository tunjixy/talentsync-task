// https://www.npmjs.com/package/vite-svg-loader
import svgLoader from 'vite-svg-loader'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      htmlAttrs: {
        lang: 'en',
      },
      viewport: 'width=device-width, initial-scale=1',
      title: 'Talent Task',
      meta: [
        {
          name: 'description',
          content: '',
        },
        {
          name: 'keywords',
          content: '',
        },
        { name: 'theme-color', content: '#175CD3' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap',
        },
      ],
    },
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  typescript: {
    shim: false,
  },

  modules: [
    // https://tailwindcss.nuxtjs.org/getting-started/setup
    '@nuxtjs/tailwindcss',
  ],

  vite: {
    plugins: [
      svgLoader({
        svgo: true,
        svgoConfig: {
          plugins: [],
        },
      }),
    ],
  },

  devtools: { enabled: true },
})
