module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: ['@typescript - eslint', 'import'],
  extends: [
    'eslint:recommended',
    '@vue / typescript',
    'plugin:prettier/recommended',
    'plugin:vue/vue3-recommended'
  ]
}
