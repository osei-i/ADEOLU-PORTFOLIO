/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        dmSerifDisplay: ['DM Serif Display', 'serif'],
        lora: ['Lora', 'serif'],
        spaceGrotesk: ['Space Grotesk', 'sans-serif'],
        meowScript: ['Meow Script', 'cursive'],
        oswald: ['Oswald', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
};
