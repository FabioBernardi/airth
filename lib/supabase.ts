// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bwnwuqwxjdcuogeihlei.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3bnd1cXd4amRjdW9nZWlobGVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkxMTcyNDgsImV4cCI6MjA2NDY5MzI0OH0.P8VZsuhE5-Si4kwyuRPoFmhXnwgthsxTEOOQEpL45mA' // your full anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
