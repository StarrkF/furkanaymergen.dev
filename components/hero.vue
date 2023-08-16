<script setup></script>
<template>
    <section id="home" class="hero min-h-screen bg-gradient-to-br from-primary  via-secondary to-accent contrast-125">
        <div class="hero-content text-center text-neutral-content">
            <div class="max-w-2xl">
                <h1 class="mb-5  text-5xl md:text-7xl font-bold text-base-content">
                    {{ $t('hero.title') }}
                </h1>
                <p class="mb-5 text-3xl text-base-content">{{ $t('hero.text') }}</p>
                <div class="flex gap-4 justify-center">
                    <button class="btn shadow-xl hover:shadow-glow hover:shadow-primary-focus w-36 btn-primary text-3xl backdrop-blur-2xl md:btn-lg">{{ $t('hero.button.cv.title') }}</button>
                    <button class="btn shadow-xl hover:shadow-glow hover:shadow-accent-focus w-36 btn-accent backdrop-blur-2xl md:btn-lg">{{ $t('hero.button.about')}}</button>
                </div>
            </div>
        </div>
    </section>
</template>