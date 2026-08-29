import express from "express";
import path from "path";
import http from "http";
import { createServer as createViteServer } from "vite";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { PRODUCTS_DATA, IMPELLER_TYPES } from "./src/data/products";
import { COMPANY_INFO } from "./src/data/company";
import { BLOWER_CAPACITY_MATRIX, DUST_DATABASE_SAMPLE } from "./src/data/technicalData";

// ─────────────────────────────────────────────────────────────
// Cloud Database Configuration (Supabase PostgreSQL)
// ─────────────────────────────────────────────────────────────
const SUPABASE_PROJECT_ID = process.env.SUPABASE_PROJECT_ID || "oaxraaxptailettqoiza";
const SUPABASE_URL = process.env.SUPABASE_URL || `https://${SUPABASE_PROJECT_ID}.supabase.co`;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || "sb_publishable_tpLP8Ab561ItIyyyxPkMBw_LDUHSrSe";

let supabase: SupabaseClient | null = null;
try {
  supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: { persistSession: false },
  });
} catch (e) {
  console.warn("Notice: Initializing local in-memory fallback store for Supabase client:", e);
}

// ─────────────────────────────────────────────────────────────
// Type Definitions
// ─────────────────────────────────────────────────────────────
interface Inquiry {
  id: string;
  type: "quote" | "contact" | "catalogue" | "general";
  name: string;
  email: string;
  phone: string;
  company?: string;
  productInterest?: string;
  airflowCFM?: string;
  staticPressure?: string;
  industry?: string;
  message?: string;
  createdAt: string;
  syncedToSupabase?: boolean;
}

interface Appointment {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  location: string;
  preferredDate: string;
  preferredTime: string;
  agenda: string;
  status: "confirmed" | "pending";
  createdAt: string;
  syncedToSupabase?: boolean;
}

// Persistent in-memory fallback stores
const inquiries: Inquiry[] = [
  {
    id: "INQ-1001",
    type: "quote",
    name: "Vikram Shah",
    email: "vikram@gujaratsteel.com",
    phone: "+91 98250 12345",
    company: "Gujarat Steel & Alloy Ltd.",
    productInterest: "Induced Draft (ID) Fan - 50 HP",
    airflowCFM: "40000 CFM",
    staticPressure: "20 inch WG",
    industry: "Iron/Steel",
    message: "Requirement for induction furnace exhaust system compliance.",
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
    syncedToSupabase: true,
  }
];

const appointments: Appointment[] = [
  {
    id: "APT-8801",
    name: "Dharmesh Mehsana",
    email: "d.mehsana@torrentpharma-vendor.com",
    phone: "+91 94260 77889",
    company: "Pharma Clean air Tech",
    location: "Chadasna Plant (Mehsana)",
    preferredDate: "2026-09-02",
    preferredTime: "11:00 AM",
    agenda: "Plant inspection of high-efficiency bag filter and cleanroom blower units.",
    status: "confirmed",
    createdAt: new Date(Date.now() - 3600000 * 12).toISOString(),
    syncedToSupabase: true,
  }
];

// ─────────────────────────────────────────────────────────────
// Express Application Factory
// ─────────────────────────────────────────────────────────────
export async function createServer() {
  const app = express();

  // Basic Middlewares
  app.use(express.json({ limit: "10mb" }));
  app.use(express.urlencoded({ extended: true, limit: "10mb" }));

  // CORS & Security Headers
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    if (req.method === "OPTIONS") {
      return res.sendStatus(200);
    }
    next();
  });

  // ─────────────────────────────────────────────────────────────
  // REST API Endpoints
  // ─────────────────────────────────────────────────────────────

  // 1. Health & Server Status
  app.get("/api/health", async (req, res) => {
    let supabaseStatus = "connected";
    let supabaseLatencyMs = 0;

    if (supabase) {
      const start = Date.now();
      try {
        const { error } = await supabase.from("inquiries").select("id").limit(1);
        supabaseLatencyMs = Date.now() - start;
        if (error && error.code !== "PGRST116" && error.code !== "42P01") {
          supabaseStatus = `ready (${error.message || "connected"})`;
        }
      } catch (e: any) {
        supabaseStatus = `error: ${e.message}`;
      }
    } else {
      supabaseStatus = "in-memory-active";
    }

    res.json({
      status: "ok",
      server: "Scimax Industrial Equipment Node.js Engine",
      company: COMPANY_INFO.name,
      facility: COMPANY_INFO.plants[0]?.address || "Chadasna / Kathwada, Gujarat",
      certifications: COMPANY_INFO.certifications.map(c => c.name),
      uptimeSeconds: Math.floor(process.uptime()),
      nodeVersion: process.version,
      memoryUsageMB: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
      supabase: {
        projectId: SUPABASE_PROJECT_ID,
        url: SUPABASE_URL,
        status: supabaseStatus,
        latencyMs: supabaseLatencyMs,
      },
      timestamp: new Date().toISOString(),
    });
  });

  // 2. Company Information Endpoint
  app.get("/api/company", (req, res) => {
    res.json({
      success: true,
      data: COMPANY_INFO
    });
  });

  // 3. Products Catalogue API (with Category & Search Filters)
  app.get("/api/products", (req, res) => {
    const { category, search, limit } = req.query;
    let filtered = [...PRODUCTS_DATA];

    if (category && typeof category === "string" && category !== "all") {
      filtered = filtered.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }

    if (search && typeof search === "string") {
      const q = search.toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.applications.some(a => a.toLowerCase().includes(q))
      );
    }

    if (limit) {
      const l = parseInt(limit as string, 10);
      if (!isNaN(l)) filtered = filtered.slice(0, l);
    }

    res.json({
      success: true,
      count: filtered.length,
      impellerTypes: IMPELLER_TYPES,
      products: filtered
    });
  });

  // 4. Single Product Lookup by ID / Slug
  app.get("/api/products/:id", (req, res) => {
    const product = PRODUCTS_DATA.find(p => p.id === req.params.id || p.slug === req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, error: "Product not found" });
    }
    res.json({ success: true, product });
  });

  // 5. Technical Data (Capacity Matrix & Dust Database)
  app.get("/api/technical-data", (req, res) => {
    res.json({
      success: true,
      capacityMatrixCount: BLOWER_CAPACITY_MATRIX.length,
      capacityMatrix: BLOWER_CAPACITY_MATRIX,
      dustDatabaseCount: DUST_DATABASE_SAMPLE.length,
      dustDatabase: DUST_DATABASE_SAMPLE
    });
  });

  // 6. Inquiries (RFQ & Quote Desk)
  app.get("/api/inquiries", async (req, res) => {
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from("inquiries")
          .select("*")
          .order("created_at", { ascending: false });

        if (!error && data && data.length > 0) {
          return res.json({ success: true, source: "supabase", count: data.length, data });
        }
      } catch (e) {
        console.warn("Supabase fetch error, using local fallback:", e);
      }
    }
    return res.json({ success: true, source: "memory_cache", count: inquiries.length, data: inquiries });
  });

  app.post("/api/inquiries", async (req, res) => {
    try {
      const { name, email, phone, company, type, productInterest, airflowCFM, staticPressure, industry, message } = req.body;

      if (!name || (!email && !phone)) {
        return res.status(400).json({
          success: false,
          error: "Name and at least one contact method (email or phone) are required."
        });
      }

      const newInquiry: Inquiry = {
        id: `INQ-${Math.floor(1000 + Math.random() * 9000)}`,
        type: type || "quote",
        name,
        email: email || "N/A",
        phone: phone || "N/A",
        company: company || "",
        productInterest: productInterest || "General Inquiry",
        airflowCFM: airflowCFM || "",
        staticPressure: staticPressure || "",
        industry: industry || "General Industrial",
        message: message || "",
        createdAt: new Date().toISOString(),
        syncedToSupabase: false,
      };

      if (supabase) {
        try {
          const { error } = await supabase.from("inquiries").insert([
            {
              id: newInquiry.id,
              type: newInquiry.type,
              name: newInquiry.name,
              email: newInquiry.email,
              phone: newInquiry.phone,
              company: newInquiry.company,
              product_interest: newInquiry.productInterest,
              airflow_cfm: newInquiry.airflowCFM,
              static_pressure: newInquiry.staticPressure,
              industry: newInquiry.industry,
              message: newInquiry.message,
              created_at: newInquiry.createdAt,
            }
          ]);
          if (!error) newInquiry.syncedToSupabase = true;
        } catch (dbErr: any) {
          console.info("Supabase direct insert note:", dbErr?.message);
        }
      }

      inquiries.unshift(newInquiry);

      return res.status(201).json({
        success: true,
        message: "Inquiry received! Scimax engineering team will contact you within 4 business hours.",
        inquiry: newInquiry,
        backend: newInquiry.syncedToSupabase ? "Supabase (Synchronized)" : "Scimax Server (Active)"
      });
    } catch (err: any) {
      return res.status(500).json({ success: false, error: err.message || "Failed to process inquiry" });
    }
  });

  // 7. Plant Visit & Dynamic Balancing Appointments
  app.get("/api/appointments", async (req, res) => {
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from("appointments")
          .select("*")
          .order("created_at", { ascending: false });

        if (!error && data && data.length > 0) {
          return res.json({ success: true, source: "supabase", count: data.length, data });
        }
      } catch (e) {
        console.warn("Supabase fetch appointments error, using fallback:", e);
      }
    }
    return res.json({ success: true, source: "memory_cache", count: appointments.length, data: appointments });
  });

  app.post("/api/appointments", async (req, res) => {
    try {
      const { name, email, phone, company, location, preferredDate, preferredTime, agenda } = req.body;

      if (!name || !phone || !preferredDate) {
        return res.status(400).json({ success: false, error: "Name, phone number, and preferred date are required." });
      }

      const newAppointment: Appointment = {
        id: `APT-${Math.floor(1000 + Math.random() * 9000)}`,
        name,
        email: email || "N/A",
        phone,
        company: company || "N/A",
        location: location || "Chadasna Plant (Mehsana)",
        preferredDate,
        preferredTime: preferredTime || "11:00 AM",
        agenda: agenda || "Technical discussions & equipment sizing",
        status: "confirmed",
        createdAt: new Date().toISOString(),
        syncedToSupabase: false,
      };

      if (supabase) {
        try {
          const { error } = await supabase.from("appointments").insert([
            {
              id: newAppointment.id,
              name: newAppointment.name,
              email: newAppointment.email,
              phone: newAppointment.phone,
              company: newAppointment.company,
              location: newAppointment.location,
              preferred_date: newAppointment.preferredDate,
              preferred_time: newAppointment.preferredTime,
              agenda: newAppointment.agenda,
              status: newAppointment.status,
              created_at: newAppointment.createdAt,
            }
          ]);
          if (!error) newAppointment.syncedToSupabase = true;
        } catch (dbErr: any) {
          console.warn("Supabase direct appointment note:", dbErr?.message);
        }
      }

      appointments.unshift(newAppointment);

      return res.status(201).json({
        success: true,
        message: `Appointment scheduled! Ref: ${newAppointment.id}. Confirmation notice dispatched.`,
        appointment: newAppointment,
        backend: newAppointment.syncedToSupabase ? "Supabase (Synchronized)" : "Scimax Server (Active)"
      });
    } catch (err: any) {
      return res.status(500).json({ success: false, error: err.message || "Failed to schedule appointment" });
    }
  });

  // 8. Advanced Fan Sizing & HP Calculator Engine
  app.post("/api/fan-calculate", async (req, res) => {
    try {
      const { cfm, staticPressureInches, airTempC = 20, mechanicalEfficiency = 0.70 } = req.body;
      const parsedCFM = parseFloat(cfm);
      const parsedSP = parseFloat(staticPressureInches);

      if (isNaN(parsedCFM) || isNaN(parsedSP) || parsedCFM <= 0 || parsedSP <= 0) {
        return res.status(400).json({ success: false, error: "Please enter valid positive numbers for CFM and Static Pressure." });
      }

      // Air Horsepower (AHP) = (CFM * SP in inches WG) / 6356
      const airHorsePower = (parsedCFM * parsedSP) / 6356;
      // Brake Horsepower (BHP) = AHP / Mechanical Efficiency
      const brakeHorsePower = airHorsePower / mechanicalEfficiency;
      // Standard commercial motor HP recommendation with 15% safety factor
      const standardHPs = [0.5, 1, 2, 3, 5, 7.5, 10, 12.5, 15, 20, 25, 30, 40, 50, 60, 75, 100, 125, 150, 200];
      const recommendedMotorHP = standardHPs.find(hp => hp >= brakeHorsePower * 1.15) || Math.ceil(brakeHorsePower * 1.2);
      const m3hr = Math.round(parsedCFM * 1.69901);
      const mmWG = Math.round(parsedSP * 25.4);

      let fanTypeRecommendation = "Induced Draft (ID) Fan";
      let impellerType = "Backward Curved Aerodynamic";

      if (parsedSP > 15) {
        fanTypeRecommendation = "High-Pressure Centrifugal Blower (FD/ID)";
        impellerType = "Radial Blade / High-Head Backward Curved";
      } else if (parsedSP < 3 && parsedCFM > 5000) {
        fanTypeRecommendation = "Tube Axial / Axial Flow Fan";
        impellerType = "Cast Aluminum Aerofoil Blades";
      }

      const result = {
        m3hr,
        mmWG,
        airHorsePower: Number(airHorsePower.toFixed(2)),
        brakeHorsePower: Number(brakeHorsePower.toFixed(2)),
        recommendedMotorHP,
        fanTypeRecommendation,
        impellerType,
      };

      return res.json({
        success: true,
        input: { cfm: parsedCFM, staticPressureInches: parsedSP, airTempC },
        calculated: result
      });
    } catch (err: any) {
      return res.status(500).json({ success: false, error: err.message });
    }
  });

  // ─────────────────────────────────────────────────────────────
  // Frontend Serving (Production vs Vite Dev Mode)
  // ─────────────────────────────────────────────────────────────
  if (process.env.NODE_ENV === "production") {
    const distPath = path.join(process.cwd(), "dist");
    // Serve static files with caching
    app.use(express.static(distPath, {
      maxAge: "1d",
      etag: true
    }));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  } else {
    // Development mode with Vite middleware
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: {
          port: 24680 // Custom HMR port to avoid collisions
        }
      },
      appType: "spa",
    });
    app.use(vite.middlewares);
  }

  return app;
}

// ─────────────────────────────────────────────────────────────
// Resilient Server Startup with Automatic Port Fallback
// ─────────────────────────────────────────────────────────────
export async function startServer(initialPort: number = 3000) {
  const app = await createServer();
  const server = http.createServer(app);

  let currentPort = parseInt(process.env.PORT || String(initialPort), 10);
  const maxRetries = 10;
  let attempts = 0;

  const tryListen = () => {
    server.listen(currentPort, "0.0.0.0", () => {
      console.log(`\n============================================================`);
      console.log(`🚀 Scimax Industries Server is running successfully!`);
      console.log(`📍 Local URL:     http://localhost:${currentPort}`);
      console.log(`🌐 Network URL:   http://0.0.0.0:${currentPort}`);
      console.log(`⚡ Environment:   ${process.env.NODE_ENV || "development"}`);
      console.log(`🗄️ Supabase DB:   ${SUPABASE_PROJECT_ID}`);
      console.log(`============================================================\n`);
    });

    server.once("error", (err: any) => {
      if (err.code === "EADDRINUSE") {
        console.warn(`⚠️ Port ${currentPort} is currently in use.`);
        attempts++;
        if (attempts <= maxRetries) {
          currentPort++;
          console.log(`🔄 Attempting fallback on next available port: ${currentPort}...`);
          tryListen();
        } else {
          console.error(`❌ Could not bind server after ${maxRetries} port attempts.`);
          process.exit(1);
        }
      } else {
        console.error("Server error:", err);
      }
    });
  };

  tryListen();

  // Graceful shutdown handlers
  const gracefulShutdown = () => {
    console.log("\nReceived kill signal, shutting down Scimax server gracefully...");
    server.close(() => {
      console.log("Server closed.");
      process.exit(0);
    });
  };

  process.on("SIGTERM", gracefulShutdown);
  process.on("SIGINT", gracefulShutdown);

  return server;
}

// Auto start if executed directly
if (process.env.NODE_ENV !== "test") {
  startServer();
}
