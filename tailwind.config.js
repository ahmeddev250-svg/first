/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          plum: '#70366F',
          'plum-dark': '#552554',
          mauve: '#A574A3',
          pink: '#E8A6C8',
          'pink-soft': '#F8EFF6',
          surface: '#F9F8FA',
          ink: '#1E1B24',
          muted: '#5C5566',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        arabic: ['Cairo', 'Tajawal', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 32px rgba(112, 54, 111, 0.08)',
        'glass-nav': '0 4px 24px rgba(112, 54, 111, 0.06)',
      },
    },
  },
  plugins: [],
};
