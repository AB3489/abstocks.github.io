/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          saffron: { DEFAULT: '#FF9933', dark: '#E67E22', glow: 'rgba(255, 153, 51, 0.15)' },
          ashoka: { DEFAULT: '#000080', muted: '#1A1A5E' },
          green: { DEFAULT: '#128807', dark: '#0F6F06', glow: 'rgba(18, 136, 7, 0.15)' },
          emerald: '#10B981',
          crimson: '#EF4444',
          gold: '#F59E0B',
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.45)',
          dark: 'rgba(15, 23, 42, 0.65)',
          borderLight: 'rgba(255, 255, 255, 0.25)',
          borderDark: 'rgba(255, 255, 255, 0.08)',
        }
      },
      animation: {
        'ticker-scroll': 'ticker 35s linear infinite',
        'pulse-glow': 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        glow: {
          '0%, 100%': { opacity: 0.6, filter: 'drop-shadow(0 0 5px rgba(255,153,51,0.2))' },
          '50%': { opacity: 1, filter: 'drop-shadow(0 0 20px rgba(255,153,51,0.6))' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
};