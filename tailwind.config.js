const { colors } = require('tailwindcss/defaultTheme');

function withOpacityValue(variable) {/*
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }*/
  return `var(${variable})`;
}

module.exports = {
  content: ["./src/**/*.{tsx,ts,js}"],
  theme: { 
    extend: {
      colors: {
        whiteC: withOpacityValue('--w'),
       blackC: withOpacityValue('--b'),
      primary: withOpacityValue('--color-primary'),
      secondary: withOpacityValue('--color-secondary'),
      neutral: withOpacityValue('--color-neutral'),
      cancel: withOpacityValue('--color-cancel'),
      accept: withOpacityValue('--color-accept'),
    },
  },},
  plugins: [], corePlugins: {
    preflight: false,
  }
}