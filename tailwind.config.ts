// import type { Config } from "tailwindcss";
// // const { nextui } = require("@nextui-org/react");
// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//     // "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", // Add NextUI theme files
//   ],
//   theme: {
//     extend: {
//       keyframes: {
//         loadingBar: {
//           "0%": { transform: "translateX(-100%)" },
//           "100%": { transform: "translateX(100%)" },
//         },
//       },
//       animation: {
//         "loading-bar": "loadingBar 1.5s ease-in-out infinite",
//       },
//       screens: {
//         xxl: "1886px",
//         xs: { min: "376px" },
//       },
//       colors: {
//         primary: "#010409",
//         btnPrimary: "#471c7c",
//         btnSecondary: "#7628d6",
//       },
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",

//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//       backgroundColor: {
//         primary: "#010409",
//         "primary-two": "#22243b",
//       },
//       fontFamily:{
//         "montserrat":["Nunito", "san-serif"],
//         "sans": ['Inter', 'sans-serif'],
//     },
//   },
//   plugins: [],
// };
// export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", // Add NextUI theme files
  ],
  theme: {
    extend: {
      keyframes: {
        loadingBar: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        scrollX: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "loading-bar": "loadingBar 1.5s ease-in-out infinite",
        "scrollX": 'scrollX 15s linear infinite',
        "fade-in": "fadeIn 0.5s ease-in-out",
      },
      screens: {
        xxl: "1886px",
        xs: { min: "376px" },
      },
      colors: {
        primary: "#010409",
        btnPrimary: "#471c7c",
        btnSecondary: "#7628d6",
        skyblue: "#44ffff",
        indigoBlue: "#2d46ff",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

        "intelli-gradient":
          "linear-gradient(to right, #6B41FF 50%, #F64CFF 80%, #FFC553 100%)",
        "purple-gradient": "linear-gradient(225deg, #471C7C 0%, #7628D6 100%)",
        "dark-purple-gradient": "linear-gradient(#7628D6 0%, #7628D6 100%)",
      },
      backgroundColor: {
        primary: "#010409",
        "primary-two": "#22243b",
      },
      fontFamily: {
        montserrat: ["Nunito", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
        require('tailwind-scrollbar-hide')

  ],
};

export default config;
