// chrome-devtools evaluate_script --pageId 1 --sourcePath tests/performance.browser.js
async function verifyPortfolioOptimization() {
  const passed = []
  const assert = (value, message) => {
    if (!value) throw new Error(message)
    passed.push(message)
  }
  const wait = ms => new Promise(resolve => setTimeout(resolve, ms))
  const until = async (check, message) => {
    for (let i = 0; i < 80; i++) {
      if (check()) return
      await wait(50)
    }
    throw new Error(message)
  }
  const scroll = async id => {
    const section = document.getElementById(id)
    section.scrollIntoView({ block: 'start', behavior: 'instant' })
    await wait(1000)
  }
  await document.fonts.ready
  assert(document.querySelectorAll('h1').length === 1, 'One semantic primary heading')
  assert(document.documentElement.scrollWidth <= innerWidth + 1, 'No horizontal overflow')
  assert(!performance.getEntriesByType('resource').some(entry => /fonts\.googleapis\.com|fonts\.gstatic\.com/.test(entry.name)), 'Fonts do not depend on third-party requests')
  assert(document.fonts.check('700 24px "Space Grotesk"', 'Aymergen'), 'Original heading font loaded')
  assert(document.fonts.check('400 16px "Plus Jakarta Sans"', 'İıŞşĞğ'), 'Original Turkish body font loaded')
  assert(document.querySelector('#home .text-gradient-primary'), 'Existing hero visual language preserved')
  document.querySelector('.skip-link').focus()
  assert(document.activeElement.classList.contains('skip-link'), 'Keyboard skip link works')
  document.activeElement.blur()

  for (const id of ['about', 'experiences', 'projects', 'goals', 'contact']) await scroll(id)
  await until(() => [...document.querySelectorAll('.swiper')].every(element => element.swiper?.initialized), 'Below-fold carousels did not hydrate')
  assert(document.querySelectorAll('.swiper-initialized').length === 2, 'Both carousels hydrate when reached')
  for (const element of document.querySelectorAll('.swiper')) {
    const swiper = element.swiper
    const before = swiper.realIndex
    swiper.slideNext(0)
    assert(swiper.realIndex !== before, 'Carousel navigation works')
  }
  const contact = document.getElementById('contact')
  assert(/\d{1,2}:\d{2}:\d{2}/.test(contact.textContent), 'Visible contact clock starts')
  assert(document.querySelector('#home').classList.contains('motion-paused'), 'Offscreen hero pauses animation')

  await scroll('experiences')
  const tabs = document.querySelectorAll('#experiences button')
  tabs[1].click()
  await wait(500)
  assert(document.querySelector('#experiences').textContent.includes(document.documentElement.lang === 'tr' ? 'Üniversite' : 'University'), 'Education tab works after lazy hydration')
  tabs[0].click()
  await wait(500)
  assert(document.querySelector('#experiences').textContent.includes('2021'), 'Work tab works after lazy hydration')

  window.scrollTo({ top: 0, behavior: 'instant' })
  await wait(1200)
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
  assert(document.querySelector('#home').classList.contains('motion-paused') === reduced, 'Hero respects motion preference')
  assert(contact.classList.contains('motion-paused'), 'Offscreen contact clock pauses')
  const header = document.querySelector('header')
  const menu = header.querySelector('button[aria-controls="mobile-navigation"]')
  if (innerWidth < 1024) {
    menu.click()
    await wait(350)
    assert(menu.getAttribute('aria-expanded') === 'true', 'Mobile navigation opens accessibly')
    menu.click()
    await wait(350)
  }
  const original = document.documentElement.dataset.theme
  const theme = [...header.querySelectorAll('.dropdown-content button')].find(button => button.textContent.includes('Corporate'))
  theme.click()
  await wait(100)
  assert(document.documentElement.dataset.theme === 'corporate', 'Theme control preserves light theme')
  const restore = [...header.querySelectorAll('.dropdown-content button')].find(button => button.textContent.includes(original === 'corporate' ? 'Corporate' : 'Night'))
  restore.click()
  await wait(100)

  const clipboard = Object.getOwnPropertyDescriptor(navigator, 'clipboard')
  try {
    Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText: async () => { throw new Error('Permission denied') } } })
    document.querySelector('#home button').click()
    await wait(200)
    assert(/Kopyalanamadı|Could not copy/.test(document.body.textContent), 'Clipboard denial reports failure rather than false success')
    Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText: async () => {} } })
    document.querySelector('#home button').click()
    await wait(300)
    assert(/panoya kopyalandı|copied to clipboard/.test(document.body.textContent), 'Clipboard success still works')
  } finally {
    if (clipboard) Object.defineProperty(navigator, 'clipboard', clipboard)
    else delete navigator.clipboard
  }

  const target = document.documentElement.lang === 'tr' ? 'en' : 'tr'
  header.querySelector('a[title*="English"], a[title*="Geç"]').click()
  await until(() => document.documentElement.lang === target && location.pathname === (target === 'en' ? '/en' : '/'), 'Language link did not change route and content')
  assert(location.pathname === (target === 'en' ? '/en' : '/'), 'Language is encoded in a crawlable URL')
  const canonical = document.querySelector('link[rel="canonical"]').href
  assert(canonical === `https://furkanaymergen.dev${target === 'en' ? '/en' : '/'}`, 'Canonical updates after client navigation')
  assert(document.querySelectorAll('link[rel="canonical"]').length === 1, 'No duplicate canonical metadata')
  const cv = document.querySelector('#home a[href$=".pdf"]')
  assert((await fetch(cv.href, { method: 'HEAD' })).ok, 'Localized CV remains available')
  await wait(1800)
  assert(document.documentElement.scrollWidth <= innerWidth + 1, 'No overflow after language switch')
  return { passed, viewport: `${innerWidth}x${innerHeight}`, reduced, language: target }
}