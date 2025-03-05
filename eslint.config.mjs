import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import eslintPluginPrettier from 'eslint-plugin-prettier'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname,
})

const eslintConfig = [
    ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
    {
        plugins: {
            prettier: eslintPluginPrettier,
        },
        rules: {
            'no-unused-vars': ['warn'],
            'prettier/prettier': ['warn', { semi: false, endOfLine: 'auto' }],
            '@typescript-eslint/no-explicit-any': 'warn',
        },
    },
]

export default eslintConfig
