module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      white : "#FFFFFF",
      bg : "#292929",
      yellow : "#fae246",
      purple : "#af75f0",
      red : "#e85f5f",
      green : "#58e093"
    },
    extend : {
      fontFamily : {
        playfair : ['Playfair Display SC', 'serif'],
        ci : ['Cinzel', 'serif'],
        hand : ['Aguafina Script', 'cursive'],
        pixel : ['VT323', 'monospace']
      }
    }
  },
  plugins: [],
}
