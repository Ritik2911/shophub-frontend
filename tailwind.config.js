/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        "pink-400": "#f1d6c4",
        "pink-600": "#f8d4bd",
        "pink-500": "#f8d4bd",
        "orange-600": "#FA8907",
        "black-25": "#f8f6f2",
        "black-900": "#000",
        "yellow-800": "#fdc20c",
        "blue-800": "#35587A",
        "blue-700": "#0F4E8C",
        "blue-300": "#0576f8",
        "ripple-border-white": "#ffffffb9",
        "small-ripple": "#fb9a61",
        richblack: {
          5: "#F1F2FF",
          25: "#DBDDEA",
          50: "#C5C7D4",
          100: "#AFB2BF",
          200: "#999DAA",
          300: "#838894",
          400: "#6E727F",
          500: "#585D69",
          600: "#424854",
          700: "#2C333F",
          800: "#161D29",
          900: "#000814",
        },
        richblue: {
          5: "#ECF5FF",
          25: "#C6D6E1",
          50: "#A0B7C3",
          100: "#7A98A6",
          200: "#537988",
          300: "#2D5A6A",
          400: "#073B4C",
          500: "#063544",
          600: "#042E3B",
          700: "#032833",
          800: "#01212A",
          900: "#001B22",
        },
      },
      boxShadow: {
        "inner-md": "inset 0 0 2rem 1rem #fff",
        "inner-sm": "inset 0 0 1rem 0.5rem #fff",
        'inner-d-md':'inset 0 0 2rem 1rem #000814',
        'inner-d-sm':'inset 0 0 1rem 0.5rem #000814',
      },
    },
  },
  plugins: [],
};