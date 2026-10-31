export default defineNuxtPlugin((nuxtApp) => {
  const animations = new Map()
  const revealed = new WeakSet()
  let observer
  let reduced
  const transforms = {
    'fade-up': 'translate3d(0, 100px, 0)',
    'fade-down': 'translate3d(0, -100px, 0)',
    'fade-right': 'translate3d(-100px, 0, 0)',
    'fade-left': 'translate3d(100px, 0, 0)',
    'zoom-in': 'scale(0.6)'
  }

  const refresh = () => {
    if (!observer || reduced.matches) return
    for (const [element, animation] of animations) {
      if (!element.isConnected) {
        observer.unobserve(element)
        animation.cancel()
        animations.delete(element)
      }
    }
    document.querySelectorAll('[data-aos]').forEach(element => {
      if (revealed.has(element) || animations.has(element)) return
      // Above-the-fold text is never hidden while JS or animation initializes.
      const inHero = !!element.closest('#home')
      const animation = element.animate([
        { opacity: inHero ? 1 : 0, transform: transforms[element.dataset.aos] || 'none' },
        { opacity: 1, transform: 'none' }
      ], {
        duration: Number(element.dataset.aosDuration || 700),
        delay: Number(element.dataset.aosDelay || 200),
        easing: 'cubic-bezier(0.47, 0, 0.745, 0.715)',
        fill: 'both'
      })
      animation.pause()
      animation.onfinish = () => {
        revealed.add(element)
        animations.delete(element)
        animation.cancel()
      }
      animations.set(element, animation)
      observer.observe(element)
    })
  }

  nuxtApp.hook('app:mounted', () => {
    if (!('IntersectionObserver' in window) || !Element.prototype.animate) return
    reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        animations.get(entry.target)?.play()
        observer.unobserve(entry.target)
      }
    }, { rootMargin: '0px 0px -200px 0px' })
    reduced.addEventListener('change', () => {
      if (reduced.matches) {
        observer.disconnect()
        for (const animation of animations.values()) animation.cancel()
        animations.clear()
      } else refresh()
    })
    refresh()
  })
  nuxtApp.hook('page:finish', refresh)
})
