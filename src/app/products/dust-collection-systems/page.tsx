"use client";

import React from "react";
import Link from "next/link";
import { 
  Wind, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  FileText, 
  Phone, 
  Layers, 
  Cpu, 
  Settings,
  ChevronRight
} from "lucide-react";
import { PRODUCTS, COMPANY_INFO } from "@/lib/data";
import { useLayoutModal } from "@/components/LayoutProvider";

export default function DustCollectionPage() {
  const { openQuoteModal } = useLayoutModal();
  const product = PRODUCTS.find(p => p.id === "dust-collection-systems")!;

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
            <span className="text-[#F25920] font-semibold">Dust Collection Systems</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#F25920] border border-orange-200 shadow-2xs">
                ISO 9001:2015 Certified • Continuous Duty
              </span>
              <h1 className="text-3xl sm:text-5xl font-black text-[#26235E] tracking-tight">
                Industrial Dust Collection Systems
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                At Scimax Industries, we deliver dust collection systems engineered for superior performance, durability, and energy efficiency — built with precision and powered by innovation.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => openQuoteModal("Dust Collection Systems")}
                  className="px-6 py-3.5 bg-[#F25920] hover:bg-[#D84813] text-white font-bold text-sm rounded-xl transition-all shadow-md cursor-pointer"
                >
                  Request System Sizing &amp; Quote
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

            {/* Quick Spec Badge Box in Light Theme */}
            <div className="lg:col-span-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Key Performance Metrics
              </h3>
              <div className="space-y-2 font-mono text-xs">
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">Particulate Capture:</span>
                  <span className="text-[#26235E] font-black">Up to 99.9%</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">Air Volume Capacity:</span>
                  <span className="text-[#26235E] font-black">500 to 1,50,000 m³/hr</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">Cleaning Mechanism:</span>
                  <span className="text-[#F25920] font-black">Online Reverse Pulse-Jet</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-500">Dust Database:</span>
                  <span className="text-[#26235E] font-black">127+ Industrial Types</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Product Range Table */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div>
            <span className="text-xs font-bold text-[#F25920] uppercase tracking-wider block mb-1">
              Configuration Matrix
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#26235E]">
              Our Dust Collection Product Range
            </h2>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-xs">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#26235E] text-white">
                <tr>
                  <th className="py-4 px-6 font-bold uppercase tracking-wider text-xs">Product Line</th>
                  <th className="py-4 px-6 font-bold uppercase tracking-wider text-xs">Typical Use</th>
                  <th className="py-4 px-6 font-bold uppercase tracking-wider text-xs">Construction Metallurgy</th>
                  <th className="py-4 px-6 font-bold uppercase tracking-wider text-xs text-right">Inquiry</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {product.subcategories.map((sub) => (
                  <tr key={sub.name} className="hover:bg-orange-50/40 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#26235E]">
                      {sub.name}
                    </td>
                    <td className="py-4 px-6 text-slate-700">
                      {sub.typicalUse}
                      {sub.description && (
                        <p className="text-xs text-slate-500 mt-1">{sub.description}</p>
                      )}
                    </td>
                    <td className="py-4 px-6 font-mono text-xs text-slate-900 font-bold">
                      {sub.construction}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() => openQuoteModal(sub.name)}
                        className="text-xs font-bold px-3 py-1.5 bg-[#F25920] hover:bg-[#D84813] text-white rounded-lg transition-colors cursor-pointer shadow-xs"
                      >
                        Get Quote
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Operating Principle & How it Works */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-6">
            
            <div className="bg-[#F8FAFC] p-8 rounded-3xl border border-slate-200 space-y-4">
              <h3 className="text-xl font-bold text-[#26235E] flex items-center">
                <Settings className="w-5 h-5 mr-2 text-[#F25920]" />
                <span>How Our Dust Collectors Work</span>
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Contaminated air is pulled into the system through strategically placed inlets. Larger particles are separated using cyclone action or pre-filters, while finer particles are trapped by high-efficiency filter bags or cartridges.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Clean, filtered air is then safely discharged back into the workspace or vented outside, with easy maintenance access and intelligent airflow design for continuous, reliable dust control.
              </p>

              <div className="pt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Key Features:</h4>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-green-600 mr-2" /> High-Efficiency Filtration</li>
                  <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-green-600 mr-2" /> Robust Construction (MS / SS304 / Boiler Quality)</li>
                  <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-green-600 mr-2" /> Low Maintenance Design with tool-less bag access</li>
                  <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-green-600 mr-2" /> Maximum Airflow Performance</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#FDEEE8]/50 p-8 rounded-3xl border border-orange-200 space-y-4">
              <h3 className="text-xl font-bold text-[#26235E] flex items-center">
                <Cpu className="w-5 h-5 mr-2 text-[#F25920]" />
                <span>Operating Principle</span>
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F25920] mr-2.5 mt-2 shrink-0" />
                  <span><strong>Continuous-duty operation</strong> for uninterrupted industrial performance.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F25920] mr-2.5 mt-2 shrink-0" />
                  <span><strong>Filters are cleaned online automatically</strong> during operation without stopping fans.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F25920] mr-2.5 mt-2 shrink-0" />
                  <span>Dust-laden air enters through the inlet; <strong>velocity is reduced</strong> for gravity pre-separation.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F25920] mr-2.5 mt-2 shrink-0" />
                  <span>Heavier particles fall into the collection hopper; finer particles collect on the filter bags.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F25920] mr-2.5 mt-2 shrink-0" />
                  <span>Clean air passes through the filter bags and exits via the clean air chamber and stack.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F25920] mr-2.5 mt-2 shrink-0" />
                  <span>A <strong>reverse pulse-jet system</strong> periodically cleans the filter surface using dry compressed air.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Industries Served Strip */}
          <div className="p-6 bg-[#F8FAFC] rounded-2xl border border-slate-200">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
              Industries Served for Dust Collection:
            </span>
            <div className="flex flex-wrap gap-2 text-xs">
              {product.industriesServed?.map((ind) => (
                <span key={ind} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-slate-800 font-semibold shadow-2xs">
                  {ind}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-14 bg-[#F25920] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black">Have Specific Dust Grain Loading or Ducting Requirements?</h3>
            <p className="text-xs sm:text-sm text-orange-100 mt-1">
              Submit your process parameters to our design desk for an engineered proposal within 24 hours.
            </p>
          </div>
          <button
            onClick={() => openQuoteModal("Dust Collection Systems")}
            className="px-6 py-3.5 bg-[#26235E] hover:bg-[#1B1847] text-white text-sm font-bold rounded-xl transition-all shadow-lg shrink-0 cursor-pointer"
          >
            Get Custom Proposal
          </button>
        </div>
      </section>

    </div>
  );
}
