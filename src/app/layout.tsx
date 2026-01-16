import './globals.css'

export const metadata = {
  title: 'Renewed Mindset',
  description: 'Personal development platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-neutral-950 text-neutral-100 antialiased">
        {children}
      </body>
    </html>
  )
}
