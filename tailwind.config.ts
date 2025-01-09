<<<<<<< HEAD
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
=======
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
>>>>>>> 6cef2a275a500c7e2394e1a101f94c11c6820de4
  ],
  theme: {
    extend: {
      colors: {
<<<<<<< HEAD
        background: "var(--background)",
        foreground: "var(--foreground)",
=======
        background: 'var(--background)',
        foreground: 'var(--foreground)',
>>>>>>> 6cef2a275a500c7e2394e1a101f94c11c6820de4
      },
    },
  },
  plugins: [],
} satisfies Config;
<<<<<<< HEAD
=======


export default config;
>>>>>>> 6cef2a275a500c7e2394e1a101f94c11c6820de4
