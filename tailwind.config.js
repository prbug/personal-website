/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fira-code': ['FiraCode Nerd Font Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-vercel": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "gradient-vercel-blue": "linear-gradient(135deg, rgb(0, 122, 255) 0%, rgb(147, 51, 234) 100%)",
        "gradient-vercel-purple": "linear-gradient(135deg, rgb(147, 51, 234) 0%, rgb(236, 72, 153) 100%)",
        "conic-gradient": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.35)',
      },
      animation: {
        'float-slow': 'float 20s ease-in-out infinite',
        'float-medium': 'float 15s ease-in-out infinite reverse',
        'float-fast': 'float 10s ease-in-out infinite',
        'typing': 'typing 1s steps(var(--text-length), end) forwards',
        'blink': 'blink-caret .75s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(10px, -15px) rotate(1deg)' },
          '50%': { transform: 'translate(-5px, -25px) rotate(-1deg)' },
          '75%': { transform: 'translate(-15px, -10px) rotate(1deg)' },
        },
        typing: {
          '0%': { width: '0ch' },
          '100%': { width: 'var(--text-length)' },
        },
        'blink-caret': {
          'from, to': { backgroundColor: 'transparent' },
          '50%': { backgroundColor: 'currentColor' },
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.glass': {
          'background': 'rgba(22, 27, 34, 0.8)',
          'backdrop-filter': 'blur(20px)',
          'border': '1px solid rgba(255, 255, 255, 0.1)',
        },
        '.bg-clip-text': {
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
        },
        '.text-transparent': {
          '-webkit-text-fill-color': 'transparent',
        },
      })
    }
  ],
};

export default config;
