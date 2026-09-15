"use client";

import React from "react";
import Link from "next/link";
import { 
  Wrench, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Phone, 
  ChevronRight, 
  Package, 
  Cpu, 
  Clock, 
  Activity
} from "lucide-react";
import { PRODUCTS, COMPANY_INFO } from "@/lib/data";
import { useLayoutModal } from "@/components/LayoutProvider";

export default function AccessoriesPage() {
  const { openQuoteModal } = useLayoutModal();
  const product = PRODUCTS.find(p => p.id === "accessories")!;

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800">
      
      {/* Breadcrumb & Hero in Light Theme */}
      <section className="bg-gradient-to-b from-[#F8FAFC] via-white to-[#FDEEE8]/30 py-14 sm:py-20 relative overflow-hidden border-b border-slate-200/70">
        <div className="absolute inset-0 bg-industrial-grid-light opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex items-center space-x-2 text-xs text-slate-500 mb-4">
            <Link href="/" className="hover:text-[#26235E]">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/products" className="hover:text-[#26235E]">Products</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#F25920] font-semibold">Accessories &amp; Spares</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#F25920] border border-orange-200 shadow-2xs">
                OEM Certified Spares • Direct Fit Guarantee
              </span>
              <h1 className="text-3xl sm:text-5xl font-black text-[#26235E] tracking-tight">
                Core Accessories for Industrial Dust Collectors
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                Maintain continuous operational uptime and peak filtration efficiency with precision-machined Scimax OEM replacement parts, pulse valves, filter cages, and sequential digital timers.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => openQuoteModal("Accessories & Spares")}
                  className="px-6 py-3.5 bg-[#F25920] hover:bg-[#D84813] text-white font-bold text-sm rounded-xl transition-all shadow-md cursor-pointer"
                >
                  Request Spares Quotation
                </button>
                <a
                  href={`tel:${COMPANY_INFO.contacts.directSales.phoneRaw}`}
                  className="px-6 py-3.5 border border-slate-300 hover:border-[#26235E] text-[#26235E] hover:bg-slate-50 text-sm font-bold rounded-xl transition-all flex items-center shadow-2xs"
                >
                  <Phone className="w-4 h-4 mr-2 text-[#F25920]" />
                  <span>Call: {COMPANY_INFO.contacts.directSales.phone}</span>
                </a>
              </div>
            </div>

            {/* Quick Spec Badge in Light Theme */}
            <div className="lg:col-span-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Spares Availability Highlights
              </h3>
              <div className="space-y-2 font-mono text-xs">
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">Pulse Valve Sizes:</span>
                  <span className="text-[#26235E] font-black">3/4&quot; to 3&quot; Ports</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">Timer Channels:</span>
                  <span className="text-[#F25920] font-black">4 to 64 Outputs</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">Filter Cages:</span>
                  <span className="text-[#26235E] font-black">8 to 20 Wire Frames</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-500">Inventory Status:</span>
                  <span className="text-[#26235E] font-black">Ex-Stock Ahmedabad</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Accessories Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div>
            <span className="text-xs font-bold text-[#F25920] uppercase tracking-wider block mb-1">
              Component Catalog
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#26235E]">
              Core Accessories &amp; Replacement Components
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              All 9 core dust collector accessories listed in the Scimax technical catalog.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.subcategories.map((sub, idx) => (
              <div
                key={sub.name}
                className="bg-[#F8FAFC] rounded-3xl p-6 border border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-lg bg-[#26235E] text-white text-xs font-mono font-bold flex items-center justify-center">
                      0{idx + 1}
                    </span>
                    <Wrench className="w-5 h-5 text-[#F25920]" />
                  </div>

                  <h3 className="text-lg font-bold text-[#26235E] mb-2">
                    {sub.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {sub.typicalUse}
                  </p>

                  <div className="p-3.5 bg-white rounded-2xl border border-slate-200 text-xs shadow-2xs">
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">
                      Material Specification
                    </span>
                    <p className="text-slate-800 font-bold mt-0.5">
                      {sub.construction}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[11px] text-green-700 font-bold">Ex-Stock Available</span>
                  <button
                    onClick={() => openQuoteModal(sub.name)}
                    className="text-xs font-bold text-[#F25920] hover:text-[#D84813] cursor-pointer"
                  >
                    Inquire Now →
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Bottom Strip */}
      <section className="py-14 bg-[#26235E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Need Replacement Filter Bags or Pulse Valves Urgently?</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Our Ahmedabad warehouse dispatches standard filter bags, cages, diaphragms, and digital timers across Gujarat and India.
            </p>
          </div>
          <button
            onClick={() => openQuoteModal("Accessories & Spares")}
            className="px-6 py-3.5 bg-[#F25920] hover:bg-[#D84813] text-white text-sm font-bold rounded-xl transition-all shadow-lg shrink-0 cursor-pointer"
          >
            Request Spares Dispatch
          </button>
        </div>
      </section>

    </div>
  );
}
