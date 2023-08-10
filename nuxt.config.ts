// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: true,
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  plugins: [
    { src: '~/plugins/smooth-scroll.js', ssr: false}, // Yolu ve modu düzenlemeyi unutmayın
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxtjs/color-mode', 'nuxt-swiper'],
  colorMode: {
    preference: 'system', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
  }
})
