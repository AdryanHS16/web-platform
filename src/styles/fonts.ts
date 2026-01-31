import { Inter, Space_Grotesk } from 'next/font/google'
import localFont from 'next/font/local'

export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})

export const satoshi = localFont({
    src: [
        {
            path: '../../public/fonts/Satoshi-Light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Satoshi-LightItalic.woff2',
            weight: '300',
            style: 'italic',
        },
        {
            path: '../../public/fonts/Satoshi-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Satoshi-Italic.woff2',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../../public/fonts/Satoshi-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Satoshi-MediumItalic.woff2',
            weight: '500',
            style: 'italic',
        },
        {
            path: '../../public/fonts/Satoshi-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Satoshi-BoldItalic.woff2',
            weight: '700',
            style: 'italic',
        },
        {
            path: '../../public/fonts/Satoshi-Black.woff2',
            weight: '900',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Satoshi-BlackItalic.woff2',
            weight: '900',
            style: 'italic',
        },
        {
            path: '../../public/fonts/Satoshi-Variable.woff2',
            weight: '300 900',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Satoshi-VariableItalic.woff2',
            weight: '300 900',
            style: 'italic',
        },
    ],
    display: 'swap',
    variable: '--font-satoshi',
})