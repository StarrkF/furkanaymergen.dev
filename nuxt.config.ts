// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-11-01',
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
  nitro: {
    compressPublicAssets: true,
    prerender: { routes: ['/', '/en', '/sitemap.xml', '/robots.txt'] }
  },
  routeRules: {
    '/fonts/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/images/**': { headers: { 'cache-control': 'public, max-age=604800' } }
  },
  vite: {
    optimizeDeps: {
      include: ['canvas-confetti', 'swiper/vue', 'swiper/modules']
    },
  },
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxtjs/color-mode', 'nuxt-swiper', '@nuxtjs/i18n', '@nuxt/image', '@nuxtjs/robots'],
  i18n: {
    vueI18n: './i18n.config.ts',
    baseUrl: 'https://furkanaymergen.dev',
    strategy: 'prefix_except_default',
    defaultLocale: 'tr',
    locales: [
      { code: 'tr', language: 'tr-TR', name: 'Türkçe' },
      { code: 'en', language: 'en-US', name: 'English' }
    ],
    detectBrowserLanguage: false
  },
  robots: {
    rules: {
      UserAgent: '*',
      Allow: '/',
      Sitemap: 'https://furkanaymergen.dev/sitemap.xml'
    }
  },
  colorMode: {
    preference: 'dark', // default theme
    fallback: 'dark',
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
  },
})
