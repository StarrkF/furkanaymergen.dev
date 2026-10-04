<script setup lang="ts">
import { ref, computed } from 'vue'

const { t, locale } = useI18n()
const selectedCategory = ref('all')

const techCategories = computed(() => [
  { id: 'all', label: t('project.categories.all') },
  { id: 'backend', label: 'Backend & Core' },
  { id: 'frontend', label: 'Frontend & UI' },
  { id: 'devops', label: 'Cloud & DevOps' }
])

interface TechItem {
  name: string
  category: 'backend' | 'frontend' | 'devops'
  color: string
  level?: string
}

const techItems: TechItem[] = [
  { name: 'Laravel', category: 'backend', color: '#ff2d20' },
  { name: 'Vue.js', category: 'frontend', color: '#42b883' },
  { name: 'Nuxt 3', category: 'frontend', color: '#00dc82' },
  { name: 'Spring Boot', category: 'backend', color: '#6db33f' },
  { name: 'Java', category: 'backend', color: '#f89820' },
  { name: 'PHP', category: 'backend', color: '#777bb4' },
  { name: 'TypeScript', category: 'frontend', color: '#3178c6' },
  { name: 'Tailwind CSS', category: 'frontend', color: '#38bdf8' },
  { name: 'Docker', category: 'devops', color: '#2496ed' },
  { name: 'PostgreSQL', category: 'backend', color: '#336791' },
  { name: 'Redis', category: 'backend', color: '#dc382d' },
  { name: 'AWS', category: 'devops', color: '#ff9900' },
  { name: 'Git', category: 'devops', color: '#f05032' },
  { name: 'Vaadin', category: 'backend', color: '#00b4f0' },
  { name: 'Bootstrap', category: 'frontend', color: '#7952b3' },
  { name: 'Linux', category: 'devops', color: '#fcc624' }
]

const filteredItems = computed(() => {
  if (selectedCategory.value === 'all') return techItems
  return techItems.filter(item => item.category === selectedCategory.value)
})
</script>

<template>
  <section class="py-14 sm:py-20 relative overflow-hidden bg-base-200/30 border-y border-base-content/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
      <div class="flex items-center gap-2.5">
        <div class="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></div>
        <span class="font-mono text-xs sm:text-sm uppercase tracking-widest text-base-content/70">
          {{ $t('tool.ecosystem_badge') }}
        </span>
      </div>

      <!-- Category Filter Pills -->
      <div class="flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-2xl glass-panel">
        <button
          v-for="cat in techCategories"
          :key="cat.id"
          @click="selectedCategory = cat.id"
          type="button"
          class="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-xl text-xs font-mono transition-all duration-300 cursor-pointer"
          :class="[
            selectedCategory === cat.id
              ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/50 shadow-sm font-bold'
              : 'text-base-content/60 hover:text-base-content hover:bg-base-content/5'
          ]"
        >
          {{ cat.label }}
        </button>
      </div>
    </div>

    <!-- Infinite Scrolling Marquee Track 1 (Left) -->
    <div class="relative w-full overflow-hidden mask-gradient-x py-2 sm:py-3">
      <div class="animate-marquee-left flex items-center gap-3 sm:gap-5">
        <div
          v-for="(tech, idx) in [...filteredItems, ...filteredItems, ...filteredItems]"
          :key="'m1-' + idx"
          class="flex items-center gap-2.5 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl glass-card text-base-content hover:border-cyan-400/50 transition-all duration-300 group cursor-default shrink-0 shadow-md"
        >
          <div
            class="w-3 h-3 rounded-full shrink-0 transition-transform group-hover:scale-125 shadow-sm"
            :style="{ backgroundColor: tech.color, boxShadow: `0 0 10px ${tech.color}` }"
          ></div>
          <span class="font-heading font-semibold text-xs sm:text-sm text-base-content whitespace-nowrap">
            {{ tech.name }}
          </span>
          <span class="text-[9px] sm:text-[10px] font-mono uppercase px-2 py-0.5 rounded-md bg-base-content/5 text-base-content/60 border border-base-content/10">
            {{ tech.category }}
          </span>
        </div>
      </div>
    </div>

    <!-- Infinite Scrolling Marquee Track 2 (Right) -->
    <div class="relative w-full overflow-hidden mask-gradient-x py-2 sm:py-3 mt-2 sm:mt-3">
      <div class="animate-marquee-right flex items-center gap-3 sm:gap-5">
        <div
          v-for="(tech, idx) in [...filteredItems.slice().reverse(), ...filteredItems.slice().reverse(), ...filteredItems.slice().reverse()]"
          :key="'m2-' + idx"
          class="flex items-center gap-2.5 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl glass-card text-base-content hover:border-purple-400/50 transition-all duration-300 group cursor-default shrink-0 shadow-md"
        >
          <div
            class="w-3 h-3 rounded-full shrink-0 transition-transform group-hover:scale-125 shadow-sm"
            :style="{ backgroundColor: tech.color, boxShadow: `0 0 10px ${tech.color}` }"
          ></div>
          <span class="font-heading font-semibold text-xs sm:text-sm text-base-content whitespace-nowrap">
            {{ tech.name }}
          </span>
          <span class="text-[9px] sm:text-[10px] font-mono uppercase px-2 py-0.5 rounded-md bg-base-content/5 text-base-content/60 border border-base-content/10">
            {{ tech.category }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mask-gradient-x {
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}
</style>
