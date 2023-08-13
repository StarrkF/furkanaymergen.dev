<script setup>
const cf = {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1
}

const ap = {
    delay:3000,
    pauseOnMouseEnter: true
}
</script>

<template>
    <section id="projects" class="min-h-screen bg-base-200 px-6 md:px-20 lg:px-32">
        <h2 class="text-4xl md:text-6xl py-16 md:pt-28 font-mono tracking-widest mx-auto pb-4 md:pb-8 border-b border-secondary whitespace-nowrap max-w-min text-secondary">{{ $t('project.title') }}</h2>
            <h3 class="text-2xl md:text-4xl w-full md:w-1/2  my-10 md:my-20 text-center mx-auto">{{ $t('project.summary') }}</h3>
            <swiper
                class="w-full py-40 overflow-hidden"
                :grabCursor="true"
                effect="coverflow"
                :modules="[SwiperEffectCoverflow, SwiperAutoplay]"
                slidesPerView="auto"
                :loop="true"
                :autoplay="ap"
                :centeredSlides="true" 
                :coverflowEffect="cf"
            >
                <swiper-slide class="group relative inline-block mask mask-squircle drop-shadow-2xl" v-for="i in 6">
                    <img class="absolute block bg-cover w-full h-full group-hover:scale-125 group-hover:rotate-6 duration-500" src="/images/project-bg.png" :alt="'project' + i" />
                    <div class="absolute flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 w-full h-full text-white opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100">
                        <h3 class="text-3xl text-white">Project {{ i }}</h3>
                    </div>
                </swiper-slide>
            </swiper>

    </section>
</template>

<style scoped>
.swiper-slide {
    @apply
    w-[200px]
    h-[200px]
    md:w-[300px]
    md:h-[300px]
    lg:w-[400px]
    lg:h-[400px]
    xl:w-[500px]
    xl:h-[500px]
    2xl:w-[650px]
    2xl:h-[650px]
}
</style>