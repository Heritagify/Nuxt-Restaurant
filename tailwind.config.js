/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',  // Scan components folder
    './layouts/**/*.vue',             // Scan layouts
    './pages/**/*.vue',               // Scan pages
    './plugins/**/*.{js,ts}',         // Scan plugins
    './app.vue',          
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'], // Add Inter as default sans-serif
      },
    },
  },
  plugins: [],
}

