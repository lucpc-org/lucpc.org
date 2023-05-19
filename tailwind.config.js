/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#48BF84",
          "primary-content": "#DFDFDF",
          "secondary": "#1D9BF0",
          "secondary-content": "#DFDFDF",
          "accent": "#404045",
          "neutral": "#303035",
          "base-100": "#252528",
          "base-200": "#303035",
          "base-300": "#404045",
          "base-content": "#DFDFDF",
          "info": "#3ABFF8",
          "success": "#3DA35D",
          "warning": "#E6B749",
          "error": "#FA646B",
        },
      },
    ],
  },
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1530px",
    },
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', "serif"],
        trajan: ["trajan-pro-3", "serif"],
        sans: ["Inter", "Segoe UI","sans-serif"],
      },
      boxShadow: {
        lg: "0 0px 30px -3px rgba(0, 0, 0, 0.3)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        text_color: "#DFDFDF",
        text_hover: "#ABABB1",
        text_hover2: "#6B6B74",
        background: "#1D1E20",
        background2: "#252528",
        background3: "#303035",
        background4: "#404045",
        green: "#48BF84",
        green_hover: "#3BA872",
        green_white: "#CBEDDC",
        red: "#F93943",
        red_accent: "#FA646B",
        blue: "#1D9BF0",
        blue_hover: "#0E8ADD",
        blue_hover2: "#0B6CAD",
        blue_white: "#BFE3FB",
        shadow: "#0f1715",
        shadowhover: "#0a0f0e",
        accent: "#74A57F",
        accent_hover: "#B0CBB6",
        easy: "#3DA35D",
        medium: "#E6B749",
        hard: "#FF2B56",
        liberty_red: "#B72025",
        liberty_navy: "#0A254E",

        // Purples
        // background: '#2b0430',
        // shadow: '#240329',
        // shadowhover: '#1b011f',

        // background: '#2b0430',
        // shadow: '#240329',
        // shadowhover: '#1b011f',
      },
      borderRadius: {
        "4xl": "2rem",
      },
      animation: {
        check_out: 'check_out .3s ease-in forwards',
      },
      keyframes: {
        check_out: {
          '0%': { 
            opacity: '1',
            transform: 'scale(1)',
          },

          '100%': { 
            opacity: '0',
            transform: 'scale(.3)',
            display: 'none',
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
