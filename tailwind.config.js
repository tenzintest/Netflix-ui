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
        '30': '15rem',
        '128': '32rem',
        '96': '18rem',
        '120': '25rem',
        '100': '12.5rem',
        '90': '9.375rem',

      },
      maxHeight: {
        '128': '72rem',
      },
      spacing: {
        '3px': '210px',
        '2px': '50px' 
      }
    },
    fontFamily: {
      Netflix: ["Netflix Sans", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"]
    }
  },
  plugins: [],
}


// width: 15rem;
// position: relative;
// bottom: 210px;
// left: 50px;
// top: ;