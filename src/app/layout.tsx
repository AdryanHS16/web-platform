import "./globals.css";
import { satoshi } from "@/styles/fonts";
import { Header } from "@/components/sections/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${satoshi.className} text-black antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
