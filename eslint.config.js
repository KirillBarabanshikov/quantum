import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    { ignores: ['dist'] },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            'simple-import-sort': simpleImportSort,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            'simple-import-sort/imports': [
                'error',
                {
                    groups: [
                        // Группа для импорта 'react' и его подмодулей
                        ['^react', '^@?\\w'],
                        // Импорты встроенных модулей
                        ['^\\u0000'],
                        // Импорты других библиотек из 'node_modules'
                        ['^@?\\w'],
                        // Абсолютные импорты (например, 'components/Button')
                        ['^@/'],
                        // Относительные импорты
                        ['^\\.'],
                        // Импорты CSS/SCSS файлов
                        ['^.+\\.s?css$'],
                    ],
                },
            ],
            'simple-import-sort/exports': 'error',
        },
    },
);
