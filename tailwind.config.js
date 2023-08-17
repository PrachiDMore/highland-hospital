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
        "darkBlue" : "#0A2E48",
        "darkGreen" : "#062F2B",
        "light" : "#F5FBF4",
        "navHover" : "rgba(31, 61, 83, 0.5)",
        "grey" : "35C5C5C",
        "lightBlue" : "#F4F8FB",
        "lightBlue2" : "#ECF3F9"
      },
    },
  },
  plugins: [],
}
