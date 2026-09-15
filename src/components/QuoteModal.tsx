"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Send, ShieldCheck, Phone, ArrowRight } from "lucide-react";
import { INDUSTRIES, PRODUCTS, COMPANY_INFO } from "@/lib/data";
import { submitInquiryApi } from "@/lib/clients";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export default function QuoteModal({ isOpen, onClose, defaultProduct }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    industry: "",
    productInterest: defaultProduct || "Dust Collection Systems",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitInquiryApi(formData);
    } catch {
      // Handled by client API fallback
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      company: "",
      phone: "",
      email: "",
      industry: "",
      productInterest: "Dust Collection Systems",
      message: ""
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon in Light Tone with Navy Accent */}
        <div className="bg-[#F8FAFC] border-b border-slate-200 p-6 text-slate-800 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-2 text-xs font-bold text-[#F25920] uppercase tracking-wider mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>ISO 9001:2015 Certified Engineering</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-[#26235E]">
            Request an Engineering Quotation
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Custom sizing and proposals from Scimax design engineers in Ahmedabad.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-green-50 border border-green-200 rounded-full flex items-center justify-center text-green-600 mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-[#26235E]">Inquiry Successfully Received!</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your technical requirements for <strong className="text-slate-900">{formData.productInterest}</strong> have been forwarded to our Direct Sales Desk ({COMPANY_INFO.contacts.directSales.name}).
              </p>
              <div className="p-4 bg-orange-50 rounded-2xl border border-orange-200 max-w-md mx-auto text-left text-xs space-y-1">
                <p className="font-bold text-[#26235E]">Immediate Assistance Required?</p>
                <p className="text-slate-600">Call our Direct Sales Desk directly:</p>
                <p className="font-mono text-sm font-bold text-[#F25920]">
                  {COMPANY_INFO.contacts.directSales.phone}
                </p>
              </div>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#26235E] hover:bg-[#1B1847] text-white text-sm font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Sharma"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F25920] focus:border-transparent text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Precision Castings Ltd."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F25920] focus:border-transparent text-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                    Phone / Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F25920] focus:border-transparent text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F25920] focus:border-transparent text-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                    Industry
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F25920] focus:border-transparent text-slate-900 bg-white"
                  >
                    <option value="">Select Industry...</option>
                    {INDUSTRIES.map((ind) => (
                      <option key={ind.id} value={ind.name}>{ind.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                    Equipment Line *
                  </label>
                  <select
                    required
                    value={formData.productInterest}
                    onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F25920] focus:border-transparent text-slate-900 bg-white"
                  >
                    {PRODUCTS.map((prod) => (
                      <option key={prod.id} value={prod.name}>{prod.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                  Airflow CFM, Operating Temp, or Dust Type (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your dust load, volume (e.g. 10,000 CFM), ducting layout, or compliance targets..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F25920] focus:border-transparent text-slate-900"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-green-600 mr-1.5 shrink-0" />
                  <span>Confidential RFQ • Engineering direct callback</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#F25920] hover:bg-[#D84813] transition-all shadow-md cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Submitting RFQ...</span>
                  ) : (
                    <>
                      <span>Submit Request</span>
                      <ArrowRight className="w-4 h-4 ml-1.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
