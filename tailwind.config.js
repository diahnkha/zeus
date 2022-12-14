/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./node_modules/flowbite/**/*.js"],
  theme: {
    container: {
        center: true,
        screens: {
            xl: '1440px'
        },
    },
    fontFamily:{
            'sans': ['Space Grotesk','Syne'],
            'serif': ['Space Grotesk', 'Syne'],
            'mono': ['Space Grotesk', 'Syne'],
            'display': ['Space Grotesk', 'Syne'],
            'body': ['Space Grotesk', 'Syne'],
    },
    extend: {
      colors: {
        myBlue: '#217BF4',
      },
      backgroundImage: {
        'hero-pattern': "url('../assets/images/bg-hero.png')",
        'sell-pattern': "url('../assets/images/bg-sell.png')",
      }
    }
  },
  plugins: [require('flowbite/plugin')],
}


