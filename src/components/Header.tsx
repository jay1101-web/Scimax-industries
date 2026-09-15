"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Phone, 
  Menu, 
  X, 
  ChevronDown, 
  FileText, 
  ShieldCheck, 
  ArrowRight,
  Wind,
  Layers,
  Flame,
  Filter,
  Fan,
  Wrench
} from "lucide-react";
import { NAV_LINKS, COMPANY_INFO } from "@/lib/data";

interface HeaderProps {
  onOpenQuoteModal?: () => void;
}

export default function Header({ onOpenQuoteModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  }, [pathname]);

  const productIcons: Record<string, React.ReactNode> = {
    "dust-collection-systems": <Wind className="w-4 h-4 text-[#F25920]" />,
    "air-pollution-control": <Layers className="w-4 h-4 text-[#F25920]" />,
    "fume-extraction-systems": <Flame className="w-4 h-4 text-[#F25920]" />,
    "silo-vent-filters": <Filter className="w-4 h-4 text-[#F25920]" />,
    "centrifugal-blowers-fans": <Fan className="w-4 h-4 text-[#F25920]" />,
    "accessories": <Wrench className="w-4 h-4 text-[#F25920]" />
  };

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200/80 py-3" 
          : "bg-white border-b border-gray-100 py-3.5"
      }`}
    >
      {/* Top micro-bar for ISO credentials in clean light tone */}
      <div className="hidden lg:block bg-[#F8FAFC] text-slate-600 text-xs py-1.5 px-4 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center font-medium text-slate-700">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F25920] mr-1" />
              ISO 9001:2015 Certified Manufacturer
            </span>
            <span className="text-slate-300">|</span>
            <span className="font-medium text-slate-700">Make in India</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-500">Ahmedabad &amp; Kadi, Gujarat</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-slate-500">Direct Sales Desk:</span>
            <a 
              href={`tel:${COMPANY_INFO.contacts.directSales.phoneRaw}`} 
              className="text-[#26235E] hover:text-[#F25920] font-bold transition-colors font-mono"
            >
              {COMPANY_INFO.contacts.directSales.phone} ({COMPANY_INFO.contacts.directSales.name})
            </a>
            <span className="text-slate-300">|</span>
            <a 
              href="mailto:sales@scimax.in" 
              className="text-slate-600 hover:text-[#26235E] transition-colors"
            >
              sales@scimax.in
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo: Styled text "Sci" in Navy, "Max" in Orange, bold, tight tracking */}
          <Link href="/" className="flex items-center space-x-1 group">
            <div className="flex items-baseline tracking-tighter">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#26235E] tracking-tight group-hover:opacity-95 transition-opacity">
                Sci
              </span>
              <span className="text-2xl sm:text-3xl font-black text-[#F25920] tracking-tight">
                Max
              </span>
            </div>
            <div className="ml-2 pl-2 border-l border-gray-300 hidden sm:block">
              <span className="block text-[9px] font-bold tracking-wider text-[#26235E] uppercase leading-tight">
                Industries
              </span>
              <span className="block text-[8px] font-medium text-gray-500 uppercase tracking-widest leading-none">
                Ahmedabad
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              
              if (link.children) {
                return (
                  <div 
                    key={link.name} 
                    className="relative"
                    onMouseEnter={() => setProductsDropdownOpen(true)}
                    onMouseLeave={() => setProductsDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`inline-flex items-center px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                        isActive 
                          ? "text-[#F25920] bg-orange-50 font-bold" 
                          : "text-slate-700 hover:text-[#26235E] hover:bg-slate-50"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="ml-1 w-4 h-4 text-slate-400 group-hover:rotate-180 transition-transform" />
                    </Link>

                    {/* Products mega/dropdown panel */}
                    {productsDropdownOpen && (
                      <div className="absolute top-full left-0 w-84 bg-white rounded-2xl shadow-2xl border border-slate-200/80 p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="px-3 py-2 border-b border-slate-100">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-[#26235E]">
                            Engineered Product Lines
                          </p>
                        </div>
                        <div className="py-1.5 space-y-0.5">
                          {link.children.map((child) => {
                            const slug = child.href.split("/").pop() || "";
                            return (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-800 hover:bg-[#FDEEE8] hover:text-[#26235E] transition-all group"
                              >
                                <div className="flex items-center space-x-2.5">
                                  <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100 group-hover:bg-white group-hover:border-orange-200 transition-colors">
                                    {productIcons[slug] || <Wind className="w-4 h-4 text-[#F25920]" />}
                                  </div>
                                  <span>{child.name}</span>
                                </div>
                                <span className="text-[10px] px-1.5 py-0.5 rounded bg-orange-100/70 text-[#F25920] font-bold">
                                  {child.badge}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                        <div className="mt-1 p-2 bg-[#F8FAFC] rounded-xl border border-slate-100">
                          <Link 
                            href="/products" 
                            className="text-xs font-bold text-[#F25920] hover:text-[#D84813] flex items-center justify-between"
                          >
                            <span>Browse Complete Catalog</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    isActive 
                      ? "text-[#F25920] bg-orange-50 font-bold" 
                      : "text-slate-700 hover:text-[#26235E] hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Header CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Phone link */}
            <a
              href={`tel:${COMPANY_INFO.contacts.directSales.phoneRaw}`}
              className="flex items-center space-x-2.5 text-xs font-semibold text-slate-700 hover:text-[#26235E] px-2 py-1.5"
            >
              <div className="w-8 h-8 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center text-[#F25920]">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] text-slate-400 font-medium leading-none">Call Sales Desk</span>
                <span className="font-bold text-slate-900 leading-tight font-mono">+91 79906 59265</span>
              </div>
            </a>

            {/* Get a Quote Button */}
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center justify-center px-4.5 py-2.5 rounded-xl text-sm font-bold text-white bg-[#F25920] hover:bg-[#D84813] transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <FileText className="w-4 h-4 mr-1.5" />
              <span>Get a Quote</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onOpenQuoteModal}
              className="px-3 py-1.5 text-xs font-bold text-white bg-[#F25920] rounded-lg shadow-xs"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-slate-700 hover:text-[#26235E] hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] sm:top-[68px] z-50 bg-white/98 backdrop-blur-md overflow-y-auto border-t border-slate-200 p-4 animate-in slide-in-from-right duration-200">
          <div className="space-y-4 pb-12">
            
            {/* Direct Contact Banner */}
            <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-slate-800">
              <p className="text-[11px] font-bold text-[#F25920] uppercase tracking-wider">
                Direct Sales Desk
              </p>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-sm font-bold text-[#26235E]">{COMPANY_INFO.contacts.directSales.name}</span>
                <a 
                  href={`tel:${COMPANY_INFO.contacts.directSales.phoneRaw}`}
                  className="px-3 py-1 text-xs font-bold bg-[#F25920] rounded-lg text-white"
                >
                  Call Now
                </a>
              </div>
              <p className="text-xs text-slate-500 font-mono mt-1">{COMPANY_INFO.contacts.directSales.phone}</p>
            </div>

            {/* Links */}
            <div className="divide-y divide-slate-100">
              <Link 
                href="/" 
                className="block py-3 text-base font-bold text-slate-800 hover:text-[#F25920]"
              >
                Home
              </Link>
              
              <Link 
                href="/about" 
                className="block py-3 text-base font-bold text-slate-800 hover:text-[#F25920]"
              >
                About Us
              </Link>

              {/* Products accordion in mobile */}
              <div className="py-3">
                <div className="flex items-center justify-between font-bold text-base text-slate-900 mb-2">
                  <Link href="/products" className="hover:text-[#F25920]">Products</Link>
                  <span className="text-xs bg-orange-100 text-[#F25920] px-2 py-0.5 rounded-full font-bold">
                    6 Lines
                  </span>
                </div>
                <div className="pl-2.5 space-y-2 mt-2 border-l-2 border-orange-200">
                  {NAV_LINKS.find(l => l.name === "Products")?.children?.map(sub => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="block text-sm font-medium text-slate-700 hover:text-[#F25920] py-1"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                href="/industries" 
                className="block py-3 text-base font-bold text-slate-800 hover:text-[#F25920]"
              >
                Industries We Serve (14+)
              </Link>

              <Link 
                href="/contact" 
                className="block py-3 text-base font-bold text-slate-800 hover:text-[#F25920]"
              >
                Contact &amp; Plant Locations
              </Link>
            </div>

            {/* CTAs */}
            <div className="pt-4 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal?.();
                }}
                className="w-full py-3.5 text-center text-sm font-bold text-white bg-[#F25920] rounded-xl shadow-md cursor-pointer"
              >
                Request Custom Quotation
              </button>

              <a
                href={COMPANY_INFO.contacts.directSales.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center py-3 text-sm font-bold text-green-800 bg-green-50 rounded-xl border border-green-200"
              >
                Chat on WhatsApp (+91 79906 59265)
              </a>
            </div>

            {/* Certifications footer */}
            <div className="pt-4 border-t border-slate-100 text-center">
              <p className="text-xs text-slate-400 font-medium">
                ISO 9001:2015 Certified • Make in India • GPCB / CPCB Compliant
              </p>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
