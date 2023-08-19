<script setup>
const { tm } = useI18n()
const projects = ref(tm('project.items'))

const project = ref([])

const showDialog = (index) => {
    project.value = projects.value[index]
    document.getElementById('project_modal').showModal()
}

watchEffect(() => {
    projects.value = tm('project.items')
})

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
    <section id="projects" class="min-h-screen px-6 bg-base-200 md:px-20 lg:px-32">
        <section-title>{{ $t('project.title') }}</section-title>
            <h3 data-aos="fade-down" class="w-full mx-auto mt-10 text-2xl text-center font-oswald md:text-4xl md:w-1/2 md:my-20">{{ $t('project.summary') }}</h3>
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
                <swiper-slide data-aos="zoom-out" class="relative inline-block group mask mask-squircle drop-shadow-2xl" v-for="(project, index) in projects" :key="index">
                    <div @click="showDialog(index)" :title="project.title">
                        <img class="absolute block w-full h-full duration-500 bg-cover group-hover:scale-125" src="/images/project-bg.png" :alt="project.title" />
                        <div class="absolute flex items-center justify-center w-full h-full transition-all duration-500 ease-in-out -translate-x-1/2 -translate-y-1/2 opacity-0 bg-opacity-60 top-1/2 left-1/2 bg-base-300 group-hover:opacity-100">
                            <h3 class="font-mono text-3xl font-extrabold text-slate-50">{{ project.title }}</h3>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>

            <dialog id="project_modal" class="modal">
                <form method="dialog" class="bg-opacity-50 bg-base-300 modal-box backdrop-blur-lg shadow-glow shadow-primary">
                    <button class="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
                    <h3 class="text-lg font-bold">{{ project.title }}</h3>
                    <p class="py-4">{{ project.summary }}</p>
                    <p>{{ project.link }}</p>
                </form>
                <form method="dialog" class="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

    </section>
</template>

<style scoped>
.swiper-slide {
    @apply
    w-[600px]
    h-[600px]
}
</style>
