"use client";

import React from "react";
import Link from "next/link";
import { 
  Factory, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Flame, 
  Pill, 
  Layers, 
  Scissors, 
  Zap, 
  Fuel, 
  Box, 
  Cpu, 
  Grid, 
  FileText, 
  Trees, 
  Mountain, 
  HardHat, 
  FlaskConical,
  ChevronRight
} from "lucide-react";
import { INDUSTRIES, COMPANY_INFO } from "@/lib/data";
import { useLayoutModal } from "@/components/LayoutProvider";

export default function IndustriesPage() {
  const { openQuoteModal } = useLayoutModal();

  const getIndustryIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "foundry": return <Flame className="w-6 h-6 text-[#F25920]" />;
      case "pharma": return <Pill className="w-6 h-6 text-[#F25920]" />;
      case "iron & steel": return <Layers className="w-6 h-6 text-[#F25920]" />;
      case "textile": return <Scissors className="w-6 h-6 text-[#F25920]" />;
      case "boiler & power": return <Zap className="w-6 h-6 text-[#F25920]" />;
      case "gasifier plant": return <Fuel className="w-6 h-6 text-[#F25920]" />;
      case "plastics & polymers": return <Box className="w-6 h-6 text-[#F25920]" />;
      case "furnaces & smelting": return <Cpu className="w-6 h-6 text-[#F25920]" />;
      case "ceramics & tiles": return <Grid className="w-6 h-6 text-[#F25920]" />;
      case "paper mill": return <FileText className="w-6 h-6 text-[#F25920]" />;
      case "plywood & timber": return <Trees className="w-6 h-6 text-[#F25920]" />;
      case "coal & minerals": return <Mountain className="w-6 h-6 text-[#F25920]" />;
      case "cement & aggregates": return <HardHat className="w-6 h-6 text-[#F25920]" />;
      case "chemical & fertilizer": return <FlaskConical className="w-6 h-6 text-[#F25920]" />;
      default: return <Factory className="w-6 h-6 text-[#F25920]" />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800">
      
      {/* Header Banner in Light Theme */}
      <section className="bg-gradient-to-b from-[#F8FAFC] via-white to-[#FDEEE8]/30 py-16 sm:py-24 relative overflow-hidden border-b border-slate-200/70">
        <div className="absolute inset-0 bg-industrial-grid-light opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex items-center space-x-2 text-xs text-slate-500 mb-4">
            <Link href="/" className="hover:text-[#26235E]">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#F25920] font-semibold">Industries We Serve</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#F25920] border border-orange-200 shadow-2xs">
              Domain Specialization • 127+ Forms of Dust
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-[#26235E] tracking-tight">
              Air Pollution &amp; Dust Solutions Across 14 Industrial Sectors
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Every industrial process generates unique particulate aerodynamics. We engineer custom extraction frameworks tailored specifically to your sector&apos;s heat, moisture, toxicity, and compliance benchmarks.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INDUSTRIES.map((ind, idx) => (
              <div
                key={ind.id}
                id={ind.id}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Header & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center">
                        {getIndustryIcon(ind.name)}
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                          Sector 0{idx + 1}
                        </span>
                        <h2 className="text-2xl font-black text-[#26235E]">
                          {ind.name}
                        </h2>
                      </div>
                    </div>

                    <button
                      onClick={() => openQuoteModal(ind.name)}
                      className="text-xs font-bold px-3.5 py-1.5 bg-[#FDEEE8] hover:bg-[#F25920] text-[#F25920] hover:text-white rounded-xl transition-colors cursor-pointer shadow-2xs"
                    >
                      Inquire
                    </button>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-4 pt-2">
                    <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-100 text-xs">
                      <strong className="text-rose-950 font-bold block mb-1">Process Challenge:</strong>
                      <p className="text-slate-700 leading-relaxed">{ind.challenge}</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 text-xs">
                      <strong className="text-emerald-950 font-bold block mb-1">Scimax Engineered Solution:</strong>
                      <p className="text-slate-700 leading-relaxed">{ind.solution}</p>
                    </div>
                  </div>

                  {/* Recommended Equipment */}
                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Recommended Systems:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {ind.recommendedEquipment.map((eq) => (
                        <span key={eq} className="px-2.5 py-1 bg-[#F8FAFC] border border-slate-200 rounded-lg text-xs font-bold text-slate-800">
                          {eq}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Dust Particulates */}
                  <div className="mt-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Particulates Handled:
                    </span>
                    <p className="text-xs text-slate-500 font-mono font-medium">
                      {ind.dustTypes.join(" • ")}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-green-700 font-bold">Full PCB Compliance Assured</span>
                  <button
                    onClick={() => openQuoteModal(ind.name)}
                    className="font-bold text-[#F25920] hover:text-[#D84813] flex items-center cursor-pointer"
                  >
                    <span>Request Industry Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Bottom Strip */}
      <section className="py-14 bg-[#26235E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Don&apos;t See Your Exact Industry Listed?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            With our database of 127 forms of dust, our engineers can analyze any custom powder, grain, or fume requirement.
          </p>
          <div className="pt-2">
            <button
              onClick={() => openQuoteModal("Custom Application")}
              className="px-8 py-3.5 bg-[#F25920] hover:bg-[#D84813] text-white text-sm font-bold rounded-xl transition-all shadow-lg cursor-pointer"
            >
              Consult Scimax Application Engineers
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
