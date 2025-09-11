"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Bot,
  Loader2,
  Plus,
  MessageSquare,
  Lightbulb,
  Heart,
  BookOpen,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ModelSelector } from "./model-selector";
import { MessageBubble } from "./message-bubble";
import { useChat } from "./use-chat";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [selectedModel, setSelectedModel] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // This effect runs whenever the 'input' state changes
  const [isMultiline, setIsMultiline] = useState(false);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      // Temporarily reset height to auto to calculate the actual scroll height
      textarea.style.height = "auto";
      // Set the height to the scroll height to fit the content
      textarea.style.height = `${textarea.scrollHeight}px`;

      // Check if content is multiline (more than single line height)
      const singleLineHeight = 56; // approximate single line height in pixels
      setIsMultiline(textarea.scrollHeight > singleLineHeight * 1.5);
    }
  }, [input]);

  const { sendMessage, isLoading, availableModels } = useChat();

  // Set default model when available models load
  useEffect(() => {
    if (availableModels.length > 0 && !selectedModel) {
      setSelectedModel(availableModels[0].id);
    }
  }, [availableModels, selectedModel]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading || !selectedModel) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await sendMessage(
        [...messages, userMessage].map((m) => ({
          role: m.role,
          content: m.content,
        })),
        selectedModel
      );

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Failed to send message:", error);

      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          "Desculpe, ocorreu um erro ao processar sua mensagem. Por favor, tente novamente.",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  const suggestionCards = [
    {
      icon: <Heart className="w-5 h-5 text-[#8e0000]" />,
      title: "Oração e Fé",
      description: "Como posso fortalecer minha fé através da oração?",
      prompt: "Como posso fortalecer minha fé através da oração?",
    },
    {
      icon: <BookOpen className="w-5 h-5 text-[#8e0000]" />,
      title: "Versículos Bíblicos",
      description: "Compartilhe um versículo sobre esperança",
      prompt:
        "Compartilhe um versículo bíblico sobre esperança e explique seu significado",
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-[#8e0000]" />,
      title: "Sabedoria Espiritual",
      description: "Como lidar com momentos difíceis com fé?",
      prompt: "Como posso lidar com momentos difíceis mantendo minha fé?",
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-[#8e0000]" />,
      title: "Evangelização",
      description: "Como compartilhar o evangelho com amor?",
      prompt: "Como posso compartilhar o evangelho de forma amorosa e eficaz?",
    },
  ];

  const handleSuggestionClick = (prompt: string) => {
    setInput(prompt);
  };

  return (
    <div className="flex flex-col h-full w-full">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <ModelSelector
          selectedModel={selectedModel}
          onModelChange={setSelectedModel}
          availableModels={availableModels}
        />
        <Button
          variant="outline"
          size="sm"
          onClick={clearChat}
          disabled={messages.length === 0}
          className="flex items-center gap-2 border-[#8e0000] text-[#8e0000] hover:bg-[#8e0000] hover:text-white transition-colors"
        >
          <Plus className="w-4 h-4" />
          Novo chat
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        <AnimatePresence>
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center p-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-8"
              >
                <div className="p-4 rounded-full bg-red-50 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Bot className="w-8 h-8 text-[#8e0000]" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Bem-vindo ao Espelho Divino
                </h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed mb-8">
                  Faça perguntas sobre fé, espiritualidade, versículos bíblicos,
                  orações e temas relacionados à evangelização.
                </p>
              </motion.div>

              {/* Suggestion Cards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl w-full"
              >
                {suggestionCards.map((card, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card
                      className="p-4 cursor-pointer hover:shadow-md transition-all duration-200 border-red-100 hover:border-[#8e0000]/30 bg-white/80 backdrop-blur-sm"
                      onClick={() => handleSuggestionClick(card.prompt)}
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-red-50">
                          {card.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-slate-900 mb-1">
                            {card.title}
                          </h4>
                          <p className="text-sm text-slate-600 leading-relaxed">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ) : (
            <div className="p-4 space-y-4">
              {messages.map((message) => (
                <MessageBubble key={message.id} message={message} />
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-slate-600"
                >
                  <div className="p-2 rounded-full bg-red-50">
                    <Bot className="w-4 h-4 text-[#8e0000]" />
                  </div>
                  <div className="flex items-center gap-1">
                    <Loader2 className="w-4 h-4 animate-spin text-[#8e0000]" />
                    <span className="text-sm">Refletindo...</span>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Input - Fixed at bottom when there are messages */}
      <div
        className={`p-4 ${
          messages.length > 0 ? "fixed bottom-0 left-0 right-0" : ""
        }`}
      >
        <div className="w-full shadow-md rounded-xl relative bg-white overflow-hidden">
          <div
            className={`${
              isMultiline
                ? "relative px-7 pt-7 shadow-sm-inset-bottom"
                : "p-4 flex justify-between items-center"
            }`}
          >
            <textarea
              rows={1}
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Digite sua pergunta espiritual..."
              className={`w-full max-h-[270px] overflow-y-auto resize-none outline-none bg-white transition-all duration-200`}
              disabled={isLoading || !selectedModel}
            />
            {!isMultiline && (
              <Button
                onClick={handleSendMessage}
                disabled={!input.trim() || isLoading || !selectedModel}
                className="h-10 w-10 bg-[#8e0000] hover:bg-[#a50000] text-white rounded-full transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <Loader2 size={20} className="animate-spin" />
                ) : (
                  <Send strokeWidth={1.5} className="size-4" />
                )}
              </Button>
            )}
          </div>

          {/* Send button - at bottom with shadow when multiline */}
          {isMultiline && (
            <div className="z-10 flex justify-end p-2 ">
              <Button
                onClick={handleSendMessage}
                disabled={!input.trim() || isLoading || !selectedModel}
                className="h-10 w-10 bg-[#8e0000] hover:bg-[#a50000] text-white rounded-full transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center relative z-10"
              >
                {isLoading ? (
                  <Loader2 size={20} className="animate-spin" />
                ) : (
                  <Send strokeWidth={1.5} className="size-4" />
                )}
              </Button>
            </div>
          )}
        </div>
        {!selectedModel && availableModels.length === 0 && (
          <p className="text-sm text-[#8e0000] mt-2 text-center">
            Nenhum modelo de IA está disponível. Verifique suas chaves de API.
          </p>
        )}
      </div>

      {/* Spacer when input is fixed */}
      {messages.length > 0 && <div className="h-20" />}
    </div>
  );
}
