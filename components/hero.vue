<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import confetti from 'canvas-confetti'
import { useToast } from '~/composables/useToast'

const { tm, t, locale } = useI18n()
const { showToast } = useToast()

const hero = computed(() => tm('hero'))
const currentRoleIndex = ref(0)
const currentChar = ref('')
const isDeleting = ref(false)
let typeTimeout: any = null

const roles = computed(() => {
  if (Array.isArray(hero.value?.title)) {
    return hero.value.title
  }
  return [
    'Fullstack Web Developer',
    'Software Engineer',
    'Backend & Cloud Specialist',
    'Frontend Craftsman'
  ]
})

const typeEffect = () => {
  const currentWord = roles.value[currentRoleIndex.value] || 'Fullstack Developer'

  if (!isDeleting.value && currentChar.value.length < currentWord.length) {
    currentChar.value = currentWord.substring(0, currentChar.value.length + 1)
  } else if (isDeleting.value && currentChar.value.length > 0) {
    currentChar.value = currentWord.substring(0, currentChar.value.length - 1)
  } else {
    isDeleting.value = !isDeleting.value
    if (!isDeleting.value) {
      currentRoleIndex.value = (currentRoleIndex.value + 1) % roles.value.length
    }
  }

  const speed = isDeleting.value ? 40 : 90
  const delay = !isDeleting.value && currentChar.value.length === currentWord.length ? 2200 : speed
  typeTimeout = setTimeout(typeEffect, delay)
}

const copyEmail = () => {
  navigator.clipboard.writeText('faymergen98@gmail.com')
  confetti({
    particleCount: 50,
    spread: 60,
    origin: { y: 0.75 },
    colors: ['#38bdf8', '#818cf8', '#34d399', '#f472b6']
  })
  showToast(t('hero.button.email_copied'))
}

const stats = computed(() => [
  { value: '5+', label: t('hero.stats.exp'), icon: '⚡' },
  { value: '10+', label: t('hero.stats.projects'), icon: '🚀' },
  { value: '15+', label: t('hero.stats.tools'), icon: '🛠️' },
  { value: '100%', label: t('hero.stats.arch'), icon: '💎' }
])

onMounted(() => {
  typeEffect()
})

onBeforeUnmount(() => {
  if (typeTimeout) clearTimeout(typeTimeout)
})
</script>

<template>
  <section id="home" class="relative min-h-screen pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-12 flex flex-col justify-center items-center overflow-hidden">
    <!-- Main Content Container -->
    <div class="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center z-10">
      
      <!-- Left Column: Bio, Titles, Magnetic CTAs -->
      <div class="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 sm:space-y-8">
        
        <!-- Status Badge -->
        <div data-aos="fade-down" class="glow-badge inline-flex items-center gap-2 px-4 py-2 rounded-full text-cyan-400 text-xs sm:text-sm font-mono shadow-[0_0_20px_rgba(56,189,248,0.15)]">
          <span class="flex h-2 w-2 relative">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span class="font-medium tracking-wide">
            {{ $t('hero.badge') }}
          </span>
        </div>

        <!-- Grand Heading & Role Typewriter -->
        <div data-aos="fade-up" data-aos-delay="100" class="space-y-2 sm:space-y-3 w-full">
          <div class="font-mono text-xs sm:text-sm uppercase tracking-widest text-base-content/60">
            {{ $t('hero.greeting') }}
          </div>
          <h1 class="text-4xl sm:text-6xl md:text-7xl font-heading font-black tracking-tight text-base-content leading-tight">
            Furkan <span class="text-gradient-primary">Aymergen</span>
          </h1>
          
          <!-- Dynamic Typewriter Line -->
          <div class="flex items-center justify-center lg:justify-start min-h-[44px] text-xl sm:text-2xl md:text-3xl font-heading font-semibold text-cyan-400 gap-1 flex-wrap">
            <span class="text-base-content/40 font-mono text-lg sm:text-xl">&lt;</span>
            <span class="text-gradient-emerald">{{ currentChar }}</span>
            <span class="animate-blink text-cyan-400 font-mono font-bold">|</span>
            <span class="text-base-content/40 font-mono text-lg sm:text-xl">/&gt;</span>
          </div>
        </div>

        <!-- Hero Subtitle Narrative -->
        <p data-aos="fade-up" data-aos-delay="200" class="text-base-content/80 font-sans text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl">
          {{ hero.text }}
        </p>

        <!-- CTA Buttons Group -->
        <div data-aos="fade-up" data-aos-delay="300" class="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full pt-2">
          <!-- Primary Explore Projects Button -->
          <a
            href="#projects"
            v-smooth-scroll
            class="px-6 py-3.5 rounded-2xl bg-linear-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-heading font-bold text-sm sm:text-base uppercase tracking-wider transition-all duration-300 shadow-[0_10px_30px_rgba(56,189,248,0.35)] hover:shadow-[0_15px_40px_rgba(56,189,248,0.6)] hover:scale-105 flex items-center gap-2 group cursor-pointer"
          >
            <span>{{ hero.button?.about || $t('hero.button.about') }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </a>

          <!-- Download CV Button -->
          <a
            :href="hero.button?.cv?.href || (locale === 'tr' ? '/mfa-cv.pdf' : '/mfa-cv-eng.pdf')"
            target="_blank"
            class="px-6 py-3.5 rounded-2xl glass-panel hover:bg-base-200/90 text-base-content font-heading font-semibold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-cyan-500/20 flex items-center gap-2 hover:scale-105 hover:border-cyan-400/50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            <span>{{ hero.button?.cv?.title || $t('hero.button.cv.title') }}</span>
          </a>

          <!-- Quick Copy Email Button -->
          <button
            type="button"
            @click="copyEmail"
            class="px-4 py-3.5 rounded-2xl glass-panel hover:bg-base-200/90 text-base-content/80 hover:text-base-content font-mono text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-xs hover:scale-105 hover:border-emerald-400/50"
            :title="$t('hero.button.copy_email')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
            </svg>
            <span class="truncate max-w-[150px] sm:max-w-none">faymergen98@gmail.com</span>
          </button>
        </div>
      </div>

      <!-- Right Column: Interactive Code Console / 3D Glass Terminal Showcase -->
      <div data-aos="zoom-in" data-aos-delay="200" class="lg:col-span-5 w-full flex justify-center">
        <div class="w-full max-w-lg rounded-3xl glass-terminal overflow-hidden transform hover:-translate-y-2 transition-all duration-500">
          
          <!-- Terminal Header Bar (Frosted Glass) -->
          <div class="flex items-center justify-between px-5 py-3.5 bg-base-200/80 border-b border-base-content/10 backdrop-blur-xl">
            <div class="flex items-center space-x-2">
              <span class="w-3 h-3 rounded-full bg-rose-500 inline-block shadow-[0_0_8px_#f43f5e]"></span>
              <span class="w-3 h-3 rounded-full bg-amber-500 inline-block shadow-[0_0_8px_#f59e0b]"></span>
              <span class="w-3 h-3 rounded-full bg-emerald-500 inline-block shadow-[0_0_8px_#10b981]"></span>
            </div>
            <div class="text-xs font-mono text-base-content/70 flex items-center gap-1.5 truncate">
              <span class="text-cyan-400 font-semibold">~/furkanaymergen</span>
              <span class="text-base-content/30">/</span>
              <span class="text-purple-400 font-semibold">developer.ts</span>
            </div>
            <div class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-bold shrink-0">
              TypeScript
            </div>
          </div>

          <!-- Code Snippet Display with Glass Gradient & Line Numbers -->
          <div class="relative p-5 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-base-content/90 space-y-1.5 bg-gradient-to-b from-white/[0.04] to-transparent">
            
            <div class="flex items-center gap-3">
              <span class="text-base-content/30 select-none text-[11px] w-5 text-right font-mono">01</span>
              <div>
                <span class="text-purple-400 font-semibold">const</span> <span class="text-amber-400 font-semibold">engineer</span>: <span class="text-cyan-400 font-semibold">DeveloperProfile</span> = {
              </div>
            </div>

            <div class="flex items-center gap-3">
              <span class="text-base-content/30 select-none text-[11px] w-5 text-right font-mono">02</span>
              <div class="pl-2 sm:pl-4">
                <span class="text-base-content/60">name:</span> <span class="text-emerald-400">'Furkan Aymergen'</span>,
              </div>
            </div>

            <div class="flex items-center gap-3">
              <span class="text-base-content/30 select-none text-[11px] w-5 text-right font-mono">03</span>
              <div class="pl-2 sm:pl-4">
                <span class="text-base-content/60">experience:</span> <span class="text-emerald-400">'5+ Years (2021 - Present)'</span>,
              </div>
            </div>

            <div class="flex items-center gap-3">
              <span class="text-base-content/30 select-none text-[11px] w-5 text-right font-mono">04</span>
              <div class="pl-2 sm:pl-4">
                <span class="text-base-content/60">location:</span> <span class="text-emerald-400">'Turkey'</span>,
              </div>
            </div>

            <div class="flex items-start gap-3">
              <span class="text-base-content/30 select-none text-[11px] w-5 text-right font-mono mt-0.5">05</span>
              <div class="pl-2 sm:pl-4">
                <span class="text-base-content/60">coreStack:</span> [
                <div class="pl-4 text-cyan-400">
                  <span class="text-emerald-400">'Laravel'</span>, <span class="text-emerald-400">'Vue 3'</span>, <span class="text-emerald-400">'Nuxt 3'</span>,
                </div>
                <div class="pl-4 text-cyan-400">
                  <span class="text-emerald-400">'Spring Boot'</span>, <span class="text-emerald-400">'Java'</span>, <span class="text-emerald-400">'Docker'</span>, <span class="text-emerald-400">'AWS'</span>
                </div>
                <span class="text-base-content/60">],</span>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <span class="text-base-content/30 select-none text-[11px] w-5 text-right font-mono">06</span>
              <div class="pl-2 sm:pl-4">
                <span class="text-base-content/60">architecture:</span> <span class="text-emerald-400">'Clean & Scalable'</span>,
              </div>
            </div>

            <div class="flex items-center gap-3">
              <span class="text-base-content/30 select-none text-[11px] w-5 text-right font-mono">07</span>
              <div class="pl-2 sm:pl-4">
                <span class="text-base-content/60">status:</span> <span class="text-emerald-400 font-semibold">'Building scalable & clean architectures'</span>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <span class="text-base-content/30 select-none text-[11px] w-5 text-right font-mono">08</span>
              <div>
                };
              </div>
            </div>

            <!-- Terminal Execution Status Bar -->
            <div class="pt-3 mt-2 border-t border-base-content/10 flex items-center justify-between text-xs text-base-content/60">
              <span class="flex items-center gap-1.5 text-emerald-400 font-medium">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Compiled successfully in 12ms
              </span>
              <span class="text-base-content/40 font-mono text-[11px]">v3.17.5</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Hero Stats Ribbon -->
    <div data-aos="fade-up" data-aos-delay="400" class="w-full max-w-6xl mx-auto mt-14 sm:mt-20 z-10">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-3 sm:p-6 rounded-3xl glass-card">
        <div v-for="(stat, idx) in stats" :key="idx" class="flex flex-col items-center justify-center p-3 text-center border-r last:border-r-0 border-base-content/10">
          <div class="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-sky-300 to-indigo-400">
            {{ stat.value }}
          </div>
          <div class="text-xs sm:text-sm font-sans font-medium text-base-content/70 mt-1 flex items-center gap-1">
            <span>{{ stat.icon }}</span>
            <span>{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Scroll Indicator -->
    <a
      href="#about"
      v-smooth-scroll
      class="mt-10 sm:mt-12 inline-flex flex-col items-center gap-2 text-base-content/60 hover:text-cyan-400 transition-colors z-10 cursor-pointer group"
      aria-label="Scroll to About Section"
    >
      <span class="text-[11px] font-mono tracking-widest uppercase text-base-content/50 group-hover:text-cyan-400 transition-colors">
        {{ $t('hero.explore') }}
      </span>
      <div class="w-5 h-9 rounded-full border-2 border-base-content/30 group-hover:border-cyan-400 flex justify-center pt-1.5 transition-colors">
        <div class="w-1.5 h-2 rounded-full bg-cyan-400 animate-bounce"></div>
      </div>
    </a>
  </section>
</template>
