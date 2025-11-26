'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Star, Users, Shield, Zap, Heart, Circle, Calendar, ArrowUp, AlertTriangle, Download } from 'lucide-react';

export default function SalesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-700">
            Transforme sua Jornada de Emagrecimento
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            MonjaPro
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Você já se sentiu perdido no meio de tantas informações sobre emagrecimento? Já enfrentou momentos de insegurança, incertezas ou até mesmo sentimentos de culpa durante sua jornada? Isso é mais comum do que você imagina!
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Com o MonjaPro, você não está mais sozinho nessa caminhada!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3">
              <Download className="mr-2 h-5 w-5" />
              Baixar Agora - Comece Grátis
            </Button>
            <Button variant="outline" size="lg" className="border-purple-300 text-purple-700 hover:bg-purple-50">
              Ver Demonstração
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Por que escolher o MonjaPro?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Circle className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl">Orientações Personalizadas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Receba recomendações que se adaptam ao seu corpo e ao seu progresso. O MonjaPro entende suas necessidades e oferece informações sob medida.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Calendar className="h-12 w-12 text-pink-600 mb-4" />
                <CardTitle className="text-xl">Lembretes e Acompanhamentos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Diga adeus aos esquecimentos! Com lembretes automáticos de aplicação e alimentação, você nunca perderá uma dose ou uma refeição importante.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <ArrowUp className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl">Monitoramento Eficiente</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Acompanhe sua evolução de peso, medidas e sintomas! Visualize seu progresso de forma clara e motivadora, com gráficos e medalhas de conquista.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Heart className="h-12 w-12 text-pink-600 mb-4" />
                <CardTitle className="text-xl">Plano Alimentar Estratégico</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Tenha acesso a cardápios semanais, receitas deliciosas e dicas alimentares que respeitam seu tratamento.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Zap className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl">Treinos Adaptáveis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Encontre a coragem de se exercitar novamente, mesmo em dias de pouca energia! Nossos treinos de 15 minutos são projetados para preservar sua massa magra.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-pink-600 mb-4" />
                <CardTitle className="text-xl">Suporte Emocional</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Reserve um momento para você! O MonjaPro oferece espaço para registrar seu humor, identificar gatilhos e receber mensagens de apoio motivacional.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-3">
              <CardHeader>
                <AlertTriangle className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle className="text-xl">Alertas de Segurança</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Mantenha-se seguro com nossos avisos sobre sinais que exigem atenção médica. Aqui, sua saúde é prioridade!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
            O que nossos usuários estão dizendo
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "O MonjaPro transformou a forma como lido com a minha jornada de emagrecimento. Antes, eu me sentia perdida; agora, tenho um plano claro e apoio a cada passo!"
                </p>
                <p className="font-semibold text-gray-800">- Ana S.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "As dicas de alimentação e os lembretes me ajudaram a manter o foco! Sinto-me mais empoderada e informada."
                </p>
                <p className="font-semibold text-gray-800">- Carlos T.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Não espere mais!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            A sua saúde e bem-estar são valorizados, e o MonjaPro está aqui para te apoiar. Ao adquirir este aplicativo, você não está apenas comprando uma ferramenta; você está investindo em si mesmo, na sua saúde e na sua confiança.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3">
              <Download className="mr-2 h-5 w-5" />
              Comece sua transformação hoje mesmo!
            </Button>
          </div>
          <p className="text-lg opacity-80">
            🚀 Baixe o MonjaPro e sinta a diferença!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg font-semibold mb-2">MonjaPro</p>
          <p className="opacity-80">Seu Companheiro na Jornada de Emagrecimento.</p>
          <p className="opacity-60 mt-2">Porque cada passo conta, e sua evolução é a nossa missão!</p>
        </div>
      </footer>
    </div>
  );
}