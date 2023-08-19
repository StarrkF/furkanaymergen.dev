import AOS from 'aos'
import 'aos/dist/aos.css';

const initAOS = () => {
    AOS.init({
      offset: 200,
      duration: 700,
      easing: 'ease-in-sine',
      delay: 200,
      once: true
    });
  };

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(initAOS)
  })
