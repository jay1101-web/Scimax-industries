"use client";

import React from "react";
import Link from "next/link";
import { 
  Flame, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Phone, 
  ChevronRight, 
  Check, 
  Wrench, 
  Cog, 
  Truck
} from "lucide-react";
import { PRODUCTS, COMPANY_INFO } from "@/lib/data";
import { useLayoutModal } from "@/components/LayoutProvider";

export default function FumeExtractionPage() {
  const { openQuoteModal } = useLayoutModal();
  const product = PRODUCTS.find(p => p.id === "fume-extraction-systems")!;

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
            <span className="text-[#F25920] font-semibold">Fume Extraction &amp; Industrial Vacuums</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#F25920] border border-orange-200 shadow-2xs">
                GPCB • MPCB • CPCB Norms Compliant
              </span>
              <h1 className="text-3xl sm:text-5xl font-black text-[#26235E] tracking-tight">
                Fume Extraction Systems &amp; Industrial Vacuums
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                High-performance fume extraction systems engineered to efficiently capture vapors, smoke, and airborne particles generated during melting, heating, or chemical treatment. Custom-designed frameworks include centrifugal ID fans, swivel hoods, and bag filters.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => openQuoteModal("Fume Extraction Systems")}
                  className="px-6 py-3.5 bg-[#F25920] hover:bg-[#D84813] text-white font-bold text-sm rounded-xl transition-all shadow-md cursor-pointer"
                >
                  Request Fume System Quote
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
                Key Engineering Parameters
              </h3>
              <div className="space-y-2 font-mono text-xs">
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">Furnace Applications:</span>
                  <span className="text-[#26235E] font-black">Induction, Arc, Shaft &amp; AOD</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">Swivel Hood Design:</span>
                  <span className="text-[#F25920] font-black">Continuous Source Capture</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">Industrial Vacuum:</span>
                  <span className="text-[#26235E] font-black">350 m³/hr Delivery</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-500">Vacuum Tank:</span>
                  <span className="text-[#26235E] font-black">400 mm Steel Construction</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Applications & Key Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Typical Applications */}
            <div className="space-y-4">
              <span className="text-xs font-bold text-[#F25920] uppercase tracking-wider">
                Industrial Applications
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#26235E]">
                Typical Furnace &amp; Process Installations
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our heavy-duty hoods and centrifugal exhaust loops are operating in demanding high-temperature environments across India:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Induction furnaces in mini steel plants",
                  "Electric arc furnaces in steel plants",
                  "Shaft furnaces in foundries",
                  "AOD furnaces (Argon Oxygen Decarburization)",
                  "Calcium carbide furnace systems",
                  "Incinerators for chemical & hazardous waste",
                  "Copper industry dryers",
                  "Custom industrial setups requiring fume management"
                ].map((app, aIdx) => (
                  <div key={aIdx} className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-xs font-semibold text-slate-800 flex items-start shadow-2xs">
                    <Flame className="w-4 h-4 text-[#F25920] mr-2 shrink-0 mt-0.5" />
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <span className="text-xs font-bold text-[#F25920] uppercase tracking-wider">
                System Advantages
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#26235E]">
                Engineered Performance Features
              </h2>
              <div className="space-y-3 pt-2">
                {[
                  { title: "High-Efficiency Fume Capture at the Source", desc: "Customized swivel and lip hoods eliminate fugitive smoke before dispersion into workspace." },
                  { title: "Durable Construction for Harsh Environments", desc: "Heavy plate mild steel, stainless steel, or water-cooled jackets for extreme thermal longevity." },
                  { title: "Customizable Designs Based on Plant Layout", desc: "Configured around overhead crane clearances, crucible charging, and pouring angles." },
                  { title: "Compliance Assurance with National Standards", desc: "Strict adherence to GPCB, MPCB, CPCB, and Factory Act workplace exposure thresholds." },
                  { title: "Energy-Efficient Centrifugal ID Fans", desc: "Dynamically balanced impellers delivering high static pressure draft at optimized kilowatt consumption." },
                  { title: "Modular Upgradable Architecture", desc: "Easily accommodate future plant expansions or additional furnace crucibles on the same loop." }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 shadow-2xs">
                    <h4 className="text-sm font-bold text-[#26235E] flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 shrink-0" />
                      <span>{item.title}</span>
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 pl-6">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Deep-Dive: Industrial Vacuum Cleaner in Light Card */}
          <div className="bg-[#F8FAFC] text-slate-800 rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-slate-200 shadow-sm">
            <div className="relative z-10 max-w-4xl space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-100 text-[#F25920] border border-orange-200">
                Heavy-Duty Industrial Cleaning &amp; Swarf Recovery
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-[#26235E]">
                Scimax Industrial Heavy-Duty Vacuum Cleaner
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                A powerful three-stage system engineered for continuous heavy-duty collection, extraction, and separation of dust, granules, particles, and liquids. Built with a durable <strong>400 mm steel tank</strong>, <strong>25 mm polyester filter</strong>, and <strong>10 mm impregnated cellulose cartridge</strong>, driven by a heavy-duty turbine motor with an integrated silencer. Mounted on a portable trolley with swivel casters, and adaptable for use as a blower.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Air Delivery Capacity</span>
                  <p className="text-2xl font-black text-[#F25920] font-mono mt-1">350 m³/hr</p>
                  <span className="text-xs text-slate-500 mt-1 block">At the suction hose end</span>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Debris Handled</span>
                  <p className="text-sm font-bold text-[#26235E] mt-1">Metal Chips &amp; CI Turnings</p>
                  <span className="text-xs text-slate-500 mt-1 block">Greasy dirt, fibers, coolants &amp; oils</span>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Chassis &amp; Mobilization</span>
                  <p className="text-sm font-bold text-[#26235E] mt-1">Portable Trolley Mounted</p>
                  <span className="text-xs text-slate-500 mt-1 block">With industrial swivel casters</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 text-xs text-slate-700">
                <strong className="font-bold text-[#26235E] block mb-1">Ideal for High-Precision Machining Shops:</strong>
                CNC machines, lathes, drilling machines, and automats — engineered with wide non-clogging passages for zero hose blockage.
              </div>

              <div className="pt-2">
                <button
                  onClick={() => openQuoteModal("Industrial Vacuum Cleaner")}
                  className="px-6 py-3.5 bg-[#F25920] hover:bg-[#D84813] text-white font-bold text-sm rounded-xl transition-all shadow-md cursor-pointer"
                >
                  Inquire for Industrial Vacuum Cleaner
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Bottom Strip */}
      <section className="py-14 bg-[#26235E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Need Furnace Hood Sizing or Swivel Capture Modeling?</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Our engineering team analyzes crucible tilt angles, heat thermal plumes, and face velocity requirements.
            </p>
          </div>
          <button
            onClick={() => openQuoteModal("Fume Extraction Systems")}
            className="px-6 py-3.5 bg-[#F25920] hover:bg-[#D84813] text-white text-sm font-bold rounded-xl transition-all shadow-lg shrink-0 cursor-pointer"
          >
            Consult Fume Engineers
          </button>
        </div>
      </section>

    </div>
  );
}
