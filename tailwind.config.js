/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        gabarito: ['Gabarito', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontFamily: theme('fontFamily.gabarito').join(', '),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // no config here
  ],
};
