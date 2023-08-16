<template>
    <section id="about" class="min-h-screen bg-base-200 px-6">
        <section-title>{{ $t('about.title') }}</section-title>
            <div class="flex flex-col md:flex-row mt-10 md:mt-20 items-center justify-center space-x-8 space-y-8 grayscale hover:grayscale-0 duration-500">
                <img src="/images/about.png" class="max-w-xs md:max-w-xl mask mask-hexagon" />
                <div class="text-lg md:text-2xl space-y-10 max-w-sm md:max-w-sm lg:max-w-2xl" v-html="$tm('about.text')"/>
            </div>
    </section>
</template>