import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { 
  Building2, 
  ShieldCheck, 
  ChevronRight, 
  Award, 
  FileCheck2, 
  CheckCircle2, 
  Phone, 
  ArrowRight,
  Download,
  Flame,
  Factory,
  Layers
} from "lucide-react";
import ClientsSection from "@/components/ClientsSection";
import ContactForm from "@/components/ContactForm";
import { COMPANY_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Clients & Major Installations | Scimax Industries",
  description: "Explore Scimax Industries clientele and industrial equipment installations across Steel, Cement, Chemicals, Pharma, Power, and Food manufacturing plants in India.",
};

const CASE_HIGHLIGHTS = [
  {
    title: "1,20,000 CFM Pulse-Jet Baghouse for Cement Plant",
    client: "UltraTech Cement Facility",
    sector: "Cement & Minerals",
    challenge: "High abrasive clinker dust emission exceeding 150 mg/Nm³ causing plant shutdown notices.",
    solution: "Custom engineered heavy-gauge pulse-jet baghouse with offline pulsing and PTFE membrane needle felt bags.",
    result: "Stack emissions dropped to < 18 mg/Nm³ SPM, surpassing CPCB norms with continuous 24/7 uptime.",
    icon: Factory
  },
  {
    title: "6,50,000 m³/hr High-Pressure ID Fan Dynamic Balancing",
    client: "Tata Steel Metallurgy Division",
    sector: "Steel & Metallurgy",
    challenge: "Elevated flue gas vibration at 320°C causing premature motor bearing failure every 4 months.",
    solution: "Precision fabricated backward-curved runner dynamically balanced on test-bench to ISO 1940 Grade G6.3 with water-cooled dual pillow blocks.",
    result: "Vibration levels maintained under 1.8 mm/s RMS, zero unplanned downtime over 3 continuous years.",
    icon: Flame
  },
  {
    title: "Zero-Leakage cGMP Cartridge Filtration for Tablet Suite",
    client: "Zydus Lifesciences",
    sector: "Pharma & API",
    challenge: "Strict cGMP cross-contamination requirements for hazardous Active Pharmaceutical Ingredients.",
    solution: "SS316 mirror-polished cartridge dust collector with automated reverse pulse-jet cleaning and secondary HEPA stage.",
    result: "99.99% capture efficiency down to 0.3 micron with safe-change containment.",
    icon: Layers
  }
];

export default function ClientsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800">
      
      {/* Hero & Breadcrumb */}
      <section className="bg-gradient-to-b from-[#F8FAFC] via-white to-[#FDEEE8]/30 py-14 sm:py-20 relative overflow-hidden border-b border-slate-200/70">
        <div className="absolute inset-0 bg-industrial-grid-light opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          
          <div className="flex items-center space-x-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-[#26235E]">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#F25920] font-semibold">Clients &amp; Installations</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#F25920] border border-orange-200 shadow-2xs">
              Industrial Reference Portfolio
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-[#26235E] tracking-tight">
              Trusted by India's Heaviest Industrial Manufacturers
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              From continuous 24/7 steel foundries and high-capacity cement clinker coolers to cleanroom pharma suites, Scimax air pollution control and fan systems deliver certified compliance and high thermal durability.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <span className="text-2xl sm:text-3xl font-black text-[#26235E] font-mono block">150+</span>
              <span className="text-xs text-slate-500 font-medium">Enterprise Clients</span>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <span className="text-2xl sm:text-3xl font-black text-[#F25920] font-mono block">500+</span>
              <span className="text-xs text-slate-500 font-medium">Equipments Built</span>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <span className="text-2xl sm:text-3xl font-black text-[#26235E] font-mono block">14+</span>
              <span className="text-xs text-slate-500 font-medium">Industrial States</span>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <span className="text-2xl sm:text-3xl font-black text-emerald-600 font-mono block">&lt; 30 mg</span>
              <span className="text-xs text-slate-500 font-medium">SPM Stack Guarantee</span>
            </div>
          </div>

        </div>
      </section>

      {/* Main Clients Directory with full listing & live filters */}
      <ClientsSection isFullPage={true} />

      {/* Engineering Case Highlights */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F25920]">
              Field Proven Performance
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#26235E]">
              Selected Installation Case Studies
            </h2>
            <p className="text-sm text-slate-500">
              Real engineering challenges solved with precision metallurgy, computational sizing, and ISO balancing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CASE_HIGHLIGHTS.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="bg-slate-50 rounded-3xl p-7 border border-slate-200 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#F25920] shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase text-[#F25920] tracking-wider block">
                        {c.sector}
                      </span>
                      <h3 className="text-lg font-black text-[#26235E] mt-1">
                        {c.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-700 mt-1">
                        Client: {c.client}
                      </p>
                    </div>

                    <div className="space-y-2 text-xs text-slate-600 border-t border-slate-200/70 pt-3">
                      <p><strong className="text-slate-900">Problem:</strong> {c.challenge}</p>
                      <p><strong className="text-[#26235E]">Solution:</strong> {c.solution}</p>
                      <p><strong className="text-emerald-700">Outcome:</strong> {c.result}</p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                    <span>Performance Certified</span>
                    <FileCheck2 className="w-4 h-4 text-emerald-500" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Vendor Registration & RFQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F25920]">
                Vendor Onboarding &amp; Tenders
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#26235E]">
                Register Scimax as an Approved Vendor
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Need Scimax Industries on your approved vendor list (AVL) or corporate procurement panel? We provide complete company documentation, factory audit access, and bank guarantees.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-3 text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-[#F25920] shrink-0" />
                  <span>ISO 9001:2015 Registered Quality Management System</span>
                </div>
                <div className="flex items-center space-x-3 text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-[#F25920] shrink-0" />
                  <span>Full In-House Dynamic Balancing &amp; Pressure Testing Facilities</span>
                </div>
                <div className="flex items-center space-x-3 text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-[#F25920] shrink-0" />
                  <span>Make in India &amp; IndiaMART Verified Supplier Status</span>
                </div>
              </div>

              <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Direct Procurement Desk</p>
                <p className="text-sm font-bold text-[#26235E]">Raj Patel — Direct Sales Desk</p>
                <p className="text-sm font-mono text-[#F25920] font-bold">{COMPANY_INFO.contacts.directSales.phone}</p>
                <p className="text-xs text-slate-500">Email: sales@scimax.in | info@scimax.in</p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <ContactForm defaultProduct="Vendor Registration & Reference Inquiry" />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
