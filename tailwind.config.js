module.exports = {
  purge: ['./stories/**/*.{js,jsx,ts,tsx}'],

    content: [
        "./stories/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
      ],
    theme: {
      extend: {},
    },
    plugins: [],
  }