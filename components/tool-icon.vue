<script setup>
defineProps({
    title: {
        type: String
    },
})
</script>
<template>
    <div class="group text-primary ease-in-out">
        <div class="transition duration-300 group-hover:text-secondary group-hover:contrast-200 border-b border-primary group-hover:border-secondary pb-5">
            <slot/>
        </div>
        <div class="transition duration-300 group-hover:text-secondary group-hover:contrast-200 w-full justify-center flex font-audiowide font-semibold">
            {{ title }}
        </div>
    </div>
</template>