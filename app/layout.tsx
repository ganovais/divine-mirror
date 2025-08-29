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
  title: "O Espelho Divino",
  description: "Estações temáticas com versículos bíblicos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        {/* Animated gradient background layer */}
        <div
          aria-hidden
      className="fixed inset-0 -z-10 bg-[radial-gradient(1000px_500px_at_0%_0%,#e9f2ff_0%,transparent_55%),radial-gradient(900px_450px_at_100%_100%,#f6fbff_0%,transparent_55%),linear-gradient(120deg,#ffffff,#f5f8ff,#eef6ff)] bg-[length:200%_200%] animate-gradient-slow"
        />
        {children}
      </body>
    </html>
  );
}
