<script setup lang="ts">
defineProps<{
  index?: number | string
}>()
</script>

<template>
  <div class="h-full rounded-3xl glass-card hover:border-base-content/20 transition-all duration-500 p-6 sm:p-8 flex flex-col justify-between group hover:-translate-y-2 relative overflow-hidden shadow-md">
    
    <!-- Top Index Watermark & Gradient Aura -->
    <div class="absolute -right-4 -top-6 text-7xl sm:text-8xl font-heading font-black text-base-content/5 group-hover:text-base-content/10 transition-colors pointer-events-none select-none">
      {{ index }}
    </div>

    <div class="relative z-10">
      <!-- Window Dots -->
      <div class="flex items-center space-x-2 pb-5 border-b border-base-content/10 mb-6">
        <span class="w-2.5 h-2.5 rounded-full bg-base-content/30 inline-block"></span>
        <span class="w-2.5 h-2.5 rounded-full bg-base-content/20 inline-block"></span>
        <span class="w-2.5 h-2.5 rounded-full bg-base-content/10 inline-block"></span>
      </div>

      <slot />
    </div>

    <!-- Bottom Glow Indicator -->
    <div class="pt-6 mt-6 border-t border-base-content/10 flex items-center justify-between z-10">
      <span class="text-[11px] font-mono text-base-content/70 uppercase tracking-widest flex items-center gap-1.5 font-semibold">
        <span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
        <span>Core Value</span>
      </span>
      <span class="text-xs font-mono text-base-content/50">0{{ index }}</span>
    </div>

  </div>
</template>
