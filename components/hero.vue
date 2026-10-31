<script setup lang="ts">
import { ref, computed, watch, onBeforeUnmount } from 'vue'

const { tm, t, locale } = useI18n()
const heroRef = ref<HTMLElement | null>(null)
const isActive = useSectionActivity(heroRef)

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

const copyEmail = useCopyEmail(50, 60, 0.75)

const stats = computed(() => [
  { value: '5+', label: t('hero.stats.exp'), icon: 'activity' },
  { value: '10+', label: t('hero.stats.projects'), icon: 'layers' },
  { value: '15+', label: t('hero.stats.tools'), icon: 'tools' },
  { value: '100%', label: t('hero.stats.arch'), icon: 'shield' }
])

watch(isActive, active => {
  clearTimeout(typeTimeout)
  if (active) typeTimeout = setTimeout(typeEffect, 2200)
  else currentChar.value = roles.value[currentRoleIndex.value]
}, { immediate: true })

watch(locale, () => {
  clearTimeout(typeTimeout)
  currentRoleIndex.value = 0
  currentChar.value = ''
  isDeleting.value = false
  if (isActive.value) typeEffect()
  else currentChar.value = roles.value[0]
})

onBeforeUnmount(() => {
  if (typeTimeout) clearTimeout(typeTimeout)
})
</script>

<template>
  <section ref="heroRef" id="home" :class="{ 'motion-paused': !isActive }" class="relative min-h-screen pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-12 flex flex-col justify-center items-center overflow-hidden">
    <!-- Main Content Container -->
    <div class="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center z-10">
      
      <!-- Left Column: Bio, Titles, Magnetic CTAs -->
      <div class="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 sm:space-y-8">
        
        <!-- Status Badge -->
        <div data-aos="fade-down" class="glow-badge inline-flex items-center gap-2 px-4 py-2 rounded-full text-base-content/70 text-xs sm:text-sm font-mono shadow-sm">
          <span class="flex h-2 w-2 relative">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
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
            M.Furkan Aymergen
          </h1>
          
          <!-- Dynamic Typewriter Line -->
          <p class="sr-only">{{ roles.join(', ') }}</p>
          <div aria-hidden="true" class="flex items-center justify-center lg:justify-start min-h-[44px] text-xl sm:text-2xl md:text-3xl font-heading font-semibold text-base-content/80 gap-1 flex-wrap">
            <span class="text-base-content/40 font-mono text-lg sm:text-xl">&lt;</span>
            <span class="text-base-content/80">{{ currentChar }}</span>
            <span class="animate-blink text-primary font-mono font-bold">|</span>
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
            class="button-glass font-heading font-semibold text-sm sm:text-base inline-flex items-center cursor-pointer"
          >
            <span class="button-label">{{ hero.button?.about || $t('hero.button.about') }}</span>
            <span class="button-icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 17 17 7M7 7h10v10"/>
              </svg>
            </span>
          </a>

          <!-- Download CV Button -->
          <a
            :href="hero.button?.cv?.href || (locale === 'tr' ? '/mfa-cv.pdf' : '/mfa-cv-eng.pdf')"
            target="_blank"
            class="px-6 py-3.5 rounded-2xl glass-panel hover:bg-base-200/90 text-base-content font-heading font-semibold text-sm sm:text-base transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2 hover:scale-105 hover:border-primary/30"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-base-content/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            <span>{{ hero.button?.cv?.title || $t('hero.button.cv.title') }}</span>
          </a>

          <!-- Quick Copy Email Button -->
          <button
            type="button"
            @click="copyEmail"
            class="px-4 py-3.5 rounded-2xl glass-panel hover:bg-base-200/90 text-base-content/80 hover:text-base-content font-mono text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-xs hover:scale-105 hover:border-primary/30"
            :title="$t('hero.button.copy_email')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-base-content/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
            </svg>
            <span class="truncate max-w-[150px] sm:max-w-none">faymergen98@gmail.com</span>
          </button>
        </div>
      </div>

      <!-- Right Column: Interactive Code Console / 3D Glass Terminal Showcase -->
      <div data-aos="zoom-in" data-aos-delay="200" class="lg:col-span-5 w-full flex justify-center">
        <div class="w-full max-w-lg rounded-3xl glass-terminal code-theme overflow-hidden transform hover:-translate-y-2 transition-all duration-500">
          
          <!-- Terminal Header Bar (Frosted Glass) -->
          <div class="code-header flex items-center justify-between gap-2 px-5 py-3.5">
            <div class="flex items-center space-x-2">
              <span class="code-window-dot w-3 h-3 rounded-full inline-block"></span>
              <span class="code-window-dot w-3 h-3 rounded-full inline-block"></span>
              <span class="code-window-dot w-3 h-3 rounded-full inline-block"></span>
            </div>
            <div class="code-muted text-xs font-mono flex items-center gap-1.5 min-w-0">
              <span class="font-semibold truncate">~/furkanaymergen</span>
              <span>/</span>
              <span class="code-variable font-semibold shrink-0">developer.ts</span>
            </div>
            <div class="code-language text-[10px] font-mono px-2 py-0.5 rounded-md font-bold shrink-0">
              TypeScript
            </div>
          </div>

          <!-- Code Snippet Display with Glass Gradient & Line Numbers -->
          <div class="code-body relative p-5 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto space-y-1.5">
            
            <div class="flex items-center gap-3">
              <span class="code-line-number select-none text-[11px] w-5 text-right font-mono">01</span>
              <div>
                <span class="code-keyword font-semibold">const</span> <span class="code-variable font-semibold">engineer</span>: <span class="code-type font-semibold">DeveloperProfile</span> = {
              </div>
            </div>

            <div class="flex items-center gap-3">
              <span class="code-line-number select-none text-[11px] w-5 text-right font-mono">02</span>
              <div class="pl-2 sm:pl-4">
                <span class="code-property">name:</span> <span class="code-string">'Furkan Aymergen'</span>,
              </div>
            </div>

            <div class="flex items-center gap-3">
              <span class="code-line-number select-none text-[11px] w-5 text-right font-mono">03</span>
              <div class="pl-2 sm:pl-4">
                <span class="code-property">experience:</span> <span class="code-string">'5+ Years (2021 - Present)'</span>,
              </div>
            </div>

            <div class="flex items-center gap-3">
              <span class="code-line-number select-none text-[11px] w-5 text-right font-mono">04</span>
              <div class="pl-2 sm:pl-4">
                <span class="code-property">location:</span> <span class="code-string">'Turkey'</span>,
              </div>
            </div>

            <div class="flex items-start gap-3">
              <span class="code-line-number select-none text-[11px] w-5 text-right font-mono mt-0.5">05</span>
              <div class="pl-2 sm:pl-4">
                <span class="code-property">coreStack:</span> [
                <div class="pl-4">
                  <span class="code-string">'Laravel'</span>, <span class="code-string">'Vue 3'</span>, <span class="code-string">'Nuxt 3'</span>,
                </div>
                <div class="pl-4">
                  <span class="code-string">'Spring Boot'</span>, <span class="code-string">'Java'</span>, <span class="code-string">'Docker'</span>, <span class="code-string">'AWS'</span>
                </div>
                <span>],</span>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <span class="code-line-number select-none text-[11px] w-5 text-right font-mono">06</span>
              <div class="pl-2 sm:pl-4">
                <span class="code-property">architecture:</span> <span class="code-string">'Clean & Scalable'</span>,
              </div>
            </div>

            <div class="flex items-center gap-3">
              <span class="code-line-number select-none text-[11px] w-5 text-right font-mono">07</span>
              <div class="pl-2 sm:pl-4">
                <span class="code-property">status:</span> <span class="code-string font-semibold">'Building scalable & clean architectures'</span>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <span class="code-line-number select-none text-[11px] w-5 text-right font-mono">08</span>
              <div>
                };
              </div>
            </div>

            <!-- Terminal Execution Status Bar -->
            <div class="code-footer code-muted pt-3 mt-2 flex items-center justify-between gap-3 text-xs">
              <span class="code-success flex items-center gap-1.5 font-medium">
                <span class="code-status-dot w-2 h-2 rounded-full shrink-0 animate-pulse"></span>
                Compiled successfully in 12ms
              </span>
              <span class="font-mono text-[11px]">v3.17.5</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Hero Stats Ribbon -->
    <div data-aos="fade-up" data-aos-delay="400" class="w-full max-w-6xl mx-auto mt-14 sm:mt-20 z-10">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-3 sm:p-6 rounded-3xl glass-card">
        <div v-for="(stat, idx) in stats" :key="idx" class="flex flex-col items-center justify-center p-3 text-center border-r last:border-r-0 border-base-content/10">
          <div class="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-base-content">
            {{ stat.value }}
          </div>
          <div class="text-xs sm:text-sm font-sans font-medium text-base-content/70 mt-1 flex items-center gap-1">
            <UiIcon :name="stat.icon" class="w-4 h-4 shrink-0" />
            <span>{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Scroll Indicator -->
    <a
      href="#about"
      v-smooth-scroll
      class="mt-10 sm:mt-12 inline-flex flex-col items-center gap-2 text-base-content/60 hover:text-primary transition-colors z-10 cursor-pointer group"
    >
      <span class="text-[11px] font-mono tracking-widest uppercase text-base-content/70 group-hover:text-primary transition-colors">
        {{ $t('hero.explore') }}
      </span>
      <div class="w-5 h-9 rounded-full border-2 border-base-content/30 group-hover:border-primary/50 flex justify-center pt-1.5 transition-colors">
        <div class="w-1.5 h-2 rounded-full bg-primary animate-bounce"></div>
      </div>
    </a>
  </section>
</template>
