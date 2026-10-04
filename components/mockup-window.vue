<script setup lang="ts">
defineProps<{
  index?: number | string
}>()
</script>

<template>
  <div class="h-full rounded-3xl glass-card hover:border-cyan-400/50 transition-all duration-500 p-6 sm:p-8 flex flex-col justify-between group hover:-translate-y-2 relative overflow-hidden shadow-xl">
    
    <!-- Top Index Watermark & Gradient Aura -->
    <div class="absolute -right-4 -top-6 text-7xl sm:text-8xl font-heading font-black text-base-content/5 group-hover:text-cyan-400/10 transition-colors pointer-events-none select-none">
      {{ index }}
    </div>

    <div class="relative z-10">
      <!-- Window Dots -->
      <div class="flex items-center space-x-2 pb-5 border-b border-base-content/10 mb-6">
        <span class="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block shadow-[0_0_6px_#f43f5e]"></span>
        <span class="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block shadow-[0_0_6px_#f59e0b]"></span>
        <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block shadow-[0_0_6px_#10b981]"></span>
      </div>

      <slot />
    </div>

    <!-- Bottom Glow Indicator -->
    <div class="pt-6 mt-6 border-t border-base-content/10 flex items-center justify-between z-10">
      <span class="text-[11px] font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-1.5 font-semibold">
        <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
        <span>Core Value</span>
      </span>
      <span class="text-xs font-mono text-base-content/50">0{{ index }}</span>
    </div>

  </div>
</template>
