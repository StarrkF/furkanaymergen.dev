<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const colorMode = useColorMode()
const canvasRef = ref<HTMLCanvasElement | null>(null)
const isPaused = ref(false)
let animationFrameId: number | null = null

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  baseAlpha: number
  alpha: number
  color: string
}

let particles: Particle[] = []
let mouse = { x: -1000, y: -1000, radius: 140 }

const colors = ['#38bdf8', '#818cf8', '#c084fc', '#34d399', '#f472b6']

const initCanvas = () => {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d', { alpha: true })
  if (!ctx) return

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  let previousTime: number | null = null
  let needsResize = true

  const resize = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    createParticles()
  }

  const createParticles = () => {
    particles = []
    const isMobile = window.innerWidth < 768
    const count = isMobile ? 16 : Math.min(Math.floor((canvas.width * canvas.height) / 38000), 38)
    for (let i = 0; i < count; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)]
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.6 + 0.8,
        baseAlpha: Math.random() * 0.3 + 0.15,
        alpha: Math.random() * 0.3 + 0.15,
        color
      })
    }
  }

  const handleMouseMove = (e: MouseEvent) => {
    mouse.x = e.clientX
    mouse.y = e.clientY
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (e.touches.length > 0) {
      mouse.x = e.touches[0].clientX
      mouse.y = e.touches[0].clientY
    }
  }

  const handleMouseLeave = () => {
    mouse.x = -1000
    mouse.y = -1000
  }

  window.addEventListener('mousemove', handleMouseMove, { passive: true })
  window.addEventListener('touchmove', handleTouchMove, { passive: true })
  window.addEventListener('mouseleave', handleMouseLeave, { passive: true })

  const maxDistSq = 100 * 100

  const render = (time: number) => {
    animationFrameId = null
    if (document.hidden) return

    if (needsResize) {
      resize()
      needsResize = false
    }

    const delta = reducedMotion.matches ? 0 : previousTime === null ? 1 : Math.min((time - previousTime) / (1000 / 60), 3)
    previousTime = time
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Optimized single-pass line rendering with squared distances
    ctx.beginPath()
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.08)'
    ctx.lineWidth = 0.5
    for (let i = 0; i < particles.length; i++) {
      const pi = particles[i]
      for (let j = i + 1; j < particles.length; j++) {
        const pj = particles[j]
        const dx = pi.x - pj.x
        const dy = pi.y - pj.y
        const distSq = dx * dx + dy * dy

        if (distSq < maxDistSq) {
          ctx.moveTo(pi.x, pi.y)
          ctx.lineTo(pj.x, pj.y)
        }
      }
    }
    ctx.stroke()

    // Update and draw particles with minimal canvas context switches
    for (const p of particles) {
      p.x += p.vx * delta
      p.y += p.vy * delta

      if (p.x < 0) p.x = canvas.width
      if (p.x > canvas.width) p.x = 0
      if (p.y < 0) p.y = canvas.height
      if (p.y > canvas.height) p.y = 0

      // Mouse proximity interaction (squared calculation)
      const mdx = mouse.x - p.x
      const mdy = mouse.y - p.y
      const mDistSq = mdx * mdx + mdy * mdy
      const mRadiusSq = mouse.radius * mouse.radius

      let currentRadius = p.radius
      let currentAlpha = p.baseAlpha

      if (mDistSq < mRadiusSq) {
        const factor = 1 - Math.sqrt(mDistSq) / mouse.radius
        currentRadius += factor * 1.5
        currentAlpha = Math.min(1, p.baseAlpha + factor * 0.5)
      }

      ctx.beginPath()
      ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2)
      ctx.fillStyle = p.color
      ctx.globalAlpha = currentAlpha
      ctx.fill()
    }
    ctx.globalAlpha = 1

    if (!reducedMotion.matches) startRender()
  }

  const startRender = () => {
    if (!document.hidden && animationFrameId === null) {
      animationFrameId = requestAnimationFrame(render)
    }
  }

  const stopRender = () => {
    if (animationFrameId !== null) cancelAnimationFrame(animationFrameId)
    animationFrameId = null
    previousTime = null
  }

  const handleResize = () => {
    needsResize = true
    startRender()
  }

  const updateMotion = () => {
    stopRender()
    isPaused.value = document.hidden || reducedMotion.matches
    startRender()
  }

  window.addEventListener('resize', handleResize, { passive: true })
  document.addEventListener('visibilitychange', updateMotion)
  reducedMotion.addEventListener('change', updateMotion)
  updateMotion()

  return () => {
    window.removeEventListener('resize', handleResize)
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('touchmove', handleTouchMove)
    window.removeEventListener('mouseleave', handleMouseLeave)
    document.removeEventListener('visibilitychange', updateMotion)
    reducedMotion.removeEventListener('change', updateMotion)
    stopRender()
  }
}

let cleanup: (() => void) | undefined

onMounted(() => {
  cleanup = initCanvas()
})

onBeforeUnmount(() => {
  if (cleanup) cleanup()
})
</script>

<template>
  <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden" :class="{ 'ambient-paused': isPaused }" aria-hidden="true">
    <!-- Ambient Gradient Glowing Orbs -->
    <div class="ambient-orb orb-1"></div>
    <div class="ambient-orb orb-2"></div>
    <div class="ambient-orb orb-3"></div>
    <div class="ambient-orb orb-4"></div>

    <!-- Particle Canvas -->
    <canvas ref="canvasRef" class="absolute inset-0 w-full h-full opacity-60"></canvas>

    <!-- Noise Texture Overlay -->
    <div class="absolute inset-0 noise-overlay opacity-40"></div>

    <!-- Grid Matrix Lines -->
    <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
  </div>
</template>

<style scoped>
.ambient-orb {
  position: absolute;
  border-radius: 9999px;
  filter: blur(100px);
  pointer-events: none;
  opacity: 0.16;
  contain: paint layout;
  will-change: transform;
  transform: translate3d(0, 0, 0);
}

[data-theme='corporate'] .ambient-orb,
[data-theme='cupcake'] .ambient-orb,
[data-theme='lemonade'] .ambient-orb,
[data-theme='bumblebee'] .ambient-orb {
  opacity: 0.10;
  filter: blur(110px);
}

.orb-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, #38bdf8 0%, rgba(56, 189, 248, 0) 70%);
  top: -100px;
  left: -80px;
  animation: floatOrb 24s ease-in-out infinite alternate;
}

.orb-2 {
  width: 550px;
  height: 550px;
  background: radial-gradient(circle, #8b5cf6 0%, rgba(139, 92, 246, 0) 70%);
  top: 30%;
  right: -150px;
  animation: floatOrb 28s ease-in-out infinite alternate-reverse;
}

.orb-3 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, #06b6d4 0%, rgba(6, 182, 212, 0) 70%);
  bottom: 10%;
  left: 5%;
  animation: floatOrb 30s ease-in-out infinite alternate;
}

.orb-4 {
  width: 450px;
  height: 450px;
  background: radial-gradient(circle, #ec4899 0%, rgba(236, 72, 153, 0) 70%);
  bottom: -80px;
  right: 10%;
  animation: floatOrb 22s ease-in-out infinite alternate-reverse;
}

.ambient-paused .ambient-orb {
  animation-play-state: paused;
}

@media (prefers-reduced-motion: reduce) {
  .ambient-orb {
    animation-play-state: paused;
  }
}

@keyframes floatOrb {
  0% {
    transform: translate3d(0px, 0px, 0) scale(1);
  }
  50% {
    transform: translate3d(40px, -30px, 0) scale(1.05);
  }
  100% {
    transform: translate3d(-30px, 35px, 0) scale(0.96);
  }
}

.bg-grid-pattern {
  background-size: 60px 60px;
  background-image: 
    linear-gradient(to right, color-mix(in srgb, var(--color-base-content, #fff) 5%, transparent) 1px, transparent 1px),
    linear-gradient(to bottom, color-mix(in srgb, var(--color-base-content, #fff) 5%, transparent) 1px, transparent 1px);
}
</style>
