import React from "react";
import { BLOWER_ORIENTATIONS } from "@/lib/data";
import { Compass, ArrowUpRight } from "lucide-react";

export default function BlowerOrientations() {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-200">
        <div>
          <div className="flex items-center space-x-2 text-xs font-bold text-[#F25920] uppercase tracking-wider mb-1">
            <Compass className="w-4 h-4" />
            <span>Standard Industrial Discharge Options</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-[#26235E]">
            IS / AMCA Standard Blower Discharge Orientations
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Manufactured in 8 Clockwise (CW) and 8 Counter-Clockwise (CCW) discharge orientations to match your factory ducting runs.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
        {BLOWER_ORIENTATIONS.map((orient) => (
          <div
            key={orient.name}
            className="p-4 rounded-xl bg-gray-50 hover:bg-orange-50/60 border border-gray-200 hover:border-orange-200 transition-colors group text-center flex flex-col items-center justify-between"
          >
            {/* Direction dial representation */}
            <div className="w-14 h-14 rounded-full bg-white border border-gray-300 flex items-center justify-center relative mb-3 group-hover:border-[#F25920] transition-colors shadow-xs">
              <div 
                className="w-8 h-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ transform: `rotate(${orient.angle}deg)` }}
              >
                <ArrowUpRight className="w-6 h-6 text-[#F25920]" />
              </div>
              <span className="absolute bottom-0 text-[8px] font-mono text-gray-400 font-bold">
                {orient.angle}°
              </span>
            </div>

            <div>
              <p className="text-xs font-bold text-gray-900 group-hover:text-[#26235E] transition-colors">
                {orient.name}
              </p>
              <p className="text-[11px] text-gray-500 mt-1 leading-snug">
                {orient.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
