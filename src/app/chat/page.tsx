"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Chat } from "@/components/chat";
import { Button } from "@/components/ui/button";

export default function ChatPage() {
  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-slate-50">
      {/* Navigation Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-white/80 backdrop-blur-sm">
        <Link href="/">
          <Button variant="ghost" className="flex items-center gap-2 text-slate-600 hover:text-slate-900">
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
        </Link>
        
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm text-slate-600">Online</span>
        </div>
      </div>
      
      {/* Chat Component */}
      <div className="flex-1 flex flex-col">
        <Chat />
      </div>
    </div>
  );
}
