import en from './locales/en.json'
import tr from './locales/tr.json'

// You can use `defineI18nConfig` to get type inferences for options to pass to vue-i18n.
export default defineI18nConfig(() => {
  return {
    legacy: false,
    locale: 'tr',
    persistLocale: true, 
    useCookie: true,
    messages: {
      en,
      tr
    }
  }
})