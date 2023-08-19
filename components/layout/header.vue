<template>
    <div class="navbar z-[99999] font-bold backdrop-blur-md bg-opacity-40 fixed flex justify-between px-0 md:px-16">
        <div class="navbar-start">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </label>
                <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li v-for="item in $tm('app.menu')">
                        <a :href="item.href" class="text-xl font-oswald" v-smooth-scroll>{{ item.name }}</a>
                    </li>
                </ul>
            </div>
            <div class="text-5xl font-thin font-blackops text-primary">
                M.F.A
            </div>
        </div>
        <div class="hidden navbar-center lg:flex">
            <ul class="menu menu-horizontal">
                <li v-for="item in $tm('app.menu')">
                    <a :href="item.href" class="tracking-wider text-base-content font-oswald lg:text-xl lg:mx-2 xl:mx-6 hover:text-primary" v-smooth-scroll>{{ item.name }}</a>
                </li>
            </ul>
        </div>
        <div class="navbar-end">
            <div class="flex items-center gap-2">
                <div class="dropdown dropdown-hover dropdown-left">
                    <label tabindex="0" class="m-1 duration-200 hover:cursor-pointer hover:text-primary">{{ $t('app.language.title') }}</label>
                    <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <div class="avatar" @click="setLocale('tr')">
                                <div class="w-8">
                                    <img src="/images/tr.png" alt="Türkçe" />
                                </div>
                                {{ $t('app.language.tr') }}
                            </div>
                        </li>
                        <li>
                            <div class="avatar"  @click="setLocale('en')">
                                <div class="w-8">
                                    <img src="/images/en.png" alt="English" />
                                </div>
                                {{ $t('app.language.en') }}
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="dropdown dropdown-hover dropdown-left">
                    <label tabindex="0" class="m-1 duration-200 hover:cursor-pointer hover:text-primary">{{ $t('app.theme') }}</label>
                    <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li v-for="theme of themes" :key="theme">
                            <a class="capitalize hover:cursor-pointer" @click="setTheme(theme)">{{ theme }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const colorMode = useColorMode();
const { setLocale } = useI18n()

const setTheme = (theme) => {
    colorMode.preference = theme
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
