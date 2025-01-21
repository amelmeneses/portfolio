import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      fontFamily: {
        lulo: ['lulo-clean-w01-one-bold', 'sans-serif'],
        dinLight: ['din-next-w01-light', 'sans-serif'],
        avenirLight: ['avenir-lt-w01_35-light1475496', 'sans-serif'],
      },

      fontSize: {
        'font-0': ['17px', '1.4em'], // Tamaño y línea para font_0
        'font-1': ['16px', '1.4em'],
        'font-2': ['42px', '1.4em'],
        'font-3': ['110px', '1.4em'],
        'font-4': ['42px', '1.4em'],
        'font-5': ['23px', '1.4em'],
        'font-6': ['17px', '1.4em'],
        'font-7': ['17px', '1.4em'],
        'font-8': ['15px', '1.4em'],
        'font-9': ['14px', '1.4em'],
        'font-10': ['12px', '1.4em'],
      },
    },
  },
  plugins: [],
} satisfies Config;



