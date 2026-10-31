import { onBeforeUnmount, onMounted, ref, type Ref } from 'vue'

export function useSectionActivity(target: Ref<HTMLElement | null>, motion = true) {
  const isActive = ref(false)
  let cleanup = () => {}

  onMounted(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    let visible = !('IntersectionObserver' in window)
    const synchronize = () => {
      isActive.value = visible && !document.hidden && (!motion || !reduced.matches)
    }
    const observer = 'IntersectionObserver' in window ? new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      synchronize()
    }) : null
    if (target.value) observer?.observe(target.value)
    document.addEventListener('visibilitychange', synchronize)
    reduced.addEventListener('change', synchronize)
    synchronize()
    cleanup = () => {
      observer?.disconnect()
      document.removeEventListener('visibilitychange', synchronize)
      reduced.removeEventListener('change', synchronize)
    }
  })

  onBeforeUnmount(() => cleanup())
  return isActive
}