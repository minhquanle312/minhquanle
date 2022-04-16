module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'pulse-fast': 'pulse 1s infinite cubic-bezier(0.4, 0, 0.6, 1)',
      },
    },
  },
  plugins: [],
}
