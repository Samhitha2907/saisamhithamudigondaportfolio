/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        cream: {
          50: '#fff4ea',
          100: '#f3d2bb',
          200: '#dfaa86',
        },
        cocoa: {
          50: '#f4dfd2',
          100: '#dfb99f',
          200: '#c58c67',
          300: '#a9633e',
          400: '#8e3f21',
          500: '#762c15',
          600: '#5b2112',
          700: '#44180f',
          800: '#31110a',
          900: '#220b06',
        },
        caramel: {
          50: '#fff0dc',
          100: '#ffd3a2',
          200: '#ffa765',
          300: '#ff7928',
          400: '#ef5f12',
          500: '#c7440a',
        },
        rosewood: {
          50: '#fff0e7',
          100: '#ffd7c5',
          200: '#ffad89',
          300: '#fb7b4d',
          400: '#dc5125',
          500: '#a92b0f',
          600: '#831f0a',
        },
        rust: {
          50: '#fff2e7',
          100: '#ffd8bd',
          200: '#ffab79',
          300: '#ff7738',
          400: '#ff5a14',
          500: '#ce3b09',
          600: '#9b2706',
          700: '#7f1e05',
          800: '#5f1605',
          900: '#3d0d03',
        },
        sage: {
          50: '#eff6ef',
          100: '#dceadb',
          200: '#b8d1b6',
          300: '#87ad84',
          400: '#668b64',
          500: '#4c6f4b',
        },
      },
      boxShadow: {
        soft: '0 18px 45px rgba(75, 43, 32, 0.12)',
      },
    },
  },
  plugins: [],
};
