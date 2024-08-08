import tsEslint from 'typescript-eslint';

export default tsEslint.config(
  // ...tsEslint.configs.recommended,
  // ...tsEslint.configs.recommendedTypeChecked,
  // ...tsEslint.configs.stylisticTypeChecked,
  {
    plugins: { ...tsEslint.plugin },
    // languageOptions: {
    //   parser: tsEslint.parser,
    //   parserOptions: {
    //     project: true,
    //   },
    // },
  },
  {
    rules: {
      // Note: you must disable the base rule as it can report incorrect errors
      'no-restricted-imports': 'off',
      '@typescript-eslint/no-restricted-imports': 'error',
    },
  },
);
