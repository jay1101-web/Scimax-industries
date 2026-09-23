"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Wind, 
  Layers, 
  Flame, 
  Filter, 
  Fan, 
  Wrench, 
  Check, 
  AlertTriangle, 
  Factory, 
  Boxes, 
  Database, 
  Workflow, 
  Users, 
  Download, 
  PhoneCall, 
  FileSpreadsheet,
  ChevronRight,
  ExternalLink,
  Sparkles
} from "lucide-react";
import Image from "next/image";
import TrustStats from "@/components/TrustStats";
import ClientsSection from "@/components/ClientsSection";
import { useLayoutModal } from "@/components/LayoutProvider";
import { 
  PRODUCTS, 
  INDUSTRIES, 
  WHY_CHOOSE_SCIMAX, 
  PROBLEM_SOLUTION, 
  HOW_IT_WORKS_STEPS,
  COMPANY_INFO
} from "@/lib/data";

const PLANT_IMAGES = [
  { src: "/images/plant-front-1.jpg", alt: "Scimax Industries Manufacturing Plant — Front View", label: "Plant I — Kadi, Mehsana" },
  { src: "/images/plant-aerial-1.jpg", alt: "Scimax Industries Plant — Aerial Drone Shot", label: "Aerial View — Heavy Engineering Bay" },
  { src: "/images/plant-aerial-2.jpg", alt: "Scimax Industries Plant — Drone Panoramic", label: "360° Campus — Kadi Highway" },
];

export default function HomePage() {
  const { openQuoteModal } = useLayoutModal();


  const productIcons: Record<string, React.ReactNode> = {
    "dust-collection-systems": <Wind className="w-6 h-6 text-[#F25920]" />,
    "air-pollution-control": <Layers className="w-6 h-6 text-[#F25920]" />,
    "fume-extraction-systems": <Flame className="w-6 h-6 text-[#F25920]" />,
    "silo-vent-filters": <Filter className="w-6 h-6 text-[#F25920]" />,
    "centrifugal-blowers-fans": <Fan className="w-6 h-6 text-[#F25920]" />,
    "accessories": <Wrench className="w-6 h-6 text-[#F25920]" />
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800">
      
      {/* =========================================================================
          SECTION 1: HERO (Full-Width Background Image with Overlay)
         ========================================================================= */}
      <section
        className="relative pt-16 sm:pt-28 pb-24 sm:pb-36 overflow-hidden border-b border-slate-200/70"
        style={{
          backgroundImage: "url('/images/plant-aerial-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E0C29]/70 via-[#0E0C29]/55 to-[#0E0C29]/30 pointer-events-none" />
        
        {/* Subtle warm accent glow */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#0E0C29]/75 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6 text-center lg:text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-xs font-bold text-white">
              <span className="w-2 h-2 rounded-full bg-[#F25920] animate-pulse" />
              <span>Heavy Industrial Equipment Manufacturer • Ahmedabad, Gujarat</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F25920] via-[#FF7A45] to-[#FFB088]">Cleaner Air</span> for Indian Industry.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Dust Collection Systems, Air Pollution Control Equipment &amp; Centrifugal Blowers — designed, manufactured, and installed by <strong className="text-white">Scimax Industries</strong>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => openQuoteModal()}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-white bg-[#F25920] hover:bg-[#D84813] transition-all shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center cursor-pointer group"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                href="/products"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-white hover:text-[#26235E] border-2 border-white/40 hover:bg-white hover:border-white transition-all flex items-center justify-center backdrop-blur-sm"
              >
                <span>View Products</span>
              </Link>
            </div>

            {/* Certification badges */}
            <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-300">
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-[#F25920]" />
                <span className="font-bold text-white">ISO 9001:2015</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-[#F25920]" />
                <span className="font-bold text-white">Make in India</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#F25920]" />
                <span className="font-bold text-white">IndiaMART Verified</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-mono text-xs font-black text-[#F25920]">G6.3</span>
                <span className="font-bold text-white">ISO 1940 Balanced</span>
              </div>
            </div>

          </div>




        </div>
      </section>

      {/* =========================================================================
          SECTION 2: TRUST STATS BAR (4 Elevated White Cards)
         ========================================================================= */}
      <TrustStats />

      {/* =========================================================================
          SECTION 3: ABOUT SUMMARY (Two Column: Left Text + Right Bento Grid)
         ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Real Company Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#F25920] uppercase tracking-wider">
                <Factory className="w-4 h-4" />
                <span>About Scimax Industries</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-[#26235E] tracking-tight leading-tight">
                Engineering Solutions That Protect Health, Equipment &amp; Environment
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Scimax Industries is a trusted name in the manufacturing of high-quality Dust Collection Systems, Centrifugal Blowers, and Air Pollution Control Equipment, based in Ahmedabad, Gujarat, India. With years of expertise and a strong commitment to innovation, we deliver customized solutions that enhance industrial efficiency and create a healthier, cleaner work environment — from system design and installation to after-sales service.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                We specialize in engineering solutions that capture dust, fumes, and fine particulate matter during manufacturing and material handling processes. Our dust extraction systems are built to not only maintain air quality but also extend equipment life and reduce maintenance costs.
              </p>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center text-sm font-bold text-[#F25920] hover:text-[#D84813] group"
                >
                  <span>Read Our Story &amp; Plant Facilities</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: Bento Grid of 4 Small Core Value Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-orange-300 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#F25920] mb-3">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#26235E] text-base">Experience-Based Expertise</h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  Proprietary empirical database spanning 127 forms of dust with tested capture velocities.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-orange-300 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#26235E] mb-3">
                  <Boxes className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#26235E] text-base">All For One</h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  Every interrelated equipment from capture hoods to blowers and chimneys from one vendor.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-orange-300 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#26235E] mb-3">
                  <Workflow className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#26235E] text-base">Idea to Product</h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  Integrated lifecycle from initial site airflow audit to engineering, fabrication, and erection.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-orange-300 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#F25920] mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#26235E] text-base">Technology &amp; Innovation</h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  ISO 1940 Grade G6.3 dynamic balancing and modern testing facilities in Ahmedabad.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3B: MANUFACTURING PLANT GALLERY (Real Facility Photos)
         ========================================================================= */}
      <section className="py-20 bg-[#F8FAFC] border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold text-[#F25920] uppercase tracking-widest">
              Gujarat Manufacturing Presence
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#26235E] tracking-tight">
              Our World-Class Manufacturing Facility
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              State-of-the-art heavy engineering plant on the Kadi–Mehsana Highway, spanning 15,000+ sq. ft. with overhead cranes, dynamic balancing bays, and fabrication floors.
            </p>
          </div>

          {/* Cinematic Bento Image Grid — 3 unique angles */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[260px] sm:auto-rows-[300px]">
            
            {/* Large featured — Aerial drone shot */}
            <div className="md:col-span-7 relative rounded-2xl overflow-hidden group shadow-lg border border-slate-200">
              <Image
                src="/images/plant-aerial-1.jpg"
                alt="Scimax Industries — Aerial View of Kadi Manufacturing Plant"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C29]/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-200/90 shadow-lg inline-block">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#F25920] block">Drone View</span>
                  <span className="text-sm font-extrabold text-[#26235E]">Heavy Engineering Plant — Kadi, Mehsana</span>
                </div>
              </div>
            </div>

            {/* Front view */}
            <div className="md:col-span-5 relative rounded-2xl overflow-hidden group shadow-lg border border-slate-200">
              <Image
                src="/images/plant-front-1.jpg"
                alt="Scimax Industries — Plant Entrance & Fabrication Bay"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C29]/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4">
                <div className="bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-200/90 shadow-lg">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">Fabrication Bay</span>
                  <span className="text-sm font-extrabold text-[#26235E]">Plant I — Front View</span>
                </div>
              </div>
            </div>

            {/* Wide aerial panoramic — full width */}
            <div className="md:col-span-12 relative rounded-2xl overflow-hidden group shadow-lg border border-slate-200">
              <Image
                src="/images/plant-aerial-2.jpg"
                alt="Scimax Industries — Full Campus Panoramic Aerial"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C29]/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-orange-200/90 shadow-lg inline-block">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#F25920] block">Panoramic Campus</span>
                  <span className="text-sm font-extrabold text-[#26235E]">15,000+ Sq. Ft. Fabrication, Assembly & Testing</span>
                </div>
              </div>
            </div>

          </div>

          {/* Plant metrics strip */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "15,000+", label: "Sq. Ft. Covered Area", color: "text-[#F25920]" },
              { value: "10T", label: "Overhead Crane Capacity", color: "text-[#26235E]" },
              { value: "ISO 1940", label: "G6.3 Balancing Bay", color: "text-[#F25920]" },
              { value: "24/7", label: "Production Capability", color: "text-[#26235E]" },
            ].map((m) => (
              <div key={m.label} className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs text-center hover:shadow-md transition-shadow">
                <span className={`text-2xl sm:text-3xl font-black font-mono ${m.color}`}>{m.value}</span>
                <span className="block text-xs text-slate-500 mt-1 font-semibold">{m.label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: PRODUCT RANGE BENTO GRID (Asymmetric modern layout)
         ========================================================================= */}
      <section className="py-20 bg-white border-y border-slate-200/70" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold text-[#F25920] uppercase tracking-wider block mb-1">
                Industrial Catalog
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#26235E] tracking-tight">
                Engineered Product Lines
              </h2>
            </div>
            <Link
              href="/products"
              className="text-sm font-bold text-[#26235E] hover:text-[#F25920] flex items-center"
            >
              <span>Explore All Specifications</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>

          {/* Bento Asymmetric Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((product, idx) => {
              const isFeatured = idx === 0 || idx === 4;
              return (
                <div
                  key={product.id}
                  className={`group relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    isFeatured 
                      ? "bg-white border-2 border-orange-200 shadow-md" 
                      : "bg-white border border-slate-200/90 shadow-xs"
                  }`}
                >
                  <div>
                    {/* Badge & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                        {productIcons[product.id] || <Wind className="w-6 h-6 text-[#F25920]" />}
                      </div>
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-orange-100 text-[#F25920] uppercase tracking-wider">
                        {product.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#26235E] group-hover:text-[#F25920] transition-colors leading-snug">
                      {product.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                      {product.shortDescription}
                    </p>

                    {/* Subcategories bullet preview */}
                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                      {product.subcategories.slice(0, 3).map((sub) => (
                        <div key={sub.name} className="flex items-start text-xs text-slate-600">
                          <Check className="w-3.5 h-3.5 text-green-600 mr-2 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{sub.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/products/${product.slug}`}
                      className="text-xs font-bold text-[#26235E] group-hover:text-[#F25920] flex items-center transition-colors"
                    >
                      <span>Explore Technical Specs</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <button
                      onClick={() => openQuoteModal(product.name)}
                      className="text-[11px] font-bold text-slate-500 hover:text-[#F25920] transition-colors cursor-pointer"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: CLIENTS & MAJOR INSTALLATIONS SHOWCASE (FastAPI Backend Powered)
         ========================================================================= */}
      <ClientsSection />

      {/* =========================================================================
          SECTION 6: PROBLEM → SOLUTION NARRATIVE (Light Theme High-Contrast Split)
         ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-[#F25920] uppercase tracking-widest">
              Industrial Reality &amp; Engineered Certainty
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#26235E] tracking-tight">
              Bridging the Gap Between Factory Hazards and Flawless Compliance
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Left: The Challenge (Soft Red Light Card) */}
            <div className="bg-rose-50/40 rounded-3xl p-8 border border-rose-200/80 space-y-6">
              <div className="flex items-center space-x-3 text-rose-700">
                <AlertTriangle className="w-6 h-6 text-rose-600" />
                <h3 className="text-xl font-bold text-slate-900">The Industrial Challenge</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                Uncontrolled dust, welding smoke, furnace fumes, and flue gas emissions create compounding commercial and legal liabilities:
              </p>

              <div className="space-y-4">
                {PROBLEM_SOLUTION.challenge.points.map((pt) => (
                  <div key={pt.title} className="p-4 rounded-xl bg-white border border-rose-100 shadow-2xs">
                    <h4 className="text-sm font-bold text-slate-900 flex items-center">
                      <span className="w-2 h-2 rounded-full bg-rose-500 mr-2 shrink-0" />
                      {pt.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed pl-4">
                      {pt.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Our Solution (Soft Warm / Emerald Light Card) */}
            <div className="bg-orange-50/40 rounded-3xl p-8 border border-orange-200/80 space-y-6">
              <div className="flex items-center space-x-3 text-[#26235E]">
                <ShieldCheck className="w-6 h-6 text-[#F25920]" />
                <h3 className="text-xl font-bold text-slate-900">The Scimax Engineered Solution</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                Custom-engineered systems designed to meet and surpass GPCB, MPCB &amp; CPCB norms while maximizing efficiency:
              </p>

              <div className="space-y-4">
                {PROBLEM_SOLUTION.solution.points.map((pt) => (
                  <div key={pt.title} className="p-4 rounded-xl bg-white border border-orange-100 shadow-2xs">
                    <h4 className="text-sm font-bold text-[#26235E] flex items-center">
                      <span className="w-2 h-2 rounded-full bg-[#F25920] mr-2 shrink-0" />
                      {pt.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed pl-4">
                      {pt.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: HOW IT WORKS (Horizontal 4-Step Diagram)
         ========================================================================= */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-[#F25920] uppercase tracking-wider">
              Operating Principle
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#26235E] tracking-tight">
              The Reverse Pulse-Jet Collection Process
            </h2>
            <p className="text-sm text-slate-600">
              How Scimax dust extraction systems maintain continuous 24/7 online filtration without shutting down airflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {HOW_IT_WORKS_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="relative bg-white rounded-2xl p-6 border border-slate-200 hover:border-orange-300 shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-[#F25920] font-mono">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Phase {idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#26235E] group-hover:text-[#F25920] transition-colors leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-slate-500">
                  {step.short}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: WHY CHOOSE SCIMAX (Clean White Cards on Warm Tint)
         ========================================================================= */}
      <section className="py-20 bg-[#FDEEE8]/50 border-y border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-[#F25920] uppercase tracking-wider">
              Engineering Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#26235E] tracking-tight">
              Why Indian Industry Chooses Scimax
            </h2>
            <p className="text-sm text-slate-600">
              Built on decades of manufacturing expertise in Ahmedabad, trusted by leading industrial facilities nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_SCIMAX.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-7 border border-orange-200/80 shadow-xs hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold text-[#F25920] uppercase tracking-wider">
                    {item.subtitle}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-[#F25920]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#26235E] leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: INDUSTRIES WE SERVE (14 Industry Icons Grid)
         ========================================================================= */}
      <section className="py-20 bg-white" id="industries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold text-[#F25920] uppercase tracking-wider block mb-1">
                Domain Specialization
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#26235E] tracking-tight">
                Serving 14+ Heavy Industrial Sectors
              </h2>
            </div>
            <Link
              href="/industries"
              className="text-sm font-bold text-[#26235E] hover:text-[#F25920] flex items-center"
            >
              <span>View Challenges &amp; Solutions</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3.5 sm:gap-4">
            {INDUSTRIES.map((ind) => (
              <Link
                key={ind.id}
                href={`/industries#${ind.id}`}
                className="group p-4 rounded-2xl bg-[#F8FAFC] hover:bg-orange-50 border border-slate-200 hover:border-orange-300 text-center transition-all flex flex-col items-center justify-between shadow-2xs"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#26235E] group-hover:text-[#F25920] group-hover:border-[#F25920] transition-colors mb-2">
                  <Factory className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 group-hover:text-[#26235E] transition-colors">
                    {ind.name}
                  </h3>
                  <span className="text-[10px] text-slate-400 group-hover:text-slate-600 block mt-0.5">
                    {ind.dustTypes[0]}
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 9: TECHNICAL CREDIBILITY STRIP (Spec highlights & Sizing matrix)
         ========================================================================= */}
      <section className="py-14 bg-[#F8FAFC] text-slate-800 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            <div className="space-y-2 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F25920]">
                Engineering Benchmark
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#26235E]">
                ID Fans: 0.5–100 HP · up to 8,0,000 m³/hr &nbsp;|&nbsp; FD Blowers: up to 1000 mm WG
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
                Every fan impeller dynamically balanced to ISO 1940 Grade G6.3. Sizing tables available across all 8 impeller styles.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Link
                href="/products/centrifugal-blowers-fans#sizing-guide"
                className="px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-[#F25920] hover:bg-[#D84813] text-white flex items-center transition-all shadow-md"
              >
                <FileSpreadsheet className="w-4 h-4 mr-2" />
                <span>Open Sizing Guide Matrix</span>
              </Link>

              <button
                onClick={() => openQuoteModal("Centrifugal Blowers & Fans")}
                className="px-5 py-3 rounded-xl text-xs sm:text-sm font-bold border border-slate-300 hover:border-[#26235E] text-[#26235E] bg-white transition-all cursor-pointer shadow-2xs"
              >
                Consult Technical Desk
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: CERTIFICATIONS & BADGE ROW
         ========================================================================= */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-around gap-8 text-center">
            {COMPANY_INFO.certifications.map((cert) => (
              <div key={cert.title} className="flex items-center space-x-3 text-left">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#F25920] shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#26235E]">{cert.title}</h4>
                  <p className="text-xs text-slate-500">{cert.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: FULL-WIDTH ORANGE CTA BANNER
         ========================================================================= */}
      <section className="py-16 bg-[#F25920] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Need a Custom Dust Collection or Air Pollution Control Solution?
          </h2>
          <p className="text-base sm:text-lg text-orange-100 max-w-2xl mx-auto">
            Talk directly with Scimax engineers in Ahmedabad for system sizing, ducting layouts, or Pollution Control Board compliance audits.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openQuoteModal()}
              className="w-full sm:w-auto px-8 py-4 bg-[#26235E] hover:bg-[#1B1847] text-white font-bold text-sm sm:text-base rounded-xl shadow-xl transition-all hover:scale-105 cursor-pointer"
            >
              Talk to Our Engineers
            </button>
            <a
              href={`tel:${COMPANY_INFO.contacts.directSales.phoneRaw}`}
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-orange-50 text-[#F25920] font-bold text-sm sm:text-base rounded-xl shadow-xl transition-all flex items-center justify-center"
            >
              <PhoneCall className="w-5 h-5 mr-2" />
              <span>Call: +91 79906 59265</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
