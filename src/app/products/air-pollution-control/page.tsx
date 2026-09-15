"use client";

import React from "react";
import Link from "next/link";
import { 
  Layers, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Phone, 
  Flame, 
  Zap, 
  ChevronRight, 
  Check, 
  Thermometer, 
  Sliders
} from "lucide-react";
import { PRODUCTS, COMPANY_INFO } from "@/lib/data";
import { useLayoutModal } from "@/components/LayoutProvider";

export default function AirPollutionControlPage() {
  const { openQuoteModal } = useLayoutModal();
  const product = PRODUCTS.find(p => p.id === "air-pollution-control")!;

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
            <span className="text-[#F25920] font-semibold">Air Pollution Control</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#F25920] border border-orange-200 shadow-2xs">
                CPCB / GPCB / MPCB Emission Compliance
              </span>
              <h1 className="text-3xl sm:text-5xl font-black text-[#26235E] tracking-tight">
                Air Pollution Control Systems
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                Scimax Industries is an ISO 9001:2015 certified manufacturer and supplier delivering high-performance air pollution control solutions tailored for steel plants, foundries, pharmaceuticals, chemical processing, and industrial boilers.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => openQuoteModal("Air Pollution Control")}
                  className="px-6 py-3.5 bg-[#F25920] hover:bg-[#D84813] text-white font-bold text-sm rounded-xl transition-all shadow-md cursor-pointer"
                >
                  Request Emission Control Proposal
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

            {/* Quick Stats Box in Light Theme */}
            <div className="lg:col-span-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Pollution Control Standards
              </h3>
              <div className="space-y-2 font-mono text-xs">
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">SPM Emission Limit:</span>
                  <span className="text-[#26235E] font-black">&lt; 30 mg/Nm³</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">Process Technologies:</span>
                  <span className="text-[#F25920] font-black">Wet &amp; Dry Control</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">Thermal Protection:</span>
                  <span className="text-[#26235E] font-black">Dilution &amp; Bypass Dampers</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-500">Design Facility:</span>
                  <span className="text-[#26235E] font-black">Kathwada, Ahmedabad</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Key Features Grid */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold text-[#F25920] uppercase tracking-wider">
                Engineering Capabilities
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#26235E] mt-1">
                Comprehensive Key Features
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.keyFeatures.map((feature, fIdx) => (
                <div key={fIdx} className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 shadow-2xs hover:shadow-md transition-all">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-[#F25920] mb-3">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-bold text-slate-900 leading-snug">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Deep-Dive: Bag Filter for Boiler Pollution Control in Light Card */}
          <div className="bg-[#F8FAFC] text-slate-800 rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-slate-200 shadow-sm">
            <div className="relative z-10 max-w-3xl space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-100 text-[#F25920] border border-orange-200">
                Boiler Flue Gas Management
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-[#26235E]">
                Bag Filter for Boiler Pollution Control
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Purpose-built bag filters manage flue gas emissions from wood, coal, and lignite-fired boilers, fully compliant with Pollution Control Board norms and stringent Suspended Particulate Matter (SPM) limits. Packed bed scrubber systems are available where sulphur gases (SOx) are a concern.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <h4 className="text-sm font-bold text-[#F25920] mb-1">Pre-Cyclone Separators</h4>
                  <p className="text-xs text-slate-600">Drops out heavy spark-carrying ember loads before gas touches the filter bags.</p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <h4 className="text-sm font-bold text-[#F25920] mb-1">Multiclone Collectors</h4>
                  <p className="text-xs text-slate-600">Parallel cyclone tubes for enhanced fly ash separation with minimal pressure drop.</p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <h4 className="text-sm font-bold text-[#F25920] mb-1">Dilution &amp; Bypass Dampers</h4>
                  <p className="text-xs text-slate-600">Regulates flue gas temperature spikes to safeguard filter elements from burning.</p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <h4 className="text-sm font-bold text-[#F25920] mb-1">Thermal Insulation</h4>
                  <p className="text-xs text-slate-600">Mineral wool rockwool cladding to prevent acid dew-point condensation inside the casing.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Multiple Removal Technologies */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg text-[#26235E] mb-2">Packed Bed &amp; Venturi Scrubbers</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Neutralizes acid fumes (HCl, H₂SO₄, HNO₃) and SOx gases with counter-current chemical liquid recirculation in PP/FRP or SS316L.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg text-[#26235E] mb-2">High-Temperature Baghouses</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Utilizes Nomex (Aramid), PPS (Ryton), or PTFE membranes capable of continuous operation up to 260°C with automated reverse pulsing.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg text-[#26235E] mb-2">Activated Carbon Adsorption</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Removes VOCs, toxic chemical vapors, and process odors before clean air discharge into industrial zones.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Bottom Strip */}
      <section className="py-14 bg-[#26235E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Facing Pollution Control Board (PCB) SPM Notices?</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Scimax engineers conduct on-site emission audits and supply retrofits to achieve guaranteed &lt; 30 mg/Nm³ compliance.
            </p>
          </div>
          <button
            onClick={() => openQuoteModal("Air Pollution Control")}
            className="px-6 py-3.5 bg-[#F25920] hover:bg-[#D84813] text-white text-sm font-bold rounded-xl transition-all shadow-lg shrink-0 cursor-pointer"
          >
            Schedule Compliance Audit
          </button>
        </div>
      </section>

    </div>
  );
}
