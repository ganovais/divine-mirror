"use server"

import Link from "next/link";
import { Suspense } from "react";
import { ArrowLeft, Loader2 } from "lucide-react";

import { Chat } from "@/components/chat";
import { Button } from "@/components/ui/button";
import { getAvailableModels, getDefaultModel } from "@/ai/get-model";

async function getModelsData() {
  try {
    const availableModels = getAvailableModels();
    let defaultModel = null;

    try {
      defaultModel = getDefaultModel();
    } catch (error) {
      // No models available
    }

    return { availableModels, defaultModel };
  } catch (error) {
    console.error("Error getting models:", error);
    return { availableModels: [], defaultModel: null };
  }
}

function ChatLoading() {
  return (
    <div className="flex flex-col h-screen">
      {/* Header with improved design */}
      <div className="border-b border-slate-200/50 bg-gradient-to-r from-red-50 via-red-100 to-red-50 backdrop-blur-xl relative z-20">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 flex justify-center pointer-events-none"
        >
          <div
            className="h-16 w-[28rem] sm:w-[36rem] blur-3xl opacity-60"
            style={{ background: "linear-gradient(90deg, #8e0000, #cd2323)" }}
          />
        </div>

        <div className="container mx-auto max-w-4xl px-4 py-6 relative">
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

            <div className="text-center">
              <h1 className="text-xl font-bold bg-gradient-to-r from-slate-900 via-[#8e0000] to-slate-900 bg-clip-text text-transparent">
                O Espelho Divino
              </h1>
              <p className="text-sm text-slate-600">Seu guia espiritual</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-hidden flex items-center justify-center">
        <div className="flex items-center gap-3 text-slate-600">
          <Loader2 className="w-6 h-6 animate-spin text-[#8e0000]" />
          <span className="text-lg">Carregando o Espelho Divino...</span>
        </div>
      </div>
    </div>
  );
}

export default async function ChatPage() {
  const { availableModels, defaultModel } = await getModelsData();

  return (
    <div className="flex flex-col h-screen">
      {/* Header with improved design */}
      <div className="border-b border-slate-200/50 bg-gradient-to-r from-red-50 via-red-50 to-red-50 backdrop-blur-xl relative z-20">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 flex justify-center pointer-events-none"
        >
          <div
            className="h-16 w-[28rem] sm:w-[36rem] blur-3xl opacity-60"
            style={{ background: "linear-gradient(90deg, #8e0000, #cd2323)" }}
          />
        </div>

        <div className="container mx-auto max-w-4xl px-4 py-6 relative">
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

            <div className="text-center">
              <h1 className="text-xl font-bold bg-gradient-to-r from-slate-900 via-[#8e0000] to-slate-900 bg-clip-text text-transparent">
                O Espelho Divino
              </h1>
              <p className="text-sm text-slate-600">Seu guia espiritual</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-hidden">
        <Suspense fallback={<ChatLoading />}>
          <Chat availableModels={availableModels} defaultModel={defaultModel} />
        </Suspense>
      </div>
    </div>
  );
}
