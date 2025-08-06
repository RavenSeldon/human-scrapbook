import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Nature-inspired palette
        'forest': {
          50: '#f0f9f0',
          100: '#dcf2dc',
          200: '#bce5bc',
          300: '#8fd18f',
          400: '#5cb85c',
          500: '#3a9b3a',
          600: '#2d7d2d',
          700: '#256425',
          800: '#1f4f1f',
          900: '#1a421a',
        },
        'sage': {
          50: '#f7f8f7',
          100: '#eef0ee',
          200: '#d4d9d4',
          300: '#b1bab1',
          400: '#8a968a',
          500: '#6b786b',
          600: '#536053',
          700: '#444e44',
          800: '#394139',
          900: '#323732',
        },
        'lotus': {
          50: '#fdf4fd',
          100: '#fae7fb',
          200: '#f5d0f7',
          300: '#ecadf0',
          400: '#de7ee6',
          500: '#cc4dd8',
          600: '#a90dbd',
          700: '#8a0b98',
          800: '#6d0975',
          900: '#580a60',
        },
        'earth': {
          50: '#faf9f7',
          100: '#f2f0ea',
          200: '#e8e2d4',
          300: '#d9cfb9',
          400: '#c8b896',
          500: '#b5a074',
          600: '#a08a5e',
          700: '#86724f',
          800: '#6e5e44',
          900: '#5a4f3a',
        },
        'cream': '#fefcf8',
        'charcoal': '#2c3e2d',
      },
      fontFamily: {
        'display': ['Inter', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'organic-gradient': 'linear-gradient(135deg, #f0f9f0 0%, #eef0ee 50%, #fdf4fd 100%)',
        'leaf-gradient': 'linear-gradient(45deg, #3a9b3a, #5cb85c, #8a968a)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'gentle-bounce': 'gentle-bounce 2s ease-in-out infinite',
        'leaf-sway': 'leaf-sway 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'gentle-bounce': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'leaf-sway': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      borderRadius: {
        'organic': '60% 40% 40% 20% / 70% 50% 30% 25%',
        'leaf': '0% 100% 0% 100%',
      },
      dropShadow: {
        'organic': '0 25px 50px -12px rgba(42, 78, 42, 0.25)',
        'soft': '0 4px 20px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
export default config