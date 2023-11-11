module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        white: "#F4F4F4",
        primary:"#307ae1"
      },
      backgroundImage: {
        'hero-pattern':
          "linear-gradient(#388bfd57, #0664e424)",
          'exp-pattern':"linear-gradient(#388bfd54,#388bfd1f, #00214d17)",
          "skill-p":"linear-gradient(#008effcf,#0038ff87, #0033ff0a)"
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
