<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const { locale } = useI18n()

const scrollProgress = ref(0)
const activeSection = ref('hero')
const isVisible = ref(false)

const sections = computed(() => [
  { id: 'hero', name: locale.value === 'tr' ? 'Giriş' : 'Hero', num: '01' },
  { id: 'about', name: locale.value === 'tr' ? 'Hakkımda' : 'About', num: '02' },
  { id: 'experiences', name: locale.value === 'tr' ? 'Deneyimler' : 'Experience', num: '03' },
  { id: 'projects', name: locale.value === 'tr' ? 'Projeler' : 'Projects', num: '04' },
  { id: 'goals', name: locale.value === 'tr' ? 'Hedefler' : 'Goals', num: '05' },
  { id: 'contact', name: locale.value === 'tr' ? 'İletişim' : 'Contact', num: '06' }
])

let ticking = false

const updateScroll = () => {
  const winScroll = window.scrollY
  const height = document.documentElement.scrollHeight - window.innerHeight
  if (height > 0) {
    scrollProgress.value = Math.min(100, Math.max(0, Math.round((winScroll / height) * 100)))
  }
  isVisible.value = winScroll > 100

  // Detect currently active section on viewport
  const scrollPosition = winScroll + window.innerHeight * 0.35
  for (let i = sections.value.length - 1; i >= 0; i--) {
    const section = sections.value[i]
    const el = document.getElementById(section.id)
    if (el && scrollPosition >= el.offsetTop - 50) {
      activeSection.value = section.id
      break
    }
  }
}

const onScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateScroll()
      ticking = false
    })
    ticking = true
  }
}

const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  updateScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <aside
    class="fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3 select-none transition-all duration-500 pointer-events-auto"
    :class="[isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none']"
    aria-label="Page Navigation & Scroll Tracker"
  >
    <!-- Live Digital Percentage Meter -->
    <div class="px-2 py-1 rounded-lg glass-panel border border-base-content/10 text-[10px] font-mono font-bold text-base-content/70 shadow-sm flex items-center gap-1 backdrop-blur-md">
      <span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
      <span>{{ String(scrollProgress).padStart(2, '0') }}%</span>
    </div>

    <!-- Vertical Futuristic Scroll Rail -->
    <div class="relative py-3 px-1.5 rounded-full glass-panel border border-base-content/10 shadow-md flex flex-col items-center gap-4.5 backdrop-blur-xl">
      
      <!-- Background Track Line -->
      <div class="absolute top-4 bottom-4 w-[2px] bg-base-content/10 rounded-full left-1/2 -translate-x-1/2 overflow-hidden pointer-events-none">
        <!-- Dynamic Gradient Progress Fill -->
        <div
          class="w-full bg-primary/60 rounded-full transition-all duration-150"
          :style="{ height: `${scrollProgress}%` }"
        ></div>
      </div>

      <!-- Navigation Waypoints -->
      <button
        v-for="section in sections"
        :key="section.id"
        type="button"
        @click="scrollToSection(section.id)"
        class="relative group cursor-pointer z-10 p-1 flex items-center justify-center outline-none focus:outline-none"
        :aria-label="'Navigate to ' + section.name"
      >
        <!-- Marker Node -->
        <span
          class="relative w-2.5 h-2.5 rounded-full transition-all duration-300 block"
          :class="[
            activeSection === section.id
              ? 'scale-135 bg-primary shadow-sm'
              : 'bg-base-content/30 group-hover:bg-primary group-hover:scale-125'
          ]"
        >
          <!-- Active Pulse Beacon Ring -->
          <span
            v-if="activeSection === section.id"
            class="absolute -inset-1 rounded-full bg-primary/20 animate-ping"
          ></span>
        </span>

        <!-- Holographic HUD Tooltip (Flyout to left) -->
        <div
          class="absolute right-full mr-3.5 px-3 py-1.5 rounded-xl glass-panel border border-base-content/10 text-xs font-mono font-semibold whitespace-nowrap shadow-md opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none flex items-center gap-2 backdrop-blur-xl"
        >
          <span class="text-[10px] text-base-content/70 font-bold">{{ section.num }}</span>
          <span class="text-base-content text-xs">{{ section.name }}</span>
          <span class="w-1.5 h-1.5 rounded-full bg-primary" v-if="activeSection === section.id"></span>
        </div>
      </button>

    </div>

    <!-- Quick Scroll to Top Action -->
    <button
      type="button"
      @click="scrollToTop"
      class="w-7 h-7 rounded-full glass-panel border border-base-content/15 text-base-content/60 hover:text-primary hover:border-primary/30 hover:bg-primary/10 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm group hover:scale-110 active:scale-90"
      aria-label="Scroll to Top"
      title="Scroll to Top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
      >
        <path d="m18 15-6-6-6 6"/>
      </svg>
    </button>
  </aside>
</template>

<style scoped>
/* High performance GPU isolation */
aside {
  will-change: transform, opacity;
  transform: translateZ(0);
}
</style>
