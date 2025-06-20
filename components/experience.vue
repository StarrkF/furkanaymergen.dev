<script setup>
const { tm, locale } = useI18n();
const activeTab = ref(1);

const educationData = ref([]);
const workLifeData = ref([]);

const loadAndReverseData = () => {
  educationData.value = [...tm('experience.education')].reverse();
  workLifeData.value = [...tm('experience.work_life')].reverse();
};

onMounted(() => {
  loadAndReverseData();
});

watch(locale, () => {
  loadAndReverseData();
});
</script>

<template>
  <section data-aos="fade-down" id="experiences" class="min-h-max pb-10 px-6 bg-base-100">
    <section-title>{{ $t('experience.title') }}</section-title>
    <div role="tablist" class="tabs justify-center tabs-border max-w-md mx-auto mt-20">
      <div role="tab" class="tab text-lg font-ligh flex-1 hover:cursor-pointer hover:text-primary transition duration-300" :class="{ 'tab-active': activeTab === 1 }" @click="activeTab = 1">{{ $t('experience.work_life_tab') }}</div>
      <div role="tab" class="tab text-lg font-light flex-1 hover:cursor-pointer hover:text-primary transition duration-300" :class="{ 'tab-active': activeTab === 2 }" @click="activeTab = 2">{{ $t('experience.education_tab') }}</div>
    </div>

        <transition name="fade" mode="out-in">
          <div v-if="activeTab === 1" key="work">
            <timeline :data="workLifeData" />
          </div>

          <div v-else-if="activeTab === 2" key="edu">
            <timeline :data="educationData" />
          </div>
        </transition>

  </section>

</template>