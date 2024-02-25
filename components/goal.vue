<template>
    <section id="goals" class="min-h-fit pb-16 px-6 md:px-20 lg:px-56 bg-base-200">
        <section-title>{{ $t('goal.title') }}</section-title>
        <div data-aos="fade-down" class="flex flex-wrap items-center justify-around gap-6 my-20">
          <window-mockup v-for="(item, index) in $tm('goal.items')" :key="index">
            <div class="flex items-center gap-5 mb-6">
              <div v-html="item.icon" class="duration-500 group-hover:text-cyan-400 text-emerald-400"></div>
              <h4 class="font-mono text-2xl font-semibold duration-500 text-center group-hover:text-cyan-400 text-emerald-400">{{ item.title }}</h4>
            </div>
            <div v-html="item.text" class="mb-3 font-normal text-slate-300"></div>
          </window-mockup>
        </div>






    </section>

</template>
<script setup lang="ts">
import WindowMockup from "~/components/mockup-window.vue";
</script>