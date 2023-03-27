/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "1/2": "80%",
      },
      height: {
        600: "600px",
      },
      colors: {
        facebook: "#4267B2",
        twitter: "#00acee",
        instagram: "#d62976",
        linkedIn: " #0072b1",
      },
    },
  },
  plugins: [require("daisyui")],
};
