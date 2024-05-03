import globals from "globals";


export default [
  {
    extends: '@rocketseat/eslint-config/node',
    languageOptions: {
      globals: globals.browser
    }
  },
];
