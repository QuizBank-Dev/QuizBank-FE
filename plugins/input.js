import plugin from 'tailwindcss/plugin'

export default plugin(function ({ addComponents }) {
    addComponents({
        '.input-solid': {
            '@apply w-full bg-white text-gray-900 font-regular border-gray-200 border-2 rounded-lg px-6 py-3':
                '',
            '&:placeholder': {
                '@apply text-gray-400': '',
            },
            '&:focus': {
                '@apply border-point-500 outline-none': '',
            },
            '&:disabled': {
                '@apply text-gray-400': '',
            },
        },
        '.input-outline': {
            '@apply w-full bg-transparent text-gray-900 font-regular border-gray-300 border-2 rounded-lg px-6 py-3':
                '',
            '&:placeholder': {
                '@apply text-gray-400': '',
            },
            '&:focus': {
                '@apply border-point-500 outline-none': '',
            },
            '&:disabled': {
                '@apply text-gray-400': '',
            },
        },
        '.input-pc': {
            '@apply text-pc-body-md': '',
        },
        '.input-mobile': {
            '@apply text-mobile-body-md': '',
        },
        '.input-error': {
            '@apply border-danger-400': '',
        },
    })
})
