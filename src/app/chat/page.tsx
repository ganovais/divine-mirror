"use client";

import Link from "next/link";
import { ArrowLeft, Bot } from "lucide-react";
import { Chat } from "@/components/chat";
import { Button } from "@/components/ui/button";

export default function ChatPage() {
  return (
    <div className="h-screen flex flex-col">
      {/* Navigation Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-200">
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

      {/* Chat Component */}
      <div className="flex-1 flex flex-col">
        <Chat />
      </div>
    </div>
  );
}
