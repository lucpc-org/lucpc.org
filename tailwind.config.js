/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    // fontFamily: {
      // sans: ['IBM Plex Sans', 'sans-serif'],
      // serif: ['Merriweather', 'serif'],
    // },
    extend: {
      colors: {
        background: '#2b0430',
        shadow: '#240329',
        shadowhover: '#1b011f',
        text: '#e0e9e0'
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}
