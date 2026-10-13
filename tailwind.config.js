/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      animation: {
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }, // Se mueve el 50% porque duplicaremos el contenido
        }
      },
      colors: {
        'primary-navy': '#0B192C',
        'secondary-blue': '#1E3E62',
        'brand-blue': '#335092', // Azul original del logo
        'brand-blue-dark': '#335092', // El punto medio perfecto (ligeramente más oscuro)
        'accent-blue': '#4A71C9',
        'accent-subtle': '#EBF3FA',
        'surface-white': '#FFFFFF',
        'surface-offwhite': '#F8FAFC',
        'border-subtle': '#E2E8F0',
        'border-strong': '#CBD5E1',
        'text-primary': '#0F172A',
        'text-secondary': '#475569',
        'text-muted': '#94A3B8',
        'success': '#0D9488'
      },
      fontFamily: {
        'jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
        'inter': ['"Inter"', 'sans-serif'],
        'mono': ['"JetBrains Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
}
