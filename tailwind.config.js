
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
      green : "#58e093",
      white_gray : "#9c9898"
    },
    extend : {
      fontFamily : {
        playfair : ['Playfair Display SC', 'serif'],
        ci : ['Cinzel', 'serif'],
        hand : ['Aguafina Script', 'cursive'],
        pixel : ['VT323', 'monospace'],
        quiksand : ['Quicksand', "sans-serif"],
        josefin : ['Josefin Sans', "sans-serif"]
      }
    },
    screens : {
      mobile : "480px",
      md : "500px",
      desktop : "768px",
    },
    backgroundImage: {
      'geisha': "url('/assets/Svgs/geisha.svg')",
      "none" : "none",
      "hand" : "url('/assets/Svgs/hand.svg')"
    }
  },
  
}
