/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1e5fbf',
          'blue-dark': '#123b7a',
          emerald: '#0e9f6e',
          'emerald-light': '#34d399',
        },
        navy: {
          900: '#0b1220',
          800: '#101a2e',
          700: '#16223b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'ui-sans-serif', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(30, 95, 191, 0.25)',
        'glow-emerald': '0 0 40px rgba(14, 159, 110, 0.25)',
        soft: '0 10px 40px -10px rgba(0,0,0,0.15)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'gradient-x': 'gradientX 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundSize: {
        '300%': '300% 300%',
      },
    },
  },
  plugins: [],
};