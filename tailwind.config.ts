import type { Config } from 'tailwindcss'

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                pretendard: ['var(--font-pretendard)', 'sans-serif'],
            },
            colors: {
                danger: {
                    300: '#FF657C',
                    400: '#FF3E5B',
                },
                warning: {
                    300: '#FF657C',
                    400: '#FF3E5B',
                },
                point: {
                    50: '#F0F0FF',
                    100: '#D5C7FF',
                    200: '#C099FF',
                    500: '#8A43EF',
                    700: '#4D3089',
                    900: '#271065',
                },
                gray: {
                    100: '#F7F8FA',
                    200: '#EAEBED',
                    300: '#CACDD2',
                    400: '#9FA4A8',
                    500: '#73787E',
                    600: '#474C52',
                    700: '#27282C',
                    800: '#121316',
                    900: '#0A0B0D',
                },
            },
            fontSize: {
                'pc-title-lg': ['48px', { lineHeight: '150%' }],
                'pc-title-md': ['36px', { lineHeight: '150%' }],
                'pc-title-sm': ['24px', { lineHeight: '150%' }],
                'pc-body-lg': ['18px', { lineHeight: '125%' }],
                'pc-body-md': ['16px', { lineHeight: '125%' }],
                'pc-body-sm': ['14px', { lineHeight: '125%' }],
                'pc-caption': ['12px', { lineHeight: '125%' }],
                'mobile-title-lg': ['32px', { lineHeight: '150%' }],
                'mobile-title-md': ['28px', { lineHeight: '150%' }],
                'mobile-title-sm': ['22px', { lineHeight: '150%' }],
                'mobile-body-lg': ['14px', { lineHeight: '125%' }],
                'mobile-body-md': ['12px', { lineHeight: '125%' }],
                'mobile-body-sm': ['10px', { lineHeight: '125%' }],
                'mobile-caption': ['8px', { lineHeight: '125%' }],
            },
            fontWeight: {
                'extra-bold': '800',
                'semi-bold': '600',
                regular: '400',
                'extra-light': '200',
            },
            borderWidth: {
                1: '1px',
                3: '3px',
                5: '5px',
            },
        },
    },
    plugins: [],
} satisfies Config
