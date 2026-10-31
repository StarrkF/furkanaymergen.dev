<script setup lang="ts">
import { ref, watch } from 'vue'

const { tm, locale } = useI18n()
const activeTab = ref(1)

const educationData = ref<any[]>([])
const workLifeData = ref<any[]>([])

const loadAndReverseData = () => {
  const edu = tm('experience.education')
  const work = tm('experience.work_life')
  educationData.value = Array.isArray(edu) ? [...edu].reverse() : []
  workLifeData.value = Array.isArray(work) ? [...work].reverse() : []
}

watch(locale, loadAndReverseData, { immediate: true })
</script>

<template>
  <section id="experiences" class="min-h-screen py-20 px-4 sm:px-6 lg:px-12 relative z-10">
    <div class="max-w-6xl mx-auto">
      
      <!-- Section Title -->
      <section-title
        :badge="$t('experience.badge')"
        :subtitle="$t('experience.subtitle')"
      >
        {{ $t('experience.title') }}
      </section-title>

      <!-- Glassmorphic Tab Switcher -->
      <div data-aos="fade-up" class="flex justify-center mt-10 mb-14 sm:mb-16">
        <div class="p-1.5 rounded-full glass-panel flex items-center gap-2 shadow-xl">
          <button
            type="button"
            @click="activeTab = 1"
            class="flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full font-heading font-semibold text-xs sm:text-sm transition-all duration-300 cursor-pointer"
            :class="[
              activeTab === 1
                ? 'bg-linear-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-[0_0_20px_rgba(56,189,248,0.4)] font-bold'
                : 'text-base-content/70 hover:text-base-content hover:bg-base-content/10'
            ]"
          >
            <span><UiIcon name="briefcase" class="w-[1em] h-[1em] inline-block align-middle" /></span>
            <span>{{ $t('experience.work_life_tab') }}</span>
            <span class="text-[10px] font-mono px-1.5 py-0.5 rounded-md" :class="activeTab === 1 ? 'bg-black/20 text-slate-950' : 'bg-base-content/10 text-base-content/60'">
              {{ workLifeData.length }}
            </span>
          </button>

          <button
            type="button"
            @click="activeTab = 2"
            class="flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full font-heading font-semibold text-xs sm:text-sm transition-all duration-300 cursor-pointer"
            :class="[
              activeTab === 2
                ? 'bg-linear-to-r from-purple-500 to-pink-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] font-bold'
                : 'text-base-content/70 hover:text-base-content hover:bg-base-content/10'
            ]"
          >
            <span><UiIcon name="graduation" class="w-[1em] h-[1em] inline-block align-middle" /></span>
            <span>{{ $t('experience.education_tab') }}</span>
            <span class="text-[10px] font-mono px-1.5 py-0.5 rounded-md" :class="activeTab === 2 ? 'bg-black/20 text-white' : 'bg-base-content/10 text-base-content/60'">
              {{ educationData.length }}
            </span>
          </button>
        </div>
      </div>

      <!-- Timeline Container -->
      <div class="relative">
        <Transition name="fade" mode="out-in">
          <div v-if="activeTab === 1" key="work">
            <timeline :data="workLifeData" type="work" />
          </div>
          <div v-else-if="activeTab === 2" key="edu">
            <timeline :data="educationData" type="edu" />
          </div>
        </Transition>
      </div>

    </div>
  </section>
</template>
