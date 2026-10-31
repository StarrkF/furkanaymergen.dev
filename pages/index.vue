<script setup lang="ts">
definePageMeta({ pageTransition: false })
</script>

<template>
  <main id="main-content" tabindex="-1" class="relative z-10 flex flex-col">
    <Hero />
    <LazyAbout :hydrate-on-visible="{ rootMargin: '400px' }" />
    <LazyExperience :hydrate-on-visible="{ rootMargin: '400px' }" />
    <LazyProject :hydrate-on-visible="{ rootMargin: '400px' }" />
    <LazyGoal :hydrate-on-visible="{ rootMargin: '400px' }" />
    <LazyContactCta :hydrate-on-visible="{ rootMargin: '400px' }" />
  </main>
</template>