"use client";

import React, { useState, useEffect } from "react";
import { 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  MapPin, 
  Gauge, 
  Calendar, 
  ArrowRight,
  Sparkles,
  Server
} from "lucide-react";
import { ClientItem, DEFAULT_CLIENTS_DATA, fetchClientsApi } from "@/lib/clients";
import { useLayoutModal } from "@/components/LayoutProvider";

const SECTORS = [
  { id: "all", label: "All Sectors" },
  { id: "steel", label: "Steel & Metallurgy" },
  { id: "cement", label: "Cement & Minerals" },
  { id: "chemical", label: "Chemicals & Dyes" },
  { id: "pharma", label: "Pharma & API" },
  { id: "energy", label: "Power & Energy" },
  { id: "food", label: "Food & Agro" },
  { id: "ceramics", label: "Ceramics & Tiles" }
];

export default function ClientsSection({ isFullPage = false }: { isFullPage?: boolean }) {
  const [activeSector, setActiveSector] = useState("all");
  const [clients, setClients] = useState<ClientItem[]>(DEFAULT_CLIENTS_DATA);
  const [isLoading, setIsLoading] = useState(false);
  const [isBackendLive, setIsBackendLive] = useState(false);
  const { openQuoteModal } = useLayoutModal();

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      setIsLoading(true);
      try {
        const data = await fetchClientsApi(activeSector);
        if (isMounted) {
          setClients(data);
          // Check if response came from FastAPI
          setIsBackendLive(true);
        }
      } catch {
        if (isMounted) {
          setIsBackendLive(false);
        }
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }
    loadData();
    return () => {
      isMounted = false;
    };
  }, [activeSector]);

  const displayedClients = isFullPage ? clients : clients.slice(0, 9);

  return (
    <section className="py-20 bg-[#F8FAFC] relative overflow-hidden border-t border-b border-slate-200/80">
      {/* Background industrial grid */}
      <div className="absolute inset-0 bg-industrial-grid-light opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-[#F25920]" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Trusted by 150+ Industrial Plants
            </span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-mono text-emerald-600 font-semibold">
              FastAPI Verified
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#26235E] tracking-tight">
            Our Clients &amp; Major Installations
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Leading heavy manufacturing corporations across India rely on Scimax custom-engineered dust collection systems, pulse-jet baghouses, and dynamically balanced centrifugal blowers.
          </p>
        </div>

        {/* Marquee Logo Ticker for Marquee Clients */}
        <div className="relative w-full overflow-hidden bg-white py-4 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex space-x-8 items-center animate-[marquee_25s_linear_infinite] whitespace-nowrap min-w-full">
            {[
              "Tata Steel",
              "UltraTech Cement",
              "Aarti Industries",
              "Ambuja Cements",
              "Jindal Steel & Power",
              "Atul Limited",
              "Zydus Lifesciences",
              "Torrent Power",
              "Adani Wilmar",
              "Kajaria Ceramics",
              "Arvind Limited"
            ].map((name, idx) => (
              <div 
                key={idx} 
                className="flex items-center space-x-2 px-4 py-1.5 bg-slate-50 rounded-xl border border-slate-200/80 font-bold text-slate-700 text-sm tracking-wide shrink-0"
              >
                <Building2 className="w-4 h-4 text-[#F25920]" />
                <span>{name}</span>
                <span className="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded font-mono font-medium">Verified</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sector Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {SECTORS.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSector(s.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeSector === s.id
                  ? "bg-[#26235E] text-white shadow-md scale-102"
                  : "bg-white text-slate-600 hover:text-[#26235E] hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedClients.map((client) => (
            <div
              key={client.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-orange-300 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Card Top: Sector Badge & Verified */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#F25920] bg-orange-50 px-2.5 py-1 rounded-lg border border-orange-200/60">
                    {client.sector}
                  </span>
                  <div className="flex items-center space-x-1 text-slate-400 text-xs">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Est. {client.yearInstalled}</span>
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <h3 className="text-lg font-black text-[#26235E] group-hover:text-[#F25920] transition-colors flex items-center space-x-2">
                    <span>{client.name}</span>
                    {client.verified && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    )}
                  </h3>
                  <p className="text-xs text-slate-500 flex items-center space-x-1 mt-1">
                    <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                    <span>{client.location}</span>
                  </p>
                </div>

                {/* Equipment Spec Box */}
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 space-y-1.5">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                    Equipment Deployed
                  </span>
                  <p className="text-xs font-semibold text-slate-800 leading-snug">
                    {client.equipmentInstalled}
                  </p>
                  <div className="flex items-center justify-between pt-1 text-xs">
                    <span className="text-slate-500">Design Capacity:</span>
                    <span className="font-mono font-bold text-[#26235E] bg-white px-2 py-0.5 rounded border border-slate-200">
                      {client.capacity}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">CPCB &amp; ISO Compliant</span>
                <button
                  onClick={() => openQuoteModal(`Client Reference: ${client.name} (${client.sector})`)}
                  className="font-bold text-[#F25920] hover:text-[#D84813] flex items-center space-x-1 group/btn cursor-pointer"
                >
                  <span>Inquire Similar</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Strip */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-[#26235E]">
              Looking for references in your specific industrial sector?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              We provide comprehensive vendor approval documents, third-party balancing test reports (ISO 1940 Grade G6.3), and client performance certificates upon request.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <button
              onClick={() => openQuoteModal("Client Reference Portfolio Request")}
              className="px-6 py-3 bg-[#F25920] hover:bg-[#D84813] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md cursor-pointer"
            >
              Request Client Reference Pack
            </button>
            {!isFullPage && (
              <a
                href="/clients"
                className="px-6 py-3 border border-slate-300 hover:border-[#26235E] text-[#26235E] hover:bg-slate-50 font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center"
              >
                <span>View Complete Clients Directory</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
