import React, { useState } from "react";
import { ScimaxLogo, MakeInIndiaBadge, IsoBadge } from "./VisualAssets";
import { COMPANY_INFO } from "../data/company";
import {
  Phone,
  Mail,
  Calendar,
  FileText,
  FileDown,
  Menu,
  X,
  ChevronDown,
  Wind,
  ShieldCheck,
  Building2,
  Cpu,
  ArrowRight,
  Sparkles,
  Layers
} from "lucide-react";

interface NavbarProps {
  activeSection?: string;
  onNavigate?: (section: string) => void;
  onOpenAppointment: () => void;
  onOpenQuote: (productName?: string) => void;
  onOpenCatalogue: () => void;
  onSelectCategory?: (catId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection = "home",
  onNavigate,
  onOpenAppointment,
  onOpenQuote,
  onOpenCatalogue,
  onSelectCategory
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  const productCategories = [
    { id: "centrifugal-blowers", label: "Centrifugal Blowers & Fans", desc: "ID & FD Fans from 0.5 to 100 HP", code: "01" },
    { id: "dust-collection", label: "Dust Collection Systems", desc: "Pulse-Jet Bag Filters, Cyclones & Silo Vents", code: "02" },
    { id: "axial-fans", label: "Axial Flow Fans", desc: "Tube Axial, Roof Ventilators & Bifurcated Fans", code: "03" },
    { id: "fume-extraction", label: "Fume Extraction Systems", desc: "Induction & Arc Furnace Emission Control", code: "04" },
    { id: "industrial-vacuum", label: "Industrial Vacuum Cleaners", desc: "3-Stage Turbine Extraction Units", code: "05" },
    { id: "accessories", label: "Accessories & Spare Parts", desc: "Pulse Valves, Cages, Bags & Timers", code: "06" }
  ];

  const handleNavClick = (sectionId: string) => {
    if (onNavigate) {
      onNavigate(sectionId);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
    setIsProductsDropdownOpen(false);
  };

  const handleCategoryClick = (catId: string) => {
    if (onSelectCategory) {
      onSelectCategory(catId);
    } else {
      handleNavClick("products-catalog-section");
    }
    setIsProductsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Geometric Status / Engineering Bar */}
      <div className="bg-[#0f172a] text-slate-300 text-xs py-1.5 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Engineering Metadata */}
          <div className="flex items-center gap-3 font-mono text-[11px]">
            <span className="inline-flex items-center gap-1.5 text-orange-400 font-semibold">
              <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"></span>
              ISO 1940 G6.3 BALANCED
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-300">
              127+ DUST FORMULATIONS
            </span>
            <span className="hidden lg:inline text-slate-600">|</span>
            <span className="hidden lg:inline text-slate-400">
              GUJARAT CAD/CAM WORKS
            </span>
          </div>

          {/* Quick Direct Contacts */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <a
              href="tel:+917990659265"
              className="flex items-center gap-1 text-slate-200 hover:text-orange-400 transition-colors"
              title="Call Raj Patel"
            >
              <Phone className="w-3 h-3 text-orange-400" />
              <span className="hidden sm:inline text-slate-400">Raj:</span> +91 79906 59265
            </a>
            <a
              href="tel:+918320495952"
              className="flex items-center gap-1 text-slate-200 hover:text-orange-400 transition-colors"
              title="Call Ankit Patel"
            >
              <Phone className="w-3 h-3 text-orange-400" />
              <span className="hidden sm:inline text-slate-400">Ankit:</span> +91 83204 95952
            </a>
            <a
              href="mailto:sales@scimax.in"
              className="hidden lg:flex items-center gap-1 text-slate-300 hover:text-orange-400 transition-colors"
            >
              <Mail className="w-3 h-3 text-orange-400" />
              sales@scimax.in
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick("home")}
            className="flex items-center text-left focus:outline-hidden cursor-pointer"
          >
            <ScimaxLogo className="h-12" />
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700 font-heading">
            <button
              id="nav-home"
              onClick={() => handleNavClick("home")}
              className={`hover:text-orange-600 transition-colors py-2 relative cursor-pointer ${
                activeSection === "home" ? "text-orange-600 font-bold" : ""
              }`}
            >
              Home
              {activeSection === "home" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 rounded-full"></span>
              )}
            </button>

            {/* Products Mega Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
              onMouseLeave={() => setIsProductsDropdownOpen(false)}
            >
              <button
                id="nav-products-dropdown"
                onClick={() => handleNavClick("products-catalog-section")}
                className={`flex items-center gap-1 hover:text-orange-600 transition-colors py-2 cursor-pointer ${
                  activeSection === "products" ? "text-orange-600 font-bold" : ""
                }`}
              >
                Products & Systems
                <ChevronDown className="w-4 h-4 transition-transform duration-200" />
              </button>

              {isProductsDropdownOpen && (
                <div className="absolute top-full -left-20 w-88 bg-white rounded-lg shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-4 py-2 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
                    <p className="text-[11px] font-mono font-bold uppercase text-slate-500 tracking-wider">
                      Standard Product Range
                    </p>
                    <span className="text-[10px] font-mono text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded border border-orange-200">
                      CAD/CAM
                    </span>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {productCategories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => handleCategoryClick(cat.id)}
                        className="w-full text-left px-4 py-2.5 hover:bg-orange-50/70 transition-colors flex items-start gap-3 group cursor-pointer"
                      >
                        <span className="text-[10px] font-mono font-bold text-slate-400 mt-0.5 group-hover:text-orange-600">
                          [{cat.code}]
                        </span>
                        <div>
                          <p className="text-xs font-bold text-slate-900 group-hover:text-orange-600">{cat.label}</p>
                          <p className="text-[11px] text-slate-500">{cat.desc}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="px-4 pt-2 pb-1 border-t border-slate-100">
                    <button
                      onClick={() => handleNavClick("products-catalog-section")}
                      className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1 w-full justify-center py-1 cursor-pointer font-mono"
                    >
                      VIEW FULL CATALOG WITH SPECS <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Real Machinery Gallery Link */}
            <button
              id="nav-gallery"
              onClick={() => handleNavClick("brochure-gallery-section")}
              className={`hover:text-orange-600 transition-colors py-2 relative cursor-pointer flex items-center gap-1 ${
                activeSection === "gallery" ? "text-orange-600 font-bold" : ""
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-orange-500" />
              <span>Machinery Gallery</span>
              {activeSection === "gallery" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 rounded-full"></span>
              )}
            </button>

            <button
              id="nav-industries"
              onClick={() => handleNavClick("industries-section")}
              className={`hover:text-orange-600 transition-colors py-2 relative cursor-pointer ${
                activeSection === "industries" ? "text-orange-600 font-bold" : ""
              }`}
            >
              Industries
              {activeSection === "industries" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 rounded-full"></span>
              )}
            </button>

            <button
              id="nav-technical"
              onClick={() => handleNavClick("technical-resources-section")}
              className={`hover:text-orange-600 transition-colors py-2 relative cursor-pointer ${
                activeSection === "technical" ? "text-orange-600 font-bold" : ""
              }`}
            >
              Engineering & Sizing
              {activeSection === "technical" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 rounded-full"></span>
              )}
            </button>

            <button
              id="nav-about"
              onClick={() => handleNavClick("about-section")}
              className={`hover:text-orange-600 transition-colors py-2 relative cursor-pointer ${
                activeSection === "about" ? "text-orange-600 font-bold" : ""
              }`}
            >
              About Us
              {activeSection === "about" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 rounded-full"></span>
              )}
            </button>

            <button
              id="nav-contact"
              onClick={() => handleNavClick("contact-section")}
              className={`hover:text-orange-600 transition-colors py-2 relative cursor-pointer ${
                activeSection === "contact" ? "text-orange-600 font-bold" : ""
              }`}
            >
              Contact
              {activeSection === "contact" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 rounded-full"></span>
              )}
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Technical Catalogue Download CTA */}
            <button
              id="nav-catalogue-btn"
              onClick={onOpenCatalogue}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-orange-50 text-orange-950 text-xs font-bold hover:bg-orange-100 transition-colors border border-orange-200 cursor-pointer shadow-2xs font-heading"
            >
              <FileDown className="w-3.5 h-3.5 text-orange-600" />
              <span>PDF Catalogues</span>
              <span className="text-[10px] bg-orange-600 text-white px-1.5 py-0.2 rounded-xs font-mono font-bold">2</span>
            </button>

            {/* Primary Book Appointment CTA */}
            <button
              id="nav-book-appointment-btn"
              onClick={onOpenAppointment}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-xs font-bold transition-all shadow-sm hover:shadow cursor-pointer tracking-wide"
            >
              <Calendar className="w-3.5 h-3.5 text-white" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-quick-appointment"
              onClick={onOpenAppointment}
              className="px-3 py-1.5 text-xs font-bold bg-orange-500 text-white rounded-md flex items-center gap-1 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-white" />
              <span>Book</span>
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-md border border-slate-300 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
            <button
              onClick={() => {
                onOpenAppointment();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-md bg-[#0c1322] text-white text-xs font-semibold"
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              Book Appointment
            </button>
            <button
              onClick={() => {
                onOpenCatalogue();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-md bg-slate-100 text-slate-800 text-xs font-semibold"
            >
              <FileText className="w-4 h-4 text-sky-600" />
              PDF Catalogue
            </button>
          </div>

          <div className="space-y-1 text-sm font-medium text-slate-800">
            <button
              onClick={() => handleNavClick("home")}
              className="w-full text-left py-2 px-3 rounded-md hover:bg-slate-100"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("brochure-gallery-section")}
              className="w-full text-left py-2 px-3 rounded-md hover:bg-slate-100 flex items-center justify-between text-orange-600 font-semibold"
            >
              <span>Machinery & Impeller Gallery</span>
              <span className="text-xs text-orange-600 font-mono">[Brochure Photos]</span>
            </button>
            <button
              onClick={() => handleNavClick("products-catalog-section")}
              className="w-full text-left py-2 px-3 rounded-md hover:bg-slate-100 flex items-center justify-between"
            >
              <span>Products & Systems</span>
              <span className="text-xs text-amber-600 font-mono">[06 Range]</span>
            </button>
            <button
              onClick={() => handleNavClick("industries-section")}
              className="w-full text-left py-2 px-3 rounded-md hover:bg-slate-100 flex items-center justify-between"
            >
              <span>15+ Industries</span>
              <span className="text-xs text-slate-500 font-mono">Foundry, Pharma...</span>
            </button>
            <button
              onClick={() => handleNavClick("technical-resources-section")}
              className="w-full text-left py-2 px-3 rounded-md hover:bg-slate-100"
            >
              Engineering & Sizing Calculator
            </button>
            <button
              onClick={() => handleNavClick("about-section")}
              className="w-full text-left py-2 px-3 rounded-md hover:bg-slate-100"
            >
              About CAD/CAM Facility
            </button>
            <button
              onClick={() => handleNavClick("contact-section")}
              className="w-full text-left py-2 px-3 rounded-md hover:bg-slate-100"
            >
              Plant Locations & Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
