/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAF6F0',   // Warm Alabaster Cream (Background Primary)
          100: '#F2EAE0',  // Soft Sand Cream (Background Secondary)
          200: '#EADCCE',
          300: '#DFD3C3',  // Border Krem Tua
        },
        crimson: {
          DEFAULT: '#8B2318', // ASC Heritage Crimson
          dark: '#68170F',    // Deep Maroon
          light: '#A73225',
          subtle: '#FAF0EE',
        },
        gold: {
          DEFAULT: '#C5A059', // Brushed Antique Gold
          light: '#E6D2A8',   // Champagne Tint
          dark: '#9A7733',
          border: '#D4B87A',
        },
        charcoal: {
          DEFAULT: '#261815', // Espresso Charcoal (Text Primary)
          light: '#3D2A26',
        },
        taupe: {
          DEFAULT: '#6E5A54', // Warm Taupe (Text Muted)
          muted: '#8A756F',
        },
        forest: {
          DEFAULT: '#2E6B47', // Forest Olive (Ready Stock)
          light: '#EAF3ED',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        warm: '0 4px 20px -2px rgba(44, 26, 23, 0.06)',
        'warm-lg': '0 10px 30px -4px rgba(44, 26, 23, 0.08), 0 4px 12px -2px rgba(44, 26, 23, 0.04)',
      }
    },
  },
  plugins: [],
}

