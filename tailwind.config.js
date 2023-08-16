/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
      animation: {
        text: 'text 5s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
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
