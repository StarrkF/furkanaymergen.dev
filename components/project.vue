<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'

const { tm, t, locale } = useI18n()
const projects = ref<any[]>([])
const activeFilter = ref('all')
const activeSlideIndex = ref(0)
let swiperInstance = ref<any>(null)

watchEffect(() => {
  const p = tm('project.items')
  projects.value = Array.isArray(p) ? p : []
})

const categories = computed(() => [
  { id: 'all', label: t('project.categories.all'), count: projects.value.length },
  { id: 'fullstack', label: t('project.categories.fullstack'), count: projects.value.filter(p => isCategory(p, 'fullstack')).length },
  { id: 'frontend', label: t('project.categories.frontend'), count: projects.value.filter(p => isCategory(p, 'frontend')).length },
  { id: 'backend', label: t('project.categories.backend'), count: projects.value.filter(p => isCategory(p, 'backend')).length }
])

const isCategory = (project: any, category: string) => {
  const s = ((project?.title || '') + ' ' + (project?.summary || '')).toLowerCase()
  if (category === 'all') return true
  if (category === 'fullstack') return s.includes('fullstack') || s.includes('laravel') || s.includes('nuxt') || s.includes('vue')
  if (category === 'frontend') return s.includes('vue') || s.includes('nuxt') || s.includes('tailwind') || s.includes('ui') || s.includes('pixel')
  if (category === 'backend') return s.includes('laravel') || s.includes('spring') || s.includes('java') || s.includes('docker') || s.includes('api') || s.includes('kütüphane') || s.includes('library')
  return true
}

const getProjectCategoryLabel = (project: any) => {
  const s = ((project?.title || '') + ' ' + (project?.summary || '')).toLowerCase()
  if (s.includes('fullstack') || (s.includes('laravel') && (s.includes('vue') || s.includes('nuxt')))) return 'Fullstack System'
  if (s.includes('vue') || s.includes('nuxt') || s.includes('tailwind') || s.includes('pixel')) return 'Frontend & UI'
  if (s.includes('laravel') || s.includes('spring') || s.includes('api') || s.includes('docker')) return 'Backend & API'
  return 'Web Application'
}

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return projects.value
  return projects.value.filter(p => isCategory(p, activeFilter.value))
})

interface TechBadge {
  name: string
  color: string
}

const getTechStack = (title: string, summary: string): TechBadge[] => {
  const s = (title + ' ' + summary).toLowerCase()
  const badges: TechBadge[] = []
  if (s.includes('laravel')) badges.push({ name: 'Laravel', color: '#ff2d20' })
  if (s.includes('vue 3') || s.includes('vue')) badges.push({ name: 'Vue 3', color: '#42b883' })
  if (s.includes('nuxt 3') || s.includes('nuxt')) badges.push({ name: 'Nuxt 3', color: '#00dc82' })
  if (s.includes('spring')) badges.push({ name: 'Spring Boot', color: '#6db33f' })
  if (s.includes('java') && !s.includes('script')) badges.push({ name: 'Java', color: '#f89820' })
  if (s.includes('docker')) badges.push({ name: 'Docker', color: '#2496ed' })
  if (s.includes('tailwind')) badges.push({ name: 'Tailwind', color: '#38bdf8' })
  if (s.includes('unity') || s.includes('c#')) badges.push({ name: 'Unity C#', color: '#ffffff' })
  if (s.includes('swagger') || s.includes('api') || s.includes('rest')) badges.push({ name: 'REST API', color: '#34d399' })
  if (s.includes('action') || s.includes('ci/cd')) badges.push({ name: 'CI/CD', color: '#818cf8' })
  if (badges.length === 0) badges.push({ name: 'Fullstack', color: '#38bdf8' })
  return badges
}

const onSwiperInit = (swiper: any) => {
  swiperInstance.value = swiper
}

const onSlideChange = (swiper: any) => {
  activeSlideIndex.value = swiper.realIndex || 0
}

const slidePrev = () => {
  if (swiperInstance.value) swiperInstance.value.slidePrev()
}

const slideNext = () => {
  if (swiperInstance.value) swiperInstance.value.slideNext()
}

const breakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 16
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 24
  },
  1180: {
    slidesPerView: 3,
    spaceBetween: 28
  }
}
</script>

<template>
  <section id="projects" class="min-h-screen py-20 px-4 sm:px-6 lg:px-12 relative z-10 overflow-hidden">
    <div class="max-w-7xl mx-auto">
      
      <!-- Section Title -->
      <section-title
        :badge="$t('project.badge')"
        :subtitle="$t('project.summary')"
      >
        {{ $t('project.title') }}
      </section-title>

      <!-- Filter Controls & Slider Navigation Bar -->
      <div data-aos="fade-up" class="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 mb-10 w-full">
        
        <!-- Category Filter Pills -->
        <div class="flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-2xl glass-panel w-full sm:w-auto border border-base-content/10">
          <button
            v-for="cat in categories"
            :key="cat.id"
            type="button"
            @click="activeFilter = cat.id"
            class="px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all duration-300 cursor-pointer flex items-center gap-1.5"
            :class="[
              activeFilter === cat.id
                ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border border-cyan-400/40 shadow-sm font-bold'
                : 'text-base-content/70 hover:text-base-content hover:bg-base-content/5'
            ]"
          >
            <span>{{ cat.label }}</span>
            <span class="text-[10px] px-1.5 py-0.2 rounded-md bg-base-content/10 text-base-content/60">
              {{ cat.count }}
            </span>
          </button>
        </div>

        <!-- Right Side: Slide Counter & Nav Controls -->
        <div class="flex items-center gap-3 self-end sm:self-auto">
          <!-- Slide Counter -->
          <div class="px-3.5 py-1.5 rounded-xl glass-panel flex items-center gap-2 border border-base-content/10 text-xs font-mono font-bold text-base-content/70">
            <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>
              <span class="text-cyan-400">{{ String(activeSlideIndex + 1).padStart(2, '0') }}</span>
              <span class="mx-1 text-base-content/30">/</span>
              <span>{{ String(filteredProjects.length).padStart(2, '0') }}</span>
            </span>
          </div>

          <!-- Glass Prev / Next Arrows -->
          <div class="flex items-center gap-1.5 p-1 rounded-2xl glass-panel border border-base-content/10 shadow-sm">
            <button
              type="button"
              @click="slidePrev"
              class="w-8 h-8 rounded-xl hover:bg-cyan-500/15 hover:border-cyan-400/50 text-base-content/80 hover:text-cyan-400 flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
              aria-label="Previous Slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>
            <button
              type="button"
              @click="slideNext"
              class="w-8 h-8 rounded-xl hover:bg-cyan-500/15 hover:border-cyan-400/50 text-base-content/80 hover:text-cyan-400 flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
              aria-label="Next Slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>

      </div>

      <!-- Redesigned High-End Project Slider -->
      <div data-aos="zoom-in" data-aos-duration="800" class="relative w-full">
        <swiper
          class="w-full overflow-visible py-4"
          :grabCursor="true"
          :slidesPerView="1"
          :pagination="{ clickable: true }"
          :breakpoints="breakpoints"
          :modules="[SwiperPagination]"
          @swiper="onSwiperInit"
          @slideChange="onSlideChange"
        >
          <swiper-slide
            v-for="(project, index) in filteredProjects"
            :key="'slider-item-' + index"
            class="!h-auto pb-14 flex flex-col"
          >
            <!-- Project Card Container -->
            <div class="flex-1 w-full rounded-3xl glass-card overflow-hidden flex flex-col justify-between group relative border border-base-content/10 hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-2 shadow-xl select-none">
              
              <!-- Ambient Corner Glow & Glowing Top Line -->
              <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="absolute -top-16 -right-16 w-36 h-36 bg-cyan-400/10 rounded-full blur-2xl group-hover:bg-cyan-400/20 transition-all duration-500 pointer-events-none"></div>

              <!-- Card Top Header: Terminal Controls & Meta Badges -->
              <div class="px-5 py-3.5 bg-base-200/80 border-b border-base-content/10 flex items-center justify-between gap-3 shrink-0 backdrop-blur-xl">
                <!-- Mac-Style Window Dots -->
                <div class="flex items-center space-x-1.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block shadow-[0_0_6px_#f43f5e]"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block shadow-[0_0_6px_#f59e0b]"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block shadow-[0_0_6px_#10b981]"></span>
                </div>

                <!-- Category & Project ID Badges -->
                <div class="flex items-center gap-2">
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded-md glass-panel text-cyan-400 border border-cyan-400/30 font-semibold">
                    {{ getProjectCategoryLabel(project) }}
                  </span>
                  <span class="text-[11px] font-mono px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-bold">
                    PROJ_#{{ String(index + 1).padStart(2, '0') }}
                  </span>
                </div>
              </div>

              <!-- Card Main Body -->
              <div class="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                
                <div class="space-y-3">
                  <!-- Project Title -->
                  <h3 class="text-xl sm:text-2xl font-heading font-black text-base-content group-hover:text-cyan-400 transition-colors line-clamp-1">
                    {{ project.title }}
                  </h3>

                  <!-- Project Narrative Summary -->
                  <p class="text-sm font-sans text-base-content/80 leading-relaxed font-normal">
                    {{ project.summary }}
                  </p>
                </div>

                <!-- Dynamic Tech Stack Badges with Color Dots -->
                <div class="pt-4 mt-4 border-t border-base-content/10">
                  <div class="text-[10px] font-mono uppercase text-base-content/50 mb-2.5 tracking-wider font-semibold">
                    {{ $t('project.tech_stack_label') }}
                  </div>
                  <div class="flex flex-wrap gap-1.5">
                    <span
                      v-for="tech in getTechStack(project.title, project.summary)"
                      :key="tech.name"
                      class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-base-200/90 text-base-content/90 border border-base-content/10 text-xs font-mono group-hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
                    >
                      <span class="w-1.5 h-1.5 rounded-full shrink-0 shadow-xs" :style="{ backgroundColor: tech.color }"></span>
                      <span>{{ tech.name }}</span>
                    </span>
                  </div>
                </div>

              </div>

              <!-- Card Footer Action Buttons -->
              <div class="px-6 py-4 bg-base-200/60 border-t border-base-content/10 flex items-center justify-between gap-3 shrink-0">
                <!-- Source Code Link -->
                <a
                  v-if="project.source_code && !project.source_code.includes('#')"
                  :href="project.source_code"
                  target="_blank"
                  class="flex-1 py-2.5 px-3 rounded-xl glass-panel hover:bg-base-200 text-base-content/90 hover:text-cyan-400 font-mono text-xs flex items-center justify-center gap-1.5 transition-all duration-300 hover:border-cyan-400/50 shadow-xs cursor-pointer active:scale-95"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
                  </svg>
                  <span>{{ $t('project.button.source') }}</span>
                </a>
                <span v-else class="text-[11px] font-mono text-base-content/40 italic px-2">
                  🔒 {{ $t('project.proprietary') }}
                </span>

                <!-- Live Preview Link -->
                <a
                  v-if="project.link && !project.link.includes('#')"
                  :href="project.link"
                  target="_blank"
                  class="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-heading font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0.3)] hover:scale-102 active:scale-95 cursor-pointer"
                >
                  <span>{{ $t('project.button.preview') }}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              </div>

            </div>
          </swiper-slide>
        </swiper>
      </div>

    </div>
  </section>
</template>
