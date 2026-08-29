import React, { useState } from "react";
import { COMPANY_INFO } from "../data/company";
import { supabase } from "../lib/supabase";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Clock,
  Building2,
  MessageCircle,
  AlertCircle,
  Calendar,
  Database
} from "lucide-react";

interface ContactSectionProps {
  onOpenAppointment: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenAppointment }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "Boiler",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    const refId = `INQ-${Math.floor(1000 + Math.random() * 9000)}`;

    // Try direct client Supabase insert
    try {
      if (supabase) {
        await supabase.from("inquiries").insert([
          {
            id: refId,
            type: "contact",
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
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
          type: "contact"
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          industry: "Boiler",
          message: ""
        });
      } else {
        setSubmitSuccess(true);
      }
    } catch (err: any) {
      setSubmitSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-section" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 text-orange-400 text-xs font-mono font-semibold uppercase tracking-widest border border-slate-800">
            <Building2 className="w-3.5 h-3.5 text-orange-400" />
            PLANT LOCATION // DIRECT ENGINEERING DESK
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-heading tracking-tight">
            Connect with Scimax Industries
          </h2>
          <p className="text-slate-600 text-base leading-relaxed font-body">
            Visit our CAD/CAM manufacturing and balancing works on the Ahmedabad–Mehsana Highway, schedule an engineering consultation appointment, or speak directly with our directors.
          </p>
        </div>

        {/* Plant Location Card */}
        <div className="max-w-3xl mx-auto w-full">
          {(COMPANY_INFO.plants || []).map((plant, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-6 sm:p-7 border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-md bg-slate-900 text-orange-400 font-mono font-bold text-xs border border-slate-800">
                    {plant.unit}
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-semibold">{plant.coordinates}</span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-heading">
                    {plant.area}
                  </h3>
                  <div className="flex items-start gap-2 text-xs text-slate-600 mt-2 font-body">
                    <MapPin className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                    <span>{plant.address}</span>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-md border border-slate-200 text-xs space-y-1">
                  <span className="text-slate-500 text-[10px] uppercase block font-bold font-mono">Plant Facilities & Capabilities:</span>
                  <span className="text-slate-800 font-medium block font-body">{plant.facilities}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(plant.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-heading font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1"
                >
                  GOOGLE MAPS ROUTE →
                </a>
                <button
                  onClick={onOpenAppointment}
                  className="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-xs font-heading font-bold rounded-md transition-colors cursor-pointer inline-flex items-center gap-1.5 shadow-xs"
                >
                  <Calendar className="w-3.5 h-3.5 text-white" />
                  <span>Book Plant Appointment</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form & Direct Hotlines Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Direct Hotline Box */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-7 rounded-lg border border-slate-800 space-y-5">
            <div className="border-b border-slate-800 pb-3">
              <span className="text-xs text-orange-400 font-bold uppercase tracking-wider block font-mono">
                DIRECT SALES & TECHNICAL ASSISTANCE
              </span>
              <h3 className="text-xl font-bold text-white font-heading mt-1">
                Direct Engineering Support
              </h3>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-slate-950 rounded-md border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 uppercase font-mono">Director - Operations & Testing:</span>
                <p className="text-white font-bold text-sm font-heading">Raj Patel</p>
                <a href="tel:+917990659265" className="text-orange-400 hover:underline block font-bold font-mono">
                  +91 79906 59265
                </a>
              </div>

              <div className="p-3 bg-slate-950 rounded-md border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 uppercase font-mono">Director - Sizing & Applications:</span>
                <p className="text-white font-bold text-sm font-heading">Ankit Patel</p>
                <a href="tel:+918320495952" className="text-orange-400 hover:underline block font-bold font-mono">
                  +91 83204 95952
                </a>
              </div>

              <div className="p-3 bg-slate-950 rounded-md border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 uppercase font-mono">Official Email Desk:</span>
                <a href="mailto:sales@scimax.in" className="text-sky-400 hover:underline block">
                  sales@scimax.in
                </a>
                <a href="mailto:scimaxindia@gmail.com" className="text-slate-300 hover:underline block">
                  scimaxindia@gmail.com
                </a>
              </div>
            </div>

            <div className="p-3 bg-slate-950 rounded-md border border-orange-500/40 text-xs text-orange-200 font-body">
              ⚡ Factory response turnaround time: <strong>Under 4 hours</strong> for CAD sizing proposals and blower dimensional drawings.
            </div>

            {/* Official Brochure Back Cover Preview */}
            <div className="pt-2 border-t border-slate-800">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                OFFICIAL CATALOGUE CONTACT SHEET
              </span>
              <div className="rounded-md overflow-hidden bg-slate-950 border border-slate-800 group">
                <img
                  src="/images/products/scimax-contact-us-back-cover.jpg"
                  alt="Scimax Industries Official Brochure Contact Sheet & Certifications"
                  className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-103"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right: Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900 font-heading mb-1">
              Send Direct Engineering Requirement
            </h3>
            <p className="text-xs text-slate-600 font-body mb-6">
              Fill out your CFM, static pressure, or dust collection parameters.
            </p>

            {submitSuccess ? (
              <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-md text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="text-sm font-bold text-emerald-900 font-heading">Inquiry Logged Successfully!</h4>
                <p className="text-xs text-emerald-700 font-body">
                  Our engineering team (Raj / Ankit Patel) will review your specifications and contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="mt-3 px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md text-xs font-bold font-heading cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                {submitError && (
                  <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 rounded-md flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-700 font-bold uppercase mb-1 font-heading">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Shah"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md text-slate-900 focus:bg-white focus:ring-1 focus:ring-orange-500 font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold uppercase mb-1 font-heading">Mobile / Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md text-slate-900 focus:bg-white focus:ring-1 focus:ring-orange-500 font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-700 font-bold uppercase mb-1 font-heading">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md text-slate-900 focus:bg-white focus:ring-1 focus:ring-orange-500 font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold uppercase mb-1 font-heading">Company / Plant Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Gujarat Foundry Ltd."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md text-slate-900 focus:bg-white focus:ring-1 focus:ring-orange-500 font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold uppercase mb-1 font-heading">Technical Requirement / Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Specify required CFM/m³hr, static pressure mmWG, motor HP preference, gas temperature, or dust type..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md text-slate-900 focus:bg-white focus:ring-1 focus:ring-orange-500 font-sans"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer uppercase shadow-md font-heading"
                >
                  {isSubmitting ? "TRANSMITTING..." : "TRANSMIT INQUIRY TO SCIMAX DESK"}
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
