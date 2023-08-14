/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'test': '992px',
      ...defaultTheme.screens,
    },
    extend: {
// screens:{
//         'lg': '992px',
      // },
      colors: {
        "accentGreen" : "rgba(16,165,158,0.7)",
        "accentGreenHover" : "rgb(16,165,158)",
        "primaryGreen" : "#01A998",
        "lightGreen" : "#C9FFFC",
        "darkGreen" : "#0A2E48",
        "light" : "#F5FBF4"
      },
    },
  },
  plugins: [],
}
