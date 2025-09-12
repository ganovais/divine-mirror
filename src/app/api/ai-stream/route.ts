import { type NextRequest } from "next/server";
import { streamText } from "ai";

import { getModel, getDefaultModel } from "@/ai/get-model";
import { aiConfig } from "@/ai/config";

// Divine Mirror system prompt based on AI helper.md
const DIVINE_MIRROR_SYSTEM_PROMPT = `
Você é o assistente do 'Espelho Divino', um farol de sabedoria e fé. Sua única e exclusiva missão é auxiliar os usuários em sua jornada de evangelização.

Sua primeira tarefa, antes de qualquer outra, é analisar a pergunta do usuário para determinar se ela se enquadra nos temas de evangelização.

Seus livros de referência são:
- Bíblia Sagrada Ave Maria
- Catolicismo da Igreja Católica

**TEMAS PERMITIDOS (Exemplos):**
- Interpretação de passagens bíblicas (exegese, hermenêutica).
- Dúvidas sobre teologia, doutrinas cristãs e a natureza de Deus.
- Conselhos sobre como viver uma vida cristã no dia a dia.
- Como compartilhar a fé com outras pessoas (evangelismo prático).
- Oração, jejum e outras disciplinas espirituais.
- História da igreja, biografias de santos e mártires.
- Encorajamento, testemunhos e mensagens de fé.
- Dúvidas sobre sacramentos e rituais.
- Questões sobre ética e moralidade sob a perspectiva cristã.

**TEMAS PROIBIDOS (Exemplos):**
- Qualquer assunto secular: culinária, geografia, esportes, política, ciência não-relacionada, entretenimento, finanças, etc.
- Pedidos para gerar conteúdo odioso, ilegal ou antiético.
- Perguntas sobre outras religiões que não visem um diálogo construtivo a partir da perspectiva cristã.

**SUAS REGRAS:**
1. **AVALIE O TEMA**: Se a pergunta do usuário for sobre um tema permitido, responda com profundidade, compaixão e sabedoria, sempre baseando-se nos princípios cristãos.
2. **RECUSE O TEMA**: Se a pergunta for sobre um tema proibido, você NÃO DEVE RESPONDER à pergunta. Em vez disso, você deve retornar EXATAMENTE e APENAS a seguinte mensagem: "O Espelho Divino é uma ferramenta dedicada a iluminar caminhos na fé e na evangelização. Meu propósito é auxiliar em questões espirituais. Sobre outros assuntos, não consigo ajudar. Como posso te guiar na sua jornada de fé hoje?"
3. **SEJA CONCISO E CLARO**: Suas respostas devem ser fáceis de entender e inspiradoras.
4. **PARA PROBLEMAS PESSOAIS**:  Se a pergunta for sobre um problema pessoal, você deve responder com compaixão e sabedoria, sempre baseando-se nos princípios cristãos.

Agora, avalie e responda à pergunta do usuário a seguir.
`;

// Validation function to check if the request is valid
function validateRequest(body: any) {
  if (!body.messages || !Array.isArray(body.messages)) {
    return { isValid: false, error: "Messages array is required" };
  }
  
  if (body.messages.length === 0) {
    return { isValid: false, error: "At least one message is required" };
  }
  
  return { isValid: true };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    let { messages, modelName } = body;
    
    // Use default model if none specified or if specified model is not available
    if (!modelName) {
      try {
        modelName = getDefaultModel();
      } catch (error) {
        return new Response(
          JSON.stringify({ 
            error: "No AI models are configured. Please set OPENAI_API_KEY or GEMINI_API_KEY in your environment variables." 
          }), 
          { 
            status: 500, 
            headers: { "Content-Type": "application/json" } 
          }
        );
      }
    }
    
    // Validate request
    const validation = validateRequest(body);
    if (!validation.isValid) {
      return new Response(
        JSON.stringify({ error: validation.error }), 
        { 
          status: 400, 
          headers: { "Content-Type": "application/json" } 
        }
      );
    }

     // Get the AI model
     const model = getModel(modelName);

     // Stream the AI response with improved settings
     const result = streamText({
       model,
       system: DIVINE_MIRROR_SYSTEM_PROMPT,
       messages
     });

     return result.toTextStreamResponse();
  } catch (error) {
    console.error("Error in AI stream route:", error);
    
    // More specific error handling
    let errorMessage = "Internal server error occurred while processing your request";
    let statusCode = 500;
    
    if (error instanceof Error) {
      if (error.message.includes("API key")) {
        errorMessage = "AI service is not properly configured. Please check your API keys.";
        statusCode = 503; // Service Unavailable
      } else if (error.message.includes("quota") || error.message.includes("rate limit")) {
        errorMessage = "AI service is temporarily unavailable due to rate limits. Please try again later.";
        statusCode = 429; // Too Many Requests
      } else if (error.message.includes("parts field") || error.message.includes("INVALID_ARGUMENT")) {
        errorMessage = "There was an issue with the AI model configuration. Please try using a different model or contact support.";
        statusCode = 400; // Bad Request
      } else if (error.message.includes("gemini") || error.message.includes("google")) {
        errorMessage = "Google Gemini service is currently experiencing issues. Please try using the OpenAI model instead.";
        statusCode = 503; // Service Unavailable
      }
    }
    
    return new Response(
      JSON.stringify({ error: errorMessage }), 
      { 
        status: statusCode, 
        headers: { "Content-Type": "application/json" } 
      }
    );
  }
}
