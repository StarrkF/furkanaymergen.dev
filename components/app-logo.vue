<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    size?: 'sm' | 'md' | 'lg' | 'xl'
    showText?: boolean
    showSubtitle?: boolean
    interactive?: boolean
  }>(),
  {
    size: 'md',
    showText: true,
    showSubtitle: true,
    interactive: true
  }
)

const { locale } = useI18n()

const iconSizes = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'w-7 h-7 sm:w-8 sm:h-8'
    case 'lg':
      return 'w-12 h-12 sm:w-14 sm:h-14'
    case 'xl':
      return 'w-16 h-16 sm:w-20 sm:h-20'
    case 'md':
    default:
      return 'w-9 h-9 sm:w-10 sm:h-10'
  }
})

const titleSizes = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'text-xs sm:text-sm'
    case 'lg':
      return 'text-lg sm:text-xl'
    case 'xl':
      return 'text-2xl sm:text-3xl'
    case 'md':
    default:
      return 'text-sm sm:text-base'
  }
})
</script>

<template>
  <div
    class="app-logo-container inline-flex items-center gap-2.5 sm:gap-3 select-none group"
    :class="{ 'cursor-pointer': interactive }"
  >
    <!-- Geometric Animated Emblem -->
    <div
      class="relative flex items-center justify-center rounded-xl sm:rounded-2xl shrink-0 transition-all duration-500 overflow-hidden"
      :class="[
        iconSizes,
        interactive ? 'group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]' : ''
      ]"
      style="background: linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(168, 85, 247, 0.15)); border: 1px solid rgba(56, 189, 248, 0.35);"
    >
      <!-- Background Ambient Glow & Light Ray -->
      <div class="absolute inset-0 bg-radial from-cyan-400/20 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity"></div>
      
      <!-- Rotating Holographic Border Aura -->
      <div class="logo-aura-spin absolute -inset-2 bg-conic from-cyan-500 via-purple-500 to-cyan-500 opacity-30 group-hover:opacity-75 blur-xs transition-opacity duration-500 pointer-events-none"></div>

      <!-- Inner Glass Base -->
      <div class="absolute inset-[1.5px] rounded-[10px] sm:rounded-[14px] bg-base-100/85 backdrop-blur-md z-1"></div>

      <!-- Modern Futuristic SVG Geometric Monogram (M-F-A + Code brackets) -->
      <svg
        class="relative z-10 w-full h-full p-1.5 transition-transform duration-500 group-hover:rotate-3"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <!-- Cyber Cyan Gradient -->
          <linearGradient id="mfaGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#38bdf8" />
            <stop offset="50%" stop-color="#06b6d4" />
            <stop offset="100%" stop-color="#818cf8" />
          </linearGradient>

          <!-- Neon Violet Gradient -->
          <linearGradient id="mfaGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#c084fc" />
            <stop offset="50%" stop-color="#a855f7" />
            <stop offset="100%" stop-color="#38bdf8" />
          </linearGradient>

          <!-- Laser Glow Filter -->
          <filter id="laserGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <!-- Outer Dynamic Tech Hexagon Frame -->
        <polygon
          points="50,6 88,27.5 88,72.5 50,94 12,72.5 12,27.5"
          fill="none"
          stroke="url(#mfaGrad1)"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="logo-hex-path"
          opacity="0.85"
        />

        <!-- Corner HUD Accents -->
        <circle cx="50" cy="6" r="2.5" fill="#38bdf8" filter="url(#laserGlow)" />
        <circle cx="88" cy="27.5" r="2" fill="#818cf8" />
        <circle cx="88" cy="72.5" r="2" fill="#c084fc" />
        <circle cx="50" cy="94" r="2.5" fill="#a855f7" filter="url(#laserGlow)" />
        <circle cx="12" cy="72.5" r="2" fill="#38bdf8" />
        <circle cx="12" cy="27.5" r="2" fill="#06b6d4" />

        <!-- Geometric MFA Monogram Architecture -->
        <!-- 'M' & Left Bracket Structure: 22,72 -> 32,32 -> 50,56 -> 68,32 -> 78,72 -->
        <path
          d="M 24 68 L 34 32 L 50 54 L 66 32 L 76 68"
          stroke="url(#mfaGrad1)"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
          filter="url(#laserGlow)"
          class="logo-m-path"
        />

        <!-- 'A' Apex & Cross Bar Structure (connecting 50,22 to 34,54 and 66,54) -->
        <path
          d="M 50 20 L 50 48"
          stroke="url(#mfaGrad2)"
          stroke-width="4.5"
          stroke-linecap="round"
          class="logo-center-stem"
        />

        <!-- 'F' & 'A' Crossbeam: 36,46 -> 64,46 -->
        <line
          x1="35"
          y1="46"
          x2="65"
          y2="46"
          stroke="url(#mfaGrad2)"
          stroke-width="4"
          stroke-linecap="round"
          class="logo-crossbeam"
        />

        <!-- Pulsing Energy Core Node -->
        <circle
          cx="50"
          cy="50"
          r="3"
          fill="#38bdf8"
          filter="url(#laserGlow)"
          class="logo-core-pulse"
        />
      </svg>
    </div>

    <!-- Accompanying Typographic Brand Mark -->
    <div v-if="showText" class="flex flex-col">
      <div class="flex items-center gap-1.5">
        <span
          class="font-heading font-extrabold tracking-tight text-base-content group-hover:text-cyan-400 transition-colors"
          :class="titleSizes"
        >
          <span class="hidden sm:inline">Furkan Aymergen</span>
          <span class="sm:hidden">Furkan A.</span>
        </span>
        <!-- MFA Monogram Badge -->
        <span class="px-1.5 py-0.2 sm:py-0.5 rounded-md text-[9px] sm:text-[10px] font-mono font-black bg-cyan-500/15 text-cyan-400 border border-cyan-400/30 group-hover:bg-cyan-500/25 group-hover:border-cyan-400/60 transition-all duration-300 shadow-[0_0_8px_rgba(6,182,212,0.2)]">
          MFA
        </span>
      </div>

      <span
        v-if="showSubtitle"
        class="hidden sm:flex text-[10px] font-mono text-cyan-400/90 tracking-wider items-center gap-1.5 font-medium mt-0.5"
      >
        <span class="relative flex h-1.5 w-1.5">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
        </span>
        <span>{{ $t('header.logo_subtitle') }}</span>
      </span>
    </div>
  </div>
</template>

<style scoped>
@keyframes auraSpin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.logo-aura-spin {
  animation: auraSpin 6s linear infinite;
}

/* Hexagon border dash animation */
.logo-hex-path {
  stroke-dasharray: 260;
  stroke-dashoffset: 0;
  animation: dashCycle 8s ease-in-out infinite alternate;
}

@keyframes dashCycle {
  0% {
    stroke-dashoffset: 0;
    opacity: 0.7;
  }
  50% {
    stroke-dashoffset: 130;
    opacity: 1;
  }
  100% {
    stroke-dashoffset: 260;
    opacity: 0.7;
  }
}

.logo-m-path {
  stroke-dasharray: 200;
  stroke-dashoffset: 0;
  animation: mGlow 4s ease-in-out infinite alternate;
}

@keyframes mGlow {
  0% {
    stroke-width: 4.5px;
    filter: drop-shadow(0 0 2px rgba(56, 189, 248, 0.4));
  }
  100% {
    stroke-width: 5.5px;
    filter: drop-shadow(0 0 6px rgba(56, 189, 248, 0.9));
  }
}

.logo-core-pulse {
  animation: corePulse 2s ease-in-out infinite alternate;
}

@keyframes corePulse {
  0% {
    transform: scale(0.85);
    opacity: 0.6;
  }
  100% {
    transform: scale(1.3);
    opacity: 1;
  }
}
</style>
