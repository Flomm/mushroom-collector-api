import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import jestPlugin from 'eslint-plugin-jest';
import { defineConfig } from 'eslint/config';
import stylistic from '@stylistic/eslint-plugin';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import preferArrowFunctions from 'eslint-plugin-prefer-arrow-functions';

export default defineConfig([
  prettierConfig,
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js, jest: jestPlugin, '@stylistic': stylistic, prettier: prettierPlugin },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.node },
    rules: {
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
      '@stylistic/max-len': ['error', 120],
      'prettier/prettier': 'error',
      'arrow-body-style': ['error', 'as-needed']
    }
  },
  tseslint.configs.recommended,
  preferArrowFunctions.configs.all
]);
