
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase credentials. Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your environment.');
}

export const supabase = createClient(
  supabaseUrl ?? 'https://placeholder-url.supabase.co',
  supabaseAnonKey ?? 'placeholder-key'
);

// Type for user profiles
export type Profile = {
  id: string;
  username: string;
  email: string;
  avatar_url: string | null;
  created_at: string;
};
