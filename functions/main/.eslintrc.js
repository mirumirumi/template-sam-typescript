module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module" 
  },
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended", // recommended rules from the @typescript-eslint/eslint-plugin
    'eslint:recommended',
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    "no-unused-vars": "off",
  },
  globals: {
    _: "readonly",
  },
}
