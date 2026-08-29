import React, { useState } from "react";
import { DISCHARGE_POSITIONS_CW, DISCHARGE_POSITIONS_CCW } from "../data/technicalData";
import { DischargePosition } from "../types";
import { Compass, RotateCw, RotateCcw, Info, ArrowUpRight } from "lucide-react";

export const DischargeVisualizer: React.FC = () => {
  const [direction, setDirection] = useState<"CW" | "CCW">("CW");
  const [selectedPosition, setSelectedPosition] = useState<DischargePosition>(DISCHARGE_POSITIONS_CW[0]);

  const activePositions = direction === "CW" ? DISCHARGE_POSITIONS_CW : DISCHARGE_POSITIONS_CCW;

  const handleDirectionChange = (newDir: "CW" | "CCW") => {
    setDirection(newDir);
    setSelectedPosition(newDir === "CW" ? DISCHARGE_POSITIONS_CW[0] : DISCHARGE_POSITIONS_CCW[0]);
  };

  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-slate-900 text-white p-6 sm:p-7 border-b border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-sky-500/20 text-sky-400 border border-sky-400/30 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
              <Compass className="w-3.5 h-3.5" />
              IS 4894 / AMCA STANDARD DISCHARGE CHART
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading tracking-tight">
              Blower Discharge Position Visualizer
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl font-body">
              Clockwise (CW) and Counter-Clockwise (CCW) standard discharge configurations across all 8 standard positions for seamless plant duct integration.
            </p>
          </div>

          {/* Direction Switcher */}
          <div className="flex items-center bg-slate-950 rounded-md p-1 border border-slate-800 font-mono text-xs">
            <button
              onClick={() => handleDirectionChange("CW")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-md font-bold transition-all cursor-pointer ${
                direction === "CW" ? "bg-orange-500 text-white shadow-xs" : "text-slate-400 hover:text-white"
              }`}
            >
              <RotateCw className="w-3.5 h-3.5" />
              Clockwise (CW)
            </button>
            <button
              onClick={() => handleDirectionChange("CCW")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-md font-bold transition-all cursor-pointer ${
                direction === "CCW" ? "bg-orange-500 text-white shadow-xs" : "text-slate-400 hover:text-white"
              }`}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Counter-Clockwise (CCW)
            </button>
          </div>
        </div>
      </div>

      {/* Visualizer Grid */}
      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: 8-Grid Button Selector */}
        <div className="lg:col-span-7">
          <p className="text-xs font-bold uppercase text-slate-500 tracking-wider mb-4 font-mono">
            SELECT DISCHARGE ORIENTATION ({direction} ROTATION):
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {activePositions.map((pos) => {
              const isSelected = selectedPosition.id === pos.id;
              return (
                <button
                  key={pos.id}
                  onClick={() => setSelectedPosition(pos)}
                  className={`p-3 rounded-md text-left border transition-all flex flex-col justify-between h-24 cursor-pointer ${
                    isSelected
                      ? "bg-orange-50 border-orange-500 ring-1 ring-orange-500/30 text-slate-950 shadow-xs"
                      : "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.2 rounded-md bg-white border border-slate-300 text-slate-800">
                      {pos.angleDeg}°
                    </span>
                    {isSelected && <span className="w-2 h-2 rounded-full bg-orange-500"></span>}
                  </div>
                  <span className="text-xs font-bold leading-tight mt-2 font-mono">
                    {pos.name}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-4 p-3 bg-sky-50 rounded-md border border-sky-200 text-sky-950 text-xs flex items-start gap-2.5 font-mono">
            <Info className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
            <p>
              <strong>Engineering Standard:</strong> Rotation direction is designated when looking at the drive side (motor/pulley end) of the fan casing. Air inlet is centered on the opposite side.
            </p>
          </div>
        </div>

        {/* Right: Technical Casing Graphic & Coordinate Readout */}
        <div className="lg:col-span-5 bg-slate-950 text-white p-6 rounded-md border border-slate-800 flex flex-col items-center justify-center text-center space-y-4">
          <div className="w-48 h-48 relative flex items-center justify-center">
            {/* SVG Interactive Dynamic Blower Scroll */}
            <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
              {/* Outer Coordinate Ring */}
              <circle cx="100" cy="100" r="85" stroke="#1E293B" strokeWidth="2" strokeDasharray="4 4" />
              <circle cx="100" cy="100" r="60" stroke="#0284C7" strokeWidth="4" fill="#0f172a" />
              <circle cx="100" cy="100" r="22" fill="#0369A1" stroke="#38BDF8" strokeWidth="2" />
              
              {/* Discharge Spout Arrow Pointer according to angle */}
              <g transform={`rotate(${selectedPosition.angleDeg} 100 100)`}>
                <line x1="100" y1="100" x2="100" y2="25" stroke="#EA580C" strokeWidth="4" strokeLinecap="round" />
                <polygon points="100,12 92,28 108,28" fill="#EA580C" />
              </g>

              <circle cx="100" cy="100" r="8" fill="#FFFFFF" />
            </svg>
          </div>

          <div className="space-y-1 font-mono">
            <span className="text-[10px] text-orange-400 uppercase font-bold tracking-widest block">
              [ORIENTATION CODE: {selectedPosition.id.toUpperCase()}]
            </span>
            <h4 className="text-lg font-bold text-white font-heading">
              {selectedPosition.name}
            </h4>
            <p className="text-xs text-slate-400">
              Angle: <strong className="text-white">{selectedPosition.angleDeg}°</strong> • Rotation: <strong className="text-orange-400">{direction === "CW" ? "Clockwise" : "Counter-Clockwise"}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
