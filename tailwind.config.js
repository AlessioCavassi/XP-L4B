/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        'purple-deep': '#2D2655',
        'purple-light': '#594694',
        'aqua-green': '#65BFB0',
        'blue': '#4A90E2',
      },
      fontFamily: {
        heading: ['var(--font-heading)'],
        body: ['var(--font-body)'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
}
