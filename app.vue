<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const { locale } = useI18n()
const scrollProgress = ref(0)

const handleScroll = () => {
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight
  if (totalHeight > 0) {
    scrollProgress.value = (window.scrollY / totalHeight) * 100
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

const pageTitle = computed(() => {
  return locale.value === 'tr'
    ? 'Furkan Aymergen | Fullstack Web Developer & Yazılım Mühendisi'
    : 'Furkan Aymergen | Fullstack Web Developer & Software Engineer'
})

const pageDescription = computed(() => {
  return locale.value === 'tr'
    ? 'Furkan Aymergen - Bilgisayar Mühendisi ve Fullstack Web Developer. Laravel, Spring Boot, Vue 3, Nuxt 3, Docker ve modern bulut mimarileri uzmanı.'
    : 'Furkan Aymergen - Computer Engineer and Fullstack Web Developer specialized in Laravel, Spring Boot, Vue 3, Nuxt 3, Docker, and modern scalable web architectures.'
})

useHead({
  title: pageTitle,
  meta: [
    { name: 'description', content: pageDescription },
    { name: 'author', content: 'Furkan Aymergen' },
    { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
    { name: 'keywords', content: 'Furkan Aymergen, Fullstack Developer, Yazılım Mühendisi, Web Geliştirici, Laravel Developer, Vue.js Developer, Nuxt 3, Spring Boot, Software Engineer Turkey' },
    { name: 'theme-color', content: '#08090d' },

    // OpenGraph
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDescription },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://furkanaymergen.dev' },
    { property: 'og:image', content: 'https://furkanaymergen.dev/images/mfa-about.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:locale', content: locale.value === 'tr' ? 'tr_TR' : 'en_US' },
    { property: 'og:site_name', content: 'Furkan Aymergen Portfolio' },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: pageTitle },
    { name: 'twitter:description', content: pageDescription },
    { name: 'twitter:image', content: 'https://furkanaymergen.dev/images/mfa-about.png' },
    { name: 'twitter:creator', content: '@StarrkF' }
  ],
  link: [
    { rel: 'canonical', href: 'https://furkanaymergen.dev' },
    { rel: 'alternate', hreflang: 'tr', href: 'https://furkanaymergen.dev' },
    { rel: 'alternate', hreflang: 'en', href: 'https://furkanaymergen.dev' },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://furkanaymergen.dev' },
    { rel: 'icon', type: 'image/png', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: locale.value || 'tr'
  },
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Furkan Aymergen",
        "email": "mailto:faymergen98@gmail.com",
        "url": "https://furkanaymergen.dev",
        "image": "https://furkanaymergen.dev/images/mfa-about.png",
        "sameAs": [
          "https://github.com/StarrkF",
          "https://www.linkedin.com/in/muhammed-furkan-aymergen-25646b174/",
          "https://stackoverflow.com/users/16917642/starrk"
        ],
        "jobTitle": "Fullstack Web Developer & Software Engineer",
        "worksFor": {
          "@type": "Organization",
          "name": "BTK"
        },
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "Selçuk Üniversitesi"
        },
        "knowsAbout": [
          "Laravel",
          "Vue.js",
          "Nuxt.js",
          "Spring Boot",
          "Java",
          "TypeScript",
          "Docker",
          "PostgreSQL",
          "REST APIs",
          "Clean Architecture",
          "Microservices"
        ]
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Furkan Aymergen",
        "url": "https://furkanaymergen.dev",
        "description": "Furkan Aymergen Portfolio & Engineering Showcase",
        "author": {
          "@type": "Person",
          "name": "Furkan Aymergen"
        }
      })
    }
  ]
})
</script>

<template>
  <div class="relative min-h-screen bg-base-100 text-base-content selection:bg-cyan-500 selection:text-slate-950 font-sans transition-colors duration-500">
    <!-- Top Scroll Progress Bar (GPU Accelerated) -->
    <div
      class="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-cyan-400 via-sky-500 to-purple-500 z-999999 transition-transform duration-75 origin-left shadow-[0_0_12px_#38bdf8] will-change-transform"
      :style="{ transform: `scaleX(${scrollProgress / 100})` }"
    ></div>

    <!-- Ambient Interactive Particle Background -->
    <AmbientBackground />

    <!-- Fluid Custom Trailing Cursor -->
    <CustomCursor />

    <!-- Right-Side Floating Animated HUD Scroll Navigator -->
    <ScrollIndicator />

    <!-- Global Toast Alert Provider -->
    <ToastNotification />

    <!-- Main Content Layout -->
    <NuxtLayout>
      <main class="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Experience />
        <Project />
        <Goal />
        <ContactCta />
      </main>
    </NuxtLayout>
  </div>
</template>
