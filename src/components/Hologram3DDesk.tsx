import React, { useState, useRef } from "react";
import { RealMachinePhoto, ImpellerRealPhoto } from "./VisualAssets";
import {
  Cpu,
  Layers,
  Zap,
  RotateCw,
  Eye,
  Crosshair,
  Gauge,
  Activity,
  Wind,
  Sparkles,
  Calendar,
  ArrowUpRight,
  CheckCircle2,
  Info
} from "lucide-react";

type HologramMode = "hologram" | "laser" | "blueprint" | "photo";

interface MachineSpec {
  id: string;
  name: string;
  tag: string;
  spec: string;
  rpm: number;
  pressure: string;
  airflow: string;
  power: string;
  efficiency: string;
  vibration: string;
  balanceGrade: string;
  hotspots: {
    title: string;
    description: string;
    x: number; // percentage
    y: number; // percentage
  }[];
}

const MACHINES: MachineSpec[] = [
  {
    id: "centrifugal-blowers",
    name: "Heavy Centrifugal Blower",
    tag: "ID/FD FAN",
    spec: "0.5 – 100 HP | 8,00,000 m³/hr",
    rpm: 1440,
    pressure: "Up to 800 mm WG",
    airflow: "45,000 m³/hr (26,500 CFM)",
    power: "0.5 – 100 HP",
    efficiency: "88.4% Peak Aerodynamic",
    vibration: "0.42 mm/s RMS (Class 1)",
    balanceGrade: "ISO 1940 Grade 6.3",
    hotspots: [
      { title: "Dynamic Impeller", description: "Precision balanced rotor in MS / SS 304", x: 48, y: 44 },
      { title: "Volute Scroll", description: "CNC plasma cut continuous welded steel", x: 68, y: 32 },
      { title: "Top Discharge", description: "8-way indexable heavy duct flange", x: 74, y: 15 },
      { title: "Motor Base", description: "Vibration isolated structural channel base", x: 26, y: 72 }
    ]
  },
  {
    id: "induced-draft-id-fan",
    name: "Heavy Ribbed ID Boiler Fan",
    tag: "BOILER DUTY",
    spec: "Radial Stiffeners | 1000mm WG",
    rpm: 960,
    pressure: "Up to 1000 mm WG",
    airflow: "85,000 m³/hr (50,000 CFM)",
    power: "15 – 150 HP",
    efficiency: "89.2% High Efficiency",
    vibration: "0.55 mm/s RMS",
    balanceGrade: "ISO 1940 Grade 6.3",
    hotspots: [
      { title: "Radial Gusset Ribs", description: "Thermal expansion & high suction stiffeners", x: 50, y: 38 },
      { title: "Heavy Suction Flange", description: "Flanged circular intake for flue gas ducts", x: 42, y: 48 },
      { title: "Bearing Block Pedestal", description: "Plummer block with water/oil cooling", x: 78, y: 65 },
      { title: "I-Beam Skid", description: "Heavy ISMB foundation skid frame", x: 35, y: 84 }
    ]
  },
  {
    id: "axial-fans",
    name: "Tube Axial V-Belt Fan",
    tag: "VENTILATION",
    spec: "Aerofoil Blades | Cast Al Hub",
    rpm: 1440,
    pressure: "0 – 75 mm WG",
    airflow: "3,00,000 m³/hr (40,000 CFM)",
    power: "1 – 20 HP",
    efficiency: "85.6% High Flow",
    vibration: "0.38 mm/s RMS",
    balanceGrade: "ISO 1940 Grade 6.3",
    hotspots: [
      { title: "Cast Al Aerofoil", description: "Adjustable pitch high-efficiency blades", x: 50, y: 46 },
      { title: "Rolled Casing", description: "Heavy gauge cylindrical rolled steel tube", x: 30, y: 30 },
      { title: "Top Motor Mount", description: "V-belt drive isolated from airflow", x: 62, y: 12 },
      { title: "Safety Wire Mesh", description: "Protective mesh grid on both duct ends", x: 70, y: 55 }
    ]
  },
  {
    id: "dust-collection",
    name: "Pulse-Jet Baghouse Filter",
    tag: "POLLUTION",
    spec: "99.9% Filtration | Auto Timer",
    rpm: 0,
    pressure: "150 – 250 mm WG",
    airflow: "1,20,000 m³/hr",
    power: "5 – 75 HP",
    efficiency: "99.9% PM 2.5 Separation",
    vibration: "N/A (Static Unit)",
    balanceGrade: "GPCB / CPCB Norms",
    hotspots: [
      { title: "Pulse Solenoid Valves", description: "Sequential auto compressed air reverse pulse", x: 52, y: 22 },
      { title: "Filter Bag Chamber", description: "Non-woven polyester / PTFE needle felt bags", x: 48, y: 52 },
      { title: "Cyclone Hopper", description: "60° pyramidal dust collection cone", x: 50, y: 78 },
      { title: "Rotary Air Lock", description: "Continuous airtight dust discharge valve", x: 50, y: 92 }
    ]
  },
  {
    id: "impeller-core",
    name: "Backward Curved Impeller Rotor",
    tag: "AERODYNAMIC CORE",
    spec: "8 Blades • Dynamic Balancing",
    rpm: 2880,
    pressure: "High Static Head",
    airflow: "Non-Overloading Flow",
    power: "Self-Limiting HP",
    efficiency: "91.5% Peak Aerodynamic",
    vibration: "0.28 mm/s RMS (Super Fine)",
    balanceGrade: "ISO 1940 Grade 2.5 / 6.3",
    hotspots: [
      { title: "Backward Incurved Blades", description: "Aerodynamic anti-dust accumulation profile", x: 38, y: 35 },
      { title: "Machined Steel Hub", description: "Keyway broached & dynamically centered", x: 50, y: 50 },
      { title: "Reinforced Shroud", description: "Heavy spun inlet cone for laminar air entry", x: 64, y: 40 },
      { title: "Balancing Weights", description: "Dual plane electronic dynamic calibration", x: 58, y: 68 }
    ]
  }
];

interface Hologram3DDeskProps {
  onOpenAppointment: () => void;
  onNavigateToSizing: () => void;
}

export const Hologram3DDesk: React.FC<Hologram3DDeskProps> = ({
  onOpenAppointment,
  onNavigateToSizing
}) => {
  const [selectedMachineId, setSelectedMachineId] = useState<string>("centrifugal-blowers");
  const [hologramMode, setHologramMode] = useState<HologramMode>("hologram");
  const [isLaserScanning, setIsLaserScanning] = useState<boolean>(true);
  const [isAutoOrbit, setIsAutoOrbit] = useState<boolean>(true);
  const [showHotspots, setShowHotspots] = useState<boolean>(true);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  const stageRef = useRef<HTMLDivElement>(null);
  const transformContainerRef = useRef<HTMLDivElement>(null);

  const activeMachine = MACHINES.find((m) => m.id === selectedMachineId) || MACHINES[0];

  // Mouse Move 3D Parallax Tracking via direct DOM update (Zero React re-render lag)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isAutoOrbit || !stageRef.current || !transformContainerRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    const normX = (clientX / rect.width) * 2 - 1; // -1 to 1
    const normY = (clientY / rect.height) * 2 - 1; // -1 to 1

    const tiltX = -normY * 16;
    const tiltY = normX * 20;

    transformContainerRef.current.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!isAutoOrbit && transformContainerRef.current) {
      transformContainerRef.current.style.transform = `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    }
  };

  return (
    <div className="bg-slate-900/95 rounded-xl border border-slate-700/80 shadow-2xl overflow-hidden backdrop-blur-md relative">
      {/* Top Holographic Diagnostics Header */}
      <div className="px-4 py-3 bg-[#090d16]/95 border-b border-slate-800/90 flex flex-wrap items-center justify-between gap-2.5">
        <div className="flex items-center gap-2.5">
          <div className="relative flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping absolute"></span>
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold tracking-widest text-cyan-400 uppercase">
                3D CAD HOLOGRAM // PROJECTION DESK
              </span>
              <span className="px-1.5 py-0.2 rounded bg-cyan-950/80 border border-cyan-500/40 text-[9px] font-mono text-cyan-300 font-bold">
                532nm LASER
              </span>
            </div>
            <p className="text-[10px] font-mono text-slate-400">
              ISO 1940 G6.3 Calibrated • Real-Time Volumetric Telemetry
            </p>
          </div>
        </div>

        {/* Live Coordinate Matrix Readout */}
        <div className="hidden sm:flex items-center gap-2.5 px-2.5 py-1 bg-slate-950/80 rounded border border-slate-800 text-[10px] font-mono text-slate-400">
          <span>X: <strong className="text-cyan-400 font-bold">142.8</strong></span>
          <span>Y: <strong className="text-orange-400 font-bold">89.4</strong></span>
          <span>Z: <strong className="text-emerald-400 font-bold">240.0</strong></span>
        </div>
      </div>

      {/* Mode Switcher Tabs */}
      <div className="px-3 py-2 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between gap-2 overflow-x-auto">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setHologramMode("hologram")}
            className={`px-2.5 py-1 rounded text-xs font-mono font-semibold transition-all flex items-center gap-1 cursor-pointer ${
              hologramMode === "hologram"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-xs shadow-cyan-500/20"
                : "text-slate-400 hover:text-slate-200 border border-transparent"
            }`}
          >
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>3D Hologram</span>
          </button>

          <button
            onClick={() => setHologramMode("laser")}
            className={`px-2.5 py-1 rounded text-xs font-mono font-semibold transition-all flex items-center gap-1 cursor-pointer ${
              hologramMode === "laser"
                ? "bg-orange-500/20 text-orange-300 border border-orange-500/50 shadow-xs shadow-orange-500/20"
                : "text-slate-400 hover:text-slate-200 border border-transparent"
            }`}
          >
            <Zap className="w-3 h-3 text-orange-400" />
            <span>Laser X-Ray</span>
          </button>

          <button
            onClick={() => setHologramMode("blueprint")}
            className={`px-2.5 py-1 rounded text-xs font-mono font-semibold transition-all flex items-center gap-1 cursor-pointer ${
              hologramMode === "blueprint"
                ? "bg-sky-500/20 text-sky-300 border border-sky-500/50 shadow-xs shadow-sky-500/20"
                : "text-slate-400 hover:text-slate-200 border border-transparent"
            }`}
          >
            <Layers className="w-3 h-3 text-sky-400" />
            <span>Blueprint</span>
          </button>

          <button
            onClick={() => setHologramMode("photo")}
            className={`px-2.5 py-1 rounded text-xs font-mono font-semibold transition-all flex items-center gap-1 cursor-pointer ${
              hologramMode === "photo"
                ? "bg-slate-700/80 text-white border border-slate-600 shadow-xs"
                : "text-slate-400 hover:text-slate-200 border border-transparent"
            }`}
          >
            <Eye className="w-3 h-3 text-emerald-400" />
            <span>Real Photo</span>
          </button>
        </div>

        {/* Quick Toggles */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => {
              setIsAutoOrbit(!isAutoOrbit);
              if (transformContainerRef.current) {
                transformContainerRef.current.style.transform = "";
              }
            }}
            title="Toggle 360° Auto-Orbit"
            className={`p-1.5 rounded text-xs font-mono transition-colors flex items-center gap-1 cursor-pointer ${
              isAutoOrbit
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                : "bg-slate-800 text-slate-400 border border-slate-700 hover:text-white"
            }`}
          >
            <RotateCw className={`w-3.5 h-3.5 ${isAutoOrbit ? "animate-spin" : ""}`} />
            <span className="hidden md:inline text-[10px]">Orbit</span>
          </button>

          <button
            onClick={() => setIsLaserScanning(!isLaserScanning)}
            title="Toggle Laser Scan Beam"
            className={`p-1.5 rounded text-xs font-mono transition-colors flex items-center gap-1 cursor-pointer ${
              isLaserScanning
                ? "bg-orange-500/20 text-orange-300 border border-orange-500/40"
                : "bg-slate-800 text-slate-400 border border-slate-700 hover:text-white"
            }`}
          >
            <Crosshair className="w-3.5 h-3.5 text-orange-400" />
            <span className="hidden md:inline text-[10px]">Laser</span>
          </button>

          <button
            onClick={() => setShowHotspots(!showHotspots)}
            title="Toggle Component Callout Pins"
            className={`p-1.5 rounded text-xs font-mono transition-colors flex items-center gap-1 cursor-pointer ${
              showHotspots
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                : "bg-slate-800 text-slate-400 border border-slate-700 hover:text-white"
            }`}
          >
            <Info className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden md:inline text-[10px]">Pins</span>
          </button>
        </div>
      </div>

      {/* Main 3D Holographic Viewport */}
      <div
        ref={stageRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative bg-radial from-[#0c182c] via-[#080d19] to-[#04070e] min-h-[300px] sm:min-h-[340px] flex items-center justify-center overflow-hidden select-none"
        style={{ perspective: "1000px" }}
      >
        {/* Hologram Scanlines Overlay */}
        <div className="absolute inset-0 hologram-scanlines pointer-events-none z-20"></div>

        {/* Ambient Hologram Glow Light Cone */}
        <div className="absolute bottom-6 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none z-0"></div>
        <div className="absolute bottom-2 w-48 h-48 bg-orange-500/10 rounded-full blur-2xl pointer-events-none z-0"></div>

        {/* Holographic HUD Radar & Perspective Grid Floor */}
        <div className="absolute bottom-0 inset-x-0 h-40 flex items-center justify-center pointer-events-none z-5 overflow-hidden">
          <div
            className="relative w-[320px] h-[320px] rounded-full border border-cyan-500/30 flex items-center justify-center"
            style={{ transform: "rotateX(68deg)" }}
          >
            {/* Outer Rotating Radar Ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-cyan-400/40 animate-radar-spin"></div>
            
            {/* Middle Reverse Ring with Degree Marks */}
            <div className="absolute inset-4 rounded-full border border-cyan-500/20 animate-radar-spin-reverse flex items-center justify-center">
              <span className="absolute top-1 text-[8px] font-mono text-cyan-400 font-bold">0° CAD</span>
              <span className="absolute bottom-1 text-[8px] font-mono text-cyan-400 font-bold">180° ISO</span>
              <span className="absolute left-1 text-[8px] font-mono text-cyan-400 font-bold">270° CCW</span>
              <span className="absolute right-1 text-[8px] font-mono text-cyan-400 font-bold">90° CW</span>
            </div>

            {/* Inner Concentric Rings */}
            <div className="absolute inset-12 rounded-full border border-orange-500/30 animate-radar-spin-slow"></div>
            <div className="absolute inset-20 rounded-full bg-cyan-500/10 border border-cyan-400/50 shadow-lg shadow-cyan-500/20"></div>
            
            {/* Center Core Emitter */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-orange-400 animate-ping opacity-60"></div>
          </div>
        </div>

        {/* HUD Corner Precision Frame Brackets */}
        <div className="absolute top-3 left-3 text-cyan-500/50 font-mono text-[9px] pointer-events-none z-20 flex flex-col gap-0.5">
          <span>┌─ [RADAR_LOCK: OK]</span>
          <span className="text-[8px] text-slate-500">RES: 0.05mm TOLERANCE</span>
        </div>
        <div className="absolute top-3 right-3 text-cyan-500/50 font-mono text-[9px] text-right pointer-events-none z-20 flex flex-col gap-0.5">
          <span>[3D_PERSPECTIVE: 1000px] ─┐</span>
          <span className="text-[8px] text-slate-500">ISO 1940 BALANCED</span>
        </div>
        <div className="absolute bottom-2 left-3 text-cyan-500/50 font-mono text-[9px] pointer-events-none z-20">
          └─ [AXIS: ROT_XYZ]
        </div>
        <div className="absolute bottom-2 right-3 text-cyan-500/50 font-mono text-[9px] text-right pointer-events-none z-20">
          [MODE: {hologramMode.toUpperCase()}] ─┘
        </div>

        {/* 3D Transform Container */}
        <div
          ref={transformContainerRef}
          className={`relative z-10 w-full max-w-[280px] sm:max-w-[320px] flex items-center justify-center transition-transform duration-150 ease-out ${
            isAutoOrbit ? "animate-hologram-orbit" : ""
          }`}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Laser Scanning Bar */}
          {isLaserScanning && (
            <div className="absolute inset-x-[-15%] h-1 bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-lg shadow-cyan-400/80 animate-laser-scan z-30 pointer-events-none flex items-center justify-center">
              <div className="w-28 h-5 bg-cyan-400/25 blur-md rounded-full -mt-2"></div>
              <span className="absolute right-2 -top-3 text-[8px] font-mono text-cyan-300 font-bold bg-cyan-950/80 px-1 py-0.2 rounded border border-cyan-500/40">
                532nm LASER
              </span>
            </div>
          )}

          {/* Machine Rendering Layer with Holographic Filters */}
          <div
            className={`relative transition-all duration-300 flex items-center justify-center ${
              hologramMode === "hologram"
                ? "animate-hologram-pulse filter hue-rotate-15 contrast-125 drop-shadow-[0_0_20px_rgba(6,182,212,0.6)]"
                : hologramMode === "laser"
                ? "filter invert-[0.15] hue-rotate-180 brightness-110 drop-shadow-[0_0_25px_rgba(249,115,22,0.7)]"
                : hologramMode === "blueprint"
                ? "filter brightness-125 contrast-150 saturate-50 drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]"
                : "filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)]"
            }`}
          >
            {selectedMachineId === "impeller-core" ? (
              <div className="w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center p-2">
                <ImpellerRealPhoto
                  type="backward-inclined"
                  className="w-full h-full object-contain filter drop-shadow-2xl"
                />
              </div>
            ) : (
              <div className="w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center p-2">
                <RealMachinePhoto
                  type={selectedMachineId}
                  className="w-full h-full object-contain filter drop-shadow-2xl"
                />
              </div>
            )}
          </div>

          {/* Interactive 3D Hotspots / AR Pinpoints */}
          {showHotspots &&
            activeMachine.hotspots.map((spot, idx) => (
              <div
                key={idx}
                className="absolute z-30"
                style={{
                  left: `${spot.x}%`,
                  top: `${spot.y}%`,
                  transform: "translate(-50%, -50%)"
                }}
              >
                <button
                  onClick={() => setActiveHotspot(activeHotspot === idx ? null : idx)}
                  onMouseEnter={() => setActiveHotspot(idx)}
                  className="relative group cursor-pointer"
                >
                  <span className="w-5 h-5 rounded-full bg-cyan-500/30 border border-cyan-400 flex items-center justify-center animate-ping absolute -inset-0.5"></span>
                  <span className="relative w-4 h-4 rounded-full bg-cyan-950 border-2 border-cyan-400 flex items-center justify-center text-[8px] font-mono font-bold text-cyan-300 group-hover:scale-125 transition-transform shadow-lg shadow-cyan-500/50">
                    {idx + 1}
                  </span>

                  {/* Tooltip on Active or Hover */}
                  {activeHotspot === idx && (
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 p-2.5 bg-slate-950/95 border border-cyan-500/60 rounded-md shadow-2xl shadow-cyan-950/80 text-left z-40 backdrop-blur-md animate-in fade-in zoom-in-95 duration-150">
                      <div className="flex items-center justify-between pb-1 border-b border-slate-800">
                        <span className="text-[10px] font-mono font-bold text-cyan-400">
                          {spot.title}
                        </span>
                        <span className="text-[8px] font-mono text-slate-500">NODE #{idx + 1}</span>
                      </div>
                      <p className="text-[10px] text-slate-300 font-sans mt-1 leading-snug">
                        {spot.description}
                      </p>
                    </div>
                  )}
                </button>
              </div>
            ))}
        </div>
      </div>

      {/* Live Holographic Telemetry Gauge Bar */}
      <div className="px-4 py-2.5 bg-[#090d16] border-t border-slate-800/90 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs font-mono">
        <div className="p-2 bg-slate-950/80 rounded border border-slate-800 space-y-0.5">
          <div className="flex items-center justify-between text-[10px] text-slate-400">
            <span>OPERATING RPM</span>
            <Gauge className="w-3 h-3 text-cyan-400" />
          </div>
          <p className="text-xs sm:text-sm font-bold text-cyan-300 font-mono">
            {activeMachine.rpm > 0 ? `${activeMachine.rpm} RPM` : "STATIC"}
          </p>
          <span className="text-[9px] text-slate-500 block">Speed Class</span>
        </div>

        <div className="p-2 bg-slate-950/80 rounded border border-slate-800 space-y-0.5">
          <div className="flex items-center justify-between text-[10px] text-slate-400">
            <span>STATIC HEAD</span>
            <Activity className="w-3 h-3 text-orange-400" />
          </div>
          <p className="text-xs sm:text-sm font-bold text-orange-300 font-mono truncate">
            {activeMachine.pressure}
          </p>
          <span className="text-[9px] text-slate-500 block">Resistance</span>
        </div>

        <div className="p-2 bg-slate-950/80 rounded border border-slate-800 space-y-0.5">
          <div className="flex items-center justify-between text-[10px] text-slate-400">
            <span>AIRFLOW FLOW</span>
            <Wind className="w-3 h-3 text-sky-400" />
          </div>
          <p className="text-xs sm:text-sm font-bold text-sky-300 font-mono truncate">
            {activeMachine.airflow.split("(")[0]}
          </p>
          <span className="text-[9px] text-slate-500 block">Capacity</span>
        </div>

        <div className="p-2 bg-slate-950/80 rounded border border-slate-800 space-y-0.5">
          <div className="flex items-center justify-between text-[10px] text-slate-400">
            <span>BALANCE GRADE</span>
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
          </div>
          <p className="text-xs sm:text-sm font-bold text-emerald-300 font-mono truncate">
            {activeMachine.balanceGrade}
          </p>
          <span className="text-[9px] text-slate-500 block">{activeMachine.vibration}</span>
        </div>
      </div>

      {/* Machine Model Selector Buttons */}
      <div className="p-3.5 bg-slate-950/90 border-t border-slate-800 space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">
            SELECT CAD MODEL:
          </span>
          <span className="text-[10px] font-mono text-orange-400 font-bold">
            {activeMachine.power}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1.5 text-xs">
          {MACHINES.map((m) => (
            <button
              key={m.id}
              onClick={() => {
                setSelectedMachineId(m.id);
                setActiveHotspot(null);
              }}
              className={`p-2 rounded-md text-left border transition-all cursor-pointer ${
                selectedMachineId === m.id
                  ? "bg-slate-800 border-cyan-500 text-white font-bold shadow-md shadow-cyan-500/15 ring-1 ring-cyan-500/30"
                  : "bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
              }`}
            >
              <span className="text-[8px] font-mono text-cyan-400 block font-semibold">
                {m.tag}
              </span>
              <p className="text-[10px] font-medium text-slate-200 truncate mt-0.5">
                {m.name}
              </p>
            </button>
          ))}
        </div>

        {/* Action Callouts */}
        <div className="pt-1.5 flex flex-wrap items-center justify-between gap-2 text-xs">
          <button
            onClick={onNavigateToSizing}
            className="text-cyan-400 hover:text-cyan-300 font-mono text-[11px] font-semibold flex items-center gap-1 cursor-pointer"
          >
            <span>17×17 Sizing & CAD Specs</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>

          <button
            onClick={onOpenAppointment}
            className="px-3 py-1.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-heading font-bold rounded text-xs transition-all flex items-center gap-1 cursor-pointer shadow-xs"
          >
            <Calendar className="w-3 h-3 text-white" />
            <span>Book Plant Tour</span>
          </button>
        </div>
      </div>
    </div>
  );
};
