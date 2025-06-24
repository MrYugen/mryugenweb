/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  darkMode: 'class', // Activamos modo oscuro por clase
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        'bg-alt': 'var(--color-bg-alt)',
        text: 'var(--color-text)',
        cta: 'var(--color-cta)',
        'section-a': 'var(--color-section-a)',
        'section-b': 'var(--color-section-b)',
      }
    },
  },
  plugins: [],
}
