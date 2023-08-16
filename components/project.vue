<script setup>
const ap = {
    delay:11000,
    pauseOnMouseEnter: true
}

const bp = {
    768: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    1366: {
      slidesPerView: 3,
      spaceBetween: 20
    }
}

</script>

<template>
    <section id="projects" class="min-h-screen bg-base-200 px-6 md:px-20 lg:px-32">
        <section-title>{{ $t('project.title') }}</section-title>
            <h3 class="text-2xl md:text-4xl w-full md:w-1/2 mt-10 md:my-20 text-center mx-auto">{{ $t('project.summary') }}</h3>
            <swiper
                class="w-full overflow-hidden"
                :grabCursor="true"
                effect="coverflow"
                :modules="[SwiperEffectCoverflow, SwiperAutoplay]"
                :slidesPerView=1
                :spaceBetween="10"
                :breakpoints="bp"
                :loop="true"
                :autoplay="ap"
                :centeredSlides="false" >
                <swiper-slide class="group relative inline-block mask mask-squircle drop-shadow-2xl" v-for="i in 6">
                    <img class="absolute block bg-cover w-full h-full group-hover:scale-[1.4] duration-500" src="/images/project-bg.png" :alt="'project' + i" />
                    <div class="absolute flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-base-300 backdrop-blur-md bg-opacity-30 w-full h-full opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100">
                        <h3 class="text-3xl text-slate-50 font-extrabold font-mono">Project {{ i }}</h3>
                    </div>
                </swiper-slide>
            </swiper>

    </section>
</template>

<style scoped>
.swiper-slide {
    @apply
    w-[600px]
    h-[600px]
}
</style>