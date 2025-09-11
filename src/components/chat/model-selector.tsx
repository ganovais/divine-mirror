"use client";

import { ChevronDown, Bot, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Model {
  id: string;
  name: string;
  provider: string;
  description: string;
  isAvailable: boolean;
}

interface ModelSelectorProps {
  selectedModel: string;
  onModelChange: (modelId: string) => void;
  availableModels: Model[];
}

export function ModelSelector({ selectedModel, onModelChange, availableModels }: ModelSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedModelData = availableModels.find(m => m.id === selectedModel);

  const getModelIcon = (provider: string) => {
    switch (provider) {
      case "openai":
        return <Bot className="w-4 h-4 text-green-600" />;
      case "google":
        return <Sparkles className="w-4 h-4 text-blue-600" />;
      default:
        return <Bot className="w-4 h-4 text-slate-600" />;
    }
  };

  const getProviderColor = (provider: string) => {
    switch (provider) {
      case "openai":
        return "text-green-600 bg-green-50 border-green-200";
      case "google":
        return "text-blue-600 bg-blue-50 border-blue-200";
      default:
        return "text-slate-600 bg-slate-50 border-slate-200";
    }
  };

  if (availableModels.length === 0) {
    return (
      <div className="px-3 py-2 text-sm text-red-600 bg-red-50 rounded-lg border border-red-200">
        Nenhum modelo disponível
      </div>
    );
  }

  if (availableModels.length === 1) {
    const model = availableModels[0];
    return (
      <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${getProviderColor(model.provider)}`}>
        {getModelIcon(model.provider)}
        <span className="text-sm font-medium">{model.name}</span>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors hover:bg-slate-50 ${
          selectedModelData ? getProviderColor(selectedModelData.provider) : "text-slate-600 bg-slate-50 border-slate-200"
        }`}
      >
        {selectedModelData && getModelIcon(selectedModelData.provider)}
        <span className="text-sm font-medium">
          {selectedModelData?.name || "Selecionar modelo"}
        </span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-0 top-full mt-2 w-64 bg-white border border-slate-200 rounded-lg shadow-lg z-20"
            >
              <div className="p-2">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide px-2 py-1 mb-1">
                  Modelos Disponíveis
                </div>
                
                {availableModels.map((model) => (
                  <button
                    key={model.id}
                    onClick={() => {
                      onModelChange(model.id);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-start gap-3 p-3 rounded-lg transition-colors hover:bg-slate-50 ${
                      selectedModel === model.id ? "bg-blue-50 border border-blue-200" : ""
                    }`}
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      {getModelIcon(model.provider)}
                    </div>
                    
                    <div className="flex-1 text-left">
                      <div className="font-medium text-slate-900 text-sm">
                        {model.name}
                      </div>
                      <div className="text-xs text-slate-600 mt-0.5">
                        {model.description}
                      </div>
                      <div className={`inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full text-xs font-medium ${
                        model.provider === "openai" 
                          ? "bg-green-100 text-green-700" 
                          : "bg-blue-100 text-blue-700"
                      }`}>
                        {model.provider === "openai" ? "OpenAI" : "Google"}
                      </div>
                    </div>
                    
                    {selectedModel === model.id && (
                      <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2" />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
