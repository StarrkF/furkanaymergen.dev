<template>
    <section id="about" class="min-h-screen bg-base-200 px-6">
        <h2 class="text-4xl md:text-6xl py-16 md:pt-28 font-mono tracking-widest mx-auto pb-4 md:pb-8 border-b border-primary whitespace-nowrap max-w-min text-primary">{{ $t('about.title') }}</h2>
            <div class="flex flex-col md:flex-row mt-10 md:mt-20 items-center justify-center space-x-8 space-y-8 grayscale hover:grayscale-0 duration-500">
                <img src="/images/about.png" class="max-w-xs md:max-w-xl mask mask-hexagon" />
                <div class="text-lg md:text-2xl space-y-10 max-w-sm md:max-w-sm lg:max-w-2xl" v-html="$tm('about.text')"/>
            </div>
    </section>
</template>