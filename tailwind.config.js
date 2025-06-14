/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#c0dffd',
          300: '#94c9fb',
          400: '#64acf7',
          500: '#428ef2',
          600: '#2970e4',
          700: '#2259cf',
          800: '#234aa8',
          900: '#234285',
        },
        secondary: {
          50: '#f6f3ff',
          100: '#ece9fe',
          200: '#dcd6fd',
          300: '#c3b6fb',
          400: '#a68df7',
          500: '#8a63f2',
          600: '#7545e6',
          700: '#6536ca',
          800: '#532fa5',
          900: '#462c84',
        },
        accent: {
          50: '#fef2f3',
          100: '#fde6e7',
          200: '#fbd0d5',
          300: '#f7aab3',
          400: '#f27d8c',
          500: '#e84c63',
          600: '#d32a4b',
          700: '#b01d3c',
          800: '#931b37',
          900: '#7c1a33',
        },
        neutral: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#d1d1d1',
          400: '#b4b4b4',
          500: '#9a9a9a',
          600: '#818181',
          700: '#6a6a6a',
          800: '#5a5a5a',
          900: '#4e4e4e',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};