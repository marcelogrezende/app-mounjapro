"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { 
  Activity, 
  Apple, 
  Bell, 
  Calendar, 
  Heart, 
  MessageCircle, 
  Pill, 
  Scale, 
  Sparkles, 
  TrendingDown,
  Dumbbell,
  Brain,
  AlertCircle,
  ChevronRight,
  Target,
  Award,
  Smile,
  ShieldAlert,
  LineChart,
  Utensils,
  Clock,
  Droplet,
  Flame
} from "lucide-react"

// Importar componentes modulares
import AssistenteInteligente from "./monjapro/components/AssistenteInteligente"
import MonitoramentoSintomas from "./monjapro/components/MonitoramentoSintomas"
import AlertasSeguranca from "./monjapro/components/AlertasSeguranca"

export default function MounjaProApp() {
  const [currentWeight, setCurrentWeight] = useState(92.5)
  const [goalWeight] = useState(75)
  const [startWeight] = useState(105)
  const [currentQuote, setCurrentQuote] = useState("")
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState("dashboard")
  
  const progressPercentage = ((startWeight - currentWeight) / (startWeight - goalWeight)) * 100

  const motivationalQuotes = [
    "Cada passo conta na sua jornada! 💪",
    "Você está mais forte do que imagina! ✨",
    "Progresso, não perfeição! 🌟",
    "Seu futuro eu agradece seus esforços hoje! 🎯",
    "Transformação é um processo, não um evento! 🌱",
    "Você merece se sentir bem! 💜"
  ]

  useEffect(() => {
    setMounted(true)
    setCurrentQuote(motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)])
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-purple-100 dark:border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-xl">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                MonjaPro
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">Sua jornada de transformação</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Motivational Banner */}
        <Card className="mb-6 bg-gradient-to-r from-purple-500 to-pink-500 border-0 text-white">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Heart className="w-8 h-8" />
              <div>
                <p className="text-lg font-semibold">{currentQuote}</p>
                <p className="text-sm text-purple-100">Continue assim, você está indo muito bem!</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Scale className="w-4 h-4 text-purple-500" />
                Peso Atual
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600">{currentWeight} kg</div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                Meta: {goalWeight} kg
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <TrendingDown className="w-4 h-4 text-green-500" />
                Progresso
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">{(startWeight - currentWeight).toFixed(1)} kg</div>
              <Progress value={progressPercentage} className="mt-2 h-2" />
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                {progressPercentage.toFixed(0)}% da meta alcançada
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-500" />
                Faltam
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">{(currentWeight - goalWeight).toFixed(1)} kg</div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                Para atingir sua meta
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-7 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="assistente">Assistente</TabsTrigger>
            <TabsTrigger value="medication">Medicação</TabsTrigger>
            <TabsTrigger value="sintomas">Sintomas</TabsTrigger>
            <TabsTrigger value="nutrition">Nutrição</TabsTrigger>
            <TabsTrigger value="fitness">Fitness</TabsTrigger>
            <TabsTrigger value="seguranca">Segurança</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Quick Actions */}
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-purple-500" />
                    Ações Rápidas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    className="w-full justify-between bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    onClick={() => setActiveTab("assistente")}
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      Assistente MonjaPro
                    </span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-between"
                    onClick={() => setActiveTab("medication")}
                  >
                    <span className="flex items-center gap-2">
                      <Pill className="w-4 h-4" />
                      Registrar Dose
                    </span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-between"
                    onClick={() => setActiveTab("sintomas")}
                  >
                    <span className="flex items-center gap-2">
                      <Activity className="w-4 h-4" />
                      Registrar Sintomas
                    </span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-between"
                    onClick={() => setActiveTab("nutrition")}
                  >
                    <span className="flex items-center gap-2">
                      <Apple className="w-4 h-4" />
                      Ver Plano Alimentar
                    </span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Today's Summary */}
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-500" />
                    Resumo de Hoje
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Medicação tomada</span>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      Completo
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">Refeições registradas</span>
                    </div>
                    <Badge variant="secondary">3/5</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm">Exercícios</span>
                    </div>
                    <Badge variant="secondary">1/1</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm">Água (copos)</span>
                    </div>
                    <Badge variant="secondary">6/8</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Próxima Aplicação */}
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-xl">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Próxima Aplicação</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Sexta-feira, 24/01 às 08:00</p>
                      <p className="text-xs text-purple-600 dark:text-purple-400 mt-1">Em 2 dias</p>
                    </div>
                  </div>
                  <Button className="bg-purple-500 hover:bg-purple-600">
                    Configurar Lembrete
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-500" />
                  Conquistas Recentes
                </CardTitle>
                <CardDescription>Continue assim para desbloquear mais!</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg">
                    <Award className="w-8 h-8 text-yellow-500" />
                    <span className="text-xs font-medium text-center">7 Dias Consecutivos</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg">
                    <TrendingDown className="w-8 h-8 text-green-500" />
                    <span className="text-xs font-medium text-center">12.5kg Perdidos</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg">
                    <Dumbbell className="w-8 h-8 text-blue-500" />
                    <span className="text-xs font-medium text-center">30 Treinos</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg">
                    <Heart className="w-8 h-8 text-purple-500" />
                    <span className="text-xs font-medium text-center">Meta Mensal</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Gráfico de Evolução */}
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LineChart className="w-5 h-5 text-blue-500" />
                  Evolução de Peso (Últimas 8 Semanas)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { semana: "Semana 1", peso: 105, perda: 0 },
                    { semana: "Semana 2", peso: 103.5, perda: 1.5 },
                    { semana: "Semana 3", peso: 101.8, perda: 1.7 },
                    { semana: "Semana 4", peso: 99.5, perda: 2.3 },
                    { semana: "Semana 5", peso: 97.8, perda: 1.7 },
                    { semana: "Semana 6", peso: 95.9, perda: 1.9 },
                    { semana: "Semana 7", peso: 94.2, perda: 1.7 },
                    { semana: "Semana 8", peso: 92.5, perda: 1.7 }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="text-xs text-gray-600 dark:text-gray-400 w-20">{item.semana}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Progress 
                            value={((105 - item.peso) / (105 - 75)) * 100} 
                            className="h-2 flex-1" 
                          />
                          <span className="text-sm font-medium w-16">{item.peso}kg</span>
                        </div>
                      </div>
                      {item.perda > 0 && (
                        <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                          -{item.perda}kg
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Assistente Tab */}
          <TabsContent value="assistente">
            <AssistenteInteligente />
          </TabsContent>

          {/* Medication Tab */}
          <TabsContent value="medication" className="space-y-4">
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Pill className="w-5 h-5 text-purple-500" />
                  Acompanhamento de Medicação
                </CardTitle>
                <CardDescription>Gerencie suas doses e histórico</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">Ozempic 1.0mg</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Aplicação semanal</p>
                    </div>
                    <Badge className="bg-green-500">Ativa</Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Próxima dose:</span>
                      <span className="font-medium">Sexta-feira, 08:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Última aplicação:</span>
                      <span className="font-medium">Há 5 dias</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Canetas restantes:</span>
                      <span className="font-medium">2 unidades</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-purple-500 hover:bg-purple-600">
                    Registrar Dose Agora
                  </Button>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold">Histórico de Doses</h4>
                  {[
                    { date: "19/01/2025", time: "08:00", status: "Completo", local: "Abdômen" },
                    { date: "12/01/2025", time: "08:15", status: "Completo", local: "Coxa" },
                    { date: "05/01/2025", time: "08:00", status: "Completo", local: "Abdômen" },
                    { date: "29/12/2024", time: "08:30", status: "Completo", local: "Braço" }
                  ].map((dose, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div>
                          <p className="font-medium text-sm">{dose.date}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">{dose.time} • {dose.local}</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        {dose.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Sintomas Tab */}
          <TabsContent value="sintomas">
            <MonitoramentoSintomas />
          </TabsContent>

          {/* Nutrition Tab */}
          <TabsContent value="nutrition" className="space-y-4">
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Apple className="w-5 h-5 text-green-500" />
                  Plano Alimentar Personalizado
                </CardTitle>
                <CardDescription>Refeições adaptadas para quem usa semaglutida</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">Café da Manhã</h4>
                      <Utensils className="w-4 h-4 text-orange-500" />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      Omelete com vegetais + Frutas vermelhas
                    </p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1">
                        <Flame className="w-3 h-3" />
                        350 kcal
                      </span>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">Completo</Badge>
                    </div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">Almoço</h4>
                      <Utensils className="w-4 h-4 text-green-500" />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      Frango grelhado + Salada + Arroz integral
                    </p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1">
                        <Flame className="w-3 h-3" />
                        520 kcal
                      </span>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">Completo</Badge>
                    </div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">Jantar</h4>
                      <Utensils className="w-4 h-4 text-blue-500" />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      Salmão + Legumes no vapor
                    </p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1">
                        <Flame className="w-3 h-3" />
                        450 kcal
                      </span>
                      <Badge variant="outline">Pendente</Badge>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">Calorias de Hoje</span>
                    <span className="text-2xl font-bold">870 / 1500</span>
                  </div>
                  <Progress value={(870 / 1500) * 100} className="h-2 bg-white/30" />
                  <p className="text-xs text-green-100 mt-2">Meta diária adequada para seu objetivo</p>
                </div>

                {/* Protocolo Anti-Enjoo */}
                <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-blue-500" />
                      Protocolo Anti-Enjoo
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>Refeições pequenas a cada 2-3 horas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>Evite alimentos gordurosos e frituras</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>Gengibre, água gelada e alimentos secos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>Proteínas leves (frango, peixe, ovos)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Hidratação */}
                <Card className="bg-cyan-50 dark:bg-cyan-900/20 border-cyan-200 dark:border-cyan-800">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Droplet className="w-6 h-6 text-cyan-500" />
                        <div>
                          <h4 className="font-semibold">Hidratação</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">6 de 8 copos hoje</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        Registrar Copo
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Button className="w-full" variant="outline">
                  Ver Receitas Personalizadas
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Fitness Tab */}
          <TabsContent value="fitness" className="space-y-4">
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Dumbbell className="w-5 h-5 text-blue-500" />
                  Academia MonjaPro
                </CardTitle>
                <CardDescription>Treinos personalizados para preservar massa magra</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">Treino de Hoje</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Força + Cardio Leve</p>
                    </div>
                    <Badge className="bg-blue-500">15 min</Badge>
                  </div>
                  <div className="space-y-2">
                    {[
                      { name: "Aquecimento", duration: "5 min", status: "Completo" },
                      { name: "Agachamentos", duration: "3x12", status: "Completo" },
                      { name: "Flexões", duration: "3x10", status: "Pendente" },
                      { name: "Prancha", duration: "3x30s", status: "Pendente" },
                      { name: "Glúteos", duration: "3x15", status: "Pendente" }
                    ].map((exercise, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${exercise.status === "Completo" ? "bg-green-500" : "bg-gray-300"}`}></div>
                          <span className="text-sm font-medium">{exercise.name}</span>
                        </div>
                        <span className="text-xs text-gray-600 dark:text-gray-400">{exercise.duration}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4 bg-blue-500 hover:bg-blue-600">
                    Iniciar Treino
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-center border border-purple-200 dark:border-purple-800">
                    <Activity className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold">12</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Treinos este mês</p>
                  </div>
                  <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-center border border-orange-200 dark:border-orange-800">
                    <Target className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold">240</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Minutos ativos</p>
                  </div>
                </div>

                {/* Dicas de Treino */}
                <Card className="bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-yellow-500" />
                      Dicas para Preservar Massa Magra
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>Priorize treinos de força 2-3x por semana</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>Foque em exercícios compostos (agachamento, flexão)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>Consuma proteína 30min após treino</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>Evite cardio excessivo (máx 20-30min)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Segurança Tab */}
          <TabsContent value="seguranca">
            <AlertasSeguranca />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
