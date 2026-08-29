import React from "react";
import { MakeInIndiaBadge, IsoBadge } from "./VisualAssets";
import { Three3DCADViewer } from "./Three3DCADViewer";
import { COMPANY_INFO } from "../data/company";
import {
  ShieldCheck,
  Zap,
  Wind,
  Calendar,
  ArrowRight,
  Phone,
  FileDown,
  CheckCircle2,
  Cpu,
  ChevronRight,
  Sparkles,
  Eye,
  Award
} from "lucide-react";

interface HeroProps {
  onOpenAppointment: () => void;
  onOpenQuote?: (productName?: string) => void;
  onOpenCatalogue: () => void;
  onNavigateToSizing: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenAppointment,
  onOpenCatalogue,
  onNavigateToSizing
}) => {
  return (
    <div className="relative bg-[#0f172a] text-white overflow-hidden border-b border-slate-800 tech-grid-lines-dark">
      {/* Subtle Precision Radial Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Top Precision Engineering Bar */}
      <div className="border-b border-slate-800/80 bg-[#090d16]/90 py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            <span className="text-orange-400 font-bold tracking-wider font-mono flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-orange-400" />
              ESTABLISHED 1980 // 45+ YEARS AERODYNAMIC ENGINEERING
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-300 font-medium">
              Chadasna CAD/CAM Works, Ahmedabad–Mehsana Highway
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="text-slate-400 hidden sm:inline">Engineering Desk:</span>
            <a href="tel:+917990659265" className="text-orange-400 hover:text-orange-300 font-bold flex items-center gap-1">
              <Phone className="w-3 h-3" /> +91 79906 59265
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 sm:py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Hero Content with Modern Precision Typography */}
          <div className="lg:col-span-6 space-y-5">
            {/* Badges Bar */}
            <div className="flex flex-wrap items-center gap-2.5">
              <IsoBadge />
              <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-800/90 rounded-md border border-slate-700 text-sky-400 text-xs font-mono font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
                <span>CAD/CAM Facility • Gujarat</span>
              </div>
              <MakeInIndiaBadge />
            </div>

            {/* Main Modern Precision Display Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight font-heading text-white leading-[1.18]">
              Industrial <span className="text-orange-400">Centrifugal Blowers</span>, Heavy Axial Fans & <span className="text-sky-400">Dust Extraction</span> Systems
            </h1>

            {/* Sub-headline / Proposition */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl font-body">
              Scimax Industries manufactures high-efficiency air movement machinery from <strong className="text-white font-mono">0.5 to 100 HP</strong> (up to <strong className="text-orange-400 font-mono">8,00,000 m³/hr</strong>). Dynamically balanced to ISO 1940 G6.3 with precision CAD/CAM laser-cut impellers for heavy boilers, foundries, and chemical furnaces.
            </p>

            {/* Precision Value Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
              <div className="flex items-start gap-2 text-xs text-slate-200 bg-slate-800/60 p-2.5 rounded-md border border-slate-700/80">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span className="font-medium font-sans">Dynamic Balancing ISO 1940 G6.3</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-200 bg-slate-800/60 p-2.5 rounded-md border border-slate-700/80">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="font-medium font-sans">GPCB / CPCB Emission Norms</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-200 bg-slate-800/60 p-2.5 rounded-md border border-slate-700/80 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="font-medium font-sans">127+ Dust Profiles</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Primary Appointment Button */}
              <button
                id="hero-book-appointment-btn"
                onClick={onOpenAppointment}
                className="px-5 py-3 rounded-md bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-xs sm:text-sm font-bold tracking-wide transition-all duration-150 shadow-lg shadow-orange-500/25 flex items-center gap-2 cursor-pointer font-heading"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book Plant Tour / Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Technical Brochure Download Button */}
              <button
                id="hero-download-catalogue-btn"
                onClick={onOpenCatalogue}
                className="px-4 py-3 rounded-md bg-slate-800/90 hover:bg-slate-700 text-white text-xs sm:text-sm font-semibold transition-colors border border-slate-700 flex items-center gap-2 cursor-pointer font-heading"
              >
                <FileDown className="w-4 h-4 text-orange-400" />
                <span>Direct Catalogues</span>
              </button>

              {/* Sizing Tool Action */}
              <button
                id="hero-sizing-calculator-btn"
                onClick={onNavigateToSizing}
                className="px-3 py-3 text-xs font-mono text-orange-400 hover:text-orange-300 underline underline-offset-4 flex items-center gap-1 cursor-pointer"
              >
                17×17 Sizing Suite →
              </button>
            </div>
          </div>

          {/* Right Column: Interactive WebGL 3D CAD Blower Viewer */}
          <div className="lg:col-span-6 w-full">
            <Three3DCADViewer
              onOpenAppointment={onOpenAppointment}
              onNavigateToSizing={onNavigateToSizing}
            />
          </div>
        </div>
      </div>

      {/* Metric Strip - Modern Precision Strip */}
      <div className="bg-[#090d16] border-t border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-5 gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-800 text-center">
          {(COMPANY_INFO.stats || []).map((st, i) => (
            <div key={i} className="p-2 space-y-0.5">
              <span className="text-xl sm:text-2xl font-bold text-orange-400 font-mono tracking-tight block">
                {st.value}
              </span>
              <p className="text-xs font-bold text-white uppercase tracking-wider font-heading">
                {st.label}
              </p>
              <span className="text-[11px] text-slate-400 font-sans hidden sm:block">
                {st.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
