<script setup>
const colorMode = useColorMode();
const { setLocale } = useI18n()

const setTheme = (theme) => {
    colorMode.preference = theme
}

const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
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
    <div class="navbar z-[99999] font-bold backdrop-blur-md bg-opacity-40 fixed flex justify-between px-4 md:px-16">
        <div class="navbar-start">
            <div @click="scrollTop" class="hover:cursor-pointer text-5xl font-thin font-blackops text-primary">
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

                <div class="drawer drawer-end">
                    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                    <div class="drawer-content">
                        <label for="my-drawer" class="btn py-0 btn-ghost lg:hidden drawer-button">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>    
                        </label>
                    </div> 
                    <div class="drawer-side">
                        <label for="my-drawer" class="drawer-overlay"></label>
                        <ul class="menu p-4 w-1/2 md:w-1/3 h-full bg-base-200 text-base-content">
                            <li v-for="item in $tm('app.menu')">
                                <a :href="item.href" class="text-xl font-oswald" v-smooth-scroll>{{ item.name }}</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
