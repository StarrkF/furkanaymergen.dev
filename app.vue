<script setup>
const {locale} = useI18n()
useHead({
  title: 'Furkan Aymergen',
  meta: [
    { name: 'description', content: 'Furkan Aymergen, Bilgisayar Mühendisi ve Fullstack Web Developer' },
    { name: 'author', content: 'Furkan Aymergen' },
    { name: 'robots', content: 'index, follow' },
    { name: 'keywords', content: 'Furkan Aymergen, Fullstack Developer, Yazılım Mühendisi, Web Geliştirici' },

    { property: 'og:title', content: 'Furkan Aymergen' },
    { property: 'og:description', content: 'Bilgisayar Mühendisi ve Fullstack Web Developer' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://furkanaymergen.dev' },
    { property: 'og:image', content: 'https://furkanaymergen.dev/images/mfa-about.png' },

  ],
  link: [
    { rel: 'canonical', href: 'https://furkanaymergen.dev' }, // SEO açısından önemli
    { rel: 'icon', type: 'image/png', href: '/favicon.ico' } // favicon
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
          "https://www.linkedin.com/in/muhammed-furkan-aymergen-25646b174/" 
        ],
        "jobTitle": "Fullstack Web Developer",
        "worksFor": {
          "@type": "Organization",
          "name": "BTK"
        },
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "Selçuk Üniversitesi"
        }
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Furkan Aymergen",
        "url": "https://furkanaymergen.dev",
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
  <NuxtLayout>
    <Hero/>
    <About/>
    <Experience/>
    <Project/>
    <Goal/>
    <!-- <Tool/> -->
  </NuxtLayout>
</template>
