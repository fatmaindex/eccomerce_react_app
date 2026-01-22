import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://qnuiziqodfwrlkbuitoo.supabase.co";
const SUPABASE_ANON_KEY ="sb_publishable_U699y1EmGEjPs5aRfAh16g_mKX4qFzu";
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true, 
    autoRefreshToken: true, 
    detectSessionInUrl: true,
  },
});
