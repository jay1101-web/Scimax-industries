"use client";

import React from "react";
import Link from "next/link";
import { 
  Filter, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Phone, 
  ChevronRight, 
  Check, 
  Package, 
  Layers, 
  Sparkles
} from "lucide-react";
import { PRODUCTS, COMPANY_INFO } from "@/lib/data";
import { useLayoutModal } from "@/components/LayoutProvider";

export default function SiloVentFiltersPage() {
  const { openQuoteModal } = useLayoutModal();
  const product = PRODUCTS.find(p => p.id === "silo-vent-filters")!;

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
            <span className="text-[#F25920] font-semibold">Silo Vent Filters</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#F25920] border border-orange-200 shadow-2xs">
                99.9% Filtration Efficiency • Automated Reverse Pulse-Jet
              </span>
              <h1 className="text-3xl sm:text-5xl font-black text-[#26235E] tracking-tight">
                Silo Vent Filters &amp; Bulk Material Collectors
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                High-efficiency venting solutions engineered to prevent dust emissions during pneumatic tanker loading and conveyor filling of storage silos, bins, and hoppers.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => openQuoteModal("Silo Vent Filters")}
                  className="px-6 py-3.5 bg-[#F25920] hover:bg-[#D84813] text-white font-bold text-sm rounded-xl transition-all shadow-md cursor-pointer"
                >
                  Request Silo Filter Sizing &amp; Quote
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

            {/* Quick Specs Box in Light Theme */}
            <div className="lg:col-span-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Silo Vent Filter Specs
              </h3>
              <div className="space-y-2 font-mono text-xs">
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">Filtration Efficiency:</span>
                  <span className="text-[#26235E] font-black">Up to 99.9%</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">Cleaning Method:</span>
                  <span className="text-[#F25920] font-black">Automatic Pulse-Jet</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">Installation:</span>
                  <span className="text-[#26235E] font-black">Floor Type &amp; Top-Mounted</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-500">Materials Handled:</span>
                  <span className="text-[#26235E] font-black">Cement, Fly Ash, Lime, Flour</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Comparison Section: Floor Type vs Top Mounted */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#F25920] uppercase tracking-wider">
              Installation Styles
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#26235E]">
              Engineered For Every Factory Layout &amp; Height Restriction
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Top Mounted Silo Vent Filter */}
            <div className="bg-[#F8FAFC] p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold px-3 py-1 bg-blue-100 text-[#26235E] rounded-full uppercase tracking-wider">
                    Silo Roof Flange Mount
                  </span>
                  <Filter className="w-6 h-6 text-[#F25920]" />
                </div>

                <h3 className="text-2xl font-bold text-[#26235E]">
                  Top Mounted Silo Vent Filter
                </h3>

                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  Mounted directly on top of silos for dust-free venting during filling — filters cement, fly ash, lime, flour, and other dry bulk solids with zero material waste by dropping captured product back into the silo.
                </p>

                <div className="mt-6 pt-6 border-t border-slate-200 space-y-2.5">
                  <div className="flex items-start text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Automatic reverse pulse-jet cleaning system with integral manifold</span>
                  </div>
                  <div className="flex items-start text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Up to 99.9% filtration efficiency for sub-micron powder particles</span>
                  </div>
                  <div className="flex items-start text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Tool-free cartridge removal from top or clean air side</span>
                  </div>
                  <div className="flex items-start text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Weather-resistant powder-coated Mild Steel or SS304/SS316 casing</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => openQuoteModal("Top Mounted Silo Vent Filter")}
                  className="w-full py-3.5 bg-[#26235E] hover:bg-[#1B1847] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer shadow-xs"
                >
                  Request Top-Mounted Sizing
                </button>
              </div>
            </div>

            {/* Floor Type Silo Vent Filter */}
            <div className="bg-[#FDEEE8]/50 p-8 sm:p-10 rounded-3xl border border-orange-200 shadow-sm space-y-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold px-3 py-1 bg-orange-100 text-[#F25920] rounded-full uppercase tracking-wider">
                    Ground-Level Maintenance
                  </span>
                  <Package className="w-6 h-6 text-[#F25920]" />
                </div>

                <h3 className="text-2xl font-bold text-[#26235E]">
                  Floor Type Silo Vent Filter
                </h3>

                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  Compact, floor/near-silo mounted for height- or space-restricted installations. Connected via ductwork to prevent dust emission during pneumatic filling or displacement operations without requiring crane access for servicing.
                </p>

                <div className="mt-6 pt-6 border-t border-orange-200 space-y-2.5">
                  <div className="flex items-start text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#F25920] mr-2 shrink-0 mt-0.5" />
                    <span>Cartridge or bag-type filter elements tailored to moisture conditions</span>
                  </div>
                  <div className="flex items-start text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#F25920] mr-2 shrink-0 mt-0.5" />
                    <span>Integrated pulse-jet cleaning system with digital timer</span>
                  </div>
                  <div className="flex items-start text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#F25920] mr-2 shrink-0 mt-0.5" />
                    <span>Heavy-duty MS or stainless-steel construction with discharge hopper</span>
                  </div>
                  <div className="flex items-start text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#F25920] mr-2 shrink-0 mt-0.5" />
                    <span>Explosion vent options available for combustible bulk dusts</span>
                  </div>
                  <div className="flex items-start text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#F25920] mr-2 shrink-0 mt-0.5" />
                    <span>Gasketed doors &amp; seals, differential pressure monitoring port</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => openQuoteModal("Floor Type Silo Vent Filter")}
                  className="w-full py-3.5 bg-[#F25920] hover:bg-[#D84813] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer shadow-xs"
                >
                  Request Floor-Type Sizing
                </button>
              </div>
            </div>

          </div>

          {/* Bulk Materials Handled */}
          <div className="p-8 bg-[#F8FAFC] rounded-3xl border border-slate-200 space-y-4">
            <h3 className="text-lg font-bold text-[#26235E]">
              Dry Bulk Materials Handled:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-xs">
              {["Portland Cement", "Fly Ash", "Quicklime & Hydrated Lime", "Gypsum Powder", "Organic Flour & Starch", "Plastic Pellets & Resins"].map((mat) => (
                <div key={mat} className="p-3.5 bg-white rounded-xl border border-slate-200 text-center font-bold text-slate-800 shadow-2xs">
                  {mat}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA Bottom Strip */}
      <section className="py-14 bg-[#26235E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Have Silo Tanker Unloading or Filling Problems?</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Contact our Ahmedabad technical desk for silo vent diameter calculations and CFM matching.
            </p>
          </div>
          <button
            onClick={() => openQuoteModal("Silo Vent Filters")}
            className="px-6 py-3.5 bg-[#F25920] hover:bg-[#D84813] text-white text-sm font-bold rounded-xl transition-all shadow-lg shrink-0 cursor-pointer"
          >
            Consult Sizing Desk
          </button>
        </div>
      </section>

    </div>
  );
}
