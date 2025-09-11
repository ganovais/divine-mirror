"use client";

import { useState, useEffect } from "react";

interface Model {
  id: string;
  name: string;
  provider: string;
  description: string;
  isAvailable: boolean;
}

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export function useChat() {
  const [isLoading, setIsLoading] = useState(false);
  const [availableModels, setAvailableModels] = useState<Model[]>([]);

  // Fetch available models on mount
  useEffect(() => {
    fetchAvailableModels();
  }, []);

  const fetchAvailableModels = async () => {
    try {
      const response = await fetch("/api/models");
      if (!response.ok) {
        throw new Error("Failed to fetch models");
      }
      
      const data = await response.json();
      setAvailableModels(data.models || []);
    } catch (error) {
      console.error("Error fetching models:", error);
      setAvailableModels([]);
    }
  };

  const sendMessage = async (messages: ChatMessage[], modelName: string): Promise<string> => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/ai-stream", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages,
          modelName,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
      }

      // Handle streaming response
      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error("No response body reader available");
      }

      let fullResponse = "";
      const decoder = new TextDecoder();

      try {
        while (true) {
          const { done, value } = await reader.read();
          
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          fullResponse += chunk;
        }
      } finally {
        reader.releaseLock();
      }

      return fullResponse;
    } catch (error) {
      console.error("Chat error:", error);
      
      // Return user-friendly error messages
      if (error instanceof Error) {
        if (error.message.includes("503")) {
          return "O serviço de IA não está configurado corretamente. Por favor, verifique as chaves de API.";
        } else if (error.message.includes("429")) {
          return "O serviço está temporariamente indisponível devido a limites de taxa. Tente novamente em alguns minutos.";
        } else if (error.message.includes("network") || error.message.includes("fetch")) {
          return "Erro de conexão. Verifique sua internet e tente novamente.";
        }
      }
      
      return "Desculpe, ocorreu um erro inesperado. Por favor, tente novamente.";
    } finally {
      setIsLoading(false);
    }
  };

  return {
    sendMessage,
    isLoading,
    availableModels,
    refetchModels: fetchAvailableModels,
  };
}
