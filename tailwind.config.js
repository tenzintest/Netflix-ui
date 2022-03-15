module.exports = {
  content: [],
  theme: {
    fontSize: {
      '2xl': ['24px', {
        letterSpacing: '-0.01em',
      }],
      '3xl': ['32px', {
        letterSpacing: '-0.02em',
        lineHeight: '40px',
      }],
    },
    extend: {
      colors: {
        "netflix-black": "#000000",
        "netflix-red": "#e50914",
        "netflix-gray": "#303030",
        "netflix-white": "#ffffff",  
        "netflix-footer": "#757575"
      },
      width: {
        '25': '9rem',
        '128': '32rem',
      },
      maxHeight: {
        '128': '72rem',
      }
    },
    fontFamily: {
      Netflix: ["Netflix Sans", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"]
    }
  },
  plugins: [],
}
