import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2A9DE9",
        secondary: "#04203B",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#2a9de9",
          "secondary": "#04203b",
          "base-100": "#e4e4e4", 
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
