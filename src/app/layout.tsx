"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";

import LogoSantaRita from "@/assets/logo-santa-rita.png";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen w-full bg-white`}
      >
        {/* Animated gradient background layer */}
        <div className="min-h-dvh mx-auto max-w-5xl px-4 sm:px-6 py-10 md:py-16">
          <div
            aria-hidden
            className="fixed inset-0 -z-10 animate-gradient-slow"
          />
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 flex justify-center pointer-events-none"
          >
            <div
              className="h-32 sm:h-48 w-[28rem] sm:w-[36rem] blur-3xl opacity-90"
              style={{ background: "linear-gradient(90deg, #8e0000, #cd2323)" }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center"
          >
            {/* Logo */}
            <Image
              src={LogoSantaRita}
              alt="Logo Santa Rita"
              priority
              className="mx-auto h-16 w-auto sm:h-20 drop-shadow-[0_8px_18px_rgba(205,35,35,0.25)]"
            />
          </motion.div>
          {children}
        </div>
        {/* <footer>
          <p>Produzido por célula Santa Rita de Cássia</p>
        </footer> */}
      </body>
    </html>
  );
}
