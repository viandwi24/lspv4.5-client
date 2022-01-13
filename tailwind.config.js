module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './composables/**/*.{js,ts}',
    './app.vue',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '90rem',
      }
    },
  },
  plugins: [],
}
