module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "black": "#0B132A",
        "grey": "#4F5665",
        "primary": "#F53838",
      },
      fontFamily: {
        "sans": "Rubik"
      },
      backgroundImage: {
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
