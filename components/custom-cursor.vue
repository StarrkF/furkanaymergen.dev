<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isTouchDevice = ref(false)
const isVisible = ref(false)
const isHovering = ref(false)
const isClicking = ref(false)

const dotRef = ref<HTMLElement | null>(null)
const ringRef = ref<HTMLElement | null>(null)

let mousePos = { x: -100, y: -100 }
let currentRingPos = { x: -100, y: -100 }
let currentDotPos = { x: -100, y: -100 }
let animationId: number | null = null
let lastAngle = 0

let lastTarget: EventTarget | null = null
let finePointer: MediaQueryList | null = null
let reducedMotion: MediaQueryList | null = null
let isPointerAllowed = false

const stopAnimation = () => {
  if (animationId !== null) cancelAnimationFrame(animationId)
  animationId = null
}

const wakeAnimation = () => {
  if (isPointerAllowed && !document.hidden && isVisible.value && animationId === null) {
    animationId = requestAnimationFrame(animate)
  }
}

const updateHoverState = (target: EventTarget | null) => {
  if (target === lastTarget) return
  lastTarget = target
  isHovering.value = target instanceof Element && !!target.closest('a, button, [role="button"], input, textarea, select, label, .hover-target, .tab, .glass-card, .btn, .swiper-button-prev, .swiper-button-next, .cursor-pointer')
}

const onMouseMove = (e: PointerEvent) => {
  if (!isPointerAllowed || document.hidden || (e.pointerType !== 'mouse' && e.pointerType !== 'pen')) return
  if (e.clientX < 0 || e.clientY < 0 || e.clientX >= window.innerWidth || e.clientY >= window.innerHeight) {
    onMouseLeave()
    return
  }
  if (!dotRef.value || !ringRef.value) return
  if (!isVisible.value) {
    isVisible.value = true
    currentRingPos.x = e.clientX
    currentRingPos.y = e.clientY
    currentDotPos.x = e.clientX
    currentDotPos.y = e.clientY
  }
  mousePos.x = e.clientX
  mousePos.y = e.clientY
  updateHoverState(e.target)
  wakeAnimation()
}

const onMouseOver = (e: PointerEvent) => {
  if (!isPointerAllowed || document.hidden || !isVisible.value || e.pointerType === 'touch') return
  updateHoverState(e.target)
  wakeAnimation()
}

const onMouseDown = (e: PointerEvent) => {
  if (!isPointerAllowed || document.hidden || !isVisible.value || e.pointerType === 'touch') return
  isClicking.value = true
  wakeAnimation()
}

const onMouseUp = () => {
  isClicking.value = false
  wakeAnimation()
}

const onMouseLeave = () => {
  isVisible.value = false
  isHovering.value = false
  isClicking.value = false
  lastTarget = null
  stopAnimation()
  document.documentElement.classList.remove('custom-cursor-active')
}

const updatePermission = () => {
  isPointerAllowed = !!finePointer?.matches && !reducedMotion?.matches
  isTouchDevice.value = !isPointerAllowed
  onMouseLeave()
}

const onVisibilityChange = () => {
  if (document.hidden) onMouseLeave()
}

const animate = () => {
  animationId = null
  if (!isPointerAllowed || document.hidden || !isVisible.value) return
  if (!dotRef.value || !ringRef.value) {
    onMouseLeave()
    return
  }

  // Ultra-responsive snappy lerp without Vue reactivity lag
  const ringEase = isHovering.value ? 0.35 : 0.28
  const dotEase = 0.85

  const dx = mousePos.x - currentRingPos.x
  const dy = mousePos.y - currentRingPos.y
  const isSettled = Math.abs(dx) <= 0.1 && Math.abs(dy) <= 0.1
    && Math.abs(mousePos.x - currentDotPos.x) <= 0.1 && Math.abs(mousePos.y - currentDotPos.y) <= 0.1

  if (isSettled) {
    currentRingPos.x = mousePos.x
    currentRingPos.y = mousePos.y
    currentDotPos.x = mousePos.x
    currentDotPos.y = mousePos.y
  } else {
    currentRingPos.x += dx * ringEase
    currentRingPos.y += dy * ringEase

    // Instantaneous smooth dot tracking
    currentDotPos.x += (mousePos.x - currentDotPos.x) * dotEase
    currentDotPos.y += (mousePos.y - currentDotPos.y) * dotEase
  }

  // Kinetic fluid stretch based on velocity
  const speed = isSettled ? 0 : Math.hypot(dx, dy)
  if (speed > 1.5) {
    lastAngle = Math.atan2(dy, dx)
  }
  const stretchX = Math.min(speed * 0.003, 0.4)
  const stretchY = Math.min(speed * 0.002, 0.25)

  if (dotRef.value) {
    const scale = isHovering.value ? 0.4 : isClicking.value ? 0.6 : 1
    dotRef.value.style.transform = `translate3d(${currentDotPos.x}px, ${currentDotPos.y}px, 0) scale(${scale})`
  }

  if (ringRef.value) {
    if (isHovering.value) {
      const scale = isClicking.value ? 1.25 : 1.45
      ringRef.value.style.transform = `translate3d(${currentRingPos.x}px, ${currentRingPos.y}px, 0) scale(${scale})`
    } else {
      const scaleX = (isClicking.value ? 0.8 : 1) + stretchX
      const scaleY = (isClicking.value ? 0.8 : 1) - stretchY
      ringRef.value.style.transform = `translate3d(${currentRingPos.x}px, ${currentRingPos.y}px, 0) rotate(${lastAngle}rad) scale(${scaleX}, ${scaleY})`
    }
  }

  document.documentElement.classList.add('custom-cursor-active')
  if (!isSettled) wakeAnimation()
}

onMounted(() => {
  finePointer = window.matchMedia('(pointer: fine)')
  reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  finePointer.addEventListener('change', updatePermission)
  reducedMotion.addEventListener('change', updatePermission)
  document.addEventListener('visibilitychange', onVisibilityChange)
  window.addEventListener('pointermove', onMouseMove, { passive: true })
  window.addEventListener('pointerover', onMouseOver, { passive: true })
  window.addEventListener('pointerdown', onMouseDown, { passive: true })
  window.addEventListener('pointerup', onMouseUp, { passive: true })
  window.addEventListener('pointercancel', onMouseLeave, { passive: true })
  window.addEventListener('blur', onMouseLeave)
  document.addEventListener('pointerleave', onMouseLeave)
  updatePermission()
})

onBeforeUnmount(() => {
  finePointer?.removeEventListener('change', updatePermission)
  reducedMotion?.removeEventListener('change', updatePermission)
  document.removeEventListener('visibilitychange', onVisibilityChange)
  window.removeEventListener('pointermove', onMouseMove)
  window.removeEventListener('pointerover', onMouseOver)
  window.removeEventListener('pointerdown', onMouseDown)
  window.removeEventListener('pointerup', onMouseUp)
  window.removeEventListener('pointercancel', onMouseLeave)
  window.removeEventListener('blur', onMouseLeave)
  document.removeEventListener('pointerleave', onMouseLeave)
  isPointerAllowed = false
  onMouseLeave()
})
</script>

<template>
  <div
    v-if="!isTouchDevice"
    class="pointer-events-none fixed inset-0 z-[999999] overflow-hidden transition-opacity duration-200"
    :class="{ 'opacity-0': !isVisible, 'opacity-100': isVisible }"
    aria-hidden="true"
  >
    <!-- Precision Core Dot with Radial Energy Glow -->
    <div
      ref="dotRef"
      class="fixed top-0 left-0 w-2.5 h-2.5 -ml-[5px] -mt-[5px] rounded-full bg-gradient-to-tr from-cyan-400 via-sky-300 to-emerald-400 pointer-events-none will-change-transform shadow-[0_0_12px_#38bdf8,0_0_4px_#34d399]"
    >
      <!-- Mini Inner Core Spark -->
      <div class="absolute inset-[0.5px] rounded-full bg-white opacity-85"></div>
    </div>

    <!-- Futuristic Fluid Kinetic Follower Ring -->
    <div
      ref="ringRef"
      class="fixed top-0 left-0 -ml-5 -mt-5 w-10 h-10 rounded-full pointer-events-none will-change-transform flex items-center justify-center transition-[background-color,border-color,box-shadow,width,height,margin] duration-200 ease-out"
    >
      <!-- Outer Ring Border & Aura -->
      <div
        class="absolute inset-0 rounded-full transition-all duration-200"
        :class="[
          isHovering
            ? 'border-2 border-cyan-400 bg-cyan-500/15 shadow-[0_0_25px_rgba(56,189,248,0.5),inset_0_0_12px_rgba(56,189,248,0.25)]'
            : 'border border-cyan-400/50 shadow-[0_0_10px_rgba(56,189,248,0.2)]',
          isClicking ? 'bg-cyan-400/30 border-cyan-300 scale-90' : ''
        ]"
      ></div>

      <!-- Precision Crosshair / Target Brackets on Hover -->
      <div
        v-if="isHovering"
        class="absolute inset-[-4px] pointer-events-none animate-spin-slow transition-opacity duration-300"
      >
        <!-- 4 Corner Tech Focus Ticks -->
        <div class="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-300"></div>
        <div class="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyan-300"></div>
        <div class="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyan-300"></div>
        <div class="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-300"></div>
      </div>

      <!-- Central Dynamic Ping on Hover -->
      <div
        v-if="isHovering"
        class="w-2 h-2 rounded-full bg-cyan-300 animate-ping opacity-75"
      ></div>

      <!-- Subtle Trailing Orbit Points for Default State -->
      <div
        v-else
        class="absolute inset-0 flex items-center justify-between px-0.5 opacity-40"
      >
        <div class="w-0.5 h-0.5 rounded-full bg-cyan-300"></div>
        <div class="w-0.5 h-0.5 rounded-full bg-cyan-300"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes spinSlow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spinSlow 8s linear infinite;
}
</style>
