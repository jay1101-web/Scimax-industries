import React, { useState } from "react";
import { BLOWER_CAPACITY_MATRIX, DUST_DATABASE_SAMPLE } from "../data/technicalData";
import { FanSizingCalculator } from "./FanSizingCalculator";
import { DischargeVisualizer } from "./DischargeVisualizer";
import {
  Table,
  Search,
  Download,
  FileSpreadsheet,
  Layers,
  HelpCircle,
  Database,
  ArrowRight,
  Filter,
  Calendar
} from "lucide-react";

interface TechnicalResourcesProps {
  onOpenAppointment?: (specs?: string) => void;
  onOpenQuote?: (productName?: string) => void;
  onOpenCatalogue: () => void;
}

export const TechnicalResources: React.FC<TechnicalResourcesProps> = ({
  onOpenAppointment,
  onOpenQuote,
  onOpenCatalogue
}) => {
  const [activeTab, setActiveTab] = useState<"calculator" | "capacity-matrix" | "discharge-chart" | "dust-db">("calculator");
  const [hpFilter, setHpFilter] = useState<string>("all");
  const [dustSearch, setDustSearch] = useState<string>("");

  const handleAction = (specs?: string) => {
    if (onOpenAppointment) {
      onOpenAppointment(specs);
    } else if (onOpenQuote) {
      onOpenQuote(specs);
    }
  };

  const pressureColumns = ["1", "2", "3", "4", "5", "6", "8", "10", "12", "16", "20", "24", "28", "32", "36", "48", "50"];

  const filteredCapacityMatrix = BLOWER_CAPACITY_MATRIX.filter((row) => {
    if (hpFilter === "all") return true;
    return row.hp === parseFloat(hpFilter);
  });

  const filteredDustDb = DUST_DATABASE_SAMPLE.filter((d) => {
    const q = dustSearch.toLowerCase();
    return (
      !q ||
      d.name.toLowerCase().includes(q) ||
      d.category.toLowerCase().includes(q) ||
      d.recommendedBag.toLowerCase().includes(q)
    );
  });

  return (
    <section id="technical-resources-section" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 text-orange-400 text-xs font-mono font-semibold uppercase tracking-widest border border-slate-800">
            <FileSpreadsheet className="w-3.5 h-3.5 text-orange-400" />
            ENGINEERING SUITE // PERFORMANCE DESK
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-heading tracking-tight">
            Technical Performance Matrices & Sizing Tools
          </h2>
          <p className="text-slate-600 text-base leading-relaxed font-body">
            Derived directly from Scimax factory aerodynamic test-bay benchmarks. Access full 17×17 CFM vs. static pressure capacity matrices, IS 4894 discharge positions, and our 127+ dust formulation library.
          </p>
        </div>

        {/* Resource Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab("calculator")}
            className={`px-4 py-2 rounded-md text-xs font-heading font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === "calculator"
                ? "bg-slate-900 text-orange-400 border border-slate-800 shadow-xs"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            [01] FAN SIZING & HP ESTIMATOR
          </button>
          <button
            onClick={() => setActiveTab("capacity-matrix")}
            className={`px-4 py-2 rounded-md text-xs font-heading font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === "capacity-matrix"
                ? "bg-slate-900 text-orange-400 border border-slate-800 shadow-xs"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            [02] 17×17 CAPACITY MATRIX (CFM @ NTP)
          </button>
          <button
            onClick={() => setActiveTab("discharge-chart")}
            className={`px-4 py-2 rounded-md text-xs font-heading font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === "discharge-chart"
                ? "bg-slate-900 text-orange-400 border border-slate-800 shadow-xs"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            [03] 8-WAY DISCHARGE CHART
          </button>
          <button
            onClick={() => setActiveTab("dust-db")}
            className={`px-4 py-2 rounded-md text-xs font-heading font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === "dust-db"
                ? "bg-slate-900 text-orange-400 border border-slate-800 shadow-xs"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            [04] 127+ DUST FORMULATIONS
          </button>
        </div>

        {/* Tab 1: Fan Sizing Calculator */}
        {activeTab === "calculator" && (
          <FanSizingCalculator
            onInquireWithSpecs={(specs) => {
              handleAction(`Custom Fan: ${specs.fanType} | Flow: ${specs.cfm} | SP: ${specs.sp} | Motor: ${specs.motorHp}`);
            }}
          />
        )}

        {/* Tab 2: 17x17 Capacity Matrix Table */}
        {activeTab === "capacity-matrix" && (
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 sm:p-7 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-orange-600 font-bold tracking-wider block">
                  AERODYNAMIC MATRIX AT NTP (20°C, 1 ATM)
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  Standard Centrifugal Blower Capacity Table
                </h3>
              </div>

              {/* Filter & Actions */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 text-xs font-sans text-slate-700">
                  <Filter className="w-3.5 h-3.5 text-slate-500" />
                  <span className="font-heading font-bold">Filter Motor HP:</span>
                  <select
                    value={hpFilter}
                    onChange={(e) => setHpFilter(e.target.value)}
                    aria-label="Filter matrix by motor HP"
                    className="px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-xs font-mono font-bold text-slate-900 cursor-pointer"
                  >
                    <option value="all">All HP Ratings (0.25 to 100 HP)</option>
                    {[0.25, 0.5, 1, 2, 3, 5, 7.5, 10, 12.5, 15, 20, 25, 30, 40, 50, 60, 75, 100].map((hp) => (
                      <option key={hp} value={hp.toString()}>
                        {hp} HP
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={onOpenCatalogue}
                  className="px-3.5 py-1.5 bg-slate-900 text-orange-400 border border-slate-800 rounded-md text-xs font-heading font-bold hover:bg-slate-800 flex items-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-orange-400" />
                  <span>Download PDF Table</span>
                </button>
              </div>
            </div>

            {/* Scrollable Data Table */}
            <div className="overflow-x-auto border border-slate-200 rounded-md max-h-96">
              <table className="w-full text-xs text-left border-collapse font-mono">
                <thead className="bg-slate-900 text-white sticky top-0 z-10 text-[11px] font-heading">
                  <tr>
                    <th className="p-2.5 border-r border-slate-800 font-bold whitespace-nowrap bg-slate-900">
                      Motor HP (kW)
                    </th>
                    {pressureColumns.map((col) => (
                      <th key={col} className="p-2.5 border-r border-slate-800 text-center whitespace-nowrap">
                        {col}" SP
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {filteredCapacityMatrix.map((row, idx) => (
                    <tr key={idx} className="hover:bg-orange-50/60 transition-colors">
                      <td className="p-2.5 border-r border-slate-200 font-bold text-slate-900 bg-slate-50 whitespace-nowrap">
                        {row.hp} HP <span className="text-[10px] text-slate-500">({(row.hp * 0.7457).toFixed(1)} kW)</span>
                      </td>
                      {pressureColumns.map((col) => {
                        const val = row.pressures[col];
                        return (
                          <td key={col} className="p-2.5 border-r border-slate-200 text-center text-slate-700 whitespace-nowrap">
                            {val ? (
                              <span className="font-semibold text-slate-900">{val.toLocaleString()}</span>
                            ) : (
                              <span className="text-slate-300">-</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600 pt-2 font-body">
              <span>* Values represent air volume flow in Cubic Feet per Minute (CFM) at Normal Temperature and Pressure (NTP).</span>
              <button
                onClick={() => handleAction("Custom Air Handling Engineering Review")}
                className="text-orange-600 font-bold hover:underline cursor-pointer font-heading"
              >
                Need custom static pressure / volume design? Book an engineering appointment →
              </button>
            </div>

            {/* Official Brochure Capacity & Discharge Chart Preview */}
            <div className="mt-8 p-5 bg-slate-950 rounded-lg border border-slate-800 text-white flex flex-col md:flex-row items-center gap-6">
              <div className="w-full md:w-56 shrink-0 rounded-md overflow-hidden bg-slate-900 border border-slate-800 group">
                <img
                  src="/images/products/scimax-discharge-and-cfm-table-brochure.jpg"
                  alt="Scimax Blower Discharge Position Chart & Technical Specification Matrix"
                  className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="space-y-2 text-left">
                <span className="text-[11px] font-mono text-orange-400 font-bold uppercase tracking-wider block">
                  ORIGINAL BROCHURE DATA SHEET // PAGE 9
                </span>
                <h4 className="text-base font-bold text-white font-heading">
                  Standard Centrifugal Blower CFM Matrix & IS 4894 Discharge Chart
                </h4>
                <p className="text-xs text-slate-300 font-body leading-relaxed">
                  Direct scan from Scimax Industries Centrifugal Blower & Fan engineering catalogue. Verified ratings for 0.25 HP to 100 HP across 1" to 50" W.G. static pressure.
                </p>
                <div className="pt-1 flex items-center gap-3">
                  <button
                    onClick={onOpenCatalogue}
                    className="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-md text-xs font-heading font-bold cursor-pointer"
                  >
                    Open Full PDF Catalogue
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Discharge Chart */}
        {activeTab === "discharge-chart" && <DischargeVisualizer />}

        {/* Tab 4: 127 Dust Formulations Database */}
        {activeTab === "dust-db" && (
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 sm:p-7 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-orange-600 font-bold tracking-wider block">
                  FILTRATION SELECTION MATRIX // 127 FORMULATIONS
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  Dust Database & Air-to-Cloth Ratio Guide
                </h3>
              </div>

              <div className="w-full sm:w-72 relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search dust: Fly ash, sand, cement..."
                  value={dustSearch}
                  onChange={(e) => setDustSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-md text-xs font-sans text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-1 focus:ring-orange-500"
                />
              </div>
            </div>

            {/* Dust Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredDustDb.map((dust, i) => (
                <div
                  key={i}
                  className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2.5 hover:border-orange-500 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 font-heading">{dust.name}</h4>
                      <span className="text-[10px] text-slate-500 font-sans">{dust.category}</span>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-sm bg-orange-100 text-orange-950 font-mono">
                      A/C: {dust.typicalAirToCloth}
                    </span>
                  </div>

                  <div className="pt-1 text-xs border-t border-slate-200 font-sans">
                    <span className="text-[10px] text-slate-500 block uppercase font-mono">Bulk Density:</span>
                    <strong className="text-slate-800">{dust.bulkDensity}</strong>
                  </div>

                  <div className="pt-1 text-xs font-sans">
                    <span className="text-[10px] text-slate-500 block uppercase font-mono">Recommended Filter Media:</span>
                    <strong className="text-sky-900">{dust.recommendedBag}</strong>
                  </div>

                  <button
                    onClick={() => handleAction(`Dust Collector for ${dust.name}`)}
                    className="w-full py-2 mt-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-md text-xs font-bold transition-colors cursor-pointer font-heading inline-flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <Calendar className="w-3.5 h-3.5 text-white" />
                    <span>BOOK APPOINTMENT FOR THIS DUST SYSTEM</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
