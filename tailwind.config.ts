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
        turquoise: '#66D2DC'
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

      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        burgerToX: {
          "0%": { transform: "rotate(0)" },
          "50%": { transform: "rotate(45deg) translateY(6px)" },
          "100%": { transform: "rotate(45deg)" },
        },
        xToBurger: {
          "0%": { transform: "rotate(45deg)" },
          "50%": { transform: "rotate(0) translateY(6px)" },
          "100%": { transform: "rotate(0)" },
        },

        infinityLoop: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },

        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },

        slideInmodal: {
          "0%": { transform: "translateY(-20%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        
      },

      animation: {
        slideIn: "slideIn 0.3s ease-out",
        slideOut: "slideOut 0.3s ease-out",
        burgerToX: "burgerToX 0.3s ease-in-out forwards",
        xToBurger: "xToBurger 0.3s ease-in-out forwards",
        infinityLoop: "infinityLoop 30s linear infinite",
        fadeIn: "fadeIn 0.3s ease-in-out",
        slideInmodal: "slideIn 0.3s ease-in-out",
      },

    },
  },
  plugins: [],
} satisfies Config;



