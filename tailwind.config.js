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
        // Greens
        background: '#141c1a',
        shadow: '#0f1715',
        shadowhover: '#0a0f0e',

        // Purples
        // background: '#2b0430',
        // shadow: '#240329',
        // shadowhover: '#1b011f', 

        // background: '#2b0430',
        // shadow: '#240329',
        // shadowhover: '#1b011f',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}
