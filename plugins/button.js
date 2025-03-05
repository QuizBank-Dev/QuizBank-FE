import plugin from 'tailwindcss/plugin'

export default plugin(function ({ addComponents }) {
    addComponents({
        '.btn-solid': {
            '@apply bg-point-500 text-white font-extra-bold rounded-lg': '',
            '&:active': {
                '@apply bg-point-700': '',
            },
            '&:disabled': {
                '@apply bg-gray-200 text-gray-400': '',
            },
        },
        '.btn-outline': {
            '@apply bg-white text-point-500 font-extra-bold border-point-500 border-2 rounded-lg':
                '',
            '&:active': {
                '@apply bg-point-100': '',
            },
            '&:disabled': {
                '@apply bg-gray-200 text-gray-400 border-gray-400': '',
            },
        },
        '.btn-pc-lg': {
            '@apply text-pc-body-lg px-6 py-4': '',
        },
        '.btn-pc-md': {
            '@apply text-pc-body-md px-6 py-3': '',
        },
        '.btn-pc-sm': {
            '@apply text-pc-body-sm px-4 py-2': '',
        },
        '.btn-mobile-lg': {
            '@apply text-mobile-body-lg px-6 py-4': '',
        },
        '.btn-mobile-md': {
            '@apply text-mobile-body-md px-6 py-3': '',
        },
        '.btn-mobile-sm': {
            '@apply text-mobile-body-sm px-4 py-2': '',
        },
    })
})
