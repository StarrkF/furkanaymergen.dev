<script setup>
const {tm} = useI18n()
const projects = ref(tm('project.items'))

watchEffect(() => {
  projects.value = tm('project.items')
})

const breakpoints = {
  1300: {
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

  <section id="projects"
           class="min-h-screen pb-10 px-6 bg-linear-to-br from-base-200 via-base-300 to-base-300 md:px-20 lg:px-32">
    <section-title>{{ $t('project.title') }}</section-title>
    <h3 data-aos="fade-down"
        class="w-full mx-auto mt-10 text-2xl text-center font-oswald md:text-4xl md:w-1/2 md:my-20">
      {{ $t('project.summary') }}</h3>
    <swiper
        data-aos="zoom-in"
        class="w-full overflow-hidden"
        :grabCursor="true"
        :slidesPerView=1
        :navigation="true"
        :breakpoints="breakpoints"
        :modules="[SwiperNavigation]"
    >
      <swiper-slide v-for="(project, index) in projects" :key="index">
        <mockup-browser :title="project.title">
            <div
                class="p-4 md:text-lg font-light italic h-52 overflow-y-auto bg-base-100 hover:bg-base-200 transition duration-300">

              <p>{{ project.summary }}</p>
            </div>
          <template #footer>
            <div class="flex justify-evenly w-full">
              <a role="button" v-if="project.source_code && !project.source_code.includes('#')"
                 class="btn btn-sm btn-outline btn-primary text-xs w-28" :href="project.source_code" :title="projects.title"
                 target="_blank">{{ $t('project.button.source') }}</a>
              <a role="button" v-if="project.link && !project.link.includes('#')" class="btn btn-sm btn-primary btn-outline w-28 text-xs"
                 :href="project.link" :title="projects.title" target="_blank">{{ $t('project.button.preview') }}</a>
            </div>
          </template>
        </mockup-browser>
      </swiper-slide>
    </swiper>
  </section>
</template>

<style scoped>
.swiper-slide {
  @apply
  h-[350px]
}

.swiper-button-prev, .swiper-button-next {
  @apply
  text-primary
}

</style>
