"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
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
  Flame,
  LogOut
} from "lucide-react"

// Hooks customizados
import { useAuth } from "@/hooks/useAuth"
import { useUserProfile } from "@/hooks/useUserProfile"
import { useWeightLogs } from "@/hooks/useWeightLogs"

// Importar componentes modulares
import AssistenteInteligente from "./monjapro/components/AssistenteInteligente"
import MonitoramentoSintomas from "./monjapro/components/MonitoramentoSintomas"
import AlertasSeguranca from "./monjapro/components/AlertasSeguranca"

export default function MounjaProApp() {
  const router = useRouter()
  const { user, loading: authLoading, signOut } = useAuth()
  const { profile, loading: profileLoading } = useUserProfile()
  const { logs: weightLogs, loading: logsLoading } = useWeightLogs()
  
  const [currentQuote, setCurrentQuote] = useState("Sua jornada de transformação começa aqui! 💪")
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState("dashboard")

  // Dados do perfil ou valores padrão
  const currentWeight = profile?.current_weight || 92.5
  const goalWeight = profile?.goal_weight || 75
  const startWeight = profile?.start_weight || 105
  
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
    const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
    setCurrentQuote(randomQuote)
  }, [])

  // Redirecionar para login se não autenticado
  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login')
    }
  }, [user, authLoading, router])

  const handleSignOut = async () => {
    await signOut()
    router.push('/login')
  }

  if (!mounted || authLoading || profileLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <Sparkles className="w-12 h-12 text-purple-500 animate-pulse mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">Carregando...</p>
        </div>
      </div>
    )
  }

  if (!user) {
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
              <h1 className="text-2xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Bem-vindo ao MounjaPro
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">{user.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>
            <Button variant="ghost" size="icon" onClick={handleSignOut}>
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
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

            {/* Gráfico de Evolução com dados reais */}
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LineChart className="w-5 h-5 text-blue-500" />
                  Evolução de Peso
                </CardTitle>
              </CardHeader>
              <CardContent>
                {weightLogs.length > 0 ? (
                  <div className="space-y-3">
                    {weightLogs.slice(0, 8).map((log, index) => {
                      const perda = index < weightLogs.length - 1 
                        ? (weightLogs[index + 1].weight - log.weight).toFixed(1)
                        : 0
                      return (
                        <div key={log.id} className="flex items-center gap-3">
                          <span className="text-xs text-gray-600 dark:text-gray-400 w-24">
                            {new Date(log.date).toLocaleDateString('pt-BR')}
                          </span>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <Progress 
                                value={((startWeight - log.weight) / (startWeight - goalWeight)) * 100} 
                                className="h-2 flex-1" 
                              />
                              <span className="text-sm font-medium w-16">{log.weight}kg</span>
                            </div>
                          </div>
                          {perda > 0 && (
                            <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                              -{perda}kg
                            </Badge>
                          )}
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  <p className="text-center text-gray-500 py-8">
                    Nenhum registro de peso ainda. Comece registrando seu peso atual!
                  </p>
                )}
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
                      <h3 className="font-semibold text-lg">{profile?.medication_name || "Ozempic"} {profile?.medication_dose || "1.0mg"}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Aplicação semanal</p>
                    </div>
                    <Badge className="bg-green-500">Ativa</Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Próxima dose:</span>
                      <span className="font-medium">
                        {profile?.next_application 
                          ? new Date(profile.next_application).toLocaleDateString('pt-BR')
                          : "Não configurado"}
                      </span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-purple-500 hover:bg-purple-600">
                    Registrar Dose Agora
                  </Button>
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
              <CardContent>
                <p className="text-center text-gray-500 py-8">
                  Funcionalidade em desenvolvimento. Em breve você terá acesso a planos alimentares personalizados!
                </p>
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
              <CardContent>
                <p className="text-center text-gray-500 py-8">
                  Funcionalidade em desenvolvimento. Em breve você terá acesso a treinos personalizados!
                </p>
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
