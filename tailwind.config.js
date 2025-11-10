/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#111111',       // main background — soft black
          light: '#1a1a1a',         // lighter section background
          card: '#222222',          // slightly brighter for cards
        },
        text: {
          light: '#E5E5E5',
          muted: '#A0A0A0',
        },
        primary: {
          DEFAULT: '#00C6FF',       // soft neon cyan
          dark: '#0096D6',
        },
        secondary: {
          DEFAULT: '#8E2DE2',       // purple accent
          dark: '#4A00E0',
        },
      },
      boxShadow: {
        glow: '0 0 25px rgba(0, 198, 255, 0.2)',
        'glow-strong': '0 0 35px rgba(0, 198, 255, 0.5)',
      },
      backgroundImage: {
        'gradient-soft': 'linear-gradient(135deg, #111111 0%, #1a1a1a 50%, #222222 100%)',
        'radial-dark': 'radial-gradient(circle at 50% 50%, #1a1a1a 0%, #111111 100%)',
      },
      animation: {
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(0,198,255,0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(0,198,255,0.7)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
