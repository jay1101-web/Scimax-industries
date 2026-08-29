import React, { useState } from "react";
import { IMPELLER_TYPES } from "../data/products";
import { ImpellerType } from "../types";
import { Wind, CheckCircle2, ArrowRight, Gauge, Cpu, Layers, Calendar, Eye } from "lucide-react";
import { ImpellerRealPhoto } from "./VisualAssets";

interface ImpellerShowcaseProps {
  onSelectImpellerForQuote?: (impellerName: string) => void;
  onBookImpellerConsultation?: (impellerName: string) => void;
}

export const ImpellerShowcase: React.FC<ImpellerShowcaseProps> = ({
  onSelectImpellerForQuote,
  onBookImpellerConsultation
}) => {
  const [selectedImpeller, setSelectedImpeller] = useState<ImpellerType>(IMPELLER_TYPES[2]); // Backward Inclined by default

  const handleAction = (name: string) => {
    if (onBookImpellerConsultation) {
      onBookImpellerConsultation(name);
    } else if (onSelectImpellerForQuote) {
      onSelectImpellerForQuote(name);
    }
  };

  return (
    <div className="bg-slate-900 text-white rounded-lg border border-slate-700/80 p-6 sm:p-8 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-5">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-800 text-orange-400 border border-slate-700 text-xs font-mono uppercase tracking-wider mb-2">
            <Cpu className="w-3.5 h-3.5" />
            ROTOR AERODYNAMICS // ISO 1940 G6.3 / G2.5
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold font-heading tracking-tight text-white">
            8 Impeller Geometries & Blade Engineering
          </h3>
          <p className="text-slate-300 text-sm mt-1 max-w-2xl font-body leading-relaxed">
            Statically & dynamically balanced to ISO 6.3 standard on digital test benches. Custom profiled for static pressure, tip velocity, abrasive dust resilience, and non-overloading motor performance.
          </p>
        </div>

        <div className="text-right hidden sm:block font-mono text-xs">
          <span className="text-orange-400 block font-bold tracking-wider">[DYNAMIC TOLERANCE: ISO 1940]</span>
          <span className="text-slate-400">Balancing Grade: G6.3 / G2.5</span>
        </div>
      </div>

      {/* Impeller Grid Selector - Precision Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-6">
        {IMPELLER_TYPES.map((imp, idx) => {
          const isSelected = selectedImpeller.id === imp.id;
          return (
            <button
              key={imp.id}
              onClick={() => setSelectedImpeller(imp)}
              className={`p-2.5 rounded-md text-center border transition-all flex flex-col items-center justify-center gap-1.5 min-h-[92px] cursor-pointer ${
                isSelected
                  ? "bg-orange-500 text-white font-bold border-orange-400 shadow-md ring-2 ring-orange-400/30"
                  : "bg-slate-950/80 hover:bg-slate-800 text-slate-300 border-slate-800 hover:text-white hover:border-slate-700"
              }`}
            >
              <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-900 border border-slate-700 flex items-center justify-center p-0.5 shrink-0">
                <ImpellerRealPhoto type={imp.id} className="w-full h-full" />
              </div>
              <span className="text-[11px] leading-tight font-medium line-clamp-2 font-heading">
                {imp.name.replace(" Impeller", "")}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Impeller Deep-Dive Card */}
      <div className="bg-slate-950/90 rounded-xl border border-slate-800 p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Left: Real Impeller Rotor Photo */}
        <div className="md:col-span-4 bg-slate-900/90 rounded-lg p-5 border border-slate-800 flex flex-col items-center justify-center text-center group">
          <div className="w-36 h-36 relative flex items-center justify-center p-2 bg-slate-950 rounded-lg border border-slate-800 shadow-inner">
            <ImpellerRealPhoto type={selectedImpeller.id} className="w-full h-full drop-shadow-xl transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute top-1.5 right-1.5 px-1.5 py-0.5 bg-orange-500/90 text-white text-[9px] font-mono font-bold rounded-xs">
              PDF P.11
            </div>
          </div>
          <p className="text-sm font-bold text-orange-400 mt-3 font-heading">
            {selectedImpeller.name}
          </p>
          <span className="text-xs text-slate-300 mt-1 font-sans">
            Peak Efficiency: <strong className="text-white">{selectedImpeller.efficiency}</strong>
          </span>
          <span className="text-[10px] text-slate-500 font-mono mt-0.5">
            Static Pressure: {selectedImpeller.pressureRange}
          </span>
        </div>

        {/* Right: Technical Suitability Details */}
        <div className="md:col-span-8 space-y-4">
          <div>
            <h4 className="text-lg font-bold text-white font-heading">
              {selectedImpeller.name}
            </h4>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed font-body">
              {selectedImpeller.description}
            </p>
          </div>

          {/* Performance Parameters Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-2.5 bg-slate-900 rounded-md border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase block font-mono">Blade Profile</span>
              <strong className="text-white text-xs">{selectedImpeller.bladeProfile}</strong>
            </div>

            <div className="p-2.5 bg-slate-900 rounded-md border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase block font-mono">Dust Handling</span>
              <strong className="text-orange-400 text-xs">{selectedImpeller.dustHandling}</strong>
            </div>

            <div className="p-2.5 bg-slate-900 rounded-md border border-slate-800 col-span-2 sm:col-span-1">
              <span className="text-[10px] text-slate-400 uppercase block font-mono">Efficiency</span>
              <strong className="text-sky-400 text-xs">{selectedImpeller.efficiency}</strong>
            </div>
          </div>

          {/* Best Application Tags */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
              Ideal Industrial Applications:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {(selectedImpeller.bestApplications || (selectedImpeller.bestFor ? selectedImpeller.bestFor.split(',').map(s => s.trim()) : [])).map((app, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-slate-900 text-slate-200 border border-slate-700 text-[11px] rounded-md font-sans"
                >
                  ✓ {app}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Appointment Button */}
          <div className="pt-2">
            <button
              onClick={() => handleAction(selectedImpeller.name)}
              className="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-md text-xs font-bold transition-colors inline-flex items-center gap-2 cursor-pointer font-heading shadow-xs"
            >
              <Calendar className="w-3.5 h-3.5 text-white" />
              <span>Book Appointment for {selectedImpeller.name}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Authentic Brochure Impeller & Centrifugal Fan Scan */}
      <div className="mt-8 p-5 bg-slate-950/90 rounded-lg border border-slate-800 text-white flex flex-col md:flex-row items-center gap-6">
        <div className="w-full md:w-52 shrink-0 rounded-md overflow-hidden bg-slate-900 border border-slate-800 group">
          <img
            src="/images/products/scimax-impellers-and-centrifugal-brochure.jpg"
            alt="Scimax Types of Impeller & Centrifugal Fan Engineering Catalogue Page"
            className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="space-y-2 text-left">
          <span className="text-[11px] font-mono text-orange-400 font-bold uppercase tracking-wider block">
            BROCHURE DOCUMENTATION // PAGE 11
          </span>
          <h4 className="text-base font-bold text-white font-heading">
            8 Aerodynamic Rotor Designs & ID / FD Fan Specifications
          </h4>
          <p className="text-xs text-slate-300 font-body leading-relaxed">
            All impellers are dynamically balanced to ISO 1940 Grade G6.3 standard on digital balancing test stands at our Chadasna manufacturing facility, ensuring zero vibration and extended motor bearing life.
          </p>
        </div>
      </div>
    </div>
  );
};
