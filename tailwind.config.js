/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neutralSilver' : '#F5F7FA',
        'neutralGrey' : '#4D4D4D',
        'brandPrimary' : '#4CAF4F',
        'brandSecondary':'#89C54B',
        'neutralGrey' : '#717171',
        'gray900' : '#18191F'
      }
    },
  },
  plugins: [
  ],
}

