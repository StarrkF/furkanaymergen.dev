<script setup>
defineProps({
    title: {
        type: String
    },
})
</script>
<template>
    <div class="group text-base-content ease-in-out flex flex-col justify-center items-center">
        <div class="transition duration-300 group-hover:text-primary w-22  border-b border-base-content drop-shadow-lg/25 group-hover:border-primary hover:drop-shadow-primary hover:drop-shadow-lg/75 pb-2">
            <slot/>
        </div>
        <div class="transition duration-300 group-hover:text-primary w-full justify-center text-xs sm:text-sm flex font-mono font-semibold">
            {{ title }}
        </div>
    </div>
</template>