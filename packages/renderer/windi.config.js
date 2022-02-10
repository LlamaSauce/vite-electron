import { defineConfig } from 'windicss/helpers';
import typography from 'windicss/plugin/typography';

// eslint-disable-next-line no-undef
const { transform } = require('windicss/helpers');

export default defineConfig({
  // https://windicss.org/posts/v30.html#attributify-mode
  attributify: true,

  plugins: [
    typography(),
    transform('daisyui'),
  ],
  daisyui: {
    themes: [
      'dark', // first one will be the default theme
      'emerald',
      'forest',
      'synthwave'
    ],
  },
});