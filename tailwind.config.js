/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: '#514B90',
        secondary: '#63FFFF',
        accent: '#A41E02',
        white: '#F4F4F4',
        background: '#939393',
      },
    },
  },
  plugins: [],
};
