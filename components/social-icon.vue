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
    <a :href="href" :title="title" target="_blank" class="flex items-center justify-center w-5 h-5 fill-base-content rounded-full sm:w-8 sm:h-8 hover:fill-primary transition duration-300 hover:scale-110">
        <slot/>
    </a>
</template>
