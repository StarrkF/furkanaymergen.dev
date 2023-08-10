<script setup>
const { data: users } = await useFetch('https://jsonplaceholder.typicode.com/users')


</script>

<template>
    <div>
        <section id="home" class="hero min-h-screen bg-base-100">
            <div class="py-20 px-4 sm:px-6 lg:px-8 text-center">
                <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    Welcome to DaisyUI Hero
                </h1>
                <p class="mt-3 max-w-md mx-auto text-lg sm:text-xl lg:text-2xl">
                    A beautiful and responsive hero section created using DaisyUI.
                </p>
                <div class="mt-10 max-w-sm mx-auto sm:flex sm:justify-center">
                    <a href="#" class="btn btn-primary mb-2 sm:mb-0 sm:mr-2">Get Started</a>
                    <a href="#" class="btn btn-accent">Learn More</a>
                </div>
            </div>
        </section>

        <section id="about" class="hero min-h-screen bg-base-100">
            <div class="py-20 px-4 sm:px-6 lg:px-8 text-center">
                <h1 class="text-4xl text-secondary font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    Welcome to DaisyUI Hero
                </h1>
                <p class="mt-3 max-w-md mx-auto text-lg sm:text-xl lg:text-2xl">
                    A beautiful and responsive hero section created using DaisyUI.
                </p>
                <div class="mt-10 max-w-sm mx-auto sm:flex sm:justify-center">
                    <a href="#" class="btn btn-primary mb-2 sm:mb-0 sm:mr-2">Get Started</a>
                    <a href="#" class="btn btn-accent">Learn More</a>
                </div>
            </div>
        </section>

    </div>
</template>
