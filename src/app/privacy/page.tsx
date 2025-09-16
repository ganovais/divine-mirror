import Link from "next/link";
import {
  ArrowLeft,
  Shield,
  Lock,
  Eye,
  Database,
  Users,
  Clock,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50">
      {/* Header */}
      <div className="border-b border-slate-200/50 bg-white/80 backdrop-blur-xl sticky top-0 z-20">
        <div className="container mx-auto max-w-4xl px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/chat">
              <Button
                variant="ghost"
                className="flex items-center gap-2 text-slate-600 hover:text-[#8e0000] transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Voltar ao Chat</span>
              </Button>
            </Link>

            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-[#8e0000]" />
              <h1 className="text-xl font-bold text-slate-900">
                Política de Privacidade
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <div className="prose prose-slate max-w-none">
          {/* Introduction */}
          <Card className="p-6 mb-8 bg-gradient-to-r from-red-50 to-red-100/50 border-red-200">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-red-800 text-white">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-900 mb-2">
                  Comprometimento com sua Privacidade
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  No Espelho Divino, respeitamos profundamente sua privacidade e
                  confidencialidade. Esta política explica como coletamos,
                  usamos e protegemos suas informações durante sua jornada
                  espiritual conosco.
                </p>
              </div>
            </div>
          </Card>

          {/* Data Collection */}
          <Card className="p-6 mb-6">
            <div className="flex items-start gap-4 mb-4">
              <Database className="w-5 h-5 text-[#8e0000] mt-1" />
              <h3 className="text-lg font-semibold text-slate-900">
                Quais Informações Coletamos
              </h3>
            </div>
            <div className="space-y-4 text-slate-700">
              <div>
                <h4 className="font-medium text-slate-900 mb-2">
                  Conversas e Mensagens
                </h4>
                <p className="leading-relaxed">
                  Armazenamos temporariamente suas conversas com nossa IA
                  espiritual para fins de estudo de caso e melhoria contínua da
                  plataforma. Isso nos ajuda a aprimorar as respostas e oferecer
                  um melhor suporte espiritual.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 mb-2">
                  Dados Técnicos
                </h4>
                <p className="leading-relaxed">
                  Coletamos informações básicas como horário das conversas,
                  modelo de IA utilizado e dados técnicos necessários para o
                  funcionamento adequado da plataforma.
                </p>
              </div>
            </div>
          </Card>

          {/* Data Usage */}
          <Card className="p-6 mb-6">
            <div className="flex items-start gap-4 mb-4">
              <Eye className="w-5 h-5 text-[#8e0000] mt-1" />
              <h3 className="text-lg font-semibold text-slate-900">
                Como Utilizamos suas Informações
              </h3>
            </div>
            <div className="space-y-4 text-slate-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-medium text-green-800 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    Permitimos
                  </h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Melhoria da qualidade das respostas</li>
                    <li>• Estudos de caso para desenvolvimento</li>
                    <li>• Aprimoramento da experiência espiritual</li>
                    <li>• Análises técnicas para otimização</li>
                  </ul>
                </div>
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <h4 className="font-medium text-red-800 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                    Nunca Fazemos
                  </h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Compartilhamento com terceiros</li>
                    <li>• Venda de dados pessoais</li>
                    <li>• Uso para fins comerciais externos</li>
                    <li>• Divulgação de conversas privadas</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          {/* Data Protection */}
          <Card className="p-6 mb-6">
            <div className="flex items-start gap-4 mb-4">
              <Lock className="w-5 h-5 text-[#8e0000] mt-1" />
              <h3 className="text-lg font-semibold text-slate-900">
                Proteção dos seus Dados
              </h3>
            </div>
            <div className="space-y-4 text-slate-700">
              <p className="leading-relaxed">
                Implementamos medidas de segurança robustas para proteger suas
                informações pessoais e conversas espirituais:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <Lock className="w-8 h-8 text-[#8e0000] mx-auto mb-2" />
                  <h4 className="font-medium text-slate-900 mb-1">
                    Criptografia
                  </h4>
                  <p className="text-sm text-slate-600">
                    Dados criptografados em trânsito e em repouso
                  </p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <Shield className="w-8 h-8 text-[#8e0000] mx-auto mb-2" />
                  <h4 className="font-medium text-slate-900 mb-1">
                    Acesso Restrito
                  </h4>
                  <p className="text-sm text-slate-600">
                    Apenas pessoal autorizado tem acesso aos dados
                  </p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <Database className="w-8 h-8 text-[#8e0000] mx-auto mb-2" />
                  <h4 className="font-medium text-slate-900 mb-1">
                    Backup Seguro
                  </h4>
                  <p className="text-sm text-slate-600">
                    Backups protegidos e anonimizados
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Data Retention */}
          <Card className="p-6 mb-6">
            <div className="flex items-start gap-4 mb-4">
              <Clock className="w-5 h-5 text-[#8e0000] mt-1" />
              <h3 className="text-lg font-semibold text-slate-900">
                Retenção de Dados
              </h3>
            </div>
            <div className="space-y-4 text-slate-700">
              <p className="leading-relaxed">
                Mantemos suas conversas apenas pelo tempo necessário para:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Realizar estudos de melhoria da plataforma (máximo 12 meses)
                </li>
                <li>Cumprir obrigações legais e regulamentares</li>
                <li>Resolver questões técnicas ou de suporte</li>
              </ul>
              <p className="leading-relaxed">
                Após este período, os dados são automaticamente anonimizados ou
                excluídos de forma segura.
              </p>
            </div>
          </Card>

          {/* User Rights */}
          <Card className="p-6 mb-6">
            <div className="flex items-start gap-4 mb-4">
              <Users className="w-5 h-5 text-[#8e0000] mt-1" />
              <h3 className="text-lg font-semibold text-slate-900">
                Seus Direitos
              </h3>
            </div>
            <div className="space-y-4 text-slate-700">
              <p className="leading-relaxed">
                Você tem total controle sobre seus dados pessoais:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-slate-900">
                    Direito de Correção
                  </h4>
                  <p className="text-sm">
                    Corrigir informações incorretas ou desatualizadas
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-slate-900">
                    Direito de Exclusão
                  </h4>
                  <p className="text-sm">Solicitar a remoção dos seus dados</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Contact */}
          <Card className="p-6 bg-gradient-to-r from-[#8e0000]/5 to-red-50 border-[#8e0000]/20">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-[#8e0000] text-white">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Contato e Dúvidas
                </h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Para exercer seus direitos ou esclarecer dúvidas sobre esta
                  política de privacidade, entre em contato conosco:
                </p>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>
                    <strong>Email:</strong> g.novais1997gmail.com
                  </p>
                  <p>
                    <strong>Responsável:</strong> Equipe de Proteção de Dados
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Last Updated */}
          <div className="text-center mt-8 pt-6 border-t border-slate-200">
            <p className="text-sm text-slate-500">
              Última atualização:{" "}
              {new Date().toLocaleDateString("pt-BR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
