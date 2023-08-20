<script setup>
import { Typed } from "@duskmoon/vue3-typed-js";
const { tm } = useI18n()
const hero = ref(tm('hero'))


const options = ref({
    strings: hero.value.title,
    loop: true,
    typeSpeed: 80,
    showCursor: false,
    backSpeed:40,
});

watchEffect(() => {
    hero.value = tm('hero')
    options.value.strings = hero.value.title
})

</script>
<template>
    <section id="home" class="min-h-screen hero bg-gradient-to-br from-base-300 via-secondary to-accent contrast-125">
        <div class="text-center hero-content text-neutral-content">
            <div class="max-w-2xl">
                <div data-aos="fade-down" class="mb-5 text-5xl md:text-6xl h-[70px] font-blackops text-base-content">
                    <Typed :options="options">
                        <h1 class="typing"></h1>
                    </Typed>
                </div>
                <h3 data-aos="fade-up" class="mb-5 text-3xl font-light text-base-content font-oswald">{{ hero.text }}</h3>
                <div data-aos="zoom-out" class="flex flex-wrap justify-center gap-4">
                    <button class="w-full text-3xl duration-200 shadow-xl sm:w-40 hover:scale-90 btn hover:shadow-glow hover:shadow-primary-focus btn-primary md:btn-lg">{{ hero.button.cv.title }}</button>
                    <button class="w-full duration-200 shadow-xl sm:w-40 btn hover:scale-90 hover:shadow-glow hover:shadow-accent-focus btn-accent md:btn-lg">{{ hero.button.about }}</button>
                </div>
            </div>
        </div>
        <a href="#about" v-smooth-scroll class="flex-col mt-[450px] md:mt-[600px] items-center mx-auto animate-bounce hover:cursor-pointer">
            <div class="w-5 h-5 transform rotate-45 border-b-4 border-r-4 md:w-8 md:h-8 border-base-content"></div>
            <div class="w-5 h-5 transform rotate-45 border-b-4 border-r-4 md:w-8 md:h-8 border-base-content"></div>
        </a>
    </section>
</template>
