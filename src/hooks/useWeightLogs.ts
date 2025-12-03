"use client"

import { useEffect, useState } from 'react'
import { createSupabaseClient, WeightLog } from '@/lib/supabase'
import { useAuth } from './useAuth'

export function useWeightLogs() {
  const { user } = useAuth()
  const [logs, setLogs] = useState<WeightLog[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createSupabaseClient()

  useEffect(() => {
    if (!user) {
      setLogs([])
      setLoading(false)
      return
    }

    loadLogs()
  }, [user])

  const loadLogs = async () => {
    if (!user) return

    try {
      const { data, error } = await supabase
        .from('weight_logs')
        .select('*')
        .eq('user_id', user.id)
        .order('date', { ascending: false })

      if (error) throw error
      setLogs(data || [])
    } catch (error) {
      console.error('Erro ao carregar registros de peso:', error)
    } finally {
      setLoading(false)
    }
  }

  const addLog = async (weight: number, date: string) => {
    if (!user) return

    try {
      const { error } = await supabase
        .from('weight_logs')
        .insert({
          user_id: user.id,
          weight,
          date,
        })

      if (error) throw error
      await loadLogs()
    } catch (error) {
      console.error('Erro ao adicionar registro de peso:', error)
      throw error
    }
  }

  return { logs, loading, addLog, refetch: loadLogs }
}
