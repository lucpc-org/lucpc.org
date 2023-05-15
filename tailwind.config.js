/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

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
        sans: ["Segoe UI", "sans-serif"],
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
        red: "#43AA8B",
        actual_red: "#FF375F",
        red_hover: "#D62F58",
        yellow: "#1D9BF0",
        yellow_hover: "#0E88DA",
        yellow_white: "#BFE3FB",
        link: "#1D9BF0",
        shadow: "#0f1715",
        shadowhover: "#0a0f0e",
        accent: "#74A57F",
        accent_hover: "#B0CBB6",
        easy: "#43a047",
        medium: "#FFC01F",
        hard: "#FF375F",
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
    },
  },
  plugins: [],
};
