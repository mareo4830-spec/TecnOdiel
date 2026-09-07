/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#071a33',
          900: '#0c2a4a',
          850: '#f4f8fc',
          800: '#eaf2f9',
          700: '#d8e6f2',
          600: '#bfd3e3',
        },
        blue: {
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
        },
        electric: '#00a8ff',
      },
      fontFamily: {
        sans: ['Sora', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      animation: {
        'gradient-shift': 'gradient-shift 10s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 8px 24px rgba(0,168,255,0.22), 0 0 40px rgba(0,168,255,0.12)' },
          '50%': { boxShadow: '0 12px 34px rgba(0,168,255,0.32), 0 0 70px rgba(0,168,255,0.18)' },
        },
      },
    },
  },
  plugins: [],
};
