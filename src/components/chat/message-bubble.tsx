"use client";

import { motion } from "framer-motion";
import { Copy, Check, Loader2 } from "lucide-react";
import { useState } from "react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  isStreaming?: boolean;
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
          isUser
            ? "items-end max-w-[85%] sm:max-w-[75%] md:max-w-[70%]"
            : "items-start w-full"
        } `}
      >
        <div
          className={`px-4 py-3 rounded-2xl ${
            isUser
              ? "bg-[#8e0000] text-white rounded-br-md shadow-sm"
              : "bg-gray-50/50 text-slate-900 rounded-bl-md border border-gray-100"
          }`}
        >
          <div className="leading-relaxed whitespace-pre-wrap text-sm sm:text-base">
            {message.isStreaming && !message.content && (
              <div className="flex items-center gap-1">
                <Loader2 className="w-4 h-4 animate-spin text-[#8e0000]" />
                <span className="text-sm">Refletindo...</span>
              </div>
            )}
            {message.content ||
              (message.isStreaming && !message.content ? " " : "")}
            {/* Streaming pulse indicator on the final message content */}
            {message.isStreaming && message.content && (
              <>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.2,
                    ease: "easeInOut",
                  }}
                  className="inline-block w-0.5 h-4 bg-[#8e0000] ml-0.5 rounded-full"
                />
              </>
            )}
          </div>
        </div>

        {/* Message Info */}
        {message.content && !message.isStreaming && (
          <div
            className={`flex items-center gap-2 mt-2 px-2 ${
              isUser ? "justify-end" : "justify-start"
            }`}
          >
            <span className="text-xs text-slate-500">
              {formatTime(message.timestamp)}
            </span>

            {/* Copy button for assistant messages */}
            <button
              onClick={copyToClipboard}
              className="p-1.5 rounded-md hover:bg-slate-100 transition-colors"
              title="Copiar mensagem"
            >
              {copied ? (
                <Check className="size-3.5 text-green-600" />
              ) : (
                <Copy className="size-3.5 text-slate-500" />
              )}
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
