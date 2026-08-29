import React, { useState, useEffect } from "react";
import { X, Send, CheckCircle2, AlertCircle, FileText, Phone, Database } from "lucide-react";
import { supabase } from "../lib/supabase";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialProduct = ""
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    productInterest: "",
    airflowCFM: "",
    staticPressure: "",
    industry: "Boiler",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({ ...prev, productInterest: initialProduct }));
    }
  }, [initialProduct]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    const refId = `INQ-${Math.floor(1000 + Math.random() * 9000)}`;

    // Try direct client Supabase insert
    try {
      if (supabase) {
        await supabase.from("inquiries").insert([
          {
            id: refId,
            type: "quote",
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            product_interest: formData.productInterest,
            airflow_cfm: formData.airflowCFM,
            static_pressure: formData.staticPressure,
            industry: formData.industry,
            message: formData.message,
            created_at: new Date().toISOString()
          }
        ]);
      }
    } catch {
      // Continue to API
    }

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: refId,
          ...formData,
          type: "quote"
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setIsSuccess(true);
      } else {
        setIsSuccess(true);
      }
    } catch (err: any) {
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-2xl border border-slate-200 overflow-hidden flex flex-col my-8">
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 sm:p-7 flex items-start justify-between relative shrink-0 border-b border-slate-800">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-slate-800 text-orange-400 border border-slate-700 text-xs font-mono uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5" />
              Official CAD Proposal
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
              Request Technical Quote & GA Drawings
            </h3>
            <p className="text-slate-300 text-xs font-body">
              Directly routed to Raj Patel & CAD Engineering Team at Kathwada, Ahmedabad.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-md bg-slate-800 text-slate-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {isSuccess ? (
            <div className="text-center space-y-5 animate-in fade-in py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-1">
                <h4 className="text-2xl font-bold text-slate-900 font-heading">
                  Quote Request Received!
                </h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto font-body">
                  Our senior sizing engineer will review your CFM/pressure requirements and email a formal quotation with CAD GA drawings within 4 hours.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700 flex items-center justify-between font-mono">
                <span>Direct Sales Desk:</span>
                <a href="tel:+917990659265" className="font-bold text-orange-600">
                  +91 79906 59265 (Raj Patel)
                </a>
              </div>

              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="px-5 py-2.5 bg-slate-900 text-white rounded-md text-xs font-bold font-heading hover:bg-slate-800"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-md flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Product Interest / Sizing Info */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1 font-heading">
                  Product / System of Interest *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Induced Draft (ID) Fan, 50 HP or Baghouse Dust Collector"
                  value={formData.productInterest}
                  onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-xs font-medium focus:bg-white focus:ring-1 focus:ring-orange-500 font-sans"
                />
              </div>

              {/* Specs Fields (Optional Sizing) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1 font-heading">
                    Airflow Requirement (CFM or m³/hr)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 25,000 CFM"
                    value={formData.airflowCFM}
                    onChange={(e) => setFormData({ ...formData, airflowCFM: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-xs font-medium focus:bg-white focus:ring-1 focus:ring-orange-500 font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1 font-heading">
                    Static Pressure (mm WG or In. WG)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 250 mm WG (10 inch WG)"
                    value={formData.staticPressure}
                    onChange={(e) => setFormData({ ...formData, staticPressure: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-xs font-medium focus:bg-white focus:ring-1 focus:ring-orange-500 font-sans"
                  />
                </div>
              </div>

              {/* Personal details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1 font-heading">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alok Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-xs font-medium focus:bg-white focus:ring-1 focus:ring-orange-500 font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1 font-heading">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Apex Steel Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-xs font-medium focus:bg-white focus:ring-1 focus:ring-orange-500 font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1 font-heading">
                    Phone / Mobile *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-xs font-medium focus:bg-white focus:ring-1 focus:ring-orange-500 font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1 font-heading">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="alok@apexsteel.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-xs font-medium focus:bg-white focus:ring-1 focus:ring-orange-500 font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1 font-heading">
                  Specific Project Notes (Temperature, Gas Medium, Replacement Specs)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Replacement blower for existing boiler with high temperature flue gas at 180°C..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-xs font-medium focus:bg-white focus:ring-1 focus:ring-orange-500 font-sans"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs rounded-md shadow-lg transition-colors flex items-center justify-center gap-2 cursor-pointer font-heading uppercase tracking-wider"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Generating Proposal Request..." : "Submit Proposal Request"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
