<script setup lang="ts">
defineProps<{
  title?: string
  url?: string
}>()
</script>

<template>
  <div class="rounded-3xl glass-card hover:border-base-content/20 shadow-md transition-all duration-500 overflow-hidden flex flex-col h-full group">
    
    <!-- Browser Top Bar -->
    <div class="px-5 py-3.5 bg-base-200/80 border-b border-base-content/10 flex items-center justify-between gap-3 shrink-0 backdrop-blur-xl">
      <div class="flex items-center space-x-2">
        <span class="w-2.5 h-2.5 rounded-full bg-base-content/30 inline-block"></span>
        <span class="w-2.5 h-2.5 rounded-full bg-base-content/20 inline-block"></span>
        <span class="w-2.5 h-2.5 rounded-full bg-base-content/10 inline-block"></span>
      </div>

      <div class="flex-1 max-w-xs px-3 py-1 rounded-full bg-base-100/80 border border-base-content/10 text-[11px] font-mono text-base-content/60 text-center truncate flex items-center justify-center gap-1.5">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-base-content/60 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
        <span class="truncate">{{ title || 'project.dev' }}</span>
      </div>

      <div class="w-8 flex justify-end">
        <span class="w-2 h-2 rounded-full bg-primary/60 group-hover:bg-primary transition-colors"></span>
      </div>
    </div>

    <!-- Main Body Area -->
    <div class="p-6 sm:p-8 flex-1 flex flex-col justify-between">
      <slot />
    </div>

    <!-- Footer Action Bar -->
    <div class="px-6 py-4 bg-base-200/50 border-t border-base-content/10 flex items-center justify-between gap-3 shrink-0">
      <slot name="footer" />
    </div>

  </div>
</template>
