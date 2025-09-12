"use client";

import { Bot, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
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

export function ModelSelector({
  selectedModel,
  onModelChange,
  availableModels,
}: ModelSelectorProps) {
  const selectedModelData = availableModels.find((m) => m.id === selectedModel);

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
        className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-3 bg-red-50 border border-red-200 rounded-xl max-w-sm mx-auto sm:max-w-none"
      >
        <div className="p-1.5 sm:p-2 bg-red-100 rounded-lg flex-shrink-0">
          <Bot className="w-4 h-4 text-red-600" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-red-800">
            Nenhum modelo disponível
          </p>
          <p className="text-xs text-red-600">Verifique suas chaves de API</p>
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
        className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-3 bg-white border border-slate-200 rounded-xl shadow-sm max-w-sm mx-auto sm:max-w-none"
      >
        <div className="p-1.5 sm:p-2 bg-red-50 rounded-lg flex-shrink-0">
          {getModelIcon(model.provider)}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-slate-900 truncate">
            {model.name}
          </p>
          <p className="text-xs text-slate-600 truncate hidden sm:block">
            {model.description}
          </p>
        </div>
        <div
          className={`px-2 py-1 text-xs font-medium rounded-full border flex-shrink-0 ${getProviderBadgeColor(
            model.provider
          )}`}
        >
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
        <SelectTrigger className="min-h-[50px] bg-white border-2 border-slate-300 rounded-xl shadow-lg hover:shadow-xl hover:border-[#8e0000]/40 transition-all duration-200 focus:ring-1 focus:ring-[#8e0000]/30 focus:border-[#8e0000]">
          <div className="flex items-center gap-2 sm:gap-3 w-full">
            {selectedModelData && (
              <div className="p-1.5 sm:p-2 bg-gradient-to-br from-red-50 to-red-100 rounded-lg flex-shrink-0 shadow-sm">
                {getModelIcon(selectedModelData.provider)}
              </div>
            )}
            <div className="flex-1 text-left min-w-0">
              {selectedModelData && (
                <>
                  <p className="font-semibold text-slate-900 text-sm sm:text-base truncate">
                    {selectedModelData.name}
                  </p>
                  <p className="text-xs text-slate-600 truncate mt-0.5 hidden sm:block">
                    {selectedModelData.description}
                  </p>
                </>
              )}
            </div>
            <div
              className={`hidden sm:block px-2 py-1 text-xs font-medium rounded-full border flex-shrink-0 ${getProviderBadgeColor(
                selectedModelData?.provider || ""
              )}`}
            >
              {selectedModelData?.provider === "openai" ? "OpenAI" : "Google"}
            </div>
          </div>
        </SelectTrigger>

        <SelectContent className="w-full bg-white border-2 border-slate-300 rounded-xl">
          <div className="text-xs font-bold text-slate-700 uppercase tracking-wide px-3 py-2 mb-3 border-b border-slate-200">
            Modelos Disponíveis
          </div>

          {availableModels.map((model) => (
            <SelectItem
              key={model.id}
              value={model.id}
              className="p-3 sm:p-4 rounded-lg cursor-pointer hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 focus:bg-gradient-to-r focus:from-red-50 focus:to-red-100 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-red-100 data-[state=checked]:to-red-200 border-2 border-transparent hover:border-red-300 focus:border-red-300 data-[state=checked]:border-red-400 transition-all duration-200 mb-1.5 sm:mb-2"
            >
              <div className="flex items-start gap-2 sm:gap-3 w-full">
                <div className="p-1.5 sm:p-2 bg-gradient-to-br from-red-50 to-red-100 rounded-lg flex-shrink-0 shadow-sm">
                  {getModelIcon(model.provider)}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-slate-900 text-sm truncate">
                    {model.name}
                  </div>
                  <div className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                    {model.description}
                  </div>
                  <div
                    className={`inline-flex items-center gap-1 mt-2 px-2 py-1 rounded-full text-xs font-semibold border ${getProviderBadgeColor(
                      model.provider
                    )}`}
                  >
                    {model.provider === "openai" ? "OpenAI" : "Google"}
                  </div>
                </div>

                {selectedModel === model.id && (
                  <div className="flex-shrink-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#8e0000] rounded-full mt-2 sm:mt-3 shadow-sm" />
                )}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </motion.div>
  );
}
