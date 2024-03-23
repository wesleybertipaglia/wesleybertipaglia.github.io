/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': 'var(--primary)',
				'body': {
					1: 'var(--body-1)',
					2: 'var(--body-2)',
					3: 'var(--body-3)',
				},
				'text': {
					1: 'var(--text-1)',
					2: 'var(--text-2)',
					3: 'var(--text-3)',
				},
				'accent': 'var(--accent)'
			}
		},
		fontFamily: {
			sans: ['Inter var', 'Inter', 'sans-serif'],
		},
		animation: {
			'fade-in': 'fadeIn 0.5s ease-in-out',
			'fade-in-slow': 'fadeIn 1s ease-in-out',
			'marquee': 'marquee 20s linear infinite',
			'hang': 'hang 1s ease-in-out',
			'hang-slow': 'hang 2s ease-in-out',
			'hand-wave': 'handWave 1s ease-in-out infinite',
		},
		keyframes: {
			fadeIn: {
				'0%': { opacity: 0 },
				'100%': { opacity: 1 },
			},
			marquee: {
				'0%': { transform: 'translateX(0)' },
				'100%': { transform: 'translateX(calc(-100% - 4rem))' },
			},
			hang: {
				'0%': { transform: 'translateY(0)' },
				'100%': { transform: 'translateY(-10px)' },
			},
			handWave: {
				'0%': { transform: 'rotate(0deg)' },
				'50%': { transform: 'rotate(30deg)' },
				'100%': { transform: 'rotate(0deg)' },
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
	darkMode: 'selector'
}