import "./globals.css";
import { inter, satoshi } from "@/styles/fonts";
import { Header } from "@/components/sections/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${satoshi.variable} ${inter.variable}`}
    >
      <body className="text-black antialiased font-sans">
        <Header />
        {children}
      </body>
    </html>
  );
}