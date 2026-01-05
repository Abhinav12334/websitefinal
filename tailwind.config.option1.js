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
          DEFAULT: '#020617',       // Slate 950 (Deep Blue-Black)
          light: '#0F172A',         // Slate 900
          card: '#1E293B',          // Slate 800
        },
        text: {
          light: '#38BDF8',         // Sky Blue Highlights
          DEFAULT: '#F8FAFC',       // Slate 50 (Off-white)
          muted: '#94A3B8',         // Slate 400
        },
        primary: {
          DEFAULT: '#3B82F6',       // Royal Blue
          dark: '#1D4ED8',          // Darker Blue
        },
        secondary: {
          DEFAULT: '#60A5FA',       // Light Blue
          accent: '#0EA5E9',        // Sky Blue
        },
      },
      boxShadow: {
        glow: '0 0 20px rgba(59, 130, 246, 0.4)',
        'glow-strong': '0 0 40px rgba(56, 189, 248, 0.5)',
      },
      backgroundImage: {
        'gradient-soft': 'linear-gradient(135deg, #020617 0%, #0F172A 100%)',
        'radial-dark': 'radial-gradient(circle at 50% 50%, #0F172A 0%, #020617 100%)',
      },
      animation: {
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(59, 130, 246, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(56, 189, 248, 0.5)' },
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
