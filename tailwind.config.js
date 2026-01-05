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
          DEFAULT: '#000000',       // Deep Void Black
          light: '#0A0A0A',         // Nearly Black
          card: '#050505',          // Subtle differentiation
        },
        text: {
          light: '#E5E7EB',         // Silver Light (Gray-200)
          DEFAULT: '#F3F4F6',       // Cool White
          muted: '#9CA3AF',         // Gray-400
        },
        primary: {
          DEFAULT: '#00E5FF',       // Keeping Neon Cyan accent (works with silver)
          dark: '#0891B2',
        },
        secondary: {
          DEFAULT: '#3B82F6',       // Keeping Lightning Blue
          accent: '#60A5FA',
        },
      },
      boxShadow: {
        glow: '0 0 20px rgba(255, 255, 255, 0.1)', // White/Silver glow
        'glow-strong': '0 0 40px rgba(0, 229, 255, 0.3)',
      },
      backgroundImage: {
        'gradient-soft': 'linear-gradient(135deg, #000000 0%, #0A0A0A 100%)',
        'radial-dark': 'radial-gradient(circle at 50% 50%, #0A0A0A 0%, #000000 100%)',
      },
      animation: {
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(255, 255, 255, 0.1)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 229, 255, 0.3)' },
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
