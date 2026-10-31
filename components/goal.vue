<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'

const { tm, t, locale } = useI18n()
const goals = ref<any[]>([])
const activeSlideIndex = ref(0)
let swiperInstance = ref<any>(null)

watchEffect(() => {
  const g = tm('goal.items')
  goals.value = Array.isArray(g) ? g : []
})

const getPillars = (index: number) => {
  const isTr = locale.value === 'tr'
  const pillarMap: Record<number, { tag: string; chips: string[]; status: string }> = {
    0: {
      tag: isTr ? 'KOD KALİTESİ & MİMARİ' : 'CODE QUALITY & ARCHITECTURE',
      chips: ['SOLID', 'Clean Code', 'Design Patterns'],
      status: isTr ? 'Sürekli Gelişim' : 'Continuous Mastery'
    },
    1: {
      tag: isTr ? 'TAKIM SİNERJİSİ & ÇALIŞMA' : 'TEAM SYNERGY & CULTURE',
      chips: ['Agile & Scrum', 'Knowledge Sharing', 'Mentorship'],
      status: isTr ? 'İletişim Odaklı' : 'Collaboration Focus'
    },
    2: {
      tag: isTr ? 'BEST PRACTICE & STANDARTLAR' : 'BEST PRACTICES & STANDARDS',
      chips: ['Micro-architecture', 'Modularity', 'Scalability'],
      status: isTr ? 'Endüstri Standardı' : 'Industry Standard'
    },
    3: {
      tag: isTr ? 'DEVOPS & BULUT ALTYAPISI' : 'DEVOPS & CLOUD INFRA',
      chips: ['Docker & Linux', 'Redis & Cache', 'Nginx & Proxy'],
      status: isTr ? 'Altyapı Yönetimi' : 'Infrastructure'
    },
    4: {
      tag: isTr ? 'AÇIK KAYNAK & PAKETLEME' : 'OPEN SOURCE & PACKAGES',
      chips: ['NPM & Composer', 'CI/CD Automation', 'Community'],
      status: isTr ? 'Paylaşım & Katkı' : 'Open Contribution'
    }
  }
  return pillarMap[index] || {
    tag: isTr ? 'MÜHENDİSLİK HEDEFİ' : 'ENGINEERING GOAL',
    chips: ['Engineering', 'Performance', 'Vision'],
    status: isTr ? 'Aktif Hedef' : 'Active Goal'
  }
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
  <section id="goals" class="min-h-screen py-20 px-4 sm:px-6 lg:px-12 relative z-10 overflow-hidden">
    <div class="max-w-7xl mx-auto">
      
      <!-- Section Title (Centered) -->
      <section-title
        :badge="$t('goal.badge')"
        :subtitle="$t('goal.summary')"
      >
        {{ $t('goal.title') }}
      </section-title>

      <!-- Slider Navigation & HUD Indicator Bar -->
      <div data-aos="fade-up" class="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 mb-10 w-full">
        <!-- Vision & Principle Info Pill -->
        <div class="flex items-center gap-2 px-4 py-2 rounded-2xl glass-panel border border-base-content/10 text-xs font-mono font-medium text-base-content/75 shadow-xs">
          <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span>{{ locale === 'tr' ? 'Mimari Standartlar & Mühendislik Vizyonu' : 'Architectural Standards & Engineering Vision' }}</span>
        </div>

        <!-- Right Side: Slide Counter & Nav Controls -->
        <div class="flex items-center gap-3 self-end sm:self-auto">
          <!-- Slide Counter Badge -->
          <div class="px-3.5 py-1.5 rounded-xl glass-panel flex items-center gap-2 border border-base-content/10 text-xs font-mono font-bold text-base-content/70 shadow-xs">
            <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span>
              <span class="text-base-content">{{ String(activeSlideIndex + 1).padStart(2, '0') }}</span>
              <span class="mx-1 text-base-content/30">/</span>
              <span>{{ String(goals.length).padStart(2, '0') }}</span>
            </span>
          </div>

          <!-- Glass Prev / Next Arrows -->
          <div class="flex items-center gap-1.5 p-1 rounded-2xl glass-panel border border-base-content/10 shadow-sm">
            <button
              type="button"
              @click="slidePrev"
              class="w-8 h-8 rounded-xl hover:bg-primary/10 hover:border-primary/30 text-base-content/80 hover:text-primary flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
              aria-label="Previous Slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>
            <button
              type="button"
              @click="slideNext"
              class="w-8 h-8 rounded-xl hover:bg-primary/10 hover:border-primary/30 text-base-content/80 hover:text-primary flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
              aria-label="Next Slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Goals Swiper Slider -->
      <div data-aos="zoom-in" data-aos-duration="800" class="relative w-full">
        <swiper
          class="w-full overflow-visible py-4"
          :grabCursor="true"
          :slidesPerView="1"
          :pagination="{ clickable: true }"
          :breakpoints="breakpoints"
          :modules="[SwiperPagination, SwiperAutoplay]"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }"
          @swiper="onSwiperInit"
          @slideChange="onSlideChange"
        >
          <swiper-slide
            v-for="(item, index) in goals"
            :key="'goal-slide-' + index"
            class="!h-auto pb-14 flex flex-col"
          >
            <!-- Goal Card Container -->
            <div class="flex-1 w-full rounded-3xl glass-card overflow-hidden flex flex-col justify-between group relative border border-base-content/10 hover:border-base-content/20 transition-all duration-500 hover:-translate-y-2 shadow-md select-none">
              
              <!-- Ambient Glow & Top Glowing Accent Line -->
              <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="absolute -top-16 -right-16 w-36 h-36 bg-base-content/5 rounded-full blur-2xl group-hover:bg-base-content/10 transition-all duration-500 pointer-events-none"></div>

              <!-- Card Header Bar -->
              <div class="px-6 py-4 bg-base-200/80 border-b border-base-content/10 flex items-center justify-between gap-3 shrink-0 backdrop-blur-xl">
                <!-- Vision Tag -->
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span class="text-[11px] font-mono font-bold tracking-wider text-base-content/70 uppercase">
                    {{ getPillars(index).tag }}
                  </span>
                </div>

                <!-- Goal ID Badge -->
                <span class="text-[11px] font-mono px-2.5 py-0.5 rounded-lg glass-panel text-base-content/70 font-bold border border-base-content/10">
                  GOAL_#{{ String(index + 1).padStart(2, '0') }}
                </span>
              </div>

              <!-- Card Body Content -->
              <div class="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                
                <div class="space-y-4">
                  <!-- Large Glowing Icon Box & Title -->
                  <div class="flex items-start gap-4">
                    <div
                      class="w-14 h-14 rounded-2xl bg-base-200 border border-base-content/10 p-3 flex items-center justify-center text-base-content/70 group-hover:text-primary group-hover:scale-110 group-hover:border-primary/30 group-hover:shadow-md transition-all duration-400 shrink-0 shadow-sm backdrop-blur-md"
                      v-html="item.icon"
                    ></div>

                    <div class="flex-1 min-w-0">
                      <div class="text-[10px] font-mono uppercase tracking-widest text-base-content/50 font-semibold mb-1">
                        {{ locale === 'tr' ? 'Mimari İlke' : 'Core Principle' }}
                      </div>
                      <h3 class="font-heading text-xl sm:text-2xl font-black text-base-content transition-colors leading-snug">
                        {{ item.title }}
                      </h3>
                    </div>
                  </div>

                  <!-- Text Summary with Crisp Typography -->
                  <div
                    v-html="item.text"
                    class="text-sm font-sans text-base-content/80 leading-relaxed font-normal"
                  ></div>
                </div>

                <!-- Focus Pillar Badges -->
                <div class="pt-5 mt-5 border-t border-base-content/10 space-y-3">
                  <div class="text-[10px] font-mono uppercase tracking-wider text-base-content/50 font-bold">
                    {{ $t('goal.key_pillars_label') }}
                  </div>
                  <div class="flex flex-wrap gap-1.5">
                    <span
                      v-for="(chip, cIdx) in getPillars(index).chips"
                      :key="cIdx"
                      class="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-base-200/90 text-base-content/90 border border-base-content/10 text-xs font-mono group-hover:border-base-content/20 transition-colors"
                    >
                      <span class="w-1.5 h-1.5 rounded-full bg-base-content/40 shrink-0"></span>
                      <span>{{ chip }}</span>
                    </span>
                  </div>
                </div>

              </div>

              <!-- Card Bottom Ribbon: Status & Interactive Metric -->
              <div class="px-6 py-3.5 bg-base-200/60 border-t border-base-content/10 flex items-center justify-between text-xs font-mono text-base-content/60 shrink-0">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-primary inline-block"></span>
                  <span class="text-[11px] font-semibold text-base-content/70">{{ getPillars(index).status }}</span>
                </div>
                <div class="flex items-center gap-1 text-[11px] font-bold text-base-content/70 group-hover:translate-x-1 transition-transform">
                  <span>{{ $t('goal.target_label') }} 100%</span>
                  <span>→</span>
                </div>
              </div>

            </div>
          </swiper-slide>
        </swiper>
      </div>

    </div>
  </section>
</template>
