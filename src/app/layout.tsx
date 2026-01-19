import './globals.css'
import { inter, spaceGrotesk } from '@/styles/fonts'
import { Header } from '@/components/sections/Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-neutral-950 text-neutral-100 antialiased font-sans">
        <Header />
        {children}
      </body>
    </html>
  )
}
