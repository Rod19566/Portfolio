/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f1f6f5",
          "200": "#eeecec",
        },
        black: "#000",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#d9d9d9",
        },
        darkolivegreen: "#044d18",
        seagreen: "#095c2f",
        gray: "#828282",
        lemonchiffon: "#f4efc3",
        darkseagreen: "#abb58f",
        darkslategray: {
          "100": "#454545",
          "200": "#004428",
        },
        white: "#fff",
        lightgray: "#d6d6d6",
        darkgreen: "#0b5012",
      },
      spacing: {
        "spacing-s": "24px",
      },
      fontFamily: {
        "jacques-francois": "'Jacques Francois'",
        "body-text": "Inter",
        inherit: "inherit",
        arya: "Arya",
      },
    },
    fontSize: {
      "5xl": "24px",
      lgi: "19px",
      xl: "20px",
      base: "16px",
      "16xl": "35px",
      "2xl": "21px",
      "9xl": "28px",
      "45xl": "64px",
      "19xl": "38px",
      "32xl": "51px",
      inherit: "inherit",
    },
    screens: {
      mq1425: {
        raw: "screen and (max-width: 1425px)",
      },
      lg: {
        max: "1200px",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
