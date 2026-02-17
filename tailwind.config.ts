import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './src/app/**/*.{ts,tsx}',
        './src/components/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}

export default config
