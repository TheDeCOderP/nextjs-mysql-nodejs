/** @type {import('tailwindcss').Config} */
module.exports = {
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
        primary: "#000", // Add your preferred primary color
        secondary: "#2ecc71", // Add your preferred secondary color
      },
      container: {
        center: true, // Ensures the container is centered
        padding: "1rem", // Adds padding for smaller screens
        screens: {
          sm: "100%", // Full width on small screens
          md: "100%", // Full width on medium screens
          lg: "1024px",
          xl: "1200px", // 1200px max-width for larger screens
          "2xl": "1200px", // Keep consistent with 1200px
        },
      },
    },
  },
  plugins: [],
};
