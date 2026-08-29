import React, { useState, useId } from "react";
import { Calculator, Zap, Wind, CheckCircle2, ArrowRight, Gauge, HelpCircle, Calendar } from "lucide-react";

interface FanSizingCalculatorProps {
  onInquireWithSpecs: (specs: { cfm: string; sp: string; motorHp: string; fanType: string }) => void;
}

export const FanSizingCalculator: React.FC<FanSizingCalculatorProps> = ({ onInquireWithSpecs }) => {
  const [unitMode, setUnitMode] = useState<"imperial" | "metric">("imperial");
  const [cfmValue, setCfmValue] = useState<number>(15000);
  const [m3hrValue, setM3hrValue] = useState<number>(25500);
  const [spInches, setSpInches] = useState<number>(8);
  const [spMm, setSpMm] = useState<number>(203);
  const [tempC, setTempC] = useState<number>(30);
  const [selectedApplication, setSelectedApplication] = useState<string>("boiler-id");

  const cfmInputId = useId();
  const spInputId = useId();
  const tempInputId = useId();
  const appSelectId = useId();

  // Handlers for synchronized inputs
  const handleCfmChange = (val: number) => {
    setCfmValue(val);
    setM3hrValue(Math.round(val * 1.69901));
  };

  const handleM3hrChange = (val: number) => {
    setM3hrValue(val);
    setCfmValue(Math.round(val / 1.69901));
  };

  const handleSpInchesChange = (val: number) => {
    setSpInches(val);
    setSpMm(Math.round(val * 25.4));
  };

  const handleSpMmChange = (val: number) => {
    setSpMm(val);
    setSpInches(Number((val / 25.4).toFixed(1)));
  };

  // Sizing Engineering Calculation
  const activeCFM = cfmValue > 0 ? cfmValue : 1000;
  const activeSP = spInches > 0 ? spInches : 1;

  // Temperature correction factor (Standard density ratio: (273 + 20) / (273 + T))
  const tempFactor = (273 + 20) / (273 + tempC);
  const correctedSP = activeSP * tempFactor;

  // Air Horse Power (AHP) = (CFM * SP in inches WG) / 6356
  const airHorsePower = (activeCFM * correctedSP) / 6356;
  
  // Mechanical efficiency assumed ~72% for precision Scimax aerodynamic impellers
  const fanEfficiency = 0.72;
  const brakeHorsePower = airHorsePower / fanEfficiency;

  // Recommended Standard Motor HP rating
  const standardRatings = [0.5, 1, 2, 3, 5, 7.5, 10, 12.5, 15, 20, 25, 30, 40, 50, 60, 75, 100, 125, 150];
  const recommendedHP = standardRatings.find(hp => hp >= brakeHorsePower * 1.15) || Math.ceil(brakeHorsePower * 1.25);

  // Recommended Fan Family & Impeller based on application and pressure
  let fanModel = "Scimax Induced Draft (ID) Fan";
  let recommendedImpeller = "Backward Inclined / Backward Curved";

  if (selectedApplication === "combustion-fd" || activeSP > 16) {
    fanModel = "Scimax Forced Draft (FD) High-Pressure Blower";
    recommendedImpeller = "Radial Blade / Heavy Gauge Backward Inclined";
  } else if (selectedApplication === "ventilation" && activeSP <= 3) {
    fanModel = "Scimax Tube Axial Flow Fan";
    recommendedImpeller = "Cast Aluminum Aerofoil Blades";
  } else if (selectedApplication === "wood-sawdust" || selectedApplication === "foundry-sand") {
    fanModel = "Scimax Heavy-Duty Material Handling Fan";
    recommendedImpeller = "Paddle Open Blade / Open Radial Blade";
  }

  const handleInquire = () => {
    onInquireWithSpecs({
      cfm: `${activeCFM.toLocaleString()} CFM (${m3hrValue.toLocaleString()} m³/hr)`,
      sp: `${activeSP} inch WG (${spMm} mm WG)`,
      motorHp: `${recommendedHP} HP`,
      fanType: `${fanModel} (${recommendedImpeller})`
    });
  };

  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-slate-900 text-white p-6 sm:p-7 border-b border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-orange-500/20 text-orange-400 border border-orange-400/30 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
              <Calculator className="w-3.5 h-3.5" />
              CAD/CAM ENGINEERING SUITE // AIRFLOW SIZING
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading tracking-tight">
              Industrial Fan Sizing & Motor HP Estimator
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl font-body">
              Calculate exact Air Horsepower (AHP), Brake Horsepower (BHP), and recommended electric motor kilowatt/HP rating based on volumetric flow and system static resistance.
            </p>
          </div>

          {/* Metric / Imperial Switcher */}
          <div className="flex items-center bg-slate-950 rounded-md p-1 border border-slate-800 font-mono text-xs">
            <button
              onClick={() => setUnitMode("imperial")}
              className={`px-3 py-1.5 rounded-md font-bold transition-all cursor-pointer ${
                unitMode === "imperial" ? "bg-orange-500 text-white shadow-xs" : "text-slate-400 hover:text-white"
              }`}
            >
              Imperial (CFM / in.WG)
            </button>
            <button
              onClick={() => setUnitMode("metric")}
              className={`px-3 py-1.5 rounded-md font-bold transition-all cursor-pointer ${
                unitMode === "metric" ? "bg-orange-500 text-white shadow-xs" : "text-slate-400 hover:text-white"
              }`}
            >
              Metric (m³/hr / mmWG)
            </button>
          </div>
        </div>
      </div>

      {/* Calculator Body - 2 Columns */}
      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Interactive Input Panel */}
        <div className="lg:col-span-6 space-y-5">
          <div className="space-y-4">
            {/* 1. Application Type */}
            <div>
              <label htmlFor={appSelectId} className="block text-xs font-bold uppercase tracking-wider text-slate-700 font-mono mb-1.5">
                1. System Duty & Application:
              </label>
              <select
                id={appSelectId}
                value={selectedApplication}
                onChange={(e) => setSelectedApplication(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-xs font-mono font-medium text-slate-900 focus:bg-white focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="boiler-id">Boiler Induced Draft (ID Fan) - Flue Gas / Hot Air</option>
                <option value="combustion-fd">Boiler Forced Draft (FD Fan) - Combustion Air</option>
                <option value="baghouse-dust">Baghouse / Cyclone Dust Collector Exhaust</option>
                <option value="foundry-sand">Foundry / Shot Blasting Dust & Sand Extraction</option>
                <option value="wood-sawdust">Woodworking Sawdust & Shavings Conveying</option>
                <option value="fume-furnace">Furnace Fume & Acid Gas Scrubbing</option>
                <option value="ventilation">General Plant Ventilation / Cooling (Low Pressure)</option>
              </select>
            </div>

            {/* 2. Air Volume Flow */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <label htmlFor={cfmInputId} className="font-bold uppercase tracking-wider text-slate-700">
                  2. Air Volume Required ({unitMode === "imperial" ? "CFM" : "m³/hr"}):
                </label>
                <span className="text-orange-700 font-bold bg-orange-50 px-2 py-0.5 rounded-md border border-orange-200">
                  {unitMode === "imperial" ? `${cfmValue.toLocaleString()} CFM` : `${m3hrValue.toLocaleString()} m³/hr`}
                </span>
              </div>

              {unitMode === "imperial" ? (
                <div className="space-y-2">
                  <input
                    id={cfmInputId}
                    type="range"
                    min={500}
                    max={100000}
                    step={500}
                    value={cfmValue}
                    onChange={(e) => handleCfmChange(Number(e.target.value))}
                    className="w-full accent-orange-500 cursor-pointer"
                  />
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      aria-label="Air volume in CFM"
                      value={cfmValue}
                      onChange={(e) => handleCfmChange(Number(e.target.value))}
                      className="w-32 px-3 py-1.5 bg-slate-50 border border-slate-300 rounded-md text-xs font-mono font-bold"
                    />
                    <span className="text-xs text-slate-500 font-mono">Equivalent: {m3hrValue.toLocaleString()} m³/hr</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <input
                    id={cfmInputId}
                    type="range"
                    min={1000}
                    max={170000}
                    step={1000}
                    value={m3hrValue}
                    onChange={(e) => handleM3hrChange(Number(e.target.value))}
                    className="w-full accent-orange-500 cursor-pointer"
                  />
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      aria-label="Air volume in cubic meters per hour"
                      value={m3hrValue}
                      onChange={(e) => handleM3hrChange(Number(e.target.value))}
                      className="w-32 px-3 py-1.5 bg-slate-50 border border-slate-300 rounded-md text-xs font-mono font-bold"
                    />
                    <span className="text-xs text-slate-500 font-mono">Equivalent: {cfmValue.toLocaleString()} CFM</span>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Static Pressure */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <label htmlFor={spInputId} className="font-bold uppercase tracking-wider text-slate-700">
                  3. System Static Resistance ({unitMode === "imperial" ? "in. WG" : "mm WG"}):
                </label>
                <span className="text-sky-800 font-bold bg-sky-50 px-2 py-0.5 rounded-md border border-sky-200">
                  {unitMode === "imperial" ? `${spInches} inch WG` : `${spMm} mm WG`}
                </span>
              </div>

              {unitMode === "imperial" ? (
                <div className="space-y-2">
                  <input
                    id={spInputId}
                    type="range"
                    min={1}
                    max={40}
                    step={0.5}
                    value={spInches}
                    onChange={(e) => handleSpInchesChange(Number(e.target.value))}
                    className="w-full accent-sky-600 cursor-pointer"
                  />
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      aria-label="Static pressure in inches water gauge"
                      value={spInches}
                      step={0.5}
                      onChange={(e) => handleSpInchesChange(Number(e.target.value))}
                      className="w-32 px-3 py-1.5 bg-slate-50 border border-slate-300 rounded-md text-xs font-mono font-bold"
                    />
                    <span className="text-xs text-slate-500 font-mono">Equivalent: {spMm} mm WG</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <input
                    id={spInputId}
                    type="range"
                    min={25}
                    max={1000}
                    step={25}
                    value={spMm}
                    onChange={(e) => handleSpMmChange(Number(e.target.value))}
                    className="w-full accent-sky-600 cursor-pointer"
                  />
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      aria-label="Static pressure in millimeters water gauge"
                      value={spMm}
                      step={10}
                      onChange={(e) => handleSpMmChange(Number(e.target.value))}
                      className="w-32 px-3 py-1.5 bg-slate-50 border border-slate-300 rounded-md text-xs font-mono font-bold"
                    />
                    <span className="text-xs text-slate-500 font-mono">Equivalent: {spInches} in. WG</span>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Gas Temperature */}
            <div>
              <div className="flex items-center justify-between text-xs font-mono mb-1">
                <label htmlFor={tempInputId} className="font-bold uppercase tracking-wider text-slate-700">
                  4. Gas Stream Operating Temperature:
                </label>
                <span className="font-bold text-slate-900">{tempC} °C ({Math.round((tempC * 9) / 5 + 32)} °F)</span>
              </div>
              <input
                id={tempInputId}
                type="range"
                min={10}
                max={350}
                step={5}
                value={tempC}
                onChange={(e) => setTempC(Number(e.target.value))}
                className="w-full accent-slate-800 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-0.5">
                <span>Ambient (20°C)</span>
                <span>Boiler Flue Gas (180°C)</span>
                <span>Furnace Exhaust (350°C)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Calculated Engineering Output Dashboard */}
        <div className="lg:col-span-6 bg-slate-950 text-white p-6 sm:p-7 rounded-lg border border-slate-800 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono text-orange-400 font-bold uppercase tracking-wider">
                CALCULATED RATINGS (ISO 5801)
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                TEMP FACTOR: {tempFactor.toFixed(2)}x
              </span>
            </div>

            {/* Major Rating Cards */}
            <div className="grid grid-cols-2 gap-3 my-4 font-mono">
              <div className="p-3 bg-slate-900 rounded-md border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase block">Air Horsepower (AHP)</span>
                <span className="text-xl font-extrabold text-white block mt-0.5">{airHorsePower.toFixed(2)} AHP</span>
                <span className="text-[10px] text-slate-400">Theoretical power</span>
              </div>

              <div className="p-3 bg-slate-900 rounded-md border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase block">Brake Power (BHP)</span>
                <span className="text-xl font-extrabold text-sky-400 block mt-0.5">{brakeHorsePower.toFixed(2)} BHP</span>
                <span className="text-[10px] text-slate-400">At ~72% Fan Mech. Eff.</span>
              </div>
            </div>

            {/* Recommended Motor Box */}
            <div className="p-4 bg-slate-900 rounded-md border border-orange-500/40 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-400">
                  RECOMMENDED MOTOR RATING:
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  (Includes +15% Safety Margin)
                </span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-extrabold text-orange-400 font-mono">
                  {recommendedHP} HP
                </span>
                <span className="text-sm font-mono text-slate-300">
                  / {(recommendedHP * 0.7457).toFixed(1)} kW Motor
                </span>
              </div>
            </div>

            {/* Recommended Equipment & Impeller */}
            <div className="mt-4 space-y-2 text-xs font-mono">
              <div className="flex items-start justify-between py-1.5 border-b border-slate-800">
                <span className="text-slate-400">Recommended Model:</span>
                <span className="text-white font-bold text-right">{fanModel}</span>
              </div>
              <div className="flex items-start justify-between py-1.5 border-b border-slate-800">
                <span className="text-slate-400">Impeller Profile:</span>
                <span className="text-orange-400 font-bold text-right">{recommendedImpeller}</span>
              </div>
              <div className="flex items-start justify-between py-1.5">
                <span className="text-slate-400">Dynamic Balancing:</span>
                <span className="text-emerald-400 font-bold text-right">ISO 1940 Grade 6.3</span>
              </div>
            </div>
          </div>

          {/* Action Trigger */}
          <button
            onClick={handleInquire}
            className="w-full py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer font-heading shadow-md"
          >
            <Calendar className="w-4 h-4 text-white" />
            <span>BOOK TECHNICAL CONSULTATION WITH THESE SPECS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
