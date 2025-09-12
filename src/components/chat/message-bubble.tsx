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
      className={`group flex gap-3 ${
        isUser ? "justify-end" : "justify-start"
      } mb-6 px-1`}
    >
      <div
        className={`flex flex-col ${
          isUser ? "items-end" : "items-start"
        } max-w-[85%] sm:max-w-[75%] md:max-w-[70%]`}
      >
        <div
          className={`rounded-2xl ${
            isUser
              ? "px-4 py-3 bg-[#8e0000] text-white rounded-br-md shadow-sm"
              : "px-4 py-3 bg-slate-50 text-slate-900 rounded-bl-md shadow-sm border border-slate-200"
          }`}
        >
          <div className="leading-relaxed whitespace-pre-wrap text-sm sm:text-base">
            {message.content}
          </div>
        </div>

        {/* Message Info */}
        <div
          className={`flex items-center gap-2 mt-2 px-2 ${
            isUser ? "justify-end" : "justify-start"
          }`}
        >
          <span className="text-xs text-slate-500">
            {formatTime(message.timestamp)}
          </span>

          {/* Copy button for assistant messages */}
          {!isUser && (
            <button
              onClick={copyToClipboard}
              className="p-1.5 rounded-md hover:bg-slate-100 transition-colors opacity-0 group-hover:opacity-100"
              title="Copiar mensagem"
            >
              {copied ? (
                <Check className="size-3.5 text-green-600" />
              ) : (
                <Copy className="size-3.5 text-slate-500" />
              )}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
