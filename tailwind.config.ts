import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ... your other extensions like backgroundImage
      animation: {
        // Add this marquee animation
        marquee: 'marquee 40s linear infinite',
      },
      keyframes: {
        // Add these keyframes
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }, // Animate to -50% for a seamless loop
        },
      },
    },
  },
  plugins: [],
}
export default config