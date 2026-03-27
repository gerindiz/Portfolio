import { createClient } from '@supabase/supabase-js';

// Vite requiere que las variables empiecen con VITE_
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Si alguna falta, te lo va a decir en la consola claramente
if (!supabaseUrl || !supabaseAnonKey) {
  console.error("🚨 Error: Faltan variables de entorno de Supabase.");
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');