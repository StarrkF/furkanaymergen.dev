// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: true,
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  plugins: [
    { src: '~/plugins/smooth-scroll.js', ssr: false },
    { src: '~/plugins/aos.js', mode: 'client' }
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxtjs/color-mode', 'nuxt-swiper', '@nuxtjs/i18n', '@nuxt/image', '@nuxtjs/robots'],
  i18n: {
    vueI18n: './i18n.config.ts'
  },
  robots: {
    UserAgent: '*',
    Disallow: ''
  },
  colorMode: {
    preference: 'night', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
  }
})
