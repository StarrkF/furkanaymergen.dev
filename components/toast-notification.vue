<script setup lang="ts">
import { useToast } from '~/composables/useToast'

const { toastMessage, toastVisible } = useToast()
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transform ease-out duration-300 transition"
      enter-from-class="translate-y-8 opacity-0 scale-95"
      enter-to-class="translate-y-0 opacity-100 scale-100"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="toastVisible"
        class="fixed bottom-8 left-1/2 -translate-x-1/2 z-999999 pointer-events-none"
      >
        <div class="flex items-center gap-3 px-5 py-3 rounded-2xl bg-base-100/95 border border-base-content/10 text-base-content shadow-md backdrop-blur-xl font-heading text-sm sm:text-base font-medium">
          <span class="flex h-2.5 w-2.5 relative">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
          </span>
          <span>{{ toastMessage }}</span>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
