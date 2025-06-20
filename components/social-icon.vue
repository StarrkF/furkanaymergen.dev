<script setup>
defineProps({
    href: {
        type: String,
        default: '#'
    },
    title: {
        type: String
    }
})

</script>
<template>
    <a :href="href" :title="title" target="_blank" class="transition duration-300 flex items-center justify-center w-4 h-4 fill-base-content rounded-full sm:w-6 sm:h-6 hover:fill-primary hover:scale-125">
        <slot/>
    </a>
</template>
