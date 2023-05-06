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
        heading: ["livory", "serif"],
        mono: ['JetBrains Mono', "serif"],
        trajan: ["trajan-pro-3", "serif"],
        sans: ["segoe ui", "sans-serif"],
      },
      boxShadow: {
        lg: "0 0px 30px -3px rgba(0, 0, 0, 0.3)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        text_color: "#F5F5F5",
        background: "#1D1E20",
        green: "#048A81",
        green_hover: "#036D66",
        red: "#DA4167",
        red_hover: "#D62F58",
        yellow: "#F5D491",
        yellow_hover: "#F2C976",
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
