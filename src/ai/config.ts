/**
 * AI Configuration for Divine Mirror
 * Manages environment variables and AI provider settings
 */

export const aiConfig = {
  // Environment variables validation
  openai: {
    apiKey: process.env.OPENAI_API_KEY,
    isConfigured: !!process.env.OPENAI_API_KEY,
  },
  google: {
    apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
    isConfigured: !!process.env.GOOGLE_GENERATIVE_AI_API_KEY,
  },

  // Default model settings
  defaults: {
    maxTokens: 2000,
    topP: 0.9,
  },

  // Model-specific configurations
  models: {
    openai: {
      "gpt-5-mini": {
        maxTokens: 4000,
        supportsStreaming: true,
        supportsTools: true,
      },
    },
    google: {
      "gemini-2.5-flash": {
        maxTokens: 8000,
        supportsStreaming: true,
        supportsTools: true,
      },
    },
  },
} as const;

/**
 * Validates if the required environment variables are set
 */
export function validateEnvironment() {
  const errors: string[] = [];

  if (!aiConfig.openai.isConfigured) {
    errors.push("OPENAI_API_KEY is not set in environment variables");
  }

  if (!aiConfig.google.isConfigured) {
    errors.push(
      "GOOGLE_GENERATIVE_AI_API_KEY is not set in environment variables"
    );
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Gets the configuration for a specific model
 */
export function getModelConfig(provider: string, modelId: string) {
  const providerConfig =
    aiConfig.models[provider as keyof typeof aiConfig.models];
  if (!providerConfig) {
    return aiConfig.defaults;
  }

  const modelConfig = providerConfig[modelId as keyof typeof providerConfig];
  return modelConfig || aiConfig.defaults;
}
