import { tool } from "ai";
import { z } from "zod";

export const wordOfTheDay = tool({
  description: "Busca a palavra/evangelho do dia para uma data específica. Use quando o usuário pedir sobre liturgia, evangelho, palavra do dia, leituras bíblicas de qualquer data (hoje, ontem, amanhã, ou data específica).",
  inputSchema: z.object({
    date: z.string().describe("Data no formato YYYY-MM-DD ou descrição relativa como 'hoje', 'ontem', 'amanhã'"),
  }),
  execute: async ({ date }) => {
    // Processar a data recebida
    let targetDate: Date;
    
    if (date === 'hoje' || date === 'today') {
      targetDate = new Date();
    } else if (date === 'ontem' || date === 'yesterday') {
      targetDate = new Date();
      targetDate.setDate(targetDate.getDate() - 1);
    } else if (date === 'amanhã' || date === 'tomorrow') {
      targetDate = new Date();
      targetDate.setDate(targetDate.getDate() + 1);
    } else {
      // Tentar parsear data no formato YYYY-MM-DD ou outras variações
      // Forçar timezone de São Paulo para evitar problemas de fuso horário
      if (date.match(/^\d{4}-\d{2}-\d{2}$/)) {
        const [year, month, day] = date.split('-').map(Number);
        targetDate = new Date(year, month - 1, day, 12, 0, 0); // meio-dia para evitar problemas de DST
      } else {
        targetDate = new Date(date);
        if (isNaN(targetDate.getTime())) {
          targetDate = new Date(); // Fallback para hoje se não conseguir parsear
        }
      }
    }

    const day = targetDate.getDate(); // getDate() retorna o dia do mês
    const month = targetDate.getMonth() + 1;
    const year = targetDate.getFullYear();

    console.log(`Buscando liturgia para: ${day}/${month}/${year}`);

    try {
      const response = await fetch(
        `https://liturgia.up.railway.app/v2/?dia=${day}&mes=${month}&ano=${year}`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data?.leituras) {
        return JSON.stringify({
          data: `${day}/${month}/${year}`,
          leituras: data.leituras
        });
      } else {
        return `Não foi possível encontrar a liturgia para ${day}/${month}/${year}`;
      }
    } catch (error) {
      console.error('Erro ao buscar liturgia:', error);
      return `Erro ao buscar a liturgia para ${day}/${month}/${year}. Tente novamente mais tarde.`;
    }
  },
});
