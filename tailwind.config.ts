import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-accent': '#A500F5',
        'success-green': '#44D100',
        'info-blue': '#2300D1',
        'secondary-accent': '#CE9803',
        'base-background': '#FDFBF6',
        'base-text': '#36454F',
      },
    },
  },
  plugins: [],
}
export default config