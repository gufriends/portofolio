import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sora: ["Sora", "sans-serif"],
        inter: ["Inter", "sans-serif"], // Pastikan Inter juga ada jika digunakan
      },
      backgroundImage: {
        // Tambahkan atau modifikasi bagian ini
        "gradient-icon-ring": "linear-gradient(46deg, #4CA9FF, #3BF686)",
        // Anda bisa menambahkan gradient lain di sini
        // 'nama-gradient-lain': 'linear-gradient(...)'
      },
      colors: {
        // Anda juga bisa menambahkan warna kustom jika diperlukan
        "custom-blue": "#4CA9FF",
        "custom-green": "#3BF686",
        "card-bg": "#323443", // Warna latar belakang kartu Anda
        "card-text-primary": "#EDCECE",
        "card-text-secondary": "rgba(229, 231, 235, 0.6)", // stone-200/60
      },
    },
  },
  plugins: [],
} satisfies Config;
