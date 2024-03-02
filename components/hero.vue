<script setup>
const { tm } = useI18n()
const hero = ref(tm('hero'))
const currentChar = ref('');
const words = ref(hero.value.title)
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeTimeout = null;

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
  words.value =  hero.value.title
});

</script>
<template>
  <section id="home" class="hero min-h-screen overflow-x-clip">
    <svg  class="h-full" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
      <rect width="1920" height="1080" class="fill-base-300" />
      <path class="fill-primary" d="M 0,1080 C 0,1080 0,180 0,180 C 75.72820512820513,188.2871794871795 151.45641025641027,196.57435897435897 264,199 C 376.54358974358973,201.42564102564103 525.9025641025642,197.9897435897436 660,184 C 794.0974358974358,170.0102564102564 912.9333333333332,145.46666666666667 1016,128 C 1119.0666666666668,110.53333333333333 1206.3641025641027,100.14358974358973 1304,120 C 1401.6358974358973,139.85641025641027 1509.6102564102564,189.95897435897436 1614,205 C 1718.3897435897436,220.04102564102564 1819.1948717948717,200.0205128205128 1920,180 C 1920,180 1920,1080 1920,1080 Z"  opacity="0.09999999999999999" />
      <path class="fill-primary" d="M 0,1080 C 0,1080 0,360 0,360 C 122.6820512820513,392.0769230769231 245.3641025641026,424.15384615384613 363,404 C 480.6358974358974,383.84615384615387 593.2256410256409,311.46153846153845 685,307 C 776.7743589743591,302.53846153846155 847.7333333333333,365.99999999999994 943,375 C 1038.2666666666667,384.00000000000006 1157.8410256410257,338.53846153846155 1262,335 C 1366.1589743589743,331.46153846153845 1454.9025641025642,369.8461538461538 1562,381 C 1669.0974358974358,392.1538461538462 1794.548717948718,376.0769230769231 1920,360 C 1920,360 1920,1080 1920,1080 Z"  opacity="0.19999999999999998" />
      <path class="fill-primary" d="M 0,1080 C 0,1080 0,540 0,540 C 117.00512820512819,572.4153846153846 234.01025641025637,604.8307692307692 349,587 C 463.9897435897436,569.1692307692308 576.9641025641026,501.0923076923077 669,480 C 761.0358974358974,458.9076923076923 832.1333333333334,484.79999999999995 929,522 C 1025.8666666666666,559.2 1148.502564102564,607.7076923076924 1275,591 C 1401.497435897436,574.2923076923076 1531.8564102564103,492.3692307692308 1640,473 C 1748.1435897435897,453.6307692307692 1834.0717948717947,496.8153846153846 1920,540 C 1920,540 1920,1080 1920,1080 Z"  opacity="0.3" />
      <path class="fill-primary" d="M 0,1080 C 0,1080 0,720 0,720 C 116.94871794871796,727.8205128205128 233.8974358974359,735.6410256410256 334,734 C 434.1025641025641,732.3589743589744 517.3589743589744,721.2564102564102 603,719 C 688.6410256410256,716.7435897435898 776.6666666666666,723.3333333333334 900,715 C 1023.3333333333334,706.6666666666666 1181.974358974359,683.4102564102564 1296,685 C 1410.025641025641,686.5897435897436 1479.4358974358975,713.0256410256411 1576,723 C 1672.5641025641025,732.9743589743589 1796.2820512820513,726.4871794871794 1920,720 C 1920,720 1920,1080 1920,1080 Z"  opacity="0.39999999999999997" />
      <path class="fill-primary" d="M 0,1080 C 0,1080 0,900 0,900 C 128.44871794871796,917.2461538461539 256.8974358974359,934.4923076923077 355,947 C 453.1025641025641,959.5076923076923 520.8589743589744,967.2769230769231 630,950 C 739.1410256410256,932.7230769230769 889.6666666666667,890.4 1003,879 C 1116.3333333333333,867.6 1192.474358974359,887.1230769230767 1281,880 C 1369.525641025641,872.8769230769233 1470.4358974358975,839.1076923076923 1579,838 C 1687.5641025641025,836.8923076923077 1803.7820512820513,868.4461538461538 1920,900 C 1920,900 1920,1080 1920,1080 Z"  opacity="0.49999999999999994" />
    </svg>
    <div class="hero-overlay bg-opacity-60 magicpattern"></div>
    <div class="text-center hero-content text-neutral-content">

      <div class="max-w-fit">
        <div data-aos="fade-down" class="mb-5 flex justify-center text-5xl md:text-8xl min-h-[100px] font-blackops text-base-content">
          <h1>
            {{ currentChar }}
            <span class="animate-blink">|</span>
          </h1>
        </div>
        <h2 data-aos="fade-up" class="my-10  text-3xl md:text-4xl font-light text-base-content font-oswald">{{ hero.text }}</h2>
        <div data-aos="zoom-out" class="flex flex-wrap justify-center gap-4">
          <a :href="hero.button.cv.href" :title="hero.button.cv.title" target="_blank" class="w-full text-3xl duration-200 shadow-lg sm:w-40 hover:scale-90 btn hover:shadow-xl btn-primary md:btn-lg">{{ hero.button.cv.title }}</a>
          <a href="#about" v-smooth-scroll :title="$t('about.title')" class="w-full duration-200 shadow-lg sm:w-40 btn hover:scale-90 hover:shadow-xl  btn-accent md:btn-lg">{{ hero.button.about }}</a>
        </div>
      </div>
    </div>
    <a href="#about" title="about" v-smooth-scroll class="flex-col mt-[450px] md:mt-[600px] items-center mx-auto animate-bounce hover:cursor-pointer">
      <div class="w-5 h-5 transform rotate-45 border-b-4 border-r-4 md:w-8 md:h-8 border-base-content"></div>
      <div class="w-5 h-5 transform rotate-45 border-b-4 border-r-4 md:w-8 md:h-8 border-base-content"></div>
    </a>
  </section>
</template>