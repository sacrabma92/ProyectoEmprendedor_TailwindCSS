module.exports = {
  content: [
    "./pages/**/*.{html,js}",
    "./*.{html,js,ts,jsx}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#39CFEB",
        primaryDark: "#2893D4",
        customGreen: "#1ED6C7",
        customGreenLight: "#2FF7B7",
        curstomBlue: "#498EF5",
      },
    },
  },

  variants: {
    extend: {
      padding: ['hover'],
    },
  },

  plugins: [],
};
