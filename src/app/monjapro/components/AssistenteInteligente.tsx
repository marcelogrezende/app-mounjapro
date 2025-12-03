"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Send, Bot, User } from "lucide-react"

interface Message {
  id: number
  type: "user" | "bot"
  content: string
  timestamp: Date
}

const respostasComuns = {
  enjoo: {
    pergunta: "enjoo",
    resposta: "Para reduzir o enjoo:\n\n✅ Coma pequenas porções\n✅ Evite alimentos gordurosos\n✅ Beba água gelada aos poucos\n✅ Experimente gengibre\n✅ Coma alimentos secos (torradas, biscoitos)\n\n⚠️ Se o enjoo for muito intenso ou persistir por mais de 3 dias, consulte seu médico."
  },
  constipacao: {
    pergunta: "constipação",
    resposta: "Para aliviar a constipação:\n\n✅ Aumente a ingestão de fibras\n✅ Beba pelo menos 2L de água por dia\n✅ Use psyllium ou chia\n✅ Coma frutas como mamão e ameixa\n✅ Faça caminhadas leves\n✅ Considere probióticos\n\n⚠️ Se não houver evacuação por mais de 4 dias, procure orientação médica."
  },
  dose: {
    pergunta: "dose",
    resposta: "Sobre a dosagem:\n\n✅ Sempre siga a orientação do seu médico\n✅ Dose inicial comum: 0.25mg (Ozempic)\n✅ Aumento gradual a cada 4 semanas\n✅ Nunca aumente a dose por conta própria\n✅ Aplicação: 1x por semana, mesmo dia\n\n⚠️ NUNCA aplique mais de uma vez por semana!"
  },
  aplicacao: {
    pergunta: "aplicar",
    resposta: "Como aplicar corretamente:\n\n✅ Locais: abdômen, coxa ou braço\n✅ Alterne os locais de aplicação\n✅ Limpe a área com álcool\n✅ Aplique em ângulo de 90°\n✅ Mantenha pressionado por 6 segundos\n✅ Descarte a agulha corretamente\n\n💡 Assista ao vídeo tutorial na aba 'Medicação'"
  },
  peso: {
    pergunta: "peso",
    resposta: "Sobre a perda de peso:\n\n✅ Perda saudável: 0,5-1kg por semana\n✅ Resultados variam entre pessoas\n✅ Platô é normal após algumas semanas\n✅ Continue seguindo o plano alimentar\n✅ Mantenha exercícios regulares\n\n⚠️ Perda muito rápida (>2kg/semana) pode causar flacidez e perda muscular."
  },
  treino: {
    pergunta: "treinar",
    resposta: "Sobre exercícios:\n\n✅ SIM, você pode treinar!\n✅ Comece com exercícios leves\n✅ Priorize treinos de força (massa magra)\n✅ Evite treinos intensos nos dias de aplicação\n✅ Hidrate-se bem\n✅ Ouça seu corpo\n\n⚠️ Se sentir tontura ou fraqueza intensa, pare e descanse."
  },
  alcool: {
    pergunta: "álcool",
    resposta: "Sobre consumo de álcool:\n\n⚠️ NÃO é recomendado durante o tratamento\n\n❌ Aumenta risco de hipoglicemia\n❌ Pode intensificar enjoos\n❌ Prejudica resultados\n❌ Sobrecarrega o pâncreas\n\n✅ Se for consumir: quantidade mínima e com alimento"
  },
  esqueci: {
    pergunta: "esqueci",
    resposta: "Se esqueceu a dose:\n\n✅ Até 5 dias de atraso: aplique assim que lembrar\n✅ Mais de 5 dias: pule e aplique na próxima semana\n✅ NUNCA aplique dose dupla\n✅ Ajuste o dia da semana se necessário\n\n⚠️ Configure lembretes no app para não esquecer!"
  }
}

export default function AssistenteInteligente() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "bot",
      content: "Olá! Sou o Assistente MonjaPro 🤖\n\nEstou aqui para ajudar com suas dúvidas sobre:\n\n• Efeitos colaterais (enjoo, constipação)\n• Dosagem e aplicação\n• Alimentação\n• Exercícios\n• Segurança\n\nComo posso ajudar você hoje?",
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState("")

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    // Adiciona mensagem do usuário
    const userMessage: Message = {
      id: messages.length + 1,
      type: "user",
      content: inputValue,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])

    // Processa resposta do bot
    setTimeout(() => {
      const inputLower = inputValue.toLowerCase()
      let resposta = "Desculpe, não entendi sua pergunta. Tente perguntar sobre:\n\n• Enjoo e náuseas\n• Constipação\n• Dosagem correta\n• Como aplicar\n• Perda de peso\n• Exercícios\n• Consumo de álcool\n• Dose esquecida"

      // Busca resposta correspondente
      for (const [key, value] of Object.entries(respostasComuns)) {
        if (inputLower.includes(value.pergunta)) {
          resposta = value.resposta
          break
        }
      }

      const botMessage: Message = {
        id: messages.length + 2,
        type: "bot",
        content: resposta,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botMessage])
    }, 500)

    setInputValue("")
  }

  const handleQuickQuestion = (question: string) => {
    setInputValue(question)
  }

  return (
    <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm h-[600px] flex flex-col">
      <CardHeader className="border-b">
        <CardTitle className="flex items-center gap-2">
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-lg">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          Assistente Inteligente MonjaPro
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col p-0">
        {/* Quick Questions */}
        <div className="p-4 border-b bg-gray-50 dark:bg-gray-900/50">
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Perguntas rápidas:</p>
          <div className="flex flex-wrap gap-2">
            <Badge 
              variant="outline" 
              className="cursor-pointer hover:bg-purple-100 dark:hover:bg-purple-900/30"
              onClick={() => handleQuickQuestion("Como diminuir o enjoo?")}
            >
              Enjoo
            </Badge>
            <Badge 
              variant="outline" 
              className="cursor-pointer hover:bg-purple-100 dark:hover:bg-purple-900/30"
              onClick={() => handleQuickQuestion("Estou com constipação")}
            >
              Constipação
            </Badge>
            <Badge 
              variant="outline" 
              className="cursor-pointer hover:bg-purple-100 dark:hover:bg-purple-900/30"
              onClick={() => handleQuickQuestion("Qual a dose correta?")}
            >
              Dosagem
            </Badge>
            <Badge 
              variant="outline" 
              className="cursor-pointer hover:bg-purple-100 dark:hover:bg-purple-900/30"
              onClick={() => handleQuickQuestion("Como aplicar corretamente?")}
            >
              Aplicação
            </Badge>
            <Badge 
              variant="outline" 
              className="cursor-pointer hover:bg-purple-100 dark:hover:bg-purple-900/30"
              onClick={() => handleQuickQuestion("Posso treinar?")}
            >
              Exercícios
            </Badge>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.type === "user" ? "flex-row-reverse" : ""}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.type === "bot" 
                    ? "bg-gradient-to-br from-purple-500 to-pink-500" 
                    : "bg-blue-500"
                }`}>
                  {message.type === "bot" ? (
                    <Bot className="w-4 h-4 text-white" />
                  ) : (
                    <User className="w-4 h-4 text-white" />
                  )}
                </div>
                <div className={`flex-1 ${message.type === "user" ? "text-right" : ""}`}>
                  <div className={`inline-block p-3 rounded-lg max-w-[80%] ${
                    message.type === "bot"
                      ? "bg-gray-100 dark:bg-gray-800 text-left"
                      : "bg-blue-500 text-white"
                  }`}>
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {message.timestamp.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t bg-white dark:bg-gray-800">
          <div className="flex gap-2">
            <Input
              placeholder="Digite sua pergunta..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              className="flex-1"
            />
            <Button 
              onClick={handleSendMessage}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
