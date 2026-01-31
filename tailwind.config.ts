import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './src/app/**/*.{ts,tsx}',
        './src/components/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-satoshi)', 'system-ui', 'sans-serif'],
                heading: ['var(--font-satoshi)', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

export default config
