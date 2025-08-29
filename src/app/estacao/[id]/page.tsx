"use client";
import Link from "next/link";
import { use, useMemo } from "react";
import { motion } from "framer-motion";
import { getStationById } from "@/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function StationPage({ params }: PageProps) {
  const { id } = use(params);
  const station = useMemo(() => getStationById(id), [id]);

  if (!station) {
    return (
      <main className="min-h-screen mx-auto max-w-4xl px-6 py-16">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-semibold text-slate-100">
            Estação não encontrada
          </h1>
          <p className="text-slate-400">Verifique o endereço ou volte para o início.</p>
          <Link href="/">
            <Button variant="secondary">Voltar</Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
  <main className="min-h-dvh mx-auto max-w-4xl px-4 sm:px-6 py-10 md:py-16">
      <motion.h1
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-2xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6"
      >
        {station.title}
      </motion.h1>

      <div className="mb-4">
        <Link href="/">
          <Button
            variant="ghost"
            className="gap-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100/70"
          >
            <ArrowLeft className="size-4" />
            Voltar
          </Button>
        </Link>
      </div>

      <Accordion type="single" collapsible className="space-y-2">
        {station.verses.map((v, idx) => (
          <AccordionItem
            key={v.reference}
            value={`item-${idx}`}
            className="border border-slate-200/80 rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm"
          >
            <AccordionTrigger className="px-4">
              <span className="text-slate-900 text-left">{v.reference}</span>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
                className="text-slate-700 leading-relaxed"
              >
                {v.text && v.text.trim().length > 0 ? (
                  v.text
                ) : (
                  <span className="text-slate-500 italic">
                    Adicione o texto deste versículo em <span className="font-mono">lib/data.ts</span>.
                  </span>
                )}
              </motion.div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {station.questions && station.questions.length > 0 && (
        <div className="mt-8">
          <div className="rounded-xl border border-slate-200/80 bg-white/80 backdrop-blur-sm p-4">
            <h2 className="text-lg font-medium text-slate-900">Para refletir</h2>
            <ul className="mt-3 space-y-2 list-disc pl-5 text-slate-700">
              {station.questions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </main>
  );
}
