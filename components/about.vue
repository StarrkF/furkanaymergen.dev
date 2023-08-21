<template>
    <section id="about" class="min-h-screen px-6 bg-base-200">
        <section-title>{{ $t('about.title') }}</section-title>
            <div class="flex flex-col items-center justify-center pb-10 space-x-8 space-y-8 duration-500 md:flex-row md:mt-20 grayscale hover:grayscale-0">
                <img  data-aos="zoom-in" src="/images/about2.png" alt="M.Furkan Aymergen" class="max-w-full md:w-1/2 lg:max-w-xl mask mask-hexagon" />
                <div data-aos="fade-down" class="max-w-md space-y-10 text-lg md:w-1/2 md:max-w-sm lg:max-w-2xl" v-html="$tm('about.text')"/>
            </div>
    </section>
</template>
