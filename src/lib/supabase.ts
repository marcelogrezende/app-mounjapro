import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Cliente para uso geral
export const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Cliente para componentes (sem auth helpers - usando apenas supabase-js)
export const createSupabaseClient = () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase URL e Anon Key são necessários')
  }
  return createClient(supabaseUrl, supabaseAnonKey)
}

// Types
export interface UserProfile {
  id: string
  user_id: string
  current_weight: number
  goal_weight: number
  start_weight: number
  height: number
  medication_name: string
  medication_dose: string
  next_application: string
  created_at: string
  updated_at: string
}

export interface WeightLog {
  id: string
  user_id: string
  weight: number
  date: string
  created_at: string
}

export interface MedicationLog {
  id: string
  user_id: string
  medication_name: string
  dose: string
  application_date: string
  application_time: string
  application_site: string
  created_at: string
}

export interface Symptom {
  id: string
  user_id: string
  symptom_type: string
  severity: number
  notes: string
  date: string
  created_at: string
}

export interface Meal {
  id: string
  user_id: string
  meal_type: string
  description: string
  calories: number
  date: string
  completed: boolean
  created_at: string
}

export interface Workout {
  id: string
  user_id: string
  workout_type: string
  duration: number
  exercises: string
  date: string
  completed: boolean
  created_at: string
}
