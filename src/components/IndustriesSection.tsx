import React, { useState } from "react";
import { INDUSTRIES_DATA } from "../data/industries";
import { IndustryItem } from "../types";
import {
  Flame,
  Pill,
  Factory,
  Scissors,
  Gauge,
  Zap,
  Layers,
  Grid,
  FileText,
  TreePine,
  Mountain,
  Building2,
  Beaker,
  Apple,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  X,
  Calendar
} from "lucide-react";

interface IndustriesSectionProps {
  onOpenAppointment?: (productOrIndustry?: string) => void;
  onOpenQuote?: (productOrIndustry?: string) => void;
  onSelectProductByName?: (productName: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  onOpenAppointment,
  onOpenQuote,
  onSelectProductByName
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryItem | null>(null);

  const handleAction = (item?: string) => {
    if (onOpenAppointment) {
      onOpenAppointment(item);
    } else if (onOpenQuote) {
      onOpenQuote(item);
    }
  };

  // Icon map
  const getIndustryIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-orange-500" };
    switch (iconName) {
      case "Flame": return <Flame {...props} />;
      case "Pill": return <Pill {...props} />;
      case "Factory": return <Factory {...props} />;
      case "Scissors": return <Scissors {...props} />;
      case "Gauge": return <Gauge {...props} />;
      case "Zap": return <Zap {...props} />;
      case "Layers": return <Layers {...props} />;
      case "Grid": return <Grid {...props} />;
      case "FileText": return <FileText {...props} />;
      case "TreePine": return <TreePine {...props} />;
      case "Mountain": return <Mountain {...props} />;
      case "Building2": return <Building2 {...props} />;
      case "Beaker": return <Beaker {...props} />;
      case "Apple": return <Apple {...props} />;
      default: return <Factory {...props} />;
    }
  };

  return (
    <section id="industries-section" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 text-orange-400 text-xs font-mono font-semibold uppercase tracking-widest border border-slate-800">
            <Factory className="w-3.5 h-3.5 text-orange-400" />
            SECTORS // 15+ SPECIALIZED INDUSTRIAL ENVIRONMENTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-heading tracking-tight">
            Tailored Air Movement & Dust Control Solutions
          </h2>
          <p className="text-slate-600 text-base leading-relaxed font-body">
            Every industrial process generates unique dust loads, flue temperatures, and emission thresholds. Scimax balances impeller geometries, casing thicknesses, and filtration fabrics to match your exact sector.
          </p>
        </div>

        {/* 15 Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
          {INDUSTRIES_DATA.map((ind, idx) => (
            <button
              key={ind.id}
              onClick={() => setSelectedIndustry(ind)}
              className="p-4 rounded-lg bg-slate-50 hover:bg-slate-100/90 border border-slate-200 hover:border-orange-500 text-left transition-all duration-150 group flex flex-col justify-between h-42 shadow-2xs cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-md bg-white border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform shadow-2xs">
                  {getIndustryIcon(ind.iconName)}
                </div>
                <span className="text-[10px] font-mono text-slate-400 font-bold group-hover:text-orange-600">
                  [0{idx + 1}]
                </span>
              </div>

              <div>
                <h3 className="text-xs font-bold text-slate-900 group-hover:text-orange-600 font-heading leading-snug">
                  {ind.name}
                </h3>
                <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5 font-sans">
                  {ind.recommendedProducts?.[0] || ind.tagline}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[10px] font-mono text-orange-600 font-bold">
                <span>VIEW SPECS</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          ))}
        </div>

        {/* Brochure Document Showcase: Industries Served & Axial Engineering */}
        <div className="mt-12 bg-slate-950 rounded-xl border border-slate-800 p-6 sm:p-8 text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono text-orange-400 font-bold uppercase tracking-wider block mb-1">
                ENGINEERING DOCUMENTATION // AUTHENTIC CATALOGUE SCAN
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                Brochure Reference: Industrial Sectors & Axial Fan Range
              </h3>
              <p className="text-xs text-slate-300 font-body mt-1">
                As published in the official Scimax Industries engineering catalogue and technical data sheet.
              </p>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Make in India • ISO 9001:2015</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Left: Industries Served Page */}
            <div className="bg-slate-900 rounded-lg p-4 border border-slate-800 flex flex-col items-center group">
              <div className="w-full relative rounded-md overflow-hidden bg-slate-950 border border-slate-800 shadow-lg">
                <img
                  src="/images/products/scimax-industries-served-brochure.jpg"
                  alt="Scimax Industries Served & Our Products Brochure Page"
                  className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-102"
                  loading="lazy"
                />
              </div>
              <div className="w-full flex items-center justify-between pt-3 text-xs font-mono">
                <span className="text-slate-200 font-bold">15 Industries & Core Products</span>
                <span className="text-orange-400">Page 10</span>
              </div>
            </div>

            {/* Right: Axial Flow Fans Page */}
            <div className="bg-slate-900 rounded-lg p-4 border border-slate-800 flex flex-col items-center group">
              <div className="w-full relative rounded-md overflow-hidden bg-slate-950 border border-slate-800 shadow-lg">
                <img
                  src="/images/products/scimax-axial-flow-fans-brochure.jpg"
                  alt="Scimax Axial Flow Fans Technical Specifications Brochure Page"
                  className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-102"
                  loading="lazy"
                />
              </div>
              <div className="w-full flex items-center justify-between pt-3 text-xs font-mono">
                <span className="text-slate-200 font-bold">Axial Flow & Bifurcated Specifications</span>
                <span className="text-orange-400">Page 8</span>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Deep Dive Modal / Dialog */}
        {selectedIndustry && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-lg border border-slate-300 max-w-2xl w-full p-6 sm:p-7 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-150">
              <div className="flex items-start justify-between border-b border-slate-200 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-md bg-slate-900 border border-slate-800 flex items-center justify-center">
                    {getIndustryIcon(selectedIndustry.iconName)}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-orange-600 font-bold uppercase tracking-wider block">
                      Industrial Sector Solution
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 font-heading">
                      {selectedIndustry.name}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedIndustry(null)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 rounded-md cursor-pointer hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body">
                {selectedIndustry.description}
              </p>

              {/* Recommended Equipment */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-heading">
                  Engineered Scimax Equipment for this Sector:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {(selectedIndustry.recommendedProducts || []).map((eq, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-md bg-slate-50 border border-slate-200 flex items-center justify-between text-xs text-slate-800 font-sans"
                    >
                      <span>✓ {eq}</span>
                      {onSelectProductByName && (
                        <button
                          onClick={() => {
                            setSelectedIndustry(null);
                            onSelectProductByName(eq);
                          }}
                          className="text-orange-600 hover:text-orange-700 font-bold text-[10px] cursor-pointer font-mono"
                        >
                          View Model
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Sector Specific Benefits */}
              <div className="p-3.5 bg-orange-50/60 rounded-md border border-orange-200 space-y-1">
                <span className="text-[11px] font-bold text-orange-950 font-heading">
                  Why Scimax for {selectedIndustry.name}?
                </span>
                <p className="text-xs text-slate-700 leading-relaxed font-body">
                  Tailored casing thickness, spark-resistant aluminum/stainless steel construction options, high-temperature bearings, and specialized filtration fabrics rated for your specific emission profile.
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-2.5 pt-2">
                <button
                  onClick={() => setSelectedIndustry(null)}
                  className="px-4 py-2 rounded-md border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer font-heading"
                >
                  CLOSE
                </button>
                <button
                  onClick={() => {
                    const indName = selectedIndustry.name;
                    setSelectedIndustry(null);
                    handleAction(`Custom Solution for ${indName} Industry`);
                  }}
                  className="px-4 py-2 rounded-md bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-xs font-bold transition-colors cursor-pointer font-heading inline-flex items-center gap-1.5 shadow-xs"
                >
                  <Calendar className="w-3.5 h-3.5 text-white" />
                  <span>BOOK {selectedIndustry.name.toUpperCase()} APPOINTMENT</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
