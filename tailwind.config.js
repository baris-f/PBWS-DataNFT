module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  // add daisyUI plugin
  plugins: [require("daisyui")],

  // daisyUI config (optional)
  daisyui: {
    darkTheme: "luxury",
  },
}
