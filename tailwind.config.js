module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    borderRadius: {
      'none': '0',
      'sm': '10px',
      DEFAULT: '16px',
      'lg': '20px',
      'full': '50px',
    },
    extend: {
      colors: {
        background: "#F4F4F4",
        primary: "#344F68",
        white: "#F4F4F4",
        secondart: "#322D2D",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
