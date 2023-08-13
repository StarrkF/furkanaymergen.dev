<template>
    <section id="goals" class="min-h-screen bg-base-300 px-6 md:px-20 lg:px-56">
        <h2 class="text-4xl md:text-6xl py-16 md:pt-28 font-mono tracking-widest mx-auto pb-4 md:pb-8 border-b border-accent whitespace-nowrap max-w-min text-accent">{{ $t('goal.title') }}</h2>

        <swiper :modules="[SwiperPagination]" :grabCursor="true" :pagination="true" class="w-full">
            <swiper-slide v-for="goal in $tm('goal.items')" class="bg-center bg-cover">
                <div class="mockup-code my-20 h-60">
                    <pre data-prefix="$" class="text-primary"><code class="lowercase">mkdir ~/{{ $t('goal.title') }}/{{ goal.title.toLowerCase().replace(/\s+/g, '-') }}</code></pre>
                    <pre data-prefix=">" class="text-warning"><code>cd ~/goals/{{ goal.title.toLowerCase().replace(/\s+/g, '-') }}</code></pre>
                    <pre v-for="text in goal.content" data-prefix=">" class="text-secondary"><code>echo <span class="text-accent whitespace-break-spaces">"{{ text }}"</span></code></pre>
                </div>
            </swiper-slide>
        </swiper>

        <div class="mockup-code my-10">
            <pre data-prefix="$" class="text-primary"><code class="lowercase">mkdir ~/{{ $t('goal.title') }}</code></pre>
            <pre data-prefix=">" class="text-warning"><code>ls -la</code></pre>
            <pre v-for="goal in $tm('goal.items')" data-prefix=">" class="text-secondary"><code>drwxr-xr-x@ <span class="text-accent">{{ goal.title.toLowerCase().replace(/\s+/g, '-') }}</span>  </code></pre>
        </div>
    </section>
</template>