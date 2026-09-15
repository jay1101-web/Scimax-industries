import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { COMPANY_INFO, PRODUCTS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#F8FAFC] text-slate-700 relative overflow-hidden border-t border-slate-200">
      {/* Subtle industrial grid background */}
      <div className="absolute inset-0 bg-industrial-grid-light opacity-60 pointer-events-none" />
      
      {/* Top Credibility Ribbon */}
      <div className="relative border-b border-slate-200/80 py-8 bg-white/80 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
            
            <div className="flex items-center space-x-3.5 p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="w-11 h-11 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-[#F25920] shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-[#26235E] font-bold text-sm leading-tight">ISO 9001:2015</h4>
                <p className="text-xs text-slate-500">Quality Management Certified</p>
              </div>
            </div>

            <div className="flex items-center space-x-3.5 p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="w-11 h-11 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-[#F25920] shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-[#26235E] font-bold text-sm leading-tight">Make in India</h4>
                <p className="text-xs text-slate-500">100% In-House Precision Build</p>
              </div>
            </div>

            <div className="flex items-center space-x-3.5 p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="w-11 h-11 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-[#F25920] shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-[#26235E] font-bold text-sm leading-tight">IndiaMART Verified</h4>
                <p className="text-xs text-slate-500">Trusted Leading Supplier</p>
              </div>
            </div>

            <div className="flex items-center space-x-3.5 p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="w-11 h-11 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-[#F25920] shrink-0">
                <span className="font-mono text-sm font-extrabold text-[#F25920]">G6.3</span>
              </div>
              <div>
                <h4 className="text-[#26235E] font-bold text-sm leading-tight">ISO 1940 Grade G6.3</h4>
                <p className="text-xs text-slate-500">Dynamic Balancing Standard</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Brand & Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center space-x-2.5 group">
              <Image
                src="/images/logo.png"
                alt="Scimax Industries Official Logo"
                width={170}
                height={75}
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-102"
              />
              <div className="ml-1 pl-2.5 border-l border-slate-300 hidden sm:block">
                <span className="block text-[11px] font-black tracking-wider text-[#26235E] uppercase leading-tight">
                  Industries
                </span>
                <span className="block text-[9px] font-bold text-[#F25920] uppercase tracking-widest leading-none">
                  Ahmedabad
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Scimax Industries is a trusted manufacturer of high-quality Dust Collection Systems, Centrifugal Blowers, and Air Pollution Control Equipment based in Ahmedabad, Gujarat, India.
            </p>

            <div className="pt-2 border-t border-slate-200">
              <p className="text-xs text-slate-600">
                <strong className="text-[#26235E]">Our Vision:</strong> {COMPANY_INFO.vision}
              </p>
            </div>

            {/* Direct Contact Cards in clean white */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[11px] font-bold text-[#F25920] uppercase tracking-wider">Direct Sales Desk</p>
                  <p className="text-sm font-bold text-[#26235E]">{COMPANY_INFO.contacts.directSales.name}</p>
                  <a 
                    href={`tel:${COMPANY_INFO.contacts.directSales.phoneRaw}`} 
                    className="text-xs text-slate-600 hover:text-[#F25920] font-mono font-semibold transition-colors"
                  >
                    {COMPANY_INFO.contacts.directSales.phone}
                  </a>
                </div>
                <a 
                  href={COMPANY_INFO.contacts.directSales.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-[11px] font-bold bg-[#F25920] hover:bg-[#D84813] text-white rounded-lg transition-colors shadow-xs"
                >
                  WhatsApp
                </a>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <p className="text-[11px] font-bold text-blue-800 uppercase tracking-wider">Technical Desk</p>
                <p className="text-sm font-bold text-[#26235E]">{COMPANY_INFO.contacts.technicalDesk.name}</p>
                <a 
                  href={`tel:${COMPANY_INFO.contacts.technicalDesk.phoneRaw}`} 
                  className="text-xs text-slate-600 hover:text-blue-800 font-mono font-semibold transition-colors"
                >
                  {COMPANY_INFO.contacts.technicalDesk.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Products Directory (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#26235E] border-b border-slate-200 pb-2">
              Equipment Range
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {PRODUCTS.map(product => (
                <li key={product.id}>
                  <Link 
                    href={`/products/${product.slug}`}
                    className="text-slate-600 hover:text-[#F25920] transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-1.5 text-slate-400 group-hover:text-[#F25920] group-hover:translate-x-0.5 transition-all" />
                    <span>{product.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-3">
              <Link 
                href="/products/centrifugal-blowers-fans" 
                className="inline-flex items-center text-xs font-bold text-[#F25920] hover:underline"
              >
                <span>8 Precision Impeller Profiles</span>
                <ExternalLink className="w-3 h-3 ml-1" />
              </Link>
            </div>
          </div>

          {/* Column 3: Quick Links & Industries (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#26235E] border-b border-slate-200 pb-2">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              <li>
                <Link href="/" className="hover:text-[#26235E] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#26235E] transition-colors">About Scimax</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#26235E] transition-colors">All Products</Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-[#26235E] transition-colors">Industries (14)</Link>
              </li>
              <li>
                <Link href="/clients" className="hover:text-[#26235E] transition-colors">Clients &amp; Installations</Link>
              </li>
              <li>
                <Link href="/products/centrifugal-blowers-fans#sizing-guide" className="hover:text-[#26235E] transition-colors">Technical Sizing Matrix</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#26235E] transition-colors">Request a Quote</Link>
              </li>
            </ul>

            <div className="pt-2">
              <p className="text-[11px] font-bold text-slate-500 uppercase">Dust Database</p>
              <p className="text-xs text-[#F25920] font-bold mt-0.5">127+ Industrial Types</p>
            </div>
          </div>

          {/* Column 4: Physical Plant & Office (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#26235E] border-b border-slate-200 pb-2">
              Manufacturing &amp; Office
            </h3>

            {/* Registered Office */}
            <div className="space-y-1 text-xs">
              <div className="flex items-start space-x-2 text-slate-700">
                <MapPin className="w-4 h-4 text-[#F25920] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#26235E] block font-semibold">Registered Office:</strong>
                  <p className="text-slate-500 leading-snug">
                    {COMPANY_INFO.facilities.registeredOffice.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Plant */}
            <div className="space-y-1 text-xs pt-2 border-t border-slate-200">
              <div className="flex items-start space-x-2 text-slate-700">
                <MapPin className="w-4 h-4 text-[#F25920] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#26235E] block font-semibold">Manufacturing Plant:</strong>
                  <p className="text-slate-500 leading-snug">
                    {COMPANY_INFO.facilities.manufacturingPlant.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Emails */}
            <div className="pt-2 space-y-1 border-t border-slate-200 text-xs">
              <div className="flex items-center space-x-2 text-slate-600">
                <Mail className="w-3.5 h-3.5 text-[#F25920]" />
                <a href="mailto:sales@scimax.in" className="hover:text-[#26235E] transition-colors font-medium">sales@scimax.in</a>
              </div>
              <div className="flex items-center space-x-2 text-slate-600 pl-5.5">
                <a href="mailto:scimaxindia@gmail.com" className="hover:text-[#26235E] transition-colors font-medium">scimaxindia@gmail.com</a>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & Compliance in light tone */}
      <div className="relative border-t border-slate-200 bg-[#EEF2F6] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} <strong className="text-[#26235E]">Scimax Industries</strong>. All rights reserved. Ahmedabad, Gujarat, India.
          </p>
          <div className="flex items-center space-x-6">
            <span>ISO 9001:2015 Certified</span>
            <span>•</span>
            <span>Make in India</span>
            <span>•</span>
            <Link href="/contact" className="text-slate-600 hover:text-[#26235E] transition-colors font-medium">Plant Visits &amp; Audits</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
