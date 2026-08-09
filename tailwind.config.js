/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#0A0E14',
          900: '#0F141C',
          800: '#161C27',
          700: '#212A38',
          600: '#334156',
        },
        paper: {
          100: '#EAEEF4',
          300: '#B8C2D1',
          500: '#7D8AA0',
        },
        commit: {
          0: '#161C27',
          1: '#0E4429',
          2: '#006D32',
          3: '#26A641',
          4: '#39D353',
        },
        amber: {
          400: '#F5A524',
          500: '#E8912B',
        },
        signal: {
          rose: '#F2607A',
        }
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(57,211,83,0.15), 0 8px 24px -8px rgba(57,211,83,0.25)',
      }
    },
  },
  plugins: [],
}
