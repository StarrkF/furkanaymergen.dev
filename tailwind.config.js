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
      'halloween',
      'garden',
      'forest',
      'fantasy',
      'black',
      'coffee',
      'winter',
    ],
  },
}
