import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 👇 Add CSS variables
        poppins: ["var(--font-poppins)"],
        raleway: ["var(--font-raleway)"],
        nunito: ["var(--font-nunito)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradien t-stops))",
      },
      transitionProperty: {
        height: "height",
      },
      colors: {
        "custom-brown": "#584545",

        /*headings important text*/
        "color-emerald": "#009688",
        /* Use sky blue for links, call-to-action buttons, and hover effects. Its lighter, welcoming tone complements emerald green and encourages user interaction.
           Secondary Text and Details */
        "color-sky-blue": "#87ceeb",
        /* For navigation bars and footers, charcoal gray offers a strong contrast against soft white, making navigation elements easy to locate and read. */
        "color-charcoal-gray": "#36454f",
        /*background*/
        "color-soft-white": "#f5f5f5",
        /* secondary text */
        "color-cool-gray": "#aab7b8",
        /* primary calls to action */
        "color-vibrant-pink": "#ff8187",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "scale(90%)" },
        },
      },
      animation: {
        wiggle: "wiggle 100ms ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
