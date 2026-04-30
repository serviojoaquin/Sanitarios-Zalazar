/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0047AB',
          dark: '#003684',
          light: '#D9E7FF',
          glow: '#2F6ED6',
        },
        ink: {
          DEFAULT: '#0A0A0A',
          soft: '#121212',
          line: '#232323',
          muted: '#A1A1AA',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 45px -25px rgba(0, 71, 171, 0.35)',
        panel: '0 24px 60px -30px rgba(0, 0, 0, 0.65)',
      },
      backgroundImage: {
        hero: 'linear-gradient(135deg, rgba(10, 10, 10, 0.98), rgba(0, 71, 171, 0.92))',
        panel:
          'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
}
