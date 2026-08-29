import React from "react";
import { COMPANY_INFO } from "../data/company";
import { ScimaxLogo, IsoBadge, MakeInIndiaBadge } from "./VisualAssets";
import { MapPin, Phone, Mail, ChevronRight, ShieldCheck, Heart, Calendar, FileDown, FileText } from "lucide-react";

interface FooterProps {
  onSelectCategory?: (category: string) => void;
  onOpenAppointment: () => void;
  onOpenQuote?: () => void;
  onOpenCatalogue: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onOpenAppointment,
  onOpenQuote,
  onOpenCatalogue,
  onNavigateSection
}) => {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      {/* Top CTA Banner */}
      <div className="bg-slate-900 border-b border-slate-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-[10px] font-mono uppercase text-orange-400 tracking-widest block">
              ENGINEERING CONSULTATION & VISITATION
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
              Ready to Optimize Your Plant Air Handling & Filtration?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-body">
              Schedule an in-person technical consultation or visit our aerodynamic test-bay facility at Chadasna / Ahmedabad.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenAppointment}
              className="px-5 py-3 rounded-md bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-xs font-heading font-bold transition-colors shadow-xs cursor-pointer inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>BOOK AN APPOINTMENT</span>
            </button>
            <button
              onClick={onOpenCatalogue}
              className="px-5 py-3 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-heading font-semibold transition-colors border border-slate-700 cursor-pointer flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-orange-400" />
              <span>DIRECT DOWNLOAD PDFS (2)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Credentials (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="bg-white/95 px-3 py-1.5 rounded-lg shadow-sm">
                <ScimaxLogo className="h-10" light={false} />
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-body">
              Premier manufacturer of heavy-duty Centrifugal Air Blowers, High-Efficiency Industrial Fans, Pulse-Jet Baghouse Dust Collectors, and Fume Extraction Systems engineered in Gujarat, India.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <IsoBadge />
              <MakeInIndiaBadge />
            </div>

            <p className="text-[11px] text-orange-400/90 font-mono">
              ISO 1940 G6.3 ZERO-VIBRATION BALANCED • ISO 5801 AERODYNAMIC TESTED
            </p>
          </div>

          {/* Col 2: Products & Systems (3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-xs font-sans">
            <h4 className="text-xs font-bold uppercase tracking-wider text-orange-400 font-mono border-b border-slate-800 pb-2">
              EQUIPMENT PORTFOLIO
            </h4>
            <ul className="space-y-2 text-slate-300 font-body">
              <li>
                <button
                  onClick={() => onNavigateSection("products-catalog-section")}
                  className="hover:text-orange-400 transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-orange-500" />
                  Induced Draft (ID) Fans (0.5–100 HP)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection("products-catalog-section")}
                  className="hover:text-orange-400 transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-orange-500" />
                  Forced Draft (FD) High-Pressure Blowers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection("products-catalog-section")}
                  className="hover:text-orange-400 transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-orange-500" />
                  Pulse-Jet Bag Filter Dust Collectors
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection("products-catalog-section")}
                  className="hover:text-orange-400 transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-orange-500" />
                  Cyclone & Multi-Cyclone Separators
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection("products-catalog-section")}
                  className="hover:text-orange-400 transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-orange-500" />
                  Tube Axial & Bifurcated Flow Fans
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection("products-catalog-section")}
                  className="hover:text-orange-400 transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-orange-500" />
                  Furnace & Chemical Fume Scrubbers
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Engineering Resources (2 cols) */}
          <div className="lg:col-span-2 space-y-4 text-xs font-sans">
            <h4 className="text-xs font-bold uppercase tracking-wider text-orange-400 font-mono border-b border-slate-800 pb-2">
              ENGINEERING SUITE
            </h4>
            <ul className="space-y-2 text-slate-300 font-body">
              <li>
                <button
                  onClick={() => onNavigateSection("brochure-gallery-section")}
                  className="hover:text-orange-400 transition-colors flex items-center gap-1.5 text-left cursor-pointer text-orange-300 font-semibold"
                >
                  <ChevronRight className="w-3 h-3 text-orange-500" />
                  Machinery Photo Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection("technical-resources-section")}
                  className="hover:text-orange-400 transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-orange-500" />
                  Fan Sizing Tool
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection("technical-resources-section")}
                  className="hover:text-orange-400 transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-orange-500" />
                  17×17 CFM Table
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection("technical-resources-section")}
                  className="hover:text-orange-400 transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-orange-500" />
                  Discharge Angles
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection("technical-resources-section")}
                  className="hover:text-orange-400 transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-orange-500" />
                  127 Dust Library
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCatalogue}
                  className="hover:text-orange-300 transition-colors flex items-center gap-1.5 text-left cursor-pointer text-orange-400 font-semibold font-mono"
                >
                  <ChevronRight className="w-3 h-3 text-orange-400" />
                  Direct Download PDF Catalogues (2)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Manufacturing Plants (3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-xs font-sans">
            <h4 className="text-xs font-bold uppercase tracking-wider text-orange-400 font-mono border-b border-slate-800 pb-2">
              MANUFACTURING WORKS
            </h4>
            <div className="space-y-3 text-slate-300">
              <div className="border-l-2 border-orange-500 pl-3 space-y-1">
                <span className="font-bold text-white block font-heading">Plant & Heavy Engineering Works</span>
                <p className="text-xs text-slate-300 leading-relaxed font-body">
                  Shed No. 1, B/h Torrent Pharma, Ahmedabad–Mehsana Highway, Chadasna, Tal. Kadi, Dist. Mehsana - 382810, Gujarat
                </p>
              </div>

              <div className="pt-2 text-slate-300 space-y-1.5 font-mono">
                <div>
                  <span className="text-slate-400">Direct Sales Desk: </span>
                  <a href="tel:+917990659265" className="text-orange-400 hover:underline font-bold">
                    +91 79906 59265
                  </a>
                </div>
                <div>
                  <span className="text-slate-400">Technical Desk: </span>
                  <a href="tel:+918320495952" className="text-orange-400 hover:underline font-bold">
                    +91 83204 95952
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Coordinates Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 font-body">
          <p>© {new Date().getFullYear()} Scimax Industries. All rights reserved. Registered Trademark.</p>
          <div className="flex items-center gap-4 text-xs font-mono">
            <span>Ahmedabad, Gujarat, India</span>
            <span>•</span>
            <span className="text-orange-400/90">Heavy Duty Air Movement Systems</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
