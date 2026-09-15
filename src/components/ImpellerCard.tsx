import React from "react";
import { IMPELLER_PROFILES, ImpellerProfile } from "@/lib/data";
import { Fan, CheckCircle2 } from "lucide-react";

export default function ImpellerGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {IMPELLER_PROFILES.map((impeller) => (
        <div
          key={impeller.id}
          className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-orange-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            {/* Header / Number & Icon */}
            <div className="flex items-center justify-between mb-4">
              <span className="w-8 h-8 rounded-lg bg-[#26235E] text-white text-xs font-mono font-bold flex items-center justify-center">
                0{impeller.id}
              </span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-orange-100 text-[#F25920]">
                {impeller.efficiency}
              </span>
            </div>

            {/* Profile Schematic Mockup */}
            <div className="w-full h-28 bg-[#0E0C29] rounded-xl flex items-center justify-center mb-4 relative overflow-hidden group-hover:bg-[#15133C] transition-colors">
              <div className="absolute inset-0 bg-industrial-grid opacity-30" />
              <div className="relative z-10 flex flex-col items-center justify-center text-center p-2">
                <Fan className="w-10 h-10 text-[#F25920] animate-spin-slow group-hover:rotate-45 transition-transform duration-500" />
                <span className="text-[10px] font-mono text-gray-300 mt-1 uppercase tracking-wider">
                  {impeller.bladeStyle}
                </span>
              </div>
            </div>

            <h4 className="text-base font-bold text-[#26235E] group-hover:text-[#F25920] transition-colors">
              {impeller.name}
            </h4>

            <p className="text-xs text-gray-600 mt-2 leading-relaxed">
              {impeller.description}
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-gray-100">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">
              Optimal Application
            </span>
            <p className="text-xs font-semibold text-gray-800 mt-0.5">
              {impeller.bestFor}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
