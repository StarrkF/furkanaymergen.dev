<template>
    <section id="goals" class="min-h-screen px-6 md:px-20 lg:px-56 bg-base-100">
        <h2
            class="py-16 pb-4 mx-auto font-mono text-4xl tracking-widest border-b md:text-6xl md:pt-28 md:pb-8 border-accent whitespace-nowrap max-w-min text-accent">
            {{ $t('goal.title') }}</h2>

        <div class="flex flex-wrap items-center justify-around gap-6 my-20">
            <div v-for="item in $tm('goal.items')" class="group w-full  duration-[400ms]  shadow-lg md:max-w-sm lg:max-w-md hover:shadow-2xl hover:bg-base-100  hover:scale-[1.02] border-base-300 border-[1px] mockup-window bg-base-300">
                <div class="p-8 rounded-lg bg-base-200 h-min md:h-[400px] lg:h-[350px] ">
                    <div class="flex items-center gap-3 mb-6">
                        <div v-html="item.icon" class="w-8 duration-500 group-hover:text-secondary text-primary"></div>
                        <h4 class="font-mono text-2xl font-semibold duration-500 group-hover:text-secondary text-primary">{{ item.title }}</h4>
                    </div>
                        <div v-html="item.text" class="mb-3 font-normal"></div>
                </div>
            </div>
        </div>
    </section>
    </template>
