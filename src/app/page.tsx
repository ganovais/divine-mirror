"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { createElement, type ComponentType } from "react";
import * as Icons from "lucide-react";
import Image from "next/image";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { stations } from "@/lib/data";
import LogoSantaRita from "@/assets/logo-santa-rita.png";

export default function Home() {
  return (
    <main className="relative min-h-dvh mx-auto max-w-4xl px-4 sm:px-6 py-10 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-8 md:mb-12"
      >
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">
          O Espelho Divino
        </h1>
        <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-balance px-2">
          Explore estações temáticas e descubra versículos que falam ao seu
          momento. Clique em uma estação para refletir.
        </p>
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
  );
}
