<script setup lang="ts">
defineProps<{
  href?: string
  title?: string
}>()
</script>

<template>
  <a
    :href="href || '#'"
    :title="title"
    target="_blank"
    class="relative group/icon flex items-center justify-center w-10 h-10 rounded-2xl glass-panel hover:bg-cyan-500/20 text-base-content/80 hover:text-cyan-400 transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] hover:scale-110 cursor-pointer hover:border-cyan-400/50"
  >
    <div class="w-4 h-4 flex items-center justify-center fill-current">
      <slot />
    </div>

    <!-- Tooltip -->
    <span v-if="title" class="absolute -left-2 -top-8 -translate-x-full px-2.5 py-1 rounded-lg bg-base-200 border border-base-content/15 text-[11px] font-mono text-base-content opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-xl">
      {{ title }}
    </span>
  </a>
</template>
