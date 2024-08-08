/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-dark": "#181818",
        "button-green": "#24B47E",
        "nav-color": "#EEEEEE",
        'desc': "#E0E0E0",
        'dark': "#1F1F1F",
      },
      fontFamily: {
        custom: ["Roboto", "sans-serif"],
      },
      screens: {
        f: {max: '1422px'},
        first: { max: "1226px" },
        second: { max: "1050px" },
        large: {max: "1491px"},
        maxCustom: { max: "777px" },
        int: { max: "1152px" },
        for: { max: "705px" },
        small: { max: "450px" },
        img: { max: '1250px'},
        textsmall: {max: '1225px'},
        simple: {max: '1420px'},
        verysmall: {max: '400px'},
        simpletext: {max: '745px'},
        s: {max: '600px'},
        g: { max: "421px" },
        h: {max: '331px'},
        p: {max: '1075px'},
        l: {max: '830px'},
        u: {max: '714px'},
      },
    },
  },
  plugins: [],
};
