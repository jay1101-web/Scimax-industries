"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, ShieldCheck, Phone, ArrowRight } from "lucide-react";
import { INDUSTRIES, PRODUCTS, COMPANY_INFO } from "@/lib/data";
import { submitInquiryApi } from "@/lib/clients";

interface ContactFormProps {
  defaultProduct?: string;
  defaultIndustry?: string;
}

export default function ContactForm({ defaultProduct, defaultIndustry }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    industry: defaultIndustry || "",
    productInterest: defaultProduct || "Dust Collection Systems",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8">
      {isSubmitted ? (
        <div className="text-center py-10 space-y-4 animate-in zoom-in-95 duration-200">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-black text-[#26235E]">Inquiry Successfully Sent!</h3>
          <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
            Thank you, <strong className="text-gray-900">{formData.name}</strong>. Your requirement for <strong className="text-gray-900">{formData.productInterest}</strong> has been logged. Our Direct Sales Desk will contact you within 24 hours with technical specifications and commercial quotation.
          </p>
          <div className="p-4 bg-orange-50 rounded-xl border border-orange-200 max-w-md mx-auto text-left text-xs space-y-1">
            <p className="font-bold text-[#26235E]">Direct Contact Details:</p>
            <p className="text-gray-700">Raj Patel (Direct Sales Desk): <strong className="text-[#F25920]">{COMPANY_INFO.contacts.directSales.phone}</strong></p>
            <p className="text-gray-700">Ankit Patel (Technical Desk): <strong className="text-blue-900">{COMPANY_INFO.contacts.technicalDesk.phone}</strong></p>
          </div>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-4 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#26235E] hover:text-[#F25920] border border-gray-300 rounded-lg hover:border-[#F25920] transition-colors"
          >
            Send Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="border-b border-gray-100 pb-4 mb-4">
            <h3 className="text-xl font-black text-[#26235E]">
              Request an Industrial Quote
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Submit your plant specs or airflow parameters for a formal proposal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Vikram Shah"
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-[#F25920] text-gray-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Company / Factory Name *
              </label>
              <input
                type="text"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="e.g. Gujarat Forgings Pvt Ltd"
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-[#F25920] text-gray-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Phone Number (WhatsApp) *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 79906 59265"
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-[#F25920] text-gray-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Corporate Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="sales@company.com"
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-[#F25920] text-gray-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Industry Sector
              </label>
              <select
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-[#F25920] text-gray-900 bg-white"
              >
                <option value="">Select your industry...</option>
                {INDUSTRIES.map((ind) => (
                  <option key={ind.id} value={ind.name}>{ind.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Product Interest *
              </label>
              <select
                required
                value={formData.productInterest}
                onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-[#F25920] text-gray-900 bg-white"
              >
                {PRODUCTS.map((prod) => (
                  <option key={prod.id} value={prod.name}>{prod.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
              Project Details (Air volume in CFM, Temp, Dust Characteristics)
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Please describe your equipment requirements, required air delivery (m³/hr or CFM), operating temperature, ducting layout, or pollution board limits..."
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-[#F25920] text-gray-900"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center text-xs text-gray-500">
              <ShieldCheck className="w-4 h-4 text-green-600 mr-1.5 shrink-0" />
              <span>ISO 9001:2015 Assured • No obligation quote</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-[#F25920] hover:bg-[#D84813] transition-all shadow-md hover:shadow-lg cursor-pointer disabled:opacity-60"
            >
              {isSubmitting ? (
                <span>Sending Proposal Request...</span>
              ) : (
                <>
                  <span>Send Inquiry</span>
                  <Send className="w-4 h-4 ml-2" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
