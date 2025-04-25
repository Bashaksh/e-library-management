// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
      './pages/**/*.{ts,tsx}',
      './components/**/*.{ts,tsx}',
      './app/**/*.{ts,tsx}',
      './src/**/*.{ts,tsx}',
    ],
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        fontFamily: {
          'inter': ['Inter', 'sans-serif'],
          'sora': ['Sora', 'sans-serif'],
          'space-grotesk': ['Space Grotesk', 'sans-serif'],
        },
        colors: {
          'dark-navy': '#101018',
          'charcoal': '#1E1E2F',
          'electric-blue': '#3A86FF',
          'accent-purple': '#8338EC',
        },
        keyframes: {
          "accordion-down": {
            from: { height: 0 },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: 0 },
          },
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
          "float": "float 6s ease-in-out infinite",
        },
      },
    },
    plugins: [require("tailwindcss-animate")],
  }