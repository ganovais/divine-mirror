"use client";

import { motion } from "framer-motion";
import { User, Bot, Copy, Check } from "lucide-react";
import { useState } from "react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface MessageBubbleProps {
  message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const [copied, setCopied] = useState(false);
  const isUser = message.role === "user";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(message.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy message:", error);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex gap-3 ${isUser ? "justify-end" : "justify-start"}`}
    >
      {/* Avatar - only for assistant */}
      {!isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
          <Bot className="w-4 h-4 text-blue-600" />
        </div>
      )}

      {/* Message Content */}
      <div className={`max-w-[70%] ${isUser ? "order-first" : ""}`}>
        <div
          className={`px-4 py-3 rounded-2xl ${
            isUser
              ? "bg-blue-600 text-white rounded-br-md"
              : "bg-white border border-slate-200 rounded-bl-md shadow-sm"
          }`}
        >
          <div className="text-sm leading-relaxed whitespace-pre-wrap">
            {message.content}
          </div>
        </div>

        {/* Message Info */}
        <div className={`flex items-center gap-2 mt-1 px-1 ${isUser ? "justify-end" : "justify-start"}`}>
          <span className="text-xs text-slate-500">
            {formatTime(message.timestamp)}
          </span>
          
          {/* Copy button for assistant messages */}
          {!isUser && (
            <button
              onClick={copyToClipboard}
              className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-slate-100"
              title="Copiar mensagem"
            >
              {copied ? (
                <Check className="w-3 h-3 text-green-600" />
              ) : (
                <Copy className="w-3 h-3 text-slate-500" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Avatar - only for user */}
      {isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
          <User className="w-4 h-4 text-slate-600" />
        </div>
      )}
    </motion.div>
  );
}
