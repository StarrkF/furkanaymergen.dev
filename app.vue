<script setup>
const { data: users } = await useFetch('https://jsonplaceholder.typicode.com/users')

</script>

<template>
    <NuxtLayout>
        <Hero/>
    </NuxtLayout>
</template>
