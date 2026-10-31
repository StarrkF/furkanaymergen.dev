<script setup lang="ts">
import { computed } from 'vue'

const { t, tm, locale } = useI18n()

const scrollTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
}

const currentYear = new Date().getFullYear()

const cvHref = computed(() => {
  return locale.value === 'tr' ? '/mfa-cv.pdf' : '/mfa-cv-eng.pdf'
})
</script>

<template>
  <div>
    <!-- Floating Quick Dock (Desktop Screen Edge) -->
    <aside class="hidden md:flex fixed top-1/2 -translate-y-1/2 right-4 z-40 flex-col items-center gap-3 p-2 rounded-2xl glass-panel shadow-2xl border-base-content/15">
      <!-- GitHub -->
      <SocialIcon href="https://github.com/StarrkF" title="GitHub">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
        </svg>
      </SocialIcon>

      <!-- LinkedIn -->
      <SocialIcon href="https://www.linkedin.com/in/muhammed-furkan-aymergen-25646b174/" title="LinkedIn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
        </svg>
      </SocialIcon>

      <!-- StackOverflow -->
      <SocialIcon href="https://stackoverflow.com/users/16917642/starrk" title="Stack Overflow">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m19 14-8-4-1 2 8 4zM8 18h10v-2H8zm12-9-7-6-1.5 1.8 7 6zM4 14v8h16v-8"/>
        </svg>
      </SocialIcon>

      <!-- CV Download -->
      <SocialIcon :href="cvHref" :title="locale === 'tr' ? 'Özgeçmiş (CV)' : 'Download CV'">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M12 18v-6"/><path d="m9 15 3 3 3-3"/>
        </svg>
      </SocialIcon>

      <!-- Email -->
      <SocialIcon href="mailto:faymergen98@gmail.com" title="Email">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
      </SocialIcon>
    </aside>

    <!-- Comprehensive Main Page Footer -->
    <footer class="w-full relative z-10 bg-base-200/90 border-t border-base-content/10 py-10 sm:py-12 px-4 sm:px-6 lg:px-12 text-base-content/70">
      <div class="max-w-7xl mx-auto flex flex-col items-center justify-between gap-6 sm:gap-8 sm:flex-row">
        
        <!-- Left Brand & Copyright -->
        <div class="flex flex-col items-center sm:items-start gap-2">
          <a
            href="#home"
            @click.prevent="scrollTop"
            class="no-underline focus:outline-hidden"
          >
            <app-logo size="md" :showSubtitle="false" />
          </a>
          <p class="text-xs font-mono text-base-content/65 text-center sm:text-left mt-1">
            © {{ currentYear }} Furkan Aymergen. {{ $t('footer.rights') }}
          </p>
        </div>

        <!-- Center Nav Links -->
        <nav class="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-heading font-medium">
          <a
            v-for="item in $tm('app.menu')"
            :key="item.href"
            :href="item.href"
            v-smooth-scroll
            class="text-base-content/70 hover:text-cyan-400 transition-colors"
          >
            {{ item.name }}
          </a>
          <a href="#contact" v-smooth-scroll class="text-base-content/70 hover:text-cyan-400 transition-colors">
            {{ $t('footer.contact') }}
          </a>
        </nav>

        <!-- Right: Back to Top Trigger -->
        <div class="flex items-center gap-4">
          <button
            type="button"
            @click="scrollTop"
            class="flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-base-content/80 hover:text-cyan-400 text-xs font-mono transition-all duration-300 cursor-pointer shadow-xs hover:scale-105 group hover:border-cyan-400/50"
            :title="$t('footer.back_to_top')"
          >
            <UiIcon name="arrow-up" class="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            <span>{{ $t('footer.back_to_top') }}</span>
          </button>
        </div>

      </div>
    </footer>
  </div>
</template>
