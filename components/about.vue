<script setup lang="ts">
import { ref, computed } from 'vue'

const { tm, t, locale } = useI18n()

const aboutText = computed(() => tm('about.text'))

// 3D Card Tilt & Holographic Glare Effect
const cardRef = ref<HTMLElement | null>(null)
const rotateX = ref(0)
const rotateY = ref(0)
const glareX = ref(50)
const glareY = ref(50)
const glareOpacity = ref(0)
const isHovered = ref(false)

const handleMouseMove = (e: MouseEvent) => {
  if (!cardRef.value) return
  const rect = cardRef.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  
  // Calculate smooth rotation (-12deg to +12deg)
  rotateX.value = -((y - centerY) / centerY) * 10
  rotateY.value = ((x - centerX) / centerX) * 10
  
  // Glare position percentage
  glareX.value = (x / rect.width) * 100
  glareY.value = (y / rect.height) * 100
  glareOpacity.value = 0.45
  isHovered.value = true
}

const handleMouseLeave = () => {
  rotateX.value = 0
  rotateY.value = 0
  glareOpacity.value = 0
  isHovered.value = false
}

const highlights = computed(() => {
  const h = tm('about.highlights')
  return Array.isArray(h) ? h : []
})

const coreSkills = computed(() => [
  { name: locale.value === 'tr' ? 'Fullstack Mimari' : 'Fullstack Architecture', icon: 'layers' },
  { name: 'REST & GraphQL APIs', icon: 'plug' },
  { name: 'Microservices & Redis', icon: 'activity' },
  { name: locale.value === 'tr' ? 'Reaktif Modern UI' : 'Modern Reactive UIs', icon: 'code' },
  { name: 'DevOps & CI/CD', icon: 'workflow' },
  { name: locale.value === 'tr' ? 'Veritabanı Optimizasyonu' : 'Database Optimization', icon: 'database' }
])
</script>

<template>
  <section id="about" class="min-h-screen py-24 sm:py-32 px-4 sm:px-6 lg:px-12 relative z-10 overflow-hidden">
    <!-- Ambient Glow Accent for About Section -->
    <div class="absolute top-1/4 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
    <div class="absolute bottom-1/4 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto">
      
      <!-- Section Header -->
      <section-title
        :badge="$t('about.badge')"
        :subtitle="$t('about.subtitle')"
      >
        {{ $t('about.title') }}
      </section-title>

      <!-- Main Showcase Bento Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 mt-14 items-stretch">
        
        <!-- Column 1: Ultra-Heroic 3D Portrait Frame Showcase (Col span 5) -->
        <div data-aos="fade-right" data-aos-duration="900" class="lg:col-span-5 flex flex-col">
          <div
            ref="cardRef"
            @mousemove="handleMouseMove"
            @mouseleave="handleMouseLeave"
            class="tilt-card-container relative w-full h-full rounded-3xl glass-card p-6 sm:p-8 flex flex-col justify-between overflow-hidden group select-none transition-all duration-300"
            :style="{
              transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
              transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)'
            }"
          >
            <!-- Dynamic Glare Overlay -->
            <div
              class="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300 rounded-3xl"
              :style="{
                background: `radial-gradient(circle 350px at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.18), transparent 70%)`,
                opacity: glareOpacity
              }"
            ></div>

            <!-- Animated Cyber Frame Line & Ambient Corner Glows -->
            <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-75 animate-pulse"></div>
            <div class="absolute -top-24 -left-24 w-48 h-48 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none"></div>
            <div class="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>

            <!-- Card Header: HUD System Info -->
            <div class="flex items-center justify-between pb-4 border-b border-base-content/10 z-20">
              <div class="flex items-center gap-2.5">
                <app-logo size="sm" :showText="false" :interactive="false" />
                <span class="text-xs font-mono font-bold tracking-wider uppercase text-cyan-400">
                  {{ $t('about.hud_role') }}
                </span>
              </div>
              <span class="text-[11px] font-mono px-2 py-0.5 rounded-md glass-panel text-base-content/60 font-semibold border border-base-content/10">
                SYS_ID #1998
              </span>
            </div>

            <!-- Centered Heroic Portrait Presentation -->
            <div class="relative my-6 sm:my-8 flex items-center justify-center z-10">
              
              <!-- Multi-Layer Soft Ambient Aura (Static, non-rotating elegant glow) -->
              <div class="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-500/25 via-sky-500/15 to-purple-600/25 blur-2xl group-hover:blur-3xl group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-100"></div>

              <!-- Main Portrait Container with 3D Depth & Corner Tech Brackets -->
              <div class="relative w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden bg-base-300/80 border-2 border-base-content/20 group-hover:border-cyan-400 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:shadow-[0_20px_60px_rgba(6,182,212,0.25)] transition-all duration-500">
                
                <!-- Smooth Diagonal Light Shimmer Sweep on Hover -->
                <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 z-20 pointer-events-none"></div>

                <!-- Futuristic Corner HUD Focus Brackets -->
                <div class="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-2 border-l-2 border-cyan-400/60 group-hover:border-cyan-300 group-hover:scale-115 transition-all duration-300 z-20 pointer-events-none"></div>
                <div class="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 border-cyan-400/60 group-hover:border-cyan-300 group-hover:scale-115 transition-all duration-300 z-20 pointer-events-none"></div>
                <div class="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 border-cyan-400/60 group-hover:border-cyan-300 group-hover:scale-115 transition-all duration-300 z-20 pointer-events-none"></div>
                <div class="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b-2 border-r-2 border-cyan-400/60 group-hover:border-cyan-300 group-hover:scale-115 transition-all duration-300 z-20 pointer-events-none"></div>

                <!-- High Quality Developer Portrait -->
                <nuxt-img
                  format="webp"
                  src="/images/mfa-about.png"
                  alt="Furkan Aymergen - Fullstack Engineer"
                  width="700"
                  height="800"
                  sizes="256px sm:288px md:320px"
                  loading="lazy"
                  decoding="async"
                  class="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-108 filter contrast-[1.03] brightness-[1.02]"
                />

                <!-- Portrait Bottom Ambient Shadow Gradient -->
                <div class="absolute inset-0 bg-gradient-to-t from-base-300/90 via-transparent to-transparent opacity-80 pointer-events-none"></div>

                <!-- Floating Holographic Badge 1 (Top-Left) -->
                <div class="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-panel text-[11px] font-mono font-bold text-cyan-300 border border-cyan-400/40 shadow-lg backdrop-blur-md">
                  <span><UiIcon name="activity" class="w-[1em] h-[1em] inline-block align-middle" /></span>
                  <span>{{ $t('about.badge_role') }}</span>
                </div>

                <!-- Floating Holographic Badge 2 (Bottom-Right) -->
                <div class="absolute bottom-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-xl glass-panel text-[11px] font-mono font-bold text-emerald-300 border border-emerald-400/40 shadow-lg backdrop-blur-md">
                  <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>{{ $t('about.badge_exp') }}</span>
                </div>
              </div>
            </div>

            <!-- Card Bottom: Interactive Quick Credentials -->
            <div class="w-full grid grid-cols-2 gap-3 pt-4 border-t border-base-content/10 z-20">
              <div class="p-3.5 rounded-2xl glass-panel text-center group-hover:border-cyan-400/30 transition-colors">
                <div class="text-[10px] font-mono text-base-content/60 uppercase tracking-wider font-semibold">
                  {{ $t('about.edu_label') }}
                </div>
                <div class="text-xs sm:text-sm font-heading font-bold text-base-content mt-1">
                  {{ $t('about.edu_val') }}
                </div>
              </div>
              <div class="p-3.5 rounded-2xl glass-panel text-center group-hover:border-cyan-400/30 transition-colors">
                <div class="text-[10px] font-mono text-base-content/60 uppercase tracking-wider font-semibold">
                  {{ $t('about.focus_label') }}
                </div>
                <div class="text-xs sm:text-sm font-heading font-bold text-gradient-primary mt-1">
                  {{ $t('about.focus_val') }}
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- Column 2: Narrative Bio & Engineering Philosophy (Col span 7) -->
        <div data-aos="fade-left" data-aos-duration="900" class="lg:col-span-7 flex flex-col justify-between space-y-6">
          
          <!-- Narrative Card -->
          <div class="rounded-3xl glass-card p-6 sm:p-10 flex flex-col justify-between hover:border-cyan-400/40 transition-all duration-500 relative overflow-hidden flex-1">
            
            <!-- Top Subtle Accent -->
            <div class="flex items-center justify-between gap-3 mb-6 flex-wrap pb-4 border-b border-base-content/10">
              <div class="flex items-center gap-2 flex-wrap">
                <span class="px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono font-bold flex items-center gap-1.5">
                  <span class="text-emerald-400">●</span>
                  {{ $t('about.story_tag') }}
                </span>
                <span class="px-3 py-1 rounded-full glass-panel text-xs font-mono text-base-content/70">
                  {{ $t('about.story_role') }}
                </span>
              </div>
              <span class="text-xs font-mono text-base-content/40 font-semibold">
                {{ $t('about.story_period') }}
              </span>
            </div>

            <!-- Styled Rich Bio Text -->
            <div class="text-base-content/90 font-sans text-base sm:text-lg leading-relaxed space-y-4 font-normal" v-html="aboutText"></div>

            <!-- Core Skill Badges Grid -->
            <div class="mt-8 pt-6 border-t border-base-content/10">
              <div class="text-xs font-mono uppercase tracking-wider text-base-content/60 mb-3 font-semibold">
                {{ $t('about.skills_title') }}
              </div>
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                <div
                  v-for="(skill, sIdx) in coreSkills"
                  :key="sIdx"
                  class="flex items-center gap-2 px-3 py-2 rounded-xl glass-panel hover:bg-base-200/90 hover:border-cyan-400/40 transition-all duration-300 group/skill"
                >
                  <span class="text-sm group-hover/skill:scale-125 transition-transform"><UiIcon :name="skill.icon" class="w-[1em] h-[1em] inline-block align-middle" /></span>
                  <span class="text-xs font-mono text-base-content/85 font-medium truncate">{{ skill.name }}</span>
                </div>
              </div>
            </div>

          </div>

          <!-- Bottom Micro Metrics Ribbon -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div class="p-4 rounded-2xl glass-card flex items-center gap-3.5 hover:border-cyan-400/40 transition-all">
              <div class="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-lg font-bold">
                ✓
              </div>
              <div>
                <div class="text-xs font-mono text-base-content/60 uppercase">{{ $t('about.metrics.arch_title') }}</div>
                <div class="text-sm font-heading font-bold text-base-content">{{ $t('about.metrics.arch_val') }}</div>
              </div>
            </div>

            <div class="p-4 rounded-2xl glass-card flex items-center gap-3.5 hover:border-emerald-400/40 transition-all">
              <div class="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-lg font-bold">
                <UiIcon name="activity" class="w-[1em] h-[1em]" />
              </div>
              <div>
                <div class="text-xs font-mono text-base-content/60 uppercase">{{ $t('about.metrics.perf_title') }}</div>
                <div class="text-sm font-heading font-bold text-base-content">{{ $t('about.metrics.perf_val') }}</div>
              </div>
            </div>

            <div class="p-4 rounded-2xl glass-card flex items-center gap-3.5 hover:border-purple-400/40 transition-all">
              <div class="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 text-lg font-bold">
                <UiIcon name="target" class="w-[1em] h-[1em]" />
              </div>
              <div>
                <div class="text-xs font-mono text-base-content/60 uppercase">{{ $t('about.metrics.ux_title') }}</div>
                <div class="text-sm font-heading font-bold text-base-content">{{ $t('about.metrics.ux_val') }}</div>
              </div>
            </div>
          </div>

        </div>

        <!-- Bento Row 3: 3 Pillars Cards (Col span 12) -->
        <div data-aos="fade-up" class="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div
            v-for="(item, idx) in highlights"
            :key="idx"
            class="rounded-3xl glass-card p-6 sm:p-7 hover:border-cyan-400/50 transition-all duration-400 hover:-translate-y-1.5 group relative overflow-hidden flex flex-col justify-between"
          >
            <!-- Card Corner Glow -->
            <div class="absolute -top-12 -right-12 w-28 h-28 bg-cyan-400/10 rounded-full blur-2xl group-hover:bg-cyan-400/20 transition-all duration-500 pointer-events-none"></div>

            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="text-3xl p-3.5 rounded-2xl glass-panel group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <UiIcon :name="item.icon" class="w-[1em] h-[1em] inline-block align-middle" />
                </div>
                <span class="text-[11px] font-mono px-2.5 py-1 rounded-full glass-panel text-cyan-400 border border-cyan-400/20 font-semibold">
                  {{ item.tag }}
                </span>
              </div>
              <h3 class="text-lg font-heading font-bold text-base-content group-hover:text-cyan-400 transition-colors">
                {{ item.title }}
              </h3>
              <p class="text-sm font-sans text-base-content/75 mt-2.5 leading-relaxed">
                {{ item.desc }}
              </p>
            </div>

            <div class="mt-5 pt-4 border-t border-base-content/10 flex items-center justify-between text-xs font-mono text-base-content/50 group-hover:text-cyan-400 transition-colors">
              <span>{{ $t('about.learn_more') }}</span>
              <span class="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.tilt-card-container {
  transform-style: preserve-3d;
  will-change: transform;
}
</style>
