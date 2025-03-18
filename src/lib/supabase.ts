
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase URL or Anon Key is missing!');
}

export const supabase = createClient(
  supabaseUrl || '',
  supabaseAnonKey || ''
);

// Type for user profiles
export type Profile = {
  id: string;
  username: string;
  email: string;
  avatar_url: string | null;
  created_at: string;
};
