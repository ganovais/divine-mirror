"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, RefreshCw, MessageCircle, AlertTriangle } from "lucide-react";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Logo } from "@/components/ui/logo";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <>
      {/* Enhanced animated gradient background layers */}
      <div className="min-h-dvh mx-auto max-w-5xl px-4 sm:px-6 py-10 md:py-16 relative">
        {/* Primary background gradient */}
        <div
          aria-hidden
          className="fixed inset-0 -z-20 animate-gradient-slow"
        />
        
        {/* Multiple layered blur effects */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 flex justify-center pointer-events-none"
        >
          {/* Main blur */}
          <div
            className="h-40 sm:h-56 w-[32rem] sm:w-[40rem] blur-3xl opacity-60"
            style={{ background: "linear-gradient(90deg, #8e0000, #cd2323, #8e0000)" }}
          />
        </div>
        
        {/* Secondary blur layers for depth */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-20 flex justify-center pointer-events-none"
        >
          <div
            className="h-24 sm:h-32 w-[20rem] sm:w-[24rem] blur-2xl opacity-30"
            style={{ background: "radial-gradient(circle, #cd2323, transparent)" }}
          />
        </div>
        
        {/* Subtle animated particles */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none overflow-hidden"
        >
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#8e0000]/20 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-[#cd2323]/30 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-[#8e0000]/15 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <main className="relative flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            {/* Logo */}
            <Logo />
            
            <div className="relative">
              {/* Glow effect behind text */}
              <div
                className="absolute inset-0 blur-2xl opacity-20"
                style={{ background: "linear-gradient(90deg, #8e0000, #cd2323, #8e0000)" }}
              />
              
              <div className="relative flex items-center justify-center gap-3 mb-4">
                <AlertTriangle className="size-12 md:size-16 text-[#8e0000]" />
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-slate-900 via-[#8e0000] to-slate-900 bg-clip-text text-transparent drop-shadow-sm">
                    Oops!
                  </span>
                </h1>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-2">
                Algo deu errado
              </h2>
              
              <div className="flex items-center justify-center gap-2 mt-3 mb-6">
                <div className="h-px bg-gradient-to-r from-transparent via-[#8e0000]/30 to-transparent flex-1 max-w-16"></div>
                <div className="w-2 h-2 bg-[#8e0000] rounded-full opacity-60"></div>
                <div className="h-px bg-gradient-to-r from-transparent via-[#8e0000]/30 to-transparent flex-1 max-w-16"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="mb-8"
          >
            <p className="text-slate-600 max-w-md mx-auto text-balance text-lg leading-relaxed mb-4">
              Ocorreu um erro inesperado na aplicação. Não se preocupe, você pode tentar novamente.
            </p>
            
            {/* Error details for development */}
            {process.env.NODE_ENV === 'development' && (
              <details className="mt-4 p-4 bg-slate-100/50 rounded-lg border border-slate-200/50 text-left max-w-2xl mx-auto">
                <summary className="cursor-pointer text-slate-700 font-medium mb-2">
                  Detalhes do erro (desenvolvimento)
                </summary>
                <pre className="text-xs text-slate-600 whitespace-pre-wrap break-all">
                  {error.message}
                  {error.digest && `\nDigest: ${error.digest}`}
                </pre>
              </details>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl"
          >
            {/* Try Again Card */}
            <Card className="bg-white/60 border-white/30 backdrop-blur-xl shadow-[0_8px_30px_rgba(2,6,23,.06)] transition-transform duration-200 hover:scale-[1.03] hover:shadow-[0_12px_40px_rgba(2,6,23,.10)]">
              <CardHeader className="flex flex-col items-center gap-3 text-center">
                <RefreshCw className="size-6 text-slate-700" />
                <div>
                  <CardTitle className="text-slate-900 text-base">
                    Tentar Novamente
                  </CardTitle>
                  <CardDescription className="text-slate-500 text-sm">
                    Recarregar a página
                  </CardDescription>
                </div>
                <Button 
                  onClick={reset}
                  className="w-full bg-gradient-to-r from-[#8e0000] to-[#cd2323] hover:from-[#7a0000] hover:to-[#b51f1f] text-white"
                >
                  Tentar Novamente
                </Button>
              </CardHeader>
            </Card>

            {/* Home Card */}
            <Card className="bg-white/60 border-white/30 backdrop-blur-xl shadow-[0_8px_30px_rgba(2,6,23,.06)] transition-transform duration-200 hover:scale-[1.03] hover:shadow-[0_12px_40px_rgba(2,6,23,.10)]">
              <CardHeader className="flex flex-col items-center gap-3 text-center">
                <Home className="size-6 text-slate-700" />
                <div>
                  <CardTitle className="text-slate-900 text-base">
                    Página Inicial
                  </CardTitle>
                  <CardDescription className="text-slate-500 text-sm">
                    Voltar ao início
                  </CardDescription>
                </div>
                <Link href="/" className="w-full">
                  <Button variant="outline" className="w-full border-slate-300 text-slate-700 hover:bg-slate-50">
                    Ir para Home
                  </Button>
                </Link>
              </CardHeader>
            </Card>

            {/* Chat Card */}
            <Card className="bg-white/60 border-white/30 backdrop-blur-xl shadow-[0_8px_30px_rgba(2,6,23,.06)] transition-transform duration-200 hover:scale-[1.03] hover:shadow-[0_12px_40px_rgba(2,6,23,.10)]">
              <CardHeader className="flex flex-col items-center gap-3 text-center">
                <MessageCircle className="size-6 text-slate-700" />
                <div>
                  <CardTitle className="text-slate-900 text-base">
                    Espelho Divino
                  </CardTitle>
                  <CardDescription className="text-slate-500 text-sm">
                    Conversar com a IA
                  </CardDescription>
                </div>
                <Link href="/chat" className="w-full">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    Abrir Chat
                  </Button>
                </Link>
              </CardHeader>
            </Card>
          </motion.div>
        </main>
      </div>
    </>
  );
}