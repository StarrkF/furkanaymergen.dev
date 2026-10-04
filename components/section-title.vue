<script setup lang="ts">
defineProps<{
  badge?: string
  subtitle?: string
}>()
</script>

<template>
  <div data-aos="fade-up" class="flex flex-col items-center justify-center text-center pt-24 pb-12 md:pt-32 md:pb-16 px-4">
    <div v-if="badge" class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs sm:text-sm font-mono tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
      <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
      <span>{{ badge }}</span>
    </div>
    
    <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-base-content max-w-4xl relative">
      <span class="text-gradient-primary">
        <slot />
      </span>
    </h2>

    <p v-if="subtitle" class="mt-4 text-base sm:text-lg text-base-content/70 max-w-2xl font-sans font-light">
      {{ subtitle }}
    </p>

    <!-- Glowing divider accent -->
    <div class="mt-6 flex items-center justify-center gap-2">
      <div class="w-12 h-px bg-linear-to-r from-transparent to-cyan-500/60"></div>
      <div class="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]"></div>
      <div class="w-12 h-px bg-linear-to-l from-transparent to-cyan-500/60"></div>
    </div>
  </div>
</template>
