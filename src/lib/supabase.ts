import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Supabase configuration provided for the application
export const SUPABASE_URL =
  (typeof process !== "undefined" && process.env?.SUPABASE_URL) ||
  (typeof import.meta !== "undefined" && (import.meta as any).env?.VITE_SUPABASE_URL) ||
  "https://oaxraaxptailettqoiza.supabase.co";

export const SUPABASE_ANON_KEY =
  (typeof process !== "undefined" && process.env?.SUPABASE_ANON_KEY) ||
  (typeof import.meta !== "undefined" && (import.meta as any).env?.VITE_SUPABASE_ANON_KEY) ||
  "sb_publishable_tpLP8Ab561ItIyyyxPkMBw_LDUHSrSe";

let supabaseInstance: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient {
  if (!supabaseInstance) {
    supabaseInstance = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    });
  }
  return supabaseInstance;
}

export const supabase = getSupabaseClient();
