/** @type {import('tailwindcss').Config} */
export default {
<<<<<<< HEAD
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
=======
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        medical: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          900: '#134e4a',
        },
        slateCustom: {
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
>>>>>>> 676164b98c0ff65297d7ed4e40989dd0fea00cb4
