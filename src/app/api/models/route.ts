import { type NextRequest } from "next/server";
import { getAvailableModels, getDefaultModel } from "@/ai/get-model";
import { validateEnvironment } from "@/ai/config";

export async function GET(req: NextRequest) {
  try {
    // Validate environment
    const envValidation = validateEnvironment();
    
    // Get available models
    const availableModels = getAvailableModels();
    
    let defaultModel = null;
    try {
      defaultModel = getDefaultModel();
    } catch (error) {
      // No models available
    }
    
    return Response.json({
      models: availableModels,
      defaultModel,
      environment: {
        isValid: envValidation.isValid,
        errors: envValidation.errors,
      },
    });
  } catch (error) {
    console.error("Error in models route:", error);
    
    return Response.json(
      { error: "Failed to retrieve available models" },
      { status: 500 }
    );
  }
}
