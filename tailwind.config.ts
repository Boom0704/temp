// tailwind.config.ts

import type { Config } from "tailwindcss";

export default {
  darkMode: 'class', // 클래스 기반 다크 모드 설정
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
