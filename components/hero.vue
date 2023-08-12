<script setup></script>
<template>
        <section id="home" class="hero min-h-screen bg-base-100">
                <div class="py-20 px-4 sm:px-6 lg:px-8 text-center">
                    <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                        {{ $t('hero.title') }}
                    </h1>
                    <p class="mt-3 max-w-md mx-auto text-lg sm:text-xl lg:text-2xl">
                        {{ $t('hero.text') }}
                    </p>
                    <div class="mt-10 max-w-sm mx-auto sm:flex sm:justify-center">
                        <a :href="$tm('hero.button.cv.href')" target="_blank" class="btn btn-primary mb-2 sm:mb-0 sm:mr-2">{{ $t('hero.button.cv.title') }}</a>
                        <a href="#about" class="btn btn-accent">{{ $t('hero.button.about') }}</a>
                    </div>
                </div>
            </section>
</template>