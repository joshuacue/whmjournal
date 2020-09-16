module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'prettier',
    'prettier/react',
    'plugin:prettier/recommended',
    'eslint-config-prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
    'import/no-unresolved': 'off',
  },
  plugins: ['prettier'],
};
//extends: '@react-native-community',
//};
