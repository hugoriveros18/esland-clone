import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xl: { max: '1280px' },
      lg: { max: '1024px' },
      md: { max: '768px' },
      sm: { max: '639px' }
    },
    extend: {
      colors: {
        lightGray: "#c1c1c1",
        softBlue: "#2255a6",
        brightBlue: "#0000ee",
        lightPurple: "#551a8b",
        lightBlack: "#212121"
      },
      backgroundColor: {
        blue1: "#020710",
        blue2: "#000427",
        blue3: "#000527",
        blue4: "#010a2e",
        blue5: "#01356d",
        blue6: "#005099"
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
export default config
