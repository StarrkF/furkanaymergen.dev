<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount } from 'vue'

const { locale } = useI18n()
const scrollProgress = useState('scroll-progress', () => 0)
let scrollFrame = 0
let scrollHeight = 0
let resizeObserver: ResizeObserver | undefined

const handleScroll = () => {
  if (scrollFrame) return
  scrollFrame = requestAnimationFrame(() => {
    scrollFrame = 0
    scrollProgress.value = scrollHeight > 0 ? Math.min(100, Math.max(0, window.scrollY / scrollHeight * 100)) : 0
  })
}

onMounted(() => {
  resizeObserver = new ResizeObserver(() => {
    scrollHeight = document.documentElement.scrollHeight - window.innerHeight
    handleScroll()
  })
  resizeObserver.observe(document.body)
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  resizeObserver?.disconnect()
  cancelAnimationFrame(scrollFrame)
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

const i18nHead = useLocaleHead({ addSeoAttributes: true, identifierAttribute: 'id' })
const pageUrl = computed(() => `https://furkanaymergen.dev${locale.value === 'en' ? '/en' : '/'}`)

useHead(() => ({
  title: pageTitle.value,
  meta: [
    ...(i18nHead.value.meta || []).map(meta => meta.property === 'og:url' ? { ...meta, content: pageUrl.value } : meta),
    { name: 'description', content: pageDescription.value },
    { name: 'author', content: 'Furkan Aymergen' },
    { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
    { name: 'theme-color', content: '#08090d' },

    // OpenGraph
    { property: 'og:title', content: pageTitle.value },
    { property: 'og:description', content: pageDescription.value },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: 'https://furkanaymergen.dev/images/mfa-about.png' },
    { property: 'og:image:width', content: '600' },
    { property: 'og:image:height', content: '600' },
    { property: 'og:image:alt', content: 'Furkan Aymergen' },
    { property: 'og:site_name', content: 'Furkan Aymergen Portfolio' },

    // Twitter Card
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: pageTitle.value },
    { name: 'twitter:description', content: pageDescription.value },
    { name: 'twitter:image', content: 'https://furkanaymergen.dev/images/mfa-about.png' },
    { name: 'twitter:image:alt', content: 'Furkan Aymergen' },
    { name: 'twitter:creator', content: '@StarrkF' }
  ],
  link: [
    ...(i18nHead.value.link || []).map(link => ({
      ...link,
      href: link.href === 'https://furkanaymergen.dev' ? 'https://furkanaymergen.dev/' : link.href
    })),
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'preload', href: '/fonts/space-grotesk-latin.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
    { rel: 'preload', href: '/fonts/plus-jakarta-sans-latin.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' }
  ],
  htmlAttrs: {
    lang: locale.value || 'tr'
  },
  script: [
    {
      key: 'person-schema',
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://furkanaymergen.dev/#person",
        "name": "Furkan Aymergen",
        "email": "faymergen98@gmail.com",
        "url": "https://furkanaymergen.dev/",
        "description": pageDescription.value,
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
      key: 'website-schema',
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://furkanaymergen.dev/#website",
        "name": "Furkan Aymergen",
        "url": "https://furkanaymergen.dev/",
        "inLanguage": ["tr", "en"],
        "description": "Furkan Aymergen Portfolio & Engineering Showcase",
        "author": {
          "@id": "https://furkanaymergen.dev/#person"
        }
      })
    },
    {
      key: 'profile-schema',
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        '@id': `${pageUrl.value}#profile`,
        url: pageUrl.value,
        name: pageTitle.value,
        description: pageDescription.value,
        inLanguage: locale.value,
        isPartOf: { '@id': 'https://furkanaymergen.dev/#website' },
        mainEntity: { '@id': 'https://furkanaymergen.dev/#person' }
      })
    }
  ]
}))
</script>

<template>
  <div class="relative min-h-screen bg-base-100 text-base-content selection:bg-cyan-500 selection:text-slate-950 font-sans transition-colors duration-500">
    <a class="skip-link" href="#main-content">{{ locale === 'tr' ? 'Ana içeriğe geç' : 'Skip to main content' }}</a>
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
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
