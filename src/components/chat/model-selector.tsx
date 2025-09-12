"use client";

import { Bot, Sparkles, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  const selectedModelData = availableModels.find(m => m.id === selectedModel);

  const getModelIcon = (provider: string) => {
    switch (provider) {
      case "openai":
        return <Bot className="w-4 h-4 text-[#8e0000]" />;
      case "google":
        return <Sparkles className="w-4 h-4 text-[#8e0000]" />;
      default:
        return <Bot className="w-4 h-4 text-[#8e0000]" />;
    }
  };

  const getProviderBadgeColor = (provider: string) => {
    switch (provider) {
      case "openai":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "google":
        return "bg-green-100 text-green-700 border-green-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  if (availableModels.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full sm:w-[300px] md:w-[340px] flex items-center gap-3 p-3 sm:p-4 min-h-[60px] bg-red-50 border-2 border-red-200 rounded-xl"
      >
        <div className="p-2 bg-red-100 rounded-lg flex-shrink-0">
          <Bot className="w-4 h-4 text-red-600" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm sm:text-base font-semibold text-red-800 leading-tight">Nenhum modelo disponível</p>
          <p className="text-xs text-red-600 mt-1 leading-tight">Verifique suas chaves de API</p>
        </div>
      </motion.div>
    );
  }

  if (availableModels.length === 1) {
    const model = availableModels[0];
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full sm:w-[300px] md:w-[340px] flex items-center gap-3 p-3 sm:p-4 min-h-[60px] bg-white border-2 border-slate-300 rounded-xl shadow-lg"
      >
        <div className="p-2 bg-gradient-to-br from-red-50 to-red-100 rounded-lg flex-shrink-0 shadow-sm">
          {getModelIcon(model.provider)}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm sm:text-base font-semibold text-slate-900 truncate leading-tight">{model.name}</p>
          <p className="text-xs text-slate-600 truncate mt-1 leading-tight">{model.description}</p>
        </div>
        <div className={`px-2.5 py-1.5 text-xs font-semibold rounded-full border-2 flex-shrink-0 ${getProviderBadgeColor(model.provider)}`}>
          {model.provider === "openai" ? "OpenAI" : "Google"}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full sm:w-auto"
    >
      <Select value={selectedModel} onValueChange={onModelChange}>
        <SelectTrigger className="w-full sm:w-[300px] md:w-[340px] h-auto min-h-[60px] p-3 sm:p-4 bg-white border-2 border-slate-300 rounded-xl shadow-lg hover:shadow-xl hover:border-[#8e0000]/40 transition-all duration-200 focus:ring-2 focus:ring-[#8e0000]/30 focus:border-[#8e0000]">
          <div className="flex items-center gap-3 w-full">
            {selectedModelData && (
              <div className="p-2 bg-gradient-to-br from-red-50 to-red-100 rounded-lg flex-shrink-0 shadow-sm">
                {getModelIcon(selectedModelData.provider)}
              </div>
            )}
            <div className="flex-1 text-left min-w-0">
              <SelectValue placeholder="Selecionar modelo">
                {selectedModelData && (
                  <>
                    <p className="font-semibold text-slate-900 text-sm sm:text-base truncate leading-tight">
                      {selectedModelData.name}
                    </p>
                    <p className="text-xs text-slate-600 truncate mt-1 leading-tight">
                      {selectedModelData.description}
                    </p>
                  </>
                )}
              </SelectValue>
            </div>
            {selectedModelData && (
              <div className={`px-2.5 py-1.5 text-xs font-semibold rounded-full border-2 flex-shrink-0 ${getProviderBadgeColor(selectedModelData.provider)}`}>
                {selectedModelData.provider === "openai" ? "OpenAI" : "Google"}
              </div>
            )}
          </div>
        </SelectTrigger>
        
        <SelectContent className="w-[calc(100vw-2rem)] sm:w-[300px] md:w-[340px] max-w-[340px] p-2 sm:p-3 bg-white border-2 border-slate-300 rounded-xl shadow-2xl">
          <div className="text-xs font-bold text-slate-700 uppercase tracking-wide px-3 py-2 mb-2 border-b border-slate-200">
            Modelos Disponíveis
          </div>
          
          {availableModels.map((model) => (
            <SelectItem 
              key={model.id} 
              value={model.id}
              className="p-3 sm:p-4 rounded-lg cursor-pointer hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 focus:bg-gradient-to-r focus:from-red-50 focus:to-red-100 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-red-100 data-[state=checked]:to-red-200 border-2 border-transparent hover:border-red-300 focus:border-red-300 data-[state=checked]:border-red-400 transition-all duration-200 mb-2 min-h-[60px] touch-manipulation"
            >
              <div className="flex items-start gap-3 w-full">
                <div className="p-2 bg-gradient-to-br from-red-50 to-red-100 rounded-lg flex-shrink-0 shadow-sm">
                  {getModelIcon(model.provider)}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-slate-900 text-sm sm:text-base truncate leading-tight">
                    {model.name}
                  </div>
                  <div className="text-xs text-slate-600 mt-1 line-clamp-2 leading-tight">
                    {model.description}
                  </div>
                  <div className={`inline-flex items-center gap-1 mt-2 px-2.5 py-1 rounded-full text-xs font-semibold border-2 ${getProviderBadgeColor(model.provider)}`}>
                    {model.provider === "openai" ? "OpenAI" : "Google"}
                  </div>
                </div>
                
                {selectedModel === model.id && (
                  <div className="flex-shrink-0 w-3 h-3 bg-[#8e0000] rounded-full mt-2 shadow-sm" />
                )}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </motion.div>
  );
}
