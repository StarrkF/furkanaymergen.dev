<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const colorMode = useColorMode()
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 40
}

const setTheme = (theme: string) => {
  colorMode.preference = theme
}

const scrollTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
}

const themes = [
  { name: 'night', label: 'Night (Dark)', color: '#0f172a' },
  { name: 'dracula', label: 'Dracula', color: '#282a36' },
  { name: 'synthwave', label: 'Synthwave', color: '#2d1b69' },
  { name: 'emerald', label: 'Emerald', color: '#064e3b' },
  { name: 'halloween', label: 'Halloween', color: '#212121' },
  { name: 'corporate', label: 'Corporate (Light)', color: '#f8fafc' },
  { name: 'cupcake', label: 'Cupcake (Light)', color: '#faf7f5' }
]

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
          <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-1/2 rounded-full shadow-[0_0_8px_#38bdf8]"></span>
        </a>
      </nav>

      <!-- Right Action Controls (Language, Theme, Mobile Toggle) -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Language Switcher Pill -->
        <NuxtLink
          :to="switchLocalePath(locale === 'tr' ? 'en' : 'tr')"
          :prefetch="false"
          class="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-full glass-panel text-xs font-mono font-semibold text-base-content/90 transition-all duration-300 cursor-pointer shadow-xs hover:border-cyan-400/50 hover:text-cyan-400 group"
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

        <!-- Theme Switcher Dropdown -->
        <div class="dropdown dropdown-end">
          <button
            type="button"
            tabindex="0"
            class="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full glass-panel text-cyan-400 hover:text-cyan-300 transition-all duration-300 cursor-pointer shadow-xs hover:border-cyan-400/50"
            :title="$t('app.theme') || 'Theme'"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
          </button>
          <ul
            tabindex="0"
            class="dropdown-content z-50 menu p-2 mt-3 shadow-2xl bg-base-200/95 backdrop-blur-2xl rounded-2xl w-52 border border-base-content/15 text-base-content space-y-1 font-sans text-xs"
          >
            <li v-for="tItem of themes" :key="tItem.name">
              <button
                type="button"
                class="flex items-center justify-between w-full px-3 py-2 rounded-xl transition-all hover:bg-cyan-500/15 hover:text-cyan-400"
                :class="{ 'bg-cyan-500/20 text-cyan-400 font-bold border border-cyan-500/30': colorMode.preference === tItem.name }"
                @click="setTheme(tItem.name)"
              >
                <span>{{ tItem.label }}</span>
                <span class="w-3.5 h-3.5 rounded-full border border-base-content/20 shadow-xs" :style="{ backgroundColor: tItem.color }"></span>
              </button>
            </li>
          </ul>
        </div>

        <!-- Quick Contact Link Button (Desktop) -->
        <a
          href="#contact"
          v-smooth-scroll
          class="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:shadow-[0_0_30px_rgba(56,189,248,0.7)] hover:scale-105"
        >
          <span>{{ locale === 'tr' ? 'İletişim' : 'Contact' }}</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
          </svg>
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
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
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
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              v-smooth-scroll
              @click="mobileMenuOpen = false"
              class="flex items-center justify-center p-3 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 text-slate-950 font-heading font-bold text-sm uppercase tracking-wider mt-2"
            >
              {{ $t('header.contact') }}
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
              :class="locale === 'tr' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 shadow-xs' : 'text-base-content/70 hover:bg-base-content/5'"
            >
              <img src="/images/tr.png" alt="Türkçe" width="16" height="16" class="w-4 h-4 rounded-full object-cover border border-base-content/20 shrink-0" />
              <span>TR</span>
            </NuxtLink>
            <NuxtLink
              :to="switchLocalePath('en')"
              :prefetch="false"
              @click="mobileMenuOpen = false"
              class="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer"
              :class="locale === 'en' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 shadow-xs' : 'text-base-content/70 hover:bg-base-content/5'"
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
