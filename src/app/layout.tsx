import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Espelho Divino',
  description: 'Converse com uma IA que reflete seus pensamentos e sentimentos.',
  authors: [
    {
      name: 'Gabriel Novais',
      url: 'https://github.com/ganovais',
    },
  ],
}

import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
