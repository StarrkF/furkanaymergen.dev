<script setup>
const colorMode = useColorMode();
const {setLocale} = useI18n()

const setTheme = (theme) => {
  colorMode.preference = theme
}

const scrollTop = () => {
  window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
}

const themes = [
  'night',
  'dracula',
  'lemonade',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'halloween',
];
</script>
<template>
  <div class="navbar z-99999 font-bold backdrop-blur-md bg-opacity-40 fixed flex justify-between px-4 md:px-16">
    <div class="navbar-start">
      <div @click="scrollTop" class="text-5xl font-thin hover:cursor-pointer font-blackops text-primary">
        M.F.A
      </div>
    </div>

    <div class="hidden navbar-center lg:flex">
      <ul class="menu menu-horizontal">
        <li v-for="item in $tm('app.menu')">
          <a :href="item.href"
             class="tracking-wider text-base-content font-oswald lg:text-xl lg:mx-2 xl:mx-6 hover:text-primary"
             v-smooth-scroll>{{ item.name }}</a>
        </li>
      </ul>
    </div>

    <div class="navbar-end">
      <div class="flex items-center gap-2">
        <label class="swap text-primary">
          <input type="checkbox"/>
          <div class="swap-off flex items-center gap-1">
            <div class="w-10 hover:cursor-pointer" @click="setLocale('tr')">EN</div>
          </div>
          <div class="swap-on flex items-center gap-1">
            <div class="w-10 hover:cursor-pointer" @click="setLocale('en')">TR</div>
          </div>
        </label>

        <div class="dropdown dropdown-end dropdown-">
          <label tabindex="0" class="m-1 transition duration-200 hover:cursor-pointer hover:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-7 h-7 stroke-current text-primary hover:text-accent transition duration-300"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>

          </label>
          <ul tabindex="0" class="dropdown-content z-1 menu p-2 shadow-lg bg-base-100 rounded-box w-52 glass">
            <li v-for="theme of themes" :key="theme">
              <div class="capitalize hover:cursor-pointer backdrop-blur-xl" @click="setTheme(theme)">{{ theme }}</div>
            </li>
          </ul>
        </div>


        <div class="drawer drawer-end">
          <input id="my-drawer" type="checkbox" class="drawer-toggle"/>
          <div class="drawer-content">
            <label for="my-drawer" class="py-0 btn btn-ghost lg:hidden drawer-button">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"/>
              </svg>
            </label>
          </div>
          <div class="drawer-side">
            <label for="my-drawer" class="drawer-overlay"></label>
            <ul class="w-1/2 h-full p-4 menu md:w-1/3 bg-base-200 text-base-content">
              <li v-for="item in $tm('app.menu')">
                <a :href="item.href" :alt="item.name" class="text-xl font-oswald" v-smooth-scroll>{{ item.name }}</a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
