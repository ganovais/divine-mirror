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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen w-full`}
      >
        {/* Animated gradient background layer */}
        <div
          aria-hidden
          className="fixed inset-0 -z-10 bg-[radial-gradient(1000px_500px_at_0%_0%,#e9f2ff_0%,transparent_55%),radial-gradient(900px_450px_at_100%_100%,#f6fbff_0%,transparent_55%),linear-gradient(120deg,#ffffff,#f5f8ff,#eef6ff)] bg-[length:200%_200%] animate-gradient-slow"
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
          className="text-center md:mb-12"
        >
          {/* Logo */}
          <Image
            src={LogoSantaRita}
            alt="Logo Santa Rita"
            priority
            className="mt-8 mx-auto h-16 w-auto sm:h-20 drop-shadow-[0_8px_18px_rgba(205,35,35,0.25)]"
          />

          {/* Badge com gradiente requisitado e glass */}
          <div
            className="mt-4 inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-medium text-white shadow-sm backdrop-blur-md"
            style={{ background: "linear-gradient(90deg, #8e0000, #cd2323)" }}
          >
            Célula Santa Rita de Cássia
          </div>
        </motion.div>
        {children}
      </body>
    </html>
  );
}
