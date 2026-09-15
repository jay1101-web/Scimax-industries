"use client";

import React from "react";
import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Building2, 
  Factory, 
  MessageSquare, 
  ArrowRight,
  ChevronRight,
  ExternalLink
} from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800">
      
      {/* Header Banner in Light Theme */}
      <section className="bg-gradient-to-b from-[#F8FAFC] via-white to-[#FDEEE8]/30 py-16 sm:py-24 relative overflow-hidden border-b border-slate-200/70">
        <div className="absolute inset-0 bg-industrial-grid-light opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex items-center space-x-2 text-xs text-slate-500 mb-4">
            <Link href="/" className="hover:text-[#26235E]">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#F25920] font-semibold">Contact &amp; Plant Locations</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#F25920] border border-orange-200 shadow-2xs">
              Direct Engineering Consultation
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-[#26235E] tracking-tight">
              Connect with Scimax Engineers
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Whether you need system sizing, compliance audits, replacement spares, or an on-site airflow survey, our direct sales and technical desks are at your service.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Information Grid */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Direct Desks & Addresses (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Direct Personnel Desks */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
                <h3 className="text-lg font-bold text-[#26235E] border-b border-slate-100 pb-3">
                  Direct Contact Desks
                </h3>

                {/* Direct Sales Desk */}
                <div className="p-5 rounded-2xl bg-[#FDEEE8]/60 border border-orange-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F25920]">
                      Direct Sales Desk
                    </span>
                    <a
                      href={COMPANY_INFO.contacts.directSales.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-bold text-white bg-[#25D366] hover:bg-[#20ba59] px-2.5 py-1 rounded-full transition-colors flex items-center shadow-2xs"
                    >
                      WhatsApp
                    </a>
                  </div>
                  <h4 className="text-base font-bold text-[#26235E]">
                    {COMPANY_INFO.contacts.directSales.name}
                  </h4>
                  <p className="text-xs text-slate-500">
                    Commercial inquiries, new system quotations &amp; RFQs
                  </p>
                  <a
                    href={`tel:${COMPANY_INFO.contacts.directSales.phoneRaw}`}
                    className="inline-flex items-center text-sm font-bold text-[#26235E] hover:text-[#F25920] pt-1 transition-colors font-mono"
                  >
                    <Phone className="w-4 h-4 mr-1.5 text-[#F25920]" />
                    <span>{COMPANY_INFO.contacts.directSales.phone}</span>
                  </a>
                </div>

                {/* Technical Desk */}
                <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-800">
                    Technical Desk
                  </span>
                  <h4 className="text-base font-bold text-[#26235E]">
                    {COMPANY_INFO.contacts.technicalDesk.name}
                  </h4>
                  <p className="text-xs text-slate-500">
                    Fan sizing, static pressure derating &amp; custom engineering
                  </p>
                  <a
                    href={`tel:${COMPANY_INFO.contacts.technicalDesk.phoneRaw}`}
                    className="inline-flex items-center text-sm font-bold text-[#26235E] hover:text-blue-700 pt-1 transition-colors font-mono"
                  >
                    <Phone className="w-4 h-4 mr-1.5 text-blue-700" />
                    <span>{COMPANY_INFO.contacts.technicalDesk.phone}</span>
                  </a>
                </div>

                {/* Email Contacts */}
                <div className="space-y-2 pt-2 text-xs">
                  <div className="flex items-center space-x-2 text-slate-600">
                    <Mail className="w-4 h-4 text-[#F25920]" />
                    <a href="mailto:sales@scimax.in" className="hover:text-[#F25920] font-bold text-[#26235E]">
                      sales@scimax.in
                    </a>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-600 pl-6">
                    <a href="mailto:scimaxindia@gmail.com" className="hover:text-[#F25920] font-bold text-[#26235E]">
                      scimaxindia@gmail.com
                    </a>
                  </div>
                </div>

              </div>

              {/* Physical Facilities Cards */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
                <h3 className="text-lg font-bold text-[#26235E] border-b border-slate-100 pb-3">
                  Office &amp; Plant Locations
                </h3>

                {/* Registered Office */}
                <div className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <Building2 className="w-5 h-5 text-[#F25920] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-sm font-bold text-slate-900">
                        Registered Office (Ahmedabad)
                      </strong>
                      <p className="text-xs text-slate-500 leading-relaxed mt-1">
                        {COMPANY_INFO.facilities.registeredOffice.address}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Manufacturing Plant */}
                <div className="space-y-2 pt-4 border-t border-slate-100">
                  <div className="flex items-start space-x-3">
                    <Factory className="w-5 h-5 text-[#F25920] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-sm font-bold text-slate-900">
                        Manufacturing Plant (Kadi, Mehsana)
                      </strong>
                      <p className="text-xs text-slate-500 leading-relaxed mt-1">
                        {COMPANY_INFO.facilities.manufacturingPlant.address}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map Graphic in Clean Light Theme */}
                <div className="pt-2">
                  <div className="w-full h-44 bg-[#F1F5F9] rounded-2xl relative overflow-hidden border border-slate-200 flex items-center justify-center text-center p-4">
                    <div className="absolute inset-0 bg-industrial-grid-light opacity-80" />
                    <div className="relative z-10 space-y-1">
                      <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center mx-auto mb-1">
                        <MapPin className="w-5 h-5 text-[#F25920]" />
                      </div>
                      <p className="text-xs font-bold text-[#26235E]">Ahmedabad &amp; Mehsana Manufacturing Hub</p>
                      <p className="text-[10px] text-slate-500">GIDC Vatva &amp; Chadasna Highway, Gujarat, India</p>
                      <a
                        href="https://maps.google.com/?q=Gajanan+Industrial+Estate+Vatva+Ahmedabad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[10px] font-bold text-[#F25920] hover:underline pt-1"
                      >
                        <span>Open Directions in Google Maps</span>
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column: Interactive RFQ Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
