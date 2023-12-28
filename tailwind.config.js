/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-rubik)']
      },
      colors: {
        'primary-green': '#17BFA8',
        'outline-gray': '#353535',
      }
    },
  },
  plugins: [],
}
