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
          DEFAULT: '#0D1117',       // GitHub Dark / Terminal Black
          light: '#161B22',         // Slightly lighter terminal
          card: '#0D1117',          // Card matches bg for terminal feel
        },
        text: {
          light: '#39D353',         // Success Green Highlights
          DEFAULT: '#E6EDF3',       // Off-white text
          muted: '#8B949E',         // Dimmed text
        },
        primary: {
          DEFAULT: '#2EA043',       // Git Green
          dark: '#238636',          // Darker Green
        },
        secondary: {
          DEFAULT: '#00FF41',       // Matrix Neon Green
          accent: '#3FB950',        // Bright Green
        },
      },
      boxShadow: {
        glow: '0 0 20px rgba(46, 160, 67, 0.4)',
        'glow-strong': '0 0 35px rgba(0, 255, 65, 0.5)',
      },
      backgroundImage: {
        'gradient-soft': 'linear-gradient(135deg, #0D1117 0%, #161B22 100%)',
        'radial-dark': 'radial-gradient(circle at 50% 50%, #161B22 0%, #0D1117 100%)',
      },
      animation: {
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(46, 160, 67, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 255, 65, 0.6)' },
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
