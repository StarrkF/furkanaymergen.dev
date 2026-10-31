<script setup lang="ts">
import { ref, watch, onBeforeUnmount } from 'vue'

const { locale } = useI18n()
const contactRef = ref<HTMLElement | null>(null)
const isActive = useSectionActivity(contactRef, false)

const currentTime = ref('')
let timer: any = null

const updateTime = () => {
  const now = new Date()
  currentTime.value = now.toLocaleTimeString(locale.value === 'tr' ? 'tr-TR' : 'en-US', {
    timeZone: 'Europe/Istanbul',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
}

const copyEmail = useCopyEmail(70, 70, 0.8)

watch(isActive, active => {
  clearInterval(timer)
  if (active) {
    updateTime()
    timer = setInterval(updateTime, 1000)
  }
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <section ref="contactRef" id="contact" :class="{ 'motion-paused': !isActive }" class="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 relative z-10">
    <div class="max-w-7xl mx-auto">
      
      <!-- Main Glassmorphic CTA Card -->
      <div data-aos="zoom-in" class="rounded-3xl glass-card border-base-content/15 p-6 sm:p-12 lg:p-16 relative overflow-hidden text-center flex flex-col items-center shadow-md">
        
        <!-- Glowing background auras -->
        <div class="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-base-content/5 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -bottom-32 right-1/4 w-80 h-80 bg-base-content/5 rounded-full blur-3xl pointer-events-none"></div>

        <!-- Holographic Brand Seal -->
        <app-logo size="lg" :showText="false" class="mb-5 shadow-sm" />

        <!-- Status Tag -->
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-200 border border-base-content/10 text-base-content/70 text-xs sm:text-sm font-mono mb-6 shadow-xs font-semibold">
          <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span>{{ $t('contact.badge') }}</span>
        </div>

        <!-- Grand CTA Title -->
        <h2 class="text-3xl sm:text-5xl md:text-6xl font-heading font-black text-base-content max-w-4xl tracking-tight leading-tight">
          {{ $t('contact.title_prefix') }}
          <span class="text-base-content">{{ $t('contact.title_highlight') }}</span>
        </h2>

        <!-- Subtitle -->
        <p class="mt-4 sm:mt-6 text-base-content/75 text-base sm:text-xl font-sans font-light max-w-2xl leading-relaxed">
          {{ $t('contact.subtitle') }}
        </p>

        <!-- Primary Action Triggers -->
        <div class="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10 w-full">
          <!-- Direct Mail Trigger -->
          <a
            href="mailto:faymergen98@gmail.com"
            class="button-glass font-heading font-semibold text-sm sm:text-base inline-flex items-center cursor-pointer"
          >
            <span class="button-label">{{ $t('contact.send_email') }}</span>
            <span class="button-icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 17 17 7M7 7h10v10"/>
              </svg>
            </span>
          </a>

          <!-- Quick Copy Trigger -->
          <button
            type="button"
            @click="copyEmail"
            class="px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl glass-panel text-base-content font-mono text-xs sm:text-sm transition-all duration-300 shadow-sm flex items-center gap-2 cursor-pointer hover:scale-105 hover:border-primary/30"
            :title="$t('hero.button.copy_email')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-base-content/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
            </svg>
            <span class="truncate max-w-[180px] sm:max-w-none">faymergen98@gmail.com</span>
          </button>
        </div>

        <!-- Live Clock & Location Badge -->
        <div class="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-base-content/10 w-full flex flex-wrap items-center justify-around gap-4 sm:gap-6 text-xs sm:text-sm font-mono text-base-content/60">
          <div class="flex items-center gap-2">
            <UiIcon name="location" class="w-4 h-4 shrink-0" />
            <span>{{ $t('contact.location') }}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-primary animate-ping"></span>
            <span>{{ $t('contact.local_time') }} {{ currentTime }} TRT</span>
          </div>
          <div class="flex items-center gap-2">
            <UiIcon name="message" class="w-4 h-4 shrink-0" />
            <span>{{ $t('contact.collaboration') }}</span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
