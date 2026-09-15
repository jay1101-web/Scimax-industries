"use client";

import React, { useState } from "react";
import { TECHNICAL_SIZING_GUIDE, COMPANY_INFO } from "@/lib/data";
import { Sliders, Download, Phone, CheckCircle, Info } from "lucide-react";

export default function SizingGuideCalculator({ onOpenQuoteModal }: { onOpenQuoteModal?: () => void }) {
  const [selectedHp, setSelectedHp] = useState<number>(10.0);
  const [selectedPressure, setSelectedPressure] = useState<string>("6\"");

  // Find CFM for selected HP and Pressure
  const pressureIndex = TECHNICAL_SIZING_GUIDE.pressures.indexOf(selectedPressure);
  const row = TECHNICAL_SIZING_GUIDE.rows.find((r) => r.hp === selectedHp);
  const currentCfm = row && pressureIndex !== -1 ? row.data[pressureIndex] : "-";

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden" id="sizing-guide">
      {/* Top Banner */}
      <div className="bg-[#F8FAFC] border-b border-slate-200 p-6 sm:p-8 relative">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-[#F25920] border border-orange-200 mb-2">
              Engineering Matrix • ISO 1940 Grade G6.3
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[#26235E]">
              Centrifugal Blower Technical Sizing Guide
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
              {TECHNICAL_SIZING_GUIDE.description}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="px-4 py-2.5 text-xs sm:text-sm font-bold bg-[#F25920] hover:bg-[#D84813] text-white rounded-xl transition-all shadow-sm flex items-center cursor-pointer"
            >
              <Download className="w-4 h-4 mr-2" />
              <span>Full 17-Point Spec Sheet</span>
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Quick Sizing Selector Bar */}
      <div className="bg-[#FDEEE8]/60 p-5 sm:p-6 border-b border-orange-100">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
          
          <div>
            <label className="block text-xs font-bold text-[#26235E] uppercase tracking-wider mb-1">
              Select Motor Power (HP)
            </label>
            <select
              value={selectedHp}
              onChange={(e) => setSelectedHp(parseFloat(e.target.value))}
              className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-sm font-bold text-slate-800 focus:ring-2 focus:ring-[#F25920] shadow-2xs"
            >
              {TECHNICAL_SIZING_GUIDE.rows.map((r) => (
                <option key={r.hp} value={r.hp}>
                  {r.hp} HP
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#26235E] uppercase tracking-wider mb-1">
              Static Pressure (Inches WG)
            </label>
            <select
              value={selectedPressure}
              onChange={(e) => setSelectedPressure(e.target.value)}
              className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-sm font-bold text-slate-800 focus:ring-2 focus:ring-[#F25920] shadow-2xs"
            >
              {TECHNICAL_SIZING_GUIDE.pressures.map((p) => (
                <option key={p} value={p}>
                  {p} WG ({parseFloat(p) * 25.4} mm WC)
                </option>
              ))}
            </select>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-orange-200 text-center sm:text-left flex items-center justify-between sm:justify-start gap-4 shadow-xs">
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Calculated Air Delivery
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-[#26235E] font-mono">
                  {currentCfm === "-" ? "Derate Req." : currentCfm}
                </span>
                <span className="text-xs font-bold text-[#F25920]">CFM</span>
              </div>
            </div>
            {currentCfm !== "-" && (
              <span className="text-[11px] text-green-700 bg-green-50 px-2.5 py-1 rounded-lg font-bold ml-auto hidden sm:inline-block border border-green-100">
                ~{Math.round(parseInt(currentCfm) * 1.699).toLocaleString()} m³/hr
              </span>
            )}
          </div>

        </div>
      </div>

      {/* Sizing Matrix Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-[#26235E] text-white">
              <th className="py-3.5 px-4 font-bold uppercase tracking-wider border-r border-[#3E388D]">
                Motor HP
              </th>
              {TECHNICAL_SIZING_GUIDE.pressures.map((pressure) => (
                <th
                  key={pressure}
                  className={`py-3.5 px-3 text-center font-bold tracking-wider border-r border-[#3E388D] ${
                    pressure === selectedPressure ? "bg-[#F25920] text-white" : ""
                  }`}
                >
                  {pressure} WG
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-mono">
            {TECHNICAL_SIZING_GUIDE.rows.map((row) => {
              const isSelectedRow = row.hp === selectedHp;
              return (
                <tr
                  key={row.hp}
                  onClick={() => setSelectedHp(row.hp)}
                  className={`hover:bg-orange-50/50 cursor-pointer transition-colors ${
                    isSelectedRow ? "bg-orange-50 font-bold" : "bg-white"
                  }`}
                >
                  <td className="py-3 px-4 font-bold text-slate-900 bg-slate-50 border-r border-slate-200">
                    {row.hp.toFixed(1)} HP
                  </td>
                  {row.data.map((cfmVal, cIdx) => {
                    const colPressure = TECHNICAL_SIZING_GUIDE.pressures[cIdx];
                    const isCellActive = isSelectedRow && colPressure === selectedPressure;
                    return (
                      <td
                        key={cIdx}
                        className={`py-3 px-3 text-center border-r border-slate-100 ${
                          isCellActive
                            ? "bg-[#F25920] text-white font-bold text-sm shadow-xs"
                            : cfmVal === "-"
                            ? "text-slate-300"
                            : "text-slate-700"
                        }`}
                      >
                        {cfmVal}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Bottom Disclaimer & Technical Desk Link */}
      <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-3">
        <div className="flex items-center space-x-2">
          <Info className="w-4 h-4 text-slate-400 shrink-0" />
          <span>
            Operating at high altitude or &gt;60°C flue gas? Sizing requires specific gas density derating factors.
          </span>
        </div>
        <a
          href={`tel:${COMPANY_INFO.contacts.technicalDesk.phoneRaw}`}
          className="font-bold text-[#26235E] hover:text-[#F25920] flex items-center shrink-0"
        >
          <Phone className="w-3.5 h-3.5 mr-1" />
          <span>Technical Desk: {COMPANY_INFO.contacts.technicalDesk.phone}</span>
        </a>
      </div>
    </div>
  );
}
