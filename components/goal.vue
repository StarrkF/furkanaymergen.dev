<template>
    <section id="goals" class="min-h-fit pb-16 px-6 md:px-20 lg:px-56 bg-base-200">
        <section-title>{{ $t('goal.title') }}</section-title>
        <div data-aos="fade-down" class="flex flex-wrap items-center justify-around gap-6 my-20">
            <div v-for="item in $tm('goal.items')" class="group w-full  duration-[400ms]  shadow-lg md:max-w-sm lg:max-w-md hover:shadow-2xl hover:bg-neutral hover:scale-[1.02] border-base-300 border-[1px] mockup-window bg-base-300">
                <div class="p-8 rounded-lg bg-base-200 h-min md:h-[400px] lg:h-[420px] ">
                    <div class="flex items-center gap-5 mb-6">
                        <div v-html="item.icon" class="duration-500 group-hover:text-secondary text-primary"></div>
                        <h4 class="font-mono text-2xl font-semibold duration-500 group-hover:text-secondary text-primary">{{ item.title }}</h4>
                    </div>
                        <div v-html="item.text" class="mb-3 font-normal"></div>
                </div>
            </div>
        </div>
    </section>
</template>
