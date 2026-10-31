export function useCopyEmail(particleCount: number, spread: number, y: number) {
  const { t, locale } = useI18n()
  const { showToast } = useToast()

  return async () => {
    try {
      await navigator.clipboard.writeText('faymergen98@gmail.com')
    } catch {
      showToast(locale.value === 'tr' ? 'Kopyalanamadı. Lütfen e-posta bağlantısını kullanın.' : 'Could not copy. Please use the email link.')
      return
    }
    showToast(t('hero.button.email_copied'))
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    try {
      const { default: confetti } = await import('canvas-confetti')
      confetti({
        particleCount,
        spread,
        origin: { y },
        colors: ['#38bdf8', '#818cf8', '#34d399', '#f472b6', '#fbbf24'],
        disableForReducedMotion: true
      })
    } catch {
      // Clipboard success is independent of this optional visual effect.
    }
  }
}