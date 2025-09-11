import { google } from "@ai-sdk/google";
import { openai } from "@ai-sdk/openai";
import { aiConfig, validateEnvironment } from "./config";

export function getModel(modelName: string) {
  // Validate environment variables
  const envValidation = validateEnvironment();
  if (!envValidation.isValid) {
    console.warn("Environment validation failed:", envValidation.errors);
  }

  switch (modelName) {
    case "openai":
      if (!aiConfig.openai.isConfigured) {
        throw new Error("OpenAI API key is not configured");
      }
      return openai("gpt-5-mini");
    
    case "google":
      if (!aiConfig.google.isConfigured) {
        throw new Error("Google Gemini API key is not configured");
      }
      return google("gemini-2.5-flash");
    
    default:
      // Default to OpenAI if available, otherwise Google
      if (aiConfig.openai.isConfigured) {
        return openai("gpt-5-mini");
      } else if (aiConfig.google.isConfigured) {
        return google("gemini-2.5-flash");
      } else {
        throw new Error("No AI providers are properly configured. Please set OPENAI_API_KEY or GEMINI_API_KEY in your environment variables.");
      }
  }
}

export const availableModels = [
  { 
    id: "openai", 
    name: "OpenAI GPT-5 Mini", 
    provider: "openai",
    description: "Modelo mais recente e eficiente da OpenAI",
    isAvailable: aiConfig.openai.isConfigured,
  },
  { 
    id: "google", 
    name: "Google Gemini 2.5 Flash", 
    provider: "google",
    description: "Modelo mais recente e eficiente da Google",
    isAvailable: aiConfig.google.isConfigured,
  },
] as const;

/**
 * Gets only the available models based on environment configuration
 */
export function getAvailableModels() {
  return availableModels.filter(model => model.isAvailable);
}

/**
 * Gets the default model based on what's available
 */
export function getDefaultModel() {
  const available = getAvailableModels();
  if (available.length === 0) {
    throw new Error("No AI models are available. Please configure your API keys.");
  }
  return available[0].id;
}
