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
    <a :href="href" :title="title" target="_blank" class="flex items-center justify-center w-4 h-4 fill-base-content rounded-full sm:w-6 sm:h-6 hover:fill-primary transition duration-300 hover:scale-110">
        <slot/>
    </a>
</template>
