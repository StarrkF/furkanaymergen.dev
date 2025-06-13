<script setup>
const { tm } = useI18n()
const colorMode = useColorMode();
const hero = ref(tm('hero'))
const currentChar = ref('');
const words = ref(hero.value.title)
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeTimeout = null;
const darkModes = ['night', 'dracula', 'synthwave', 'halloween'];

const typeEffect = () => {

  let currentWord = words.value[wordIndex];

  if (!isDeleting && charIndex < currentWord.length) {
    currentChar.value = currentWord.substring(0, charIndex + 1);
    charIndex++;
  } else if (isDeleting && charIndex > 0) {
    currentChar.value = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    isDeleting = !isDeleting;
    wordIndex = !isDeleting ? (wordIndex + 1) % words.value.length : wordIndex;
  }

  typeTimeout = setTimeout(typeEffect, isDeleting ? 200 : 300);

};

onMounted(() => {
  typeEffect();
});

watchEffect(() => {
  clearTimeout(typeTimeout);
  hero.value = tm('hero');
  typeEffect();
  words.value = hero.value.title
});

</script>
<template>
  <section id="home" class="hero relative min-h-screen overflow-x-clip">
    <img class="h-full absolute" alt="M.Furkan Aymergen"
      src="/images/hero-light-bg.jpg">
    <div class="hero-overlay"
        :class="darkModes.includes(colorMode.value) ? 'opacity-80 bg-base-300' : 'opacity-40 bg-base-100'"></div>
        
    
    <div class="hero-content text-neutral-content text-center">
      <div class="text-center hero-content text-neutral-content">

        <div class="max-w-fit">
          <div data-aos="fade-down"
              class="mb-5 flex justify-center text-5xl md:text-8xl min-h-[100px] font-blackops text-base-content">
            <h1>
              {{ currentChar }}
              <span class="animate-blink">|</span>
            </h1>
          </div>
          <h2 data-aos="fade-up" class="my-10  text-3xl md:text-4xl font-light text-base-content font-oswald">
            {{ hero.text }}</h2>
          <div data-aos="zoom-out" class="flex flex-wrap justify-center gap-4">
            <a :href="hero.button.cv.href" :title="hero.button.cv.title" target="_blank"
                class="w-ful transition text-3xl duration-200 shadow-lg sm:w-40 hover:scale-90 btn hover:shadow-xl btn-primary md:btn-lg">{{
                  hero.button.cv.title }}</a>
            <a href="#about" v-smooth-scroll :title="$t('about.title')"
                class="w-full transition duration-200 shadow-lg sm:w-40 btn hover:scale-90 hover:shadow-xl  btn-accent md:btn-lg">{{
                  hero.button.about }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>