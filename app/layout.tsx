import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aço Forte Serralheria | Conserto e Fabricação de Portões",
  description:
    "Conserto e fabricação de portões, troca de roldanas, remoção de ferrugem, reforma de telhados e estruturas metálicas. Orçamento rápido pelo WhatsApp.",
  openGraph: {
    title: "Aço Forte Serralheria | Portões e Estruturas Metálicas",
    description:
      "Conserto e fabricação de portões, telhados e estruturas metálicas. Atendimento rápido.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-foreground">
        {children}
      </body>
    </html>
  );
}
