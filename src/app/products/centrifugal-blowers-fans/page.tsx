"use client";

import React from "react";
import Link from "next/link";
import { 
  Fan, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Phone, 
  ChevronRight, 
  Check, 
  FileSpreadsheet, 
  Download,
  Gauge,
  Sliders,
  Settings
} from "lucide-react";
import { PRODUCTS, COMPANY_INFO } from "@/lib/data";
import { useLayoutModal } from "@/components/LayoutProvider";
import SizingGuideCalculator from "@/components/SizingGuideCalculator";
import ImpellerGrid from "@/components/ImpellerCard";
import BlowerOrientations from "@/components/BlowerOrientations";

export default function CentrifugalBlowersPage() {
  const { openQuoteModal } = useLayoutModal();

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
            <span className="text-[#F25920] font-semibold">Centrifugal Blowers &amp; Industrial Fans</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#F25920] border border-orange-200 shadow-2xs">
                Dynamic Balancing to ISO 1940 Grade G6.3
              </span>
              <h1 className="text-3xl sm:text-5xl font-black text-[#26235E] tracking-tight">
                Centrifugal Blowers &amp; Industrial Fans
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                Scimax Industries manufactures a complete range of Induced Draft (ID) Fans and Forced Draft (FD) High Pressure Blowers, precision-balanced to ISO 1940 Grade G6.3, along with axial fans, bifurcated flow units, and spot coolers.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => openQuoteModal("Centrifugal Blowers & Fans")}
                  className="px-6 py-3.5 bg-[#F25920] hover:bg-[#D84813] text-white font-bold text-sm rounded-xl transition-all shadow-md cursor-pointer"
                >
                  Request Fan Sizing &amp; Quote
                </button>
                <a
                  href="#sizing-guide"
                  className="px-6 py-3.5 border border-slate-300 hover:border-[#26235E] text-[#26235E] hover:bg-slate-50 text-sm font-bold rounded-xl transition-all flex items-center shadow-2xs"
                >
                  <FileSpreadsheet className="w-4 h-4 mr-2 text-[#F25920]" />
                  <span>View CFM Sizing Guide</span>
                </a>
              </div>
            </div>

            {/* Quick Spec Badge in Light Theme */}
            <div className="lg:col-span-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Aerodynamic Fan Highlights
              </h3>
              <div className="space-y-2 font-mono text-xs">
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">ID Volumetric Capacity:</span>
                  <span className="text-[#26235E] font-black">Up to 8,00,000 m³/hr</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">FD Static Pressure:</span>
                  <span className="text-[#26235E] font-black">Up to 1000 mm WG</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">Operating Temperature:</span>
                  <span className="text-[#F25920] font-black">Up to 350°C Flue Gas</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-500">Impeller Profiles:</span>
                  <span className="text-[#26235E] font-black">8 Precision Geometries</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Parameter Comparison Table */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div>
            <span className="text-xs font-bold text-[#F25920] uppercase tracking-wider block mb-1">
              Engineering Comparison
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#26235E]">
              Induced Draft (ID) vs Forced Draft (FD) Specifications
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Manufactured with heavy-gauge metallurgy and digital dynamic balancing on in-house test benches.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-xs">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#26235E] text-white">
                <tr>
                  <th className="py-4 px-6 font-bold uppercase tracking-wider text-xs border-r border-[#3E388D]">
                    Parameter
                  </th>
                  <th className="py-4 px-6 font-bold uppercase tracking-wider text-xs border-r border-[#3E388D] bg-[#1E1B4B]">
                    Induced Draft (ID) Fans
                  </th>
                  <th className="py-4 px-6 font-bold uppercase tracking-wider text-xs bg-[#34307A]">
                    Forced Draft (FD) Fans
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono text-xs sm:text-sm">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900 bg-slate-50 border-r border-slate-200 font-sans">
                    Power Range
                  </td>
                  <td className="py-4 px-6 font-bold text-[#26235E] border-r border-slate-100">
                    0.5 HP to 100 HP
                  </td>
                  <td className="py-4 px-6 font-bold text-[#F25920]">
                    1.0 HP to 100 HP
                  </td>
                </tr>

                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900 bg-slate-50 border-r border-slate-200 font-sans">
                    Volumetric Capacity
                  </td>
                  <td className="py-4 px-6 font-semibold text-slate-800 border-r border-slate-100">
                    600 to 8,00,000 m³/hr
                  </td>
                  <td className="py-4 px-6 font-semibold text-slate-800">
                    20 to 1,20,000 m³/hr
                  </td>
                </tr>

                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900 bg-slate-50 border-r border-slate-200 font-sans">
                    Static Pressure
                  </td>
                  <td className="py-4 px-6 font-semibold text-slate-800 border-r border-slate-100">
                    Up to 250 mm WG
                  </td>
                  <td className="py-4 px-6 font-semibold text-slate-800">
                    Up to 1000 mm WG (High Pressure)
                  </td>
                </tr>

                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900 bg-slate-50 border-r border-slate-200 font-sans">
                    Wheel Diameter
                  </td>
                  <td className="py-4 px-6 font-semibold text-slate-800 border-r border-slate-100">
                    200 to 2762 mm
                  </td>
                  <td className="py-4 px-6 font-semibold text-slate-800">
                    200 to 1200 mm
                  </td>
                </tr>

                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900 bg-slate-50 border-r border-slate-200 font-sans">
                    Operating Temperature
                  </td>
                  <td className="py-4 px-6 font-semibold text-slate-800 border-r border-slate-100">
                    Up to 350°C (boiler flue gas)
                  </td>
                  <td className="py-4 px-6 font-semibold text-slate-800">
                    Ambient to 150°C
                  </td>
                </tr>

                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900 bg-slate-50 border-r border-slate-200 font-sans">
                    Drive Configuration
                  </td>
                  <td className="py-4 px-6 font-semibold text-slate-800 border-r border-slate-100 font-sans text-xs">
                    Direct, V-Belt (Arr. 9), Flexible Couple
                  </td>
                  <td className="py-4 px-6 font-semibold text-slate-800 font-sans text-xs">
                    Direct Mount &amp; Belt Drive
                  </td>
                </tr>

                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900 bg-slate-50 border-r border-slate-200 font-sans">
                    Standard Metallurgy
                  </td>
                  <td className="py-4 px-6 font-semibold text-slate-800 border-r border-slate-100 font-sans text-xs">
                    IS 2062 Gr.B / Boiler Quality MS
                  </td>
                  <td className="py-4 px-6 font-semibold text-slate-800 font-sans text-xs">
                    MS / Cast Aluminium / SS304 / SS316
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 8 Precision Impeller Profiles */}
          <div className="space-y-6 pt-4">
            <div>
              <span className="text-xs font-bold text-[#F25920] uppercase tracking-wider block mb-1">
                Impeller Geometries
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#26235E]">
                8 Precision Impeller Profiles (ISO 1940 Grade G6.3 Balanced)
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Each profile engineered for specific particulate loading, chemical resistance, acoustic limits, and mechanical efficiency.
              </p>
            </div>

            <ImpellerGrid />
          </div>

          {/* Technical Sizing Guide (Sample) Matrix */}
          <div className="space-y-6 pt-6">
            <SizingGuideCalculator onOpenQuoteModal={() => openQuoteModal("Centrifugal Blowers & Fans")} />
          </div>

          {/* Standard Blower Discharge Orientations */}
          <div className="space-y-6 pt-6">
            <BlowerOrientations />
          </div>

        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-14 bg-[#F25920] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black">Require Custom Fan Curve Modeling or Sound Attenuation?</h3>
            <p className="text-xs sm:text-sm text-orange-100 mt-1">
              Contact our Ahmedabad Technical Desk for full 17-point sizing charts and altitude derating factors.
            </p>
          </div>
          <button
            onClick={() => openQuoteModal("Centrifugal Blowers & Fans")}
            className="px-6 py-3.5 bg-[#26235E] hover:bg-[#1B1847] text-white text-sm font-bold rounded-xl transition-all shadow-lg shrink-0 cursor-pointer"
          >
            Consult Technical Desk
          </button>
        </div>
      </section>

    </div>
  );
}
