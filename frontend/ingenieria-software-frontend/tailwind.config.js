/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInZoom: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeInCard: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInError: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        gradientAnimation: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        fadeInZoom: 'fadeInZoom 0.5s ease-out',
        fadeInCard: 'fadeInCard 0.8s ease-out',
        slideInError: 'slideInError 0.5s ease-out',
        gradientAnimation: 'gradientAnimation 3s ease infinite',
      },
    },
  },
  plugins: [],
}
