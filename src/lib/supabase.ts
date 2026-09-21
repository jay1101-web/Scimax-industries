import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://kuqxzvewvrdbcgzfakcp.supabase.co";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_Jd7JMvLzT4O4EaPkoPSmEA_eYkqDE4e";

// Client-side public Supabase client
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Server-side admin client with service role key
export function getSupabaseAdmin() {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceKey) {
    throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY environment variable");
  }
  return createClient(SUPABASE_URL, serviceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
}

export interface SupabaseInquiry {
  name: string;
  company: string;
  phone: string;
  email: string;
  industry?: string;
  product_interest: string;
  message?: string;
}

export async function submitInquiryToSupabase(data: {
  name: string;
  company: string;
  phone: string;
  email: string;
  industry?: string;
  productInterest: string;
  message?: string;
}) {
  try {
    const { data: inserted, error } = await supabase
      .from("inquiries")
      .insert([
        {
          name: data.name,
          company: data.company,
          phone: data.phone,
          email: data.email,
          industry: data.industry || "",
          product_interest: data.productInterest,
          message: data.message || "",
          created_at: new Date().toISOString()
        }
      ])
      .select();

    if (error) {
      console.warn("Supabase insert warning:", error.message);
      return { success: false, error: error.message };
    }

    return { success: true, data: inserted };
  } catch (err) {
    console.warn("Supabase connection error:", err);
    return { success: false, error: "Network or configuration error" };
  }
}

export async function fetchClientsFromSupabase(sector?: string) {
  try {
    let query = supabase.from("clients").select("*");
    
    if (sector && sector.toLowerCase() !== "all") {
      query = query.ilike("sector", `%${sector}%`);
    }

    const { data, error } = await query.order("year_installed", { ascending: false });
    
    if (error || !data || data.length === 0) {
      return null;
    }

    return data.map((c) => ({
      id: c.id,
      name: c.name,
      sector: c.sector,
      location: c.location,
      equipmentInstalled: c.equipment_installed,
      capacity: c.capacity,
      yearInstalled: c.year_installed,
      featured: c.featured,
      verified: c.verified
    }));
  } catch {
    return null;
  }
}
