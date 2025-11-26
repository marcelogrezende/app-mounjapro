"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, AlertCircle, Info, ShieldAlert } from "lucide-react"

const alertasSeguranca = [
  {
    id: 1,
    tipo: "critico",
    titulo: "Sinais de Emergência - Procure Médico IMEDIATAMENTE",
    icone: ShieldAlert,
    itens: [
      "Dor abdominal intensa e persistente",
      "Vômitos que não param (mais de 24h)",
      "Sinais de pancreatite (dor forte que irradia para as costas)",
      "Dificuldade para respirar",
      "Inchaço no rosto, lábios ou garganta",
      "Batimentos cardíacos muito rápidos ou irregulares",
      "Visão turva ou alterações visuais súbitas",
      "Desmaios frequentes",
      "Sangue nas fezes ou vômito"
    ],
    cor: "red"
  },
  {
    id: 2,
    tipo: "importante",
    titulo: "Uso Correto da Medicação",
    icone: AlertTriangle,
    itens: [
      "❌ NUNCA aplique mais de 1x por semana",
      "❌ NUNCA aumente a dose por conta própria",
      "❌ NUNCA compartilhe sua caneta com outras pessoas",
      "✅ Sempre aplique no mesmo dia da semana",
      "✅ Alterne os locais de aplicação",
      "✅ Mantenha a caneta refrigerada (2-8°C)",
      "✅ Verifique a data de validade antes de usar",
      "✅ Descarte agulhas em recipiente adequado"
    ],
    cor: "yellow"
  },
  {
    id: 3,
    tipo: "atencao",
    titulo: "Aumento de Dose - Quando e Como",
    icone: AlertCircle,
    itens: [
      "Aguarde pelo menos 4 semanas na dose atual",
      "Só aumente com orientação médica",
      "Aumento gradual previne efeitos colaterais intensos",
      "Não aumente se ainda tiver enjoos fortes",
      "Progressão comum: 0.25mg → 0.5mg → 1.0mg → 1.7mg (Ozempic)",
      "Cada corpo responde diferente - não compare com outros"
    ],
    cor: "orange"
  },
  {
    id: 4,
    tipo: "nutricao",
    titulo: "Proteção da Massa Muscular",
    icone: Info,
    itens: [
      "Consuma pelo menos 1,2g de proteína por kg de peso",
      "Não faça dietas muito restritivas (<1200 kcal)",
      "Inclua proteína em todas as refeições",
      "Faça treinos de força 2-3x por semana",
      "Evite perder mais de 1kg por semana",
      "Suplemento de proteína pode ajudar se não conseguir comer",
      "Monitore composição corporal, não apenas peso"
    ],
    cor: "blue"
  },
  {
    id: 5,
    tipo: "erros",
    titulo: "Erros Comuns de Aplicação",
    icone: AlertCircle,
    itens: [
      "❌ Aplicar em músculo (deve ser subcutâneo)",
      "❌ Não alternar locais (causa nódulos)",
      "❌ Não limpar a pele antes",
      "❌ Retirar agulha muito rápido (perda de medicação)",
      "❌ Usar caneta fora da geladeira por muito tempo",
      "❌ Reutilizar agulhas",
      "✅ Ângulo de 90°, pressione por 6 segundos",
      "✅ Verifique se saiu medicação antes de aplicar"
    ],
    cor: "purple"
  }
]

export default function AlertasSeguranca() {
  const getCorClasses = (cor: string) => {
    const cores = {
      red: {
        bg: "bg-red-50 dark:bg-red-900/20",
        border: "border-red-200 dark:border-red-800",
        icon: "text-red-500",
        badge: "bg-red-500"
      },
      yellow: {
        bg: "bg-yellow-50 dark:bg-yellow-900/20",
        border: "border-yellow-200 dark:border-yellow-800",
        icon: "text-yellow-500",
        badge: "bg-yellow-500"
      },
      orange: {
        bg: "bg-orange-50 dark:bg-orange-900/20",
        border: "border-orange-200 dark:border-orange-800",
        icon: "text-orange-500",
        badge: "bg-orange-500"
      },
      blue: {
        bg: "bg-blue-50 dark:bg-blue-900/20",
        border: "border-blue-200 dark:border-blue-800",
        icon: "text-blue-500",
        badge: "bg-blue-500"
      },
      purple: {
        bg: "bg-purple-50 dark:bg-purple-900/20",
        border: "border-purple-200 dark:border-purple-800",
        icon: "text-purple-500",
        badge: "bg-purple-500"
      }
    }
    return cores[cor as keyof typeof cores] || cores.blue
  }

  return (
    <div className="space-y-4">
      <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-red-500" />
            Alertas de Segurança
          </CardTitle>
          <CardDescription>
            Informações importantes para uso seguro e eficaz
          </CardDescription>
        </CardHeader>
      </Card>

      {alertasSeguranca.map((alerta) => {
        const cores = getCorClasses(alerta.cor)
        const IconeComponente = alerta.icone

        return (
          <Card
            key={alerta.id}
            className={`${cores.bg} border ${cores.border} backdrop-blur-sm`}
          >
            <CardHeader>
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg bg-white dark:bg-gray-800`}>
                  <IconeComponente className={`w-5 h-5 ${cores.icon}`} />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-lg">{alerta.titulo}</CardTitle>
                </div>
                <Badge className={cores.badge}>
                  {alerta.tipo.charAt(0).toUpperCase() + alerta.tipo.slice(1)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {alerta.itens.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm flex items-start gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <span className={`${cores.icon} mt-0.5 flex-shrink-0`}>
                      {item.startsWith("❌") || item.startsWith("✅") ? "" : "•"}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )
      })}

      {/* Card de Contato de Emergência */}
      <Card className="bg-gradient-to-r from-red-500 to-pink-500 text-white border-0">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-6 h-6 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2">Em Caso de Emergência</h3>
              <p className="text-sm text-red-50 mb-3">
                Se você apresentar qualquer sinal de emergência listado acima, não hesite:
              </p>
              <ul className="text-sm space-y-1 text-red-50">
                <li>📞 Ligue para seu médico imediatamente</li>
                <li>🚨 Vá ao pronto-socorro se necessário</li>
                <li>⚠️ Não espere os sintomas piorarem</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
