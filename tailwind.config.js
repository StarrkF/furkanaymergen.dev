/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  mode: 'jit',
  purge: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      boxShadow: {
        'glow': '0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #f0f, 0 0 40px #f0f',
        'glow-xl': ' 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #f0f, 0 0 80px #f0f',
        'glow-sm': ' 0 0 3px #fff, 0 0 8px #fff, 0 0 12px #fff, 0 0 18px #f0f, 0 0 25px #f0f',
      },
      fontFamily: {
        oswald: "Oswald, sans-serif",
        audiowide: "Audiowide, cursive",
        blackops: "Black Ops One, cursive"
      },
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      'night',
      'dracula',
      'lemonade',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'halloween'
    ],
  },
}
