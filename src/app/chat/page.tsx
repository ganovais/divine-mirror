"use client";

import Link from "next/link";
import { ArrowLeft, Bot } from "lucide-react";
import { Chat } from "@/components/chat";
import { Button } from "@/components/ui/button";

export default function ChatPage() {
  return (
    <div className="flex flex-col h-screen">
      <div className="border-b border-slate-200 bg-white relative z-20">
        <div className="container mx-auto max-w-4xl px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button
                variant="ghost"
                className="flex items-center gap-2 text-slate-600 hover:text-[#8e0000] transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Voltar</span>
              </Button>
            </Link>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-red-50">
                <Bot className="w-5 h-5 text-[#8e0000]" />
              </div>
              <div>
                <h2 className="font-semibold text-slate-900">Espelho Divino</h2>
                <p className="text-sm text-slate-600">Seu guia espiritual</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-hidden">
        <Chat />
      </div>
    </div>
  );
}
