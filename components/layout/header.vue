<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { normalizeThemePreference } from '~/utils/theme.mjs'

const colorMode = useColorMode()
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 40
}

const setTheme = (theme: string) => {
  colorMode.preference = normalizeThemePreference(theme)
}

watch(() => [colorMode.preference, colorMode.unknown], () => {
  if (colorMode.unknown) return
  const preference = normalizeThemePreference(colorMode.preference, colorMode.value)
  if (colorMode.preference !== preference) colorMode.preference = preference
}, { immediate: true })

const scrollTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-3 sm:p-5 transition-all duration-500"
    :class="isScrolled ? 'py-2 sm:py-3' : 'py-3.5 sm:py-6'"
  >
    <div
      class="w-full max-w-7xl mx-auto flex items-center justify-between px-3.5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-500"
      :class="[
        isScrolled
          ? 'glass-panel shadow-[0_15px_40px_rgba(0,0,0,0.25)] border-base-content/15'
          : 'bg-base-200/40 backdrop-blur-md border border-base-content/10'
      ]"
    >
      <!-- Animated Site Logo -->
      <a
        href="#home"
        @click.prevent="scrollTop"
        class="no-underline focus:outline-hidden"
      >
        <app-logo size="md" />
      </a>

      <!-- Desktop Navigation Menu -->
      <nav class="hidden lg:flex items-center gap-1 bg-base-content/5 px-4 py-1.5 rounded-full border border-base-content/10 backdrop-blur-lg">
        <a
          v-for="item in $tm('app.menu')"
          :key="item.href"
          :href="item.href"
          v-smooth-scroll
          class="relative px-4 py-1.5 text-sm font-heading font-medium text-base-content/75 hover:text-base-content transition-colors duration-200 rounded-full hover:bg-base-content/10 group"
        >
          {{ item.name }}
          <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary/70 transition-all duration-300 group-hover:w-1/2 rounded-full"></span>
        </a>
      </nav>

      <!-- Right Action Controls (Language, Theme, Mobile Toggle) -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Language Switcher Pill -->
        <NuxtLink
          :to="switchLocalePath(locale === 'tr' ? 'en' : 'tr')"
          :prefetch="false"
          class="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-full glass-panel text-xs font-mono font-semibold text-base-content/90 transition-all duration-300 cursor-pointer shadow-xs hover:border-primary/40 hover:text-primary group"
          :title="locale === 'tr' ? 'Switch to English' : 'Türkçe\'ye Geç'"
        >
          <span class="relative flex w-4 h-4 rounded-full overflow-hidden border border-base-content/25 shadow-xs shrink-0 group-hover:scale-110 transition-transform duration-300">
            <nuxt-img
              :src="locale === 'tr' ? '/images/tr.png' : '/images/en.png'"
              :alt="locale === 'tr' ? 'Türkçe' : 'English'"
              width="32"
              height="32"
              class="w-full h-full object-cover"
            />
          </span>
          <span class="uppercase tracking-wider font-bold text-xs">{{ locale }}</span>
        </NuxtLink>

        <!-- Theme Toggle Button -->
        <span class="flex shrink-0 w-8 h-8 sm:w-9 sm:h-9">
          <ColorScheme>
            <template #placeholder>
              <span aria-hidden="true" class="block w-full h-full rounded-full glass-panel"></span>
            </template>
            <button
              type="button"
              class="flex items-center justify-center w-full h-full rounded-full glass-panel text-base-content/80 hover:text-primary transition-colors duration-200 cursor-pointer shadow-xs hover:border-primary/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              :title="$t(colorMode.value === 'dark' ? 'app.theme_switch.to_light' : 'app.theme_switch.to_dark')"
              :aria-label="$t(colorMode.value === 'dark' ? 'app.theme_switch.to_light' : 'app.theme_switch.to_dark')"
              @click="setTheme(colorMode.value === 'dark' ? 'light' : 'dark')"
            >
              <svg v-if="colorMode.value === 'dark'" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2"/>
                <path d="M12 20v2"/>
                <path d="m4.93 4.93 1.41 1.41"/>
                <path d="m17.66 17.66 1.41 1.41"/>
                <path d="M2 12h2"/>
                <path d="M20 12h2"/>
                <path d="m6.34 17.66-1.41 1.41"/>
                <path d="m19.07 4.93-1.41 1.41"/>
              </svg>
              <svg v-else aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z"/>
              </svg>
            </button>
          </ColorScheme>
        </span>

        <!-- Quick Contact Link Button (Desktop) -->
        <a
          href="#contact"
          v-smooth-scroll
          class="button-glass button-glass--compact hidden sm:inline-flex shrink-0 items-center font-heading font-semibold text-xs"
        >
          <span class="button-label">{{ locale === 'tr' ? 'İletişim' : 'Contact' }}</span>
          <span class="button-icon" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 17 17 7M7 7h10v10"/>
            </svg>
          </span>
        </a>

        <!-- Mobile Menu Toggle Button -->
        <button
          type="button"
          @click="mobileMenuOpen = !mobileMenuOpen"
          :aria-expanded="mobileMenuOpen"
          aria-controls="mobile-navigation"
          class="lg:hidden flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full glass-panel text-base-content/90 hover:text-base-content"
          aria-label="Toggle Navigation Menu"
        >
          <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer Overlay -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        id="mobile-navigation"
        v-if="mobileMenuOpen"
        class="lg:hidden fixed top-18 left-3 right-3 p-5 bg-base-200/95 backdrop-blur-2xl rounded-3xl border border-base-content/15 shadow-[0_20px_60px_rgba(0,0,0,0.6)] z-50 flex flex-col gap-3"
      >
        <ul class="flex flex-col gap-1.5">
          <li v-for="item in $tm('app.menu')" :key="item.href">
            <a
              :href="item.href"
              v-smooth-scroll
              @click="mobileMenuOpen = false"
              class="flex items-center justify-between p-3 rounded-2xl text-base-content/85 hover:text-base-content hover:bg-base-content/10 font-heading font-medium text-base transition-colors"
            >
              <span>{{ item.name }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              v-smooth-scroll
              @click="mobileMenuOpen = false"
              class="button-glass flex items-center font-heading font-semibold text-sm mt-2"
            >
              <span class="button-label">{{ $t('header.contact') }}</span>
              <span class="button-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M7 17 17 7M7 7h10v10"/>
                </svg>
              </span>
            </a>
          </li>
        </ul>

        <!-- Mobile Language Selector with Flag Images -->
        <div class="flex items-center justify-between p-3 rounded-2xl glass-panel border border-base-content/10 mt-2">
          <span class="text-xs font-mono text-base-content/70 font-semibold">{{ locale === 'tr' ? 'Dil Seçimi' : 'Language' }}</span>
          <div class="flex items-center gap-1.5">
            <NuxtLink
              :to="switchLocalePath('tr')"
              :prefetch="false"
              @click="mobileMenuOpen = false"
              class="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer"
              :class="locale === 'tr' ? 'bg-primary/10 text-primary border border-primary/30 shadow-xs' : 'text-base-content/70 hover:bg-base-content/5'"
            >
              <img src="/images/tr.png" alt="Türkçe" width="16" height="16" class="w-4 h-4 rounded-full object-cover border border-base-content/20 shrink-0" />
              <span>TR</span>
            </NuxtLink>
            <NuxtLink
              :to="switchLocalePath('en')"
              :prefetch="false"
              @click="mobileMenuOpen = false"
              class="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer"
              :class="locale === 'en' ? 'bg-primary/10 text-primary border border-primary/30 shadow-xs' : 'text-base-content/70 hover:bg-base-content/5'"
            >
              <img src="/images/en.png" alt="English" width="16" height="16" class="w-4 h-4 rounded-full object-cover border border-base-content/20 shrink-0" />
              <span>EN</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>
