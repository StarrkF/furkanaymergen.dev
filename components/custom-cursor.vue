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

const onMouseMove = (e: MouseEvent) => {
  if (isTouchDevice.value) return
  if (!isVisible.value) {
    isVisible.value = true
    currentRingPos.x = e.clientX
    currentRingPos.y = e.clientY
    currentDotPos.x = e.clientX
    currentDotPos.y = e.clientY
  }
  mousePos.x = e.clientX
  mousePos.y = e.clientY

  if (e.target !== lastTarget) {
    lastTarget = e.target
    const target = e.target as HTMLElement | null
    if (target) {
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, select, label, .hover-target, .tab, .glass-card, .btn, .swiper-button-prev, .swiper-button-next, .cursor-pointer')
      isHovering.value = !!isInteractive
    } else {
      isHovering.value = false
    }
  }
}

const onMouseDown = () => {
  isClicking.value = true
}

const onMouseUp = () => {
  isClicking.value = false
}

const onMouseLeave = () => {
  isVisible.value = false
}

const onMouseEnter = () => {
  isVisible.value = true
}

const animate = () => {
  // Ultra-responsive snappy lerp without Vue reactivity lag
  const ringEase = isHovering.value ? 0.35 : 0.28
  const dotEase = 0.85

  const dx = mousePos.x - currentRingPos.x
  const dy = mousePos.y - currentRingPos.y
  currentRingPos.x += dx * ringEase
  currentRingPos.y += dy * ringEase

  // Instantaneous smooth dot tracking
  currentDotPos.x += (mousePos.x - currentDotPos.x) * dotEase
  currentDotPos.y += (mousePos.y - currentDotPos.y) * dotEase

  // Kinetic fluid stretch based on velocity
  const speed = Math.hypot(dx, dy)
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

  animationId = requestAnimationFrame(animate)
}

onMounted(() => {
  isTouchDevice.value = ('ontouchstart' in window || navigator.maxTouchPoints > 0) && window.matchMedia('(pointer: coarse)').matches

  if (!isTouchDevice.value) {
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('mousedown', onMouseDown, { passive: true })
    window.addEventListener('mouseup', onMouseUp, { passive: true })
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mouseenter', onMouseEnter)
    animationId = requestAnimationFrame(animate)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mousedown', onMouseDown)
  window.removeEventListener('mouseup', onMouseUp)
  document.removeEventListener('mouseleave', onMouseLeave)
  document.removeEventListener('mouseenter', onMouseEnter)
  if (animationId) cancelAnimationFrame(animationId)
})
</script>

<template>
  <div
    v-if="!isTouchDevice"
    class="pointer-events-none fixed inset-0 z-[999999] overflow-hidden transition-opacity duration-200"
    :class="{ 'opacity-0': !isVisible, 'opacity-100': isVisible }"
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
