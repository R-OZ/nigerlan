module.exports = {
  root: true,
  env: { node: true, es2022: true },
  extends: ['eslint:recommended'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  ignorePatterns: ['node_modules/', 'build/', '.runtime/', '.npm-cache/'],
  overrides: [
    {
      files: ['apps/web/src/**/*.{js,jsx}'],
      env: { browser: true, jest: true },
      extends: ['react-app', 'react-app/jest'],
    },
  ],
};
