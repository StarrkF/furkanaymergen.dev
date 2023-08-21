<script setup>
const { locale } = useI18n()
useHead({
  title: 'M.Furkan Aymergen',
  meta: [
    { name: 'description', content: 'M.Furkan Aymergen, Bilgisayar Mühendisi ve Fullstack Web Developer' }
  ],
  htmlAttrs: {
      lang: locale.value
    }
})

</script>

<template>
    <NuxtLayout>
        <Hero/>
        <About/>
        <Goal/>
        <Project/>
        <Tool/>
    </NuxtLayout>
</template>
