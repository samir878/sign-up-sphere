
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials. Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your environment.');
}

export const supabase = createClient(
  supabaseUrl ?? 'https://placeholder-url.supabase.co',
  supabaseKey ?? 'placeholder-key'
);

// Type for user profiles
export type Profile = {
  id: string;
  username: string;
  email: string;
  avatar_url: string | null;
  created_at: string;
};
