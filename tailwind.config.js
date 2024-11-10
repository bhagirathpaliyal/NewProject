/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a243f', 
        secondary: '#f4b50e',
        accent: '',
        neutral: '', 
      },
      backgroundImage: {
        'call-bg': "url('/public/assets/background_04.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}