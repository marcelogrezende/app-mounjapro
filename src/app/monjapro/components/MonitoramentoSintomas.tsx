"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { AlertCircle, CheckCircle2, Info, AlertTriangle } from "lucide-react"

interface Sintoma {
  id: string
  nome: string
  selecionado: boolean
  gravidade: "leve" | "moderada" | "grave"
  explicacao: string
  solucoes: string[]
  quandoProcurarMedico: string
}

const sintomasDisponiveis: Sintoma[] = [
  {
    id: "enjoo",
    nome: "Enjoo / Náusea",
    selecionado: false,
    gravidade: "moderada",
    explicacao: "Efeito colateral comum, especialmente nas primeiras semanas ou após aumento de dose.",
    solucoes: [
      "Coma pequenas porções ao longo do dia",
      "Evite alimentos gordurosos e frituras",
      "Beba água gelada aos poucos",
      "Experimente chá de gengibre",
      "Coma alimentos secos (torradas, biscoitos)"
    ],
    quandoProcurarMedico: "Se o enjoo for intenso e impedir alimentação por mais de 24h"
  },
  {
    id: "constipacao",
    nome: "Constipação / Prisão de ventre",
    selecionado: false,
    gravidade: "leve",
    explicacao: "Muito comum devido à lentidão do sistema digestivo causada pela medicação.",
    solucoes: [
      "Aumente consumo de fibras (vegetais, frutas)",
      "Beba pelo menos 2L de água por dia",
      "Use psyllium ou chia",
      "Coma mamão, ameixa e kiwi",
      "Faça caminhadas leves após refeições",
      "Considere probióticos"
    ],
    quandoProcurarMedico: "Se não houver evacuação por mais de 4 dias ou houver dor abdominal intensa"
  },
  {
    id: "refluxo",
    nome: "Refluxo / Azia",
    selecionado: false,
    gravidade: "leve",
    explicacao: "Causado pela lentidão do esvaziamento gástrico.",
    solucoes: [
      "Evite deitar logo após comer",
      "Eleve a cabeceira da cama",
      "Evite alimentos ácidos e picantes",
      "Faça refeições menores",
      "Evite café e chocolate"
    ],
    quandoProcurarMedico: "Se o refluxo for persistente ou causar dor no peito"
  },
  {
    id: "dor_abdominal",
    nome: "Dor Abdominal",
    selecionado: false,
    gravidade: "moderada",
    explicacao: "Pode ser causada por gases, constipação ou lentidão digestiva.",
    solucoes: [
      "Faça massagens abdominais suaves",
      "Use bolsa de água morna",
      "Evite alimentos que causam gases",
      "Beba chás digestivos (camomila, erva-doce)",
      "Caminhe levemente"
    ],
    quandoProcurarMedico: "Se a dor for intensa, persistente ou acompanhada de vômitos"
  },
  {
    id: "fraqueza",
    nome: "Fraqueza / Fadiga",
    selecionado: false,
    gravidade: "leve",
    explicacao: "Comum devido à redução calórica e adaptação do corpo.",
    solucoes: [
      "Garanta proteína suficiente (1,2g/kg)",
      "Não pule refeições",
      "Durma bem (7-8h por noite)",
      "Faça exercícios leves",
      "Considere suplementação de vitaminas"
    ],
    quandoProcurarMedico: "Se a fraqueza for extrema ou impedir atividades diárias"
  },
  {
    id: "tontura",
    nome: "Tontura / Vertigem",
    selecionado: false,
    gravidade: "moderada",
    explicacao: "Pode indicar hipoglicemia ou desidratação.",
    solucoes: [
      "Hidrate-se adequadamente",
      "Levante-se devagar",
      "Coma pequenas porções regularmente",
      "Evite jejum prolongado",
      "Monitore pressão arterial"
    ],
    quandoProcurarMedico: "Se houver tonturas frequentes ou desmaios"
  },
  {
    id: "compulsao",
    nome: "Compulsão Alimentar",
    selecionado: false,
    gravidade: "leve",
    explicacao: "Pode ocorrer em alguns dias, especialmente antes da próxima dose.",
    solucoes: [
      "Identifique gatilhos emocionais",
      "Pratique mindful eating",
      "Mantenha rotina de refeições",
      "Busque apoio emocional",
      "Registre seus sentimentos no app"
    ],
    quandoProcurarMedico: "Se a compulsão for frequente e causar sofrimento"
  },
  {
    id: "ansiedade",
    nome: "Ansiedade",
    selecionado: false,
    gravidade: "leve",
    explicacao: "Pode ser relacionada às mudanças no corpo e na alimentação.",
    solucoes: [
      "Pratique exercícios de respiração",
      "Faça meditação guiada",
      "Mantenha rotina de sono",
      "Converse com pessoas de apoio",
      "Use recursos de bem-estar do app"
    ],
    quandoProcurarMedico: "Se a ansiedade for incapacitante ou causar ataques de pânico"
  },
  {
    id: "insonia",
    nome: "Insônia",
    selecionado: false,
    gravidade: "leve",
    explicacao: "Pode ocorrer devido a mudanças hormonais e metabólicas.",
    solucoes: [
      "Mantenha horário regular de sono",
      "Evite telas 1h antes de dormir",
      "Crie ambiente escuro e fresco",
      "Evite cafeína após 14h",
      "Pratique relaxamento antes de dormir"
    ],
    quandoProcurarMedico: "Se a insônia persistir por mais de 2 semanas"
  },
  {
    id: "queda_cabelo",
    nome: "Queda de Cabelo",
    selecionado: false,
    gravidade: "leve",
    explicacao: "Pode ocorrer devido à perda rápida de peso e déficit nutricional.",
    solucoes: [
      "Garanta proteína adequada",
      "Suplemento de biotina",
      "Ferro e zinco adequados",
      "Vitaminas do complexo B",
      "Evite perda de peso muito rápida"
    ],
    quandoProcurarMedico: "Se a queda for excessiva ou formar falhas"
  },
  {
    id: "nausea_matinal",
    nome: "Náusea Matinal",
    selecionado: false,
    gravidade: "leve",
    explicacao: "Comum ao acordar, especialmente nos primeiros dias após aplicação.",
    solucoes: [
      "Coma biscoito seco antes de levantar",
      "Beba água aos poucos",
      "Evite movimentos bruscos ao acordar",
      "Tome café da manhã leve",
      "Experimente chá de gengibre"
    ],
    quandoProcurarMedico: "Se impedir alimentação matinal por vários dias"
  }
]

export default function MonitoramentoSintomas() {
  const [sintomas, setSintomas] = useState<Sintoma[]>(sintomasDisponiveis)
  const [sintomasSelecionados, setSintomasSelecionados] = useState<Sintoma[]>([])

  const handleToggleSintoma = (id: string) => {
    setSintomas(prev => 
      prev.map(s => 
        s.id === id ? { ...s, selecionado: !s.selecionado } : s
      )
    )
  }

  const handleAnalisar = () => {
    const selecionados = sintomas.filter(s => s.selecionado)
    setSintomasSelecionados(selecionados)
  }

  const getGravidadeIcon = (gravidade: string) => {
    switch (gravidade) {
      case "leve":
        return <Info className="w-4 h-4 text-blue-500" />
      case "moderada":
        return <AlertCircle className="w-4 h-4 text-yellow-500" />
      case "grave":
        return <AlertTriangle className="w-4 h-4 text-red-500" />
      default:
        return null
    }
  }

  const getGravidadeColor = (gravidade: string) => {
    switch (gravidade) {
      case "leve":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
      case "moderada":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300"
      case "grave":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
      default:
        return ""
    }
  }

  return (
    <div className="space-y-4">
      <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-orange-500" />
            Monitoramento de Sintomas
          </CardTitle>
          <CardDescription>
            Marque os sintomas que você está sentindo hoje
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {sintomas.map((sintoma) => (
              <div
                key={sintoma.id}
                className={`flex items-center space-x-3 p-3 rounded-lg border transition-colors ${
                  sintoma.selecionado
                    ? "bg-purple-50 dark:bg-purple-900/20 border-purple-300 dark:border-purple-700"
                    : "bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                }`}
              >
                <Checkbox
                  id={sintoma.id}
                  checked={sintoma.selecionado}
                  onCheckedChange={() => handleToggleSintoma(sintoma.id)}
                />
                <label
                  htmlFor={sintoma.id}
                  className="flex-1 text-sm font-medium cursor-pointer"
                >
                  {sintoma.nome}
                </label>
                {sintoma.selecionado && getGravidadeIcon(sintoma.gravidade)}
              </div>
            ))}
          </div>

          <Button
            onClick={handleAnalisar}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            disabled={!sintomas.some(s => s.selecionado)}
          >
            Analisar Sintomas
          </Button>
        </CardContent>
      </Card>

      {/* Resultados da Análise */}
      {sintomasSelecionados.length > 0 && (
        <div className="space-y-4">
          {sintomasSelecionados.map((sintoma) => (
            <Card key={sintoma.id} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg">{sintoma.nome}</CardTitle>
                  <Badge className={getGravidadeColor(sintoma.gravidade)}>
                    {sintoma.gravidade.charAt(0).toUpperCase() + sintoma.gravidade.slice(1)}
                  </Badge>
                </div>
                <CardDescription>{sintoma.explicacao}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Soluções Rápidas */}
                <div>
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Soluções Rápidas
                  </h4>
                  <ul className="space-y-1">
                    {sintoma.solucoes.map((solucao, index) => (
                      <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>{solucao}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quando Procurar Médico */}
                <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                  <h4 className="font-semibold text-sm mb-1 flex items-center gap-2 text-red-700 dark:text-red-300">
                    <AlertTriangle className="w-4 h-4" />
                    Quando Procurar Médico
                  </h4>
                  <p className="text-sm text-red-600 dark:text-red-400">
                    {sintoma.quandoProcurarMedico}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
