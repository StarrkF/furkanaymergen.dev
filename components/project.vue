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
    delay:5000,
    pauseOnMouseEnter: true
}

const bp = {
    1024: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1546: {
      slidesPerView: 3,
      spaceBetween: 60
    }
}

</script>

<template>
    <section id="projects" class="min-h-screen px-6 bg-base-200 md:px-20 lg:px-32">
        <section-title>{{ $t('project.title') }}</section-title>
            <h3 data-aos="fade-down" class="w-full mx-auto mt-10 text-2xl text-center font-oswald md:text-4xl md:w-1/2 md:my-20">{{ $t('project.summary') }}</h3>
            <swiper
                data-aos="zoom-in"
                class="w-full overflow-hidden"
                :grabCursor="true"
                effect="coverflow"
                :modules="[SwiperEffectCoverflow, SwiperAutoplay]"
                :slidesPerView=1
                :breakpoints="bp"
                :loop="true"
                :autoplay="ap">
                <swiper-slide  class="relative inline-block group mask mask-squircle drop-shadow-2xl" v-for="(project, index) in projects" :key="index">
                    <div @click="showDialog(index)" :title="project.title">
                        <img class="absolute block w-full h-full duration-500 bg-cover group-hover:scale-125" width="500" height="500" src="/images/project-bg.png" :alt="project.title" />
                        <div class="absolute flex items-center justify-center w-full h-full transition-all duration-500 ease-in-out -translate-x-1/2 -translate-y-1/2 opacity-0 bg-opacity-60 top-1/2 left-1/2 bg-base-300 group-hover:opacity-100">
                            <h3 class="font-mono text-3xl font-extrabold text-base-content">{{ project.title }}</h3>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>

            <dialog id="project_modal" class="modal">
                <form method="dialog" class="bg-opacity-50 bg-base-300 modal-box backdrop-blur-lg shadow-glow shadow-base-content">
                    <button class="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
                    <h3 class="text-lg font-bold text-center">{{ project.title }}</h3>
                    <p class="py-4">{{ project.summary }}</p>
                    <div class="flex justify-around">
                        <a v-if="project.source_code && !project.source_code.includes('#')" class="btn btn-primary" :href="project.source_code" :title="projects.title" target="_blank">{{ $t('project.button.source') }}</a>
                        <a v-if="project.link && !project.link.includes('#')" class="btn btn-accent" :href="project.link" :title="projects.title" target="_blank">{{ $t('project.button.preview') }}</a>
                    </div>
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
    w-[500px]
    h-[500px]
}
</style>
