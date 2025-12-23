/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': '#2F5233',
        'soft-beige': '#F1F8E9',
        'earthy-brown': '#5D4E37',
        'sunshine-yellow': '#FFD54F',
      },
      fontFamily: {
        'sans': ['Inter', 'Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'serif': ['Merriweather', 'Playfair Display', 'ui-serif', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
