"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { createElement, type ComponentType } from "react";
import * as Icons from "lucide-react";
import { MessageCircle, Sparkles } from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { stations } from "@/lib/data";
import LogoSantaRita from "@/assets/logo-santa-rita.png";

export default function Home() {
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

        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-8"
        >
          {/* Enhanced Header with Logo and Title */}
          <div className="flex flex-col items-center gap-6">
            <Image
              src={LogoSantaRita}
              alt="Logo Santa Rita"
              priority
              className="h-20 w-auto sm:h-24 drop-shadow-[0_12px_24px_rgba(205,35,35,0.35)] hover:drop-shadow-[0_16px_32px_rgba(205,35,35,0.45)] transition-all duration-300"
            />
            
            <div className="relative">
              {/* Glow effect behind text */}
              <div
                className="absolute inset-0 blur-2xl opacity-20"
                style={{ background: "linear-gradient(90deg, #8e0000, #cd2323, #8e0000)" }}
              />
              
              <h1 className="relative text-4xl md:text-6xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-slate-900 via-[#8e0000] to-slate-900 bg-clip-text text-transparent drop-shadow-sm">
                  O Espelho Divino
                </span>
              </h1>
              
              <div className="flex items-center justify-center gap-2 mt-3">
                <div className="h-px bg-gradient-to-r from-transparent via-[#8e0000]/30 to-transparent flex-1 max-w-16"></div>
                <div className="w-2 h-2 bg-[#8e0000] rounded-full opacity-60"></div>
                <div className="h-px bg-gradient-to-r from-transparent via-[#8e0000]/30 to-transparent flex-1 max-w-16"></div>
              </div>
            </div>
          </div>
        </motion.div>

        <main className="relative">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-center mb-8 md:mb-12"
          >
            <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-balance px-2 text-lg leading-relaxed">
              Explore estações temáticas e descubra versículos que falam ao seu
              momento. Clique em uma estação para refletir ou converse diretamente com o Espelho Divino.
            </p>
            
            {/* Chat CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="mt-6"
            >
              <Link href="/chat">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group">
                  <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Conversar com o Espelho Divino
                  <Sparkles className="w-4 h-4 ml-2 opacity-70" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {stations.map((station, idx) => {
              const iconName = (station.icon || "circle").toString();
              const candidate =
                (Icons as any)[iconName] ||
                (Icons as any)[iconName[0].toUpperCase() + iconName.slice(1)] ||
                (Icons as any)[
                  iconName.replace(/(^|[-_])(\w)/g, (_, __, c) => c.toUpperCase())
                ] ||
                (Icons as any)["Circle"];
              const Icon = candidate as ComponentType<any> | undefined;
              return (
                <motion.div
                  key={station.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                >
                  <Link href={`/estacao/${station.id}`} className="group block">
                    <Card className="bg-white/60 border-white/30 backdrop-blur-xl shadow-[0_8px_30px_rgba(2,6,23,.06)] transition-transform duration-200 group-hover:scale-[1.03] hover:shadow-[0_12px_40px_rgba(2,6,23,.10)]">
                      <CardHeader className="flex flex-row items-center gap-3">
                        {Icon &&
                          createElement(Icon, {
                            className: "size-5 text-slate-700",
                          })}
                        <div>
                          <CardTitle className="text-slate-900 text-base sm:text-lg">
                            {station.title}
                          </CardTitle>
                          <CardDescription className="text-slate-500">
                            {station.verses.length} versículos
                          </CardDescription>
                        </div>
                      </CardHeader>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
}
