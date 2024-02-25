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
           class="min-h-screen pb-10 px-6 bg-gradient-to-br from-base-200 via-base-300 to-base-300 md:px-20 lg:px-32">
    <section-title>{{ $t('project.title') }}</section-title>
    <h3 data-aos="fade-down"
        class="w-full mx-auto mt-10 text-2xl text-center font-oswald md:text-4xl md:w-1/2 md:my-20">
      {{ $t('project.summary') }}</h3>
    <swiper
        data-aos="zoom-in"
        class="w-full overflow-hidden"
        :grabCursor="true"
        :slidesPerView=1
        :modules="[SwiperScrollbar]"
        :breakpoints="breakpoints"
        :scrollbar="true"
    >
      <swiper-slide v-for="(project, index) in projects" :key="index">
        <mockup-browser :title="project.title">
          <template #header>
            <a role="button" v-if="project.source_code && !project.source_code.includes('#')"
               class="btn btn-sm btn-outline text-xs" :href="project.source_code" :title="projects.title"
               target="_blank">{{ $t('project.button.source') }}</a>
            <a role="button" v-if="project.link && !project.link.includes('#')" class="btn btn-sm btn-outline text-xs"
               :href="project.link" :title="projects.title" target="_blank">{{ $t('project.button.preview') }}</a>
          </template>
          <template #body>
            <div
                class="flex justify-center px-6 py-8 md:text-lg font-light italic xl:h-60 bg-base-100 hover:bg-base-200 duration-300">
              {{ project.summary }}
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

</style>
