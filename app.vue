<script setup>

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

<style>

::-webkit-scrollbar {
  @apply
  w-2

}

::-webkit-scrollbar-track {
  @apply
  bg-slate-700

}

::-webkit-scrollbar-thumb {
  @apply
  bg-black
  rounded-xl
  hover:bg-slate-800



}

</style>
