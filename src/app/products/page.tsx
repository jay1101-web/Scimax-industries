"use client";

import React from "react";
import Link from "next/link";
import { 
  Wind, 
  Layers, 
  Flame, 
  Filter, 
  Fan, 
  Wrench, 
  ArrowRight, 
  Check, 
  ShieldCheck,
  FileSpreadsheet,
  Download,
  ChevronRight
} from "lucide-react";
import { PRODUCTS } from "@/lib/data";
import { useLayoutModal } from "@/components/LayoutProvider";

export default function ProductsPage() {
  const { openQuoteModal } = useLayoutModal();

  const productIcons: Record<string, React.ReactNode> = {
    "dust-collection-systems": <Wind className="w-8 h-8 text-[#F25920]" />,
    "air-pollution-control": <Layers className="w-8 h-8 text-[#F25920]" />,
    "fume-extraction-systems": <Flame className="w-8 h-8 text-[#F25920]" />,
    "silo-vent-filters": <Filter className="w-8 h-8 text-[#F25920]" />,
    "centrifugal-blowers-fans": <Fan className="w-8 h-8 text-[#F25920]" />,
    "accessories": <Wrench className="w-8 h-8 text-[#F25920]" />
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
            <span className="text-[#F25920] font-semibold">Products Catalog</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#F25920] border border-orange-200 shadow-2xs">
              Industrial Catalog • ISO 9001:2015
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-[#26235E] tracking-tight">
              Industrial Air &amp; Dust Pollution Control Equipment
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Engineered systems built with heavy-gauge metallurgy, precision aerodynamics, and pulse-jet online cleaning to meet the harshest industrial conditions across India.
            </p>
          </div>
        </div>
      </section>

      {/* Product Lines Bento Catalog */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-12">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                id={product.id}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Product Info (7 cols) */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center">
                        {productIcons[product.id]}
                      </div>
                      <div>
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-orange-100 text-[#F25920] uppercase tracking-wider">
                          {product.badge}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-black text-[#26235E] mt-1">
                          {product.name}
                        </h2>
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {product.longDescription}
                    </p>

                    {/* Subcategories list */}
                    <div className="pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Configurations &amp; Models Available:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {product.subcategories.map((sub) => (
                          <div key={sub.name} className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                            <strong className="block text-slate-900 font-bold">{sub.name}</strong>
                            <span className="text-slate-500 line-clamp-1">{sub.typicalUse}</span>
                            <span className="text-[10px] text-[#F25920] font-mono mt-0.5 block font-bold">{sub.construction}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/products/${product.slug}`}
                        className="inline-flex items-center px-6 py-3 rounded-xl font-bold text-white bg-[#26235E] hover:bg-[#1B1847] transition-all text-sm shadow-md"
                      >
                        <span>View Detailed Specifications</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>

                      <button
                        onClick={() => openQuoteModal(product.name)}
                        className="inline-flex items-center px-6 py-3 rounded-xl font-bold text-[#F25920] hover:text-white border border-[#F25920] hover:bg-[#F25920] transition-all text-sm cursor-pointer shadow-2xs"
                      >
                        <span>Get Sizing &amp; Quote</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Key Features & Specs Highlights (5 cols) */}
                  <div className="lg:col-span-5 bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200 space-y-5">
                    {product.specsHighlights && (
                      <div className="grid grid-cols-2 gap-3 pb-4 border-b border-slate-200">
                        {product.specsHighlights.map((spec) => (
                          <div key={spec.label} className="p-3 bg-white rounded-xl border border-slate-200 text-left shadow-2xs">
                            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">
                              {spec.label}
                            </span>
                            <span className="text-sm font-black text-[#26235E] font-mono mt-0.5 block">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div>
                      <h4 className="text-xs font-bold text-[#26235E] uppercase tracking-wider mb-2.5">
                        Performance Features
                      </h4>
                      <ul className="space-y-2 text-xs text-slate-600">
                        {product.keyFeatures.slice(0, 5).map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start">
                            <Check className="w-4 h-4 text-green-600 mr-2 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {product.industriesServed && (
                      <div className="pt-3 border-t border-slate-200">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                          Top Industrial Applications:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {product.industriesServed.slice(0, 6).map((ind) => (
                            <span key={ind} className="px-2 py-0.5 rounded text-[11px] bg-white border border-slate-200 text-slate-700 font-medium">
                              {ind}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Sizing Matrix CTA Banner in Light Theme */}
      <section className="py-14 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black text-[#26235E]">Looking for Fan Sizing and CFM Calculations?</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Explore our 10-point static pressure sizing matrix from 0.5 HP to 100 HP.
            </p>
          </div>
          <Link
            href="/products/centrifugal-blowers-fans#sizing-guide"
            className="px-6 py-3.5 bg-[#F25920] hover:bg-[#D84813] text-white text-sm font-bold rounded-xl transition-all shadow-md shrink-0 flex items-center"
          >
            <FileSpreadsheet className="w-4 h-4 mr-2" />
            <span>Open Sizing Guide Matrix</span>
          </Link>
        </div>
      </section>

    </div>
  );
}
