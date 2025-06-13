<script setup>
const { tm } = useI18n()
const activeTab = ref(1);
const educationData = ref(tm('experience.education').reverse())
const workLifeData = ref(tm('experience.work_life').reverse())

watchEffect(() => {
  educationData.value = tm('experience.education')
  workLifeData.value = tm('experience.work_life')
})

</script>

<template>
  <section data-aos="fade-down" id="experiences" class="min-h-max pb-10 px-6 bg-base-100">
    <section-title>{{ $t('experience.title') }}</section-title>
    <div role="tablist" class="tabs justify-center tabs-border max-w-md mx-auto mt-20">
      <div role="tab" class="tab text-lg font-ligh flex-1 hover:cursor-pointer hover:text-primary transition duration-300" :class="{ 'tab-active': activeTab === 1 }" @click="activeTab = 1">{{ $t('experience.work_life_tab') }}</div>
      <div role="tab" class="tab text-lg font-light flex-1 hover:cursor-pointer hover:text-primary transition duration-300" :class="{ 'tab-active': activeTab === 2 }" @click="activeTab = 2">{{ $t('experience.education_tab') }}</div>
    </div>

        <div v-if="activeTab === 1">
          <timeline :data="workLifeData"/>
        </div>

        <div v-if="activeTab === 2">
          <timeline :data="educationData"/>
        </div>

  </section>

</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>