import type { Config } from 'tailwindcss'
import button from './plugins/button'
import input from './plugins/input'

export default {
    darkMode: ['class'],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/constants/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
    	extend: {
    		boxShadow: {
    			point: '0px 4px 8px 0px #C099FF'
    		},
    		fontFamily: {
    			pretendard: [
    				'var(--font-pretendard)',
    				'sans-serif'
    			]
    		},
    		colors: {
    			danger: {
    				'300': '#FF657C',
    				'400': '#FF3E5B'
    			},
    			warning: {
    				'300': '#FF657C',
    				'400': '#FF3E5B'
    			},
    			point: {
    				'50': '#F0F0FF',
    				'100': '#D5C7FF',
    				'200': '#C099FF',
    				'500': '#8A43EF',
    				'700': '#4D3089',
    				'900': '#271065'
    			},
    			gray: {
    				'100': '#F7F8FA',
    				'200': '#EAEBED',
    				'300': '#CACDD2',
    				'400': '#9FA4A8',
    				'500': '#73787E',
    				'600': '#474C52',
    				'700': '#27282C',
    				'800': '#121316',
    				'900': '#0A0B0D'
    			},
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		fontSize: {
    			'pc-title-lg': [
    				'48px',
    				{
    					lineHeight: '150%'
    				}
    			],
    			'pc-title-md': [
    				'36px',
    				{
    					lineHeight: '150%'
    				}
    			],
    			'pc-title-sm': [
    				'24px',
    				{
    					lineHeight: '150%'
    				}
    			],
    			'pc-body-lg': [
    				'18px',
    				{
    					lineHeight: '125%'
    				}
    			],
    			'pc-body-md': [
    				'16px',
    				{
    					lineHeight: '125%'
    				}
    			],
    			'pc-body-sm': [
    				'14px',
    				{
    					lineHeight: '125%'
    				}
    			],
    			'pc-caption': [
    				'12px',
    				{
    					lineHeight: '125%'
    				}
    			],
    			'mobile-title-lg': [
    				'32px',
    				{
    					lineHeight: '150%'
    				}
    			],
    			'mobile-title-md': [
    				'28px',
    				{
    					lineHeight: '150%'
    				}
    			],
    			'mobile-title-sm': [
    				'22px',
    				{
    					lineHeight: '150%'
    				}
    			],
    			'mobile-body-lg': [
    				'14px',
    				{
    					lineHeight: '125%'
    				}
    			],
    			'mobile-body-md': [
    				'12px',
    				{
    					lineHeight: '125%'
    				}
    			],
    			'mobile-body-sm': [
    				'10px',
    				{
    					lineHeight: '125%'
    				}
    			],
    			'mobile-caption': [
    				'8px',
    				{
    					lineHeight: '125%'
    				}
    			]
    		},
    		fontWeight: {
    			'extra-bold': '800',
    			'semi-bold': '600',
    			regular: '400',
    			'extra-light': '200'
    		},
    		borderWidth: {
    			'1': '1px',
    			'3': '3px',
    			'5': '5px'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
    plugins: [button, input, require("tailwindcss-animate")],
} satisfies Config
