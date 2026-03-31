import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import vitest from 'eslint-plugin-vitest';
import globals from 'globals';

const INTERNAL_ALIAS_REGEX = '^(@|src)/';
const IMPORT_EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx', '.d.ts'];

const importOrderRules = {
    'import/named': 'error',
    'import/no-duplicates': ['error', { considerQueryString: true }],
    'import/newline-after-import': ['error', { count: 1 }],
    'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
    'import/no-extraneous-dependencies': [
        'error',
        {
            optionalDependencies: false,
            peerDependencies: false,
            devDependencies: [
                '**/*.{test,spec}.{js,jsx,ts,tsx}',
                '**/__tests__/**',
                '**/__mocks__/**',
                'src/test/**',
                '**/vitest.setup.{js,ts}',
                '**/{vite,webpack,rollup,esbuild,babel}.config.{js,cjs,mjs,ts}',
                '**/{.eslintrc,.eslintrc.*}.?(js|cjs|mjs|ts)',
                '**/eslint.config.{js,cjs,mjs,ts}',
                '**/scripts/**',
            ],
        },
    ],
    'import/extensions': [
        'off',
        'ignorePackages',
        {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
        },
    ],
    'import/order': [
        'error',
        {
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
            'newlines-between': 'always',
            alphabetize: { order: 'asc', caseInsensitive: true },
            pathGroups: [
                {
                    pattern: '{react,react-dom,react-router,react-router-dom,react-redux/**,react-*}',
                    group: 'external',
                    position: 'before',
                },
                {
                    pattern: '{@/shared/**,@/config/**,@/utils/**,@/helpers/**,@/services/**}',
                    group: 'internal',
                    position: 'after',
                },
                { pattern: '{@/hooks/**,@/store/**}', group: 'internal', position: 'after' },
                { pattern: '@mui/**', group: 'external', position: 'after' },
                { pattern: '@/components/**', group: 'internal', position: 'after' },
                { pattern: '@/features/**', group: 'internal', position: 'after' },
                { pattern: '@/assets/**', group: 'internal', position: 'after' },
                { pattern: '../**', group: 'parent', position: 'after' },
                { pattern: './**', group: 'sibling', position: 'after' },
                { pattern: '*.s?css', group: 'unknown', position: 'after' },
                { pattern: '@/styles/**', group: 'internal', position: 'after' },
            ],
            pathGroupsExcludedImportTypes: ['react'],
            warnOnUnassignedImports: true,
        },
    ],
};

const sharedImportSettings = {
    'import/internal-regex': INTERNAL_ALIAS_REGEX,
    'import/resolver': {
        alias: {
            map: [['@', './src']],
            extensions: IMPORT_EXTENSIONS,
        },
        node: {
            extensions: IMPORT_EXTENSIONS,
            moduleDirectory: ['node_modules', 'src'],
        },
    },
};

const baseGlobalsBrowser = { ...globals.browser, ...globals.es2020 };
const baseGlobalsNode = { ...globals.node, ...globals.es2020 };

const testGlobals = {
    ...globals.node,
    ...globals.es2020,
    // Vitest globals
    vi: 'readonly',
    describe: 'readonly',
    it: 'readonly',
    test: 'readonly',
    expect: 'readonly',
    beforeAll: 'readonly',
    afterAll: 'readonly',
    beforeEach: 'readonly',
    afterEach: 'readonly',
    // Keep common Node globals that appear in tests
    require: 'readonly',
    global: 'readonly',
    process: 'readonly',
    __dirname: 'readonly',
    __filename: 'readonly',
};

export default [
    {
        ignores: ['dist/**', 'node_modules/**', 'coverage/**', 'build/**', '**/.auth/**', 'test-results/**'],
    },

    // -------------------------
    // Config / scripts (Node)
    // -------------------------
    {
        files: [
            'eslint.config.{js,cjs,mjs,ts}',
            '*.{config,conf}.{js,cjs,mjs,ts}',
            'vite.config.{js,ts,mjs,cjs}',
            'vitest.setup.{js,ts}',
            'babel.config.{js,cjs,mjs,ts}',
            'src/config.{js,ts}',
            'scripts/**/*.{js,ts,mjs,cjs}',
        ],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: baseGlobalsNode,
        },
        plugins: { import: importPlugin },
        rules: {
            ...js.configs.recommended.rules,
            ...importOrderRules,
            'import/no-unresolved': 'off',
            'import/no-extraneous-dependencies': 'off',
        },
        settings: sharedImportSettings,
    },

    // -------------------------
    // App JS/JSX (src + non-src)
    // -------------------------
    {
        files: ['**/*.{js,jsx}'],
        ignores: ['node_modules/**', 'dist/**', 'build/**'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            parserOptions: { ecmaFeatures: { jsx: true } },
            globals: baseGlobalsBrowser,
        },
        plugins: {
            react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            import: importPlugin,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...react.configs['jsx-runtime'].rules,
            ...reactHooks.configs.recommended.rules,
            ...importOrderRules,
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            'react/prop-types': 'off',
            'no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_',
                },
            ],
        },
        settings: {
            react: { version: '18.2' },
            ...sharedImportSettings,
        },
    },

    // -------------------------
    // App TS/TSX + .d.ts (src + __tests__ etc)
    // -------------------------
    {
        files: ['**/*.{ts,tsx,d.ts}'],
        ignores: ['node_modules/**', 'dist/**', 'build/**'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            parser: tsparser,
            parserOptions: { ecmaFeatures: { jsx: true } },
            globals: baseGlobalsBrowser,
        },
        plugins: {
            '@typescript-eslint': tseslint,
            react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            import: importPlugin,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...react.configs['jsx-runtime'].rules,
            ...reactHooks.configs.recommended.rules,
            ...importOrderRules,

            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_',
                },
            ],
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/ban-ts-comment': 'off',
        },
        settings: {
            react: { version: '18.2' },
            ...sharedImportSettings,
        },
    },

    // -------------------------
    // Tests (Vitest globals)
    // Covers: __tests__, src/**/*.test.*, src/test/**
    // -------------------------
    {
        files: [
            '**/__tests__/**/*.{js,jsx,ts,tsx,d.ts}',
            'src/test/**/*.{js,jsx,ts,tsx,d.ts}',
            'src/**/*.{test,spec}.{js,jsx,ts,tsx}',
        ],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            parserOptions: { ecmaFeatures: { jsx: true } },
            globals: {
                ...baseGlobalsBrowser,
                ...baseGlobalsNode,
                ...testGlobals,
            },
        },
        plugins: {
            vitest,
            import: importPlugin,
        },
        rules: {
            ...vitest.configs.recommended.rules,
            ...importOrderRules,

            // These rules are often too strict/annoying
            'vitest/no-disabled-tests': 'off',
            'vitest/no-commented-out-tests': 'off',
        },
        settings: sharedImportSettings,
    },

    // -------------------------
    // Playwright / E2E
    // -------------------------
    {
        files: ['e2e/**/*.{ts,js}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            parser: tsparser,
            parserOptions: { ecmaFeatures: { jsx: false } },
            globals: baseGlobalsNode,
        },
        plugins: {
            '@typescript-eslint': tseslint,
            import: importPlugin,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...importOrderRules,

            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_',
                },
            ],
        },
        settings: sharedImportSettings,
    },
    // -------------------------
    // Test mocks & setup (vi.fn, global, etc.)
    // -------------------------
    {
        files: ['**/__tests__/**/*.{js,jsx,ts,tsx,d.ts}', '**/__mocks__/**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.node,
                ...globals.es2020,
                ...testGlobals,

                // explicit safety (IDE + ESLint v10)
                global: 'readonly',
                process: 'readonly',
            },
        },
        plugins: {
            vitest,
        },
        rules: {
            ...vitest.configs.recommended.rules,

            // mocks often intentionally violate these
            'vitest/no-mocks-import': 'off',
            'vitest/no-export': 'off',
        },
    },
];
