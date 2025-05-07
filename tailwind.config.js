/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-out both',
        'fade-in-up': 'fadeInUp 1.2s ease-out both',
        'fade-in-down': 'fadeInDown 1.2s ease-out both',
        'slide-in-left': 'slideInLeft 1s ease-out both',
        'pop': 'pop 0.5s ease-out both',
        'spin-slow': 'spin 12s linear infinite',
        'ping': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'ping-slow': 'ping 4s cubic-bezier(0, 0, 0.2, 1) infinite',
        'bounce': 'bounce 2s infinite',
        'bounce-slow': 'bounce 4s infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'rocket-float': 'rocketFloat 6s ease-in-out infinite',
        'wave': 'waveAnim 12s linear infinite',
        'slow-move': 'moveStars 60s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-40px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        pop: {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        rocketFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        waveAnim: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(1000px)' },
        },
        moveStars: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '100px 100px' },
        },
      },
    },
  },
  plugins: [],
};
