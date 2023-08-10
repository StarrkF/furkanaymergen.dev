<template>
    <div class="navbar bg-base-100  md:text-lg font-bold backdrop-blur-md bg-opacity-50 fixed">
        <div class="navbar-start">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </label>
                <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                </ul>
            </div>
            <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
                <li>
                    <a href="#home" v-smooth-scroll>Home</a>
                </li>
                <li>
                    <a href="#about" v-smooth-scroll>About</a>
                </li>
            </ul>
        </div>
        <div class="navbar-end">
            <div class="flex items-center gap-2">
                <select class="select select-sm select-primary w-full bg-base-200" v-model="colorMode.preference">
                    <option disabled selected>Theme</option>
                    <option v-for="theme of themes" :key="theme">{{ theme }}</option>
                </select>
            </div>
        </div>
    </div>
</template>
<script setup>
const colorMode = useColorMode();
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
    'garden',
    'forest',
    'fantasy',
    'black',
    'coffee',
    'winter',
];
</script>
