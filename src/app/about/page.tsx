"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Building2, 
  Target, 
  Compass, 
  HeartHandshake, 
  ShieldCheck, 
  Factory, 
  MapPin, 
  ArrowRight, 
  Users, 
  Database, 
  CheckCircle,
  Award,
  Phone,
  ChevronRight
} from "lucide-react";
import { COMPANY_INFO, WHY_CHOOSE_SCIMAX } from "@/lib/data";
import { useLayoutModal } from "@/components/LayoutProvider";

export default function AboutPage() {
  const { openQuoteModal } = useLayoutModal();

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800">
      
      {/* Header Banner in Light Aesthetic */}
      <section className="bg-gradient-to-b from-[#F8FAFC] via-white to-[#FDEEE8]/30 text-slate-800 py-16 sm:py-24 relative overflow-hidden border-b border-slate-200/70">
        <div className="absolute inset-0 bg-industrial-grid-light opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex items-center space-x-2 text-xs text-slate-500 mb-4">
            <Link href="/" className="hover:text-[#26235E]">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#F25920] font-semibold">About Us</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#F25920] border border-orange-200 shadow-2xs">
              About Scimax Industries
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-[#26235E] tracking-tight">
              Engineering India’s Industrial Clean Air Infrastructure
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Based in Ahmedabad, Gujarat, Scimax Industries is an ISO 9001:2015 certified manufacturer of high-efficiency Dust Collection Systems, Air Pollution Control Equipment, and Centrifugal Blowers &amp; Fans.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5 text-slate-600 text-sm sm:text-base leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-black text-[#26235E]">
                Commitment to Quality, Precision, and Field Performance
              </h2>

              <p>
                <strong>SCIMAX INDUSTRIES</strong> is a trusted name in the manufacturing of high-quality Dust Collection Systems, Centrifugal Blowers, and Air Pollution Control Equipment, based in Ahmedabad, Gujarat, India. With years of expertise and a strong commitment to innovation, we deliver customized solutions that enhance industrial efficiency and create a healthier, cleaner work environment.
              </p>

              <p>
                An effective dust collection system is crucial for minimizing machine downtime, improving productivity, and protecting workers&apos; health. Our wide product range includes Bag Type Dust Collectors, Industrial Cyclone Dust Collectors, Multi Dust Collectors (MDC) for Boilers, Dust Collector Fans &amp; Blowers, and more — each designed to meet the diverse needs of industries across India.
              </p>

              <p>
                We specialize in engineering solutions that capture dust, fumes, and fine particulate matter during manufacturing and material handling processes. Our dust extraction systems are built to not only maintain air quality but also extend equipment life and reduce maintenance costs.
              </p>

              <p>
                With a focus on quality, performance, and customer satisfaction, Scimax Industries provides end-to-end support — from system design and installation to after-sales service.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => openQuoteModal()}
                  className="px-6 py-3 bg-[#F25920] hover:bg-[#D84813] text-white font-bold text-sm rounded-xl shadow-md transition-colors cursor-pointer"
                >
                  Request Technical Consultation
                </button>
                <Link
                  href="/contact"
                  className="px-6 py-3 border border-slate-300 hover:border-[#26235E] text-[#26235E] font-bold text-sm rounded-xl transition-colors shadow-2xs"
                >
                  Contact Direct Sales Desk
                </Link>
              </div>
            </div>

            {/* Credibility Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#F8FAFC] p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                <h3 className="text-lg font-bold text-[#26235E] border-b border-slate-200 pb-3">
                  Key Corporate Metrics
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-[#F25920] shrink-0 mt-0.5">
                      <Database className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-[#26235E] font-bold">127+ Forms of Dust</strong>
                      <span className="text-slate-500">Proprietary empirical database matching dust granulometry to exact filtration cloth and capture velocity.</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-[#F25920] shrink-0 mt-0.5">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-[#26235E] font-bold">96% Customer Retention</strong>
                      <span className="text-slate-500">Almost 96% of industrial clients stay with us for lifetime expansion projects.</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-[#F25920] shrink-0 mt-0.5">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-[#26235E] font-bold">ISO 9001:2015 Certified</strong>
                      <span className="text-slate-500">Audited quality management across raw material inspection, fabrication, and final testing.</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-[#F25920] shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-[#26235E] font-bold">ISO 1940 Grade G6.3 Balancing</strong>
                      <span className="text-slate-500">Digital dynamic balancing for every centrifugal fan impeller eliminating field vibration.</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision, Mission, Values (From PDF Page 2) */}
      <section className="py-16 sm:py-20 bg-[#FDEEE8]/50 border-y border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold text-[#F25920] uppercase tracking-wider">
              Guiding Principles
            </span>
            <h2 className="text-3xl font-black text-[#26235E]">
              Vision, Mission &amp; Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Vision */}
            <div className="bg-white rounded-3xl p-8 border border-orange-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#F25920] border border-orange-100 flex items-center justify-center mb-5">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#26235E] mb-3">Our Vision</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {COMPANY_INFO.vision}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-[#F25920] uppercase tracking-wider">
                Premier Air Solutions
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-3xl p-8 border border-orange-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#26235E] border border-blue-100 flex items-center justify-center mb-5">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#26235E] mb-3">Our Mission</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {COMPANY_INFO.mission}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-[#26235E] uppercase tracking-wider">
                Assured Quality &amp; Field Performance
              </div>
            </div>

            {/* Values */}
            <div className="bg-white rounded-3xl p-8 border border-orange-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-green-50 text-green-700 border border-green-100 flex items-center justify-center mb-5">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#26235E] mb-3">Our Values</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Customer respect &amp; satisfaction, ethical practices &amp; transparency, commitment to promises, teamwork &amp; loyalty, and employee welfare &amp; growth.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-green-700 uppercase tracking-wider">
                Ethical &amp; Transparent Operations
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Why Choose Scimax Industries (All 8 Core Points) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-[#F25920] uppercase tracking-wider">
              Engineering Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#26235E]">
              Why Choose Scimax Industries
            </h2>
            <p className="text-sm text-slate-500">
              The foundational pillars that separate our systems from dated industrial templates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Experience-Based Expertise", desc: "Database of 127 forms of dust with tested capture velocities and filtration parameters." },
              { num: "02", title: "All For One Ecosystem", desc: "Every interrelated equipment — hoods, ductwork, baghouses, fans & dampers — from one vendor." },
              { num: "03", title: "Idea to Product", desc: "Integrated approach taking client requirements seamlessly from concept to field commissioning." },
              { num: "04", title: "Technology & Innovation", desc: "Driven operations, 3D design simulation, and automated pulse-jet timing sequencing." },
              { num: "05", title: "Clients Globally", desc: "Serving industrial clients across several heavy process sectors with field-proven reliability." },
              { num: "06", title: "96% Customer Retention", desc: "Almost 96% of our customer base stay with us and order expansion systems." },
              { num: "07", title: "Customer-Centric Strategy", desc: "Customer satisfaction and prompt after-sales service embedded across the organization." },
              { num: "08", title: "Cutting-Edge Infrastructure", desc: "Modern manufacturing facilities in Ahmedabad and Kadi with overhead cranes & test bays." }
            ].map((card) => (
              <div key={card.num} className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 shadow-2xs hover:shadow-md transition-all">
                <span className="text-xs font-black text-[#F25920] block mb-1 font-mono">{card.num}</span>
                <h4 className="font-bold text-[#26235E] text-base mb-2">{card.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Facilities Breakdown with Real Plant Photos */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold text-[#F25920] uppercase tracking-wider">
              Gujarat Manufacturing Presence
            </span>
            <h2 className="text-3xl font-black text-[#26235E]">
              Our Facilities &amp; Plants
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Facility 1: Registered Office */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-8 space-y-4">
                <div className="flex items-center space-x-3 text-[#26235E]">
                  <Building2 className="w-6 h-6 text-[#F25920]" />
                  <h3 className="text-xl font-bold">Registered Office &amp; Commercial Desk</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {COMPANY_INFO.facilities.registeredOffice.address}
                </p>
                <div className="pt-2 text-xs text-slate-500 border-t border-slate-100 flex items-center justify-between">
                  <span>Direct Sales &amp; Commercial Proposals</span>
                  <span className="font-bold text-[#26235E]">GIDC Vatva, Ahmedabad</span>
                </div>
              </div>
            </div>

            {/* Facility 2: Manufacturing Plant */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-8 space-y-4">
                <div className="flex items-center space-x-3 text-[#26235E]">
                  <Factory className="w-6 h-6 text-[#F25920]" />
                  <h3 className="text-xl font-bold">Heavy Engineering Manufacturing Plant</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {COMPANY_INFO.facilities.manufacturingPlant.address}
                </p>
                <div className="pt-2 text-xs text-slate-500 border-t border-slate-100 flex items-center justify-between">
                  <span>Fabrication, Dynamic Balancing &amp; Assembly</span>
                  <span className="font-bold text-[#26235E]">Kadi / Mehsana Highway</span>
                </div>
              </div>
            </div>

          </div>

          {/* Photo Gallery of the Manufacturing Plant */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[200px] sm:auto-rows-[260px]">
            <div className="md:col-span-7 relative rounded-2xl overflow-hidden group shadow-lg border border-slate-200">
              <Image
                src="/images/plant-aerial-1.jpg"
                alt="Scimax Industries — Aerial View of Manufacturing Plant"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C29]/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4">
                <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-200/90 shadow-lg">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#F25920] block">Aerial View</span>
                  <span className="text-sm font-extrabold text-[#26235E]">Heavy Engineering Plant — Kadi</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 relative rounded-2xl overflow-hidden group shadow-lg border border-slate-200">
              <Image
                src="/images/plant-front-1.jpg"
                alt="Scimax Industries — Plant Front View"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C29]/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4">
                <div className="bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-200/90 shadow-md">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">Fabrication Bay</span>
                  <span className="text-sm font-extrabold text-[#26235E]">Plant I — Front View</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-12 relative rounded-2xl overflow-hidden group shadow-lg border border-slate-200">
              <Image
                src="/images/plant-aerial-2.jpg"
                alt="Scimax Industries — Full Campus Panoramic"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C29]/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4">
                <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl border border-orange-200/90 shadow-lg">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#F25920] block">360° Campus View</span>
                  <span className="text-sm font-extrabold text-[#26235E]">15,000+ Sq. Ft. Manufacturing Campus — Kadi Highway</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Bottom Strip */}
      <section className="py-14 bg-[#F25920] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Schedule a Plant Visit or Request System Engineering
          </h2>
          <p className="text-sm text-orange-100 max-w-xl mx-auto">
            Our technical engineers are available for site inspections, airflow measurements, and compliance guidance across India.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center px-7 py-3.5 bg-[#26235E] hover:bg-[#1B1847] text-white text-sm font-bold rounded-xl transition-all shadow-lg"
            >
              <span>Get in Touch with Our Team</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
