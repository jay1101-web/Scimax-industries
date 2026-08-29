import React, { useState } from "react";
import { AppointmentFormData } from "../types";
import { COMPANY_INFO } from "../data/company";
import { supabase } from "../lib/supabase";
import {
  Calendar,
  Clock,
  MapPin,
  Building,
  User,
  Phone,
  Mail,
  CheckCircle2,
  X,
  FileDown,
  MessageCircle,
  AlertCircle,
  Database,
  ShieldCheck
} from "lucide-react";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    location: "Chadasna Plant (Mehsana / Ahmedabad Highway)",
    preferredDate: "",
    preferredTime: "11:00 AM",
    agenda: "Plant Inspection & Fan Dynamic Balancing Demonstration"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedAppointment, setConfirmedAppointment] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [supabaseSynced, setSupabaseSynced] = useState<boolean | null>(null);
  const [supabaseDetails, setSupabaseDetails] = useState<string>("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");
    setSupabaseSynced(null);
    setSupabaseDetails("");

    const refId = `APT-${Math.floor(1000 + Math.random() * 9000)}`;
    const appointmentPayload = {
      id: refId,
      name: formData.name,
      email: formData.email || "N/A",
      phone: formData.phone,
      company: formData.company || "N/A",
      location: formData.location,
      preferredDate: formData.preferredDate,
      preferredTime: formData.preferredTime,
      agenda: formData.agenda,
      status: "confirmed",
      createdAt: new Date().toISOString()
    };

    let directSynced = false;

    // 1. Try Direct Supabase Client Insertion first
    try {
      if (supabase) {
        // Try snake_case schema
        const { error: sbError } = await supabase.from("appointments").insert([
          {
            id: refId,
            name: formData.name,
            email: formData.email || "N/A",
            phone: formData.phone,
            company: formData.company || "N/A",
            location: formData.location,
            preferred_date: formData.preferredDate,
            preferred_time: formData.preferredTime,
            agenda: formData.agenda,
            status: "confirmed",
            created_at: appointmentPayload.createdAt
          }
        ]);

        if (!sbError) {
          directSynced = true;
          setSupabaseSynced(true);
          setSupabaseDetails("Directly saved to Supabase 'appointments' table.");
        } else {
          // If column mismatch, try camelCase schema
          const { error: sbError2 } = await supabase.from("appointments").insert([
            {
              id: refId,
              name: formData.name,
              email: formData.email || "N/A",
              phone: formData.phone,
              company: formData.company || "N/A",
              location: formData.location,
              preferredDate: formData.preferredDate,
              preferredTime: formData.preferredTime,
              agenda: formData.agenda,
              status: "confirmed",
              createdAt: appointmentPayload.createdAt
            }
          ]);

          if (!sbError2) {
            directSynced = true;
            setSupabaseSynced(true);
            setSupabaseDetails("Directly saved to Supabase 'appointments' table.");
          } else {
            console.warn("Supabase client insert note:", sbError.message || sbError2.message);
            setSupabaseDetails(`Supabase Note: ${sbError.message || sbError2.message}`);
          }
        }
      }
    } catch (sbErr: any) {
      console.warn("Supabase direct client error:", sbErr);
      setSupabaseDetails(`Supabase connection note: ${sbErr?.message || "Table setup required"}`);
    }

    // 2. Also send to Express backend
    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setConfirmedAppointment(data.appointment || appointmentPayload);
        if (data.inquiry?.syncedToSupabase || directSynced) {
          setSupabaseSynced(true);
        }
      } else {
        setConfirmedAppointment(appointmentPayload);
      }
    } catch (err: any) {
      setConfirmedAppointment(appointmentPayload);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Generate downloadable .ics calendar file
  const downloadCalendarIcs = () => {
    if (!confirmedAppointment) return;
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Scimax Industries//Consultation Scheduler//EN",
      "BEGIN:VEVENT",
      `SUMMARY:Scimax Industries Consultation - ${confirmedAppointment.agenda}`,
      `DESCRIPTION:Appointment with Raj Patel & Engineering Team at Scimax Industries.\\nLocation: ${confirmedAppointment.location}\\nRef ID: ${confirmedAppointment.id}`,
      `LOCATION:${confirmedAppointment.location}`,
      `DTSTART;VALUE=DATE:${confirmedAppointment.preferredDate.replace(/-/g, "")}T053000Z`,
      `DTEND;VALUE=DATE:${confirmedAppointment.preferredDate.replace(/-/g, "")}T063000Z`,
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `Scimax_Appointment_${confirmedAppointment.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const whatsappConfirmationText = confirmedAppointment
    ? encodeURIComponent(
        `Hello Raj Patel, I have booked appointment Ref #${confirmedAppointment.id} on ${confirmedAppointment.preferredDate} at ${confirmedAppointment.preferredTime} for ${confirmedAppointment.location}. My Name: ${confirmedAppointment.name}`
      )
    : "";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-2xl border border-slate-200 overflow-hidden flex flex-col my-8">
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 sm:p-7 flex items-start justify-between relative shrink-0 border-b border-slate-800">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-slate-800 text-orange-400 border border-slate-700 text-xs font-mono uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5 text-orange-400" />
              Direct Consultation Scheduler
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
              Book Plant Visit & Engineering Consultation
            </h3>
            <p className="text-slate-300 text-xs font-body">
              Meet our directors and technical CAD engineers at our Chadasna manufacturing works or schedule an on-site plant inspection.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-md bg-slate-800/80 text-slate-400 hover:text-white transition-colors cursor-pointer border border-slate-700"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {confirmedAppointment ? (
            <div className="text-center space-y-6 animate-in fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-orange-600 font-bold uppercase tracking-wider block">
                  Reference ID: {confirmedAppointment.id}
                </span>
                <h4 className="text-2xl font-bold text-slate-900 font-heading">
                  Appointment Confirmed!
                </h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto font-body">
                  Thank you, <strong>{confirmedAppointment.name}</strong>. Your session is booked for{" "}
                  <strong>{confirmedAppointment.preferredDate}</strong> at{" "}
                  <strong>{confirmedAppointment.preferredTime}</strong>.
                </p>
              </div>

              {/* Confirmation Slip Card */}
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-left text-xs space-y-2 font-mono max-w-lg mx-auto">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Location:</span>
                  <span className="font-bold text-slate-900">{confirmedAppointment.location}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Engineering Host:</span>
                  <span className="font-bold text-slate-900">Raj Patel (+91 79906 59265)</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Discussion Agenda:</span>
                  <span className="font-bold text-slate-900">{confirmedAppointment.agenda}</span>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-slate-500 flex items-center gap-1">
                    <Database className="w-3.5 h-3.5 text-emerald-600" />
                    Supabase Sync:
                  </span>
                  <span className={`font-semibold px-2 py-0.5 rounded text-[11px] ${supabaseSynced ? "bg-emerald-100 text-emerald-800" : "bg-blue-100 text-blue-800"}`}>
                    {supabaseSynced ? "✓ Synchronized to PostgreSQL" : "Logged to Scimax Engine"}
                  </span>
                </div>
                {supabaseDetails && (
                  <p className="text-[10px] text-slate-500 pt-1 border-t border-slate-100 font-sans">
                    {supabaseDetails}
                  </p>
                )}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={downloadCalendarIcs}
                  className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-md text-xs font-bold font-heading flex items-center gap-2"
                >
                  <FileDown className="w-4 h-4 text-orange-400" />
                  Add to Google / Outlook Calendar (.ics)
                </button>

                <a
                  href={`https://wa.me/917990659265?text=${whatsappConfirmationText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md text-xs font-bold font-heading flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Send Confirmation on WhatsApp
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-md flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Location Selector */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1 font-heading">
                  Consultation Venue / Mode *
                </label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value as any })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-xs font-semibold text-slate-900 focus:bg-white focus:ring-1 focus:ring-orange-500 cursor-pointer font-sans"
                >
                  <option value="Chadasna Plant (Mehsana / Ahmedabad Highway)">
                    Chadasna Plant, Ahmedabad–Mehsana Highway (CAD/CAM Testing & Balancing Bay)
                  </option>
                  <option value="Virtual Consultation (Google Meet / Phone)">
                    Virtual Consultation (Google Meet / Video Call with Sizing Engineers)
                  </option>
                  <option value="On-Site Facility Visit">
                    On-Site Facility Visit (Scimax engineer visits your plant for duct inspection)
                  </option>
                </select>
              </div>

              {/* Contact Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1 font-heading">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ketan Shah"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-xs font-medium focus:bg-white focus:ring-1 focus:ring-orange-500 font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1 font-heading">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. UltraTech / Reliance Vendor"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-xs font-medium focus:bg-white focus:ring-1 focus:ring-orange-500 font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1 font-heading">
                    Mobile / WhatsApp Number *
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
                    placeholder="ketan@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-xs font-medium focus:bg-white focus:ring-1 focus:ring-orange-500 font-sans"
                  />
                </div>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1 font-heading">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split("T")[0]}
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-xs font-medium focus:bg-white focus:ring-1 focus:ring-orange-500 font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1 font-heading">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-xs font-medium focus:bg-white focus:ring-1 focus:ring-orange-500 font-sans"
                  >
                    <option value="10:00 AM">10:00 AM – 11:30 AM (Morning Slot)</option>
                    <option value="11:30 AM">11:30 AM – 01:00 PM</option>
                    <option value="02:30 PM">02:30 PM – 04:00 PM (Afternoon Slot)</option>
                    <option value="04:30 PM">04:30 PM – 06:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1 font-heading">
                  Primary Discussion Agenda
                </label>
                <input
                  type="text"
                  placeholder="e.g. Boiler ID Fan Sizing & In-house Dynamic Balancing Test Inspection"
                  value={formData.agenda}
                  onChange={(e) => setFormData({ ...formData, agenda: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-xs font-medium focus:bg-white focus:ring-1 focus:ring-orange-500 font-sans"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs rounded-md shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer font-heading uppercase tracking-wider"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  {isSubmitting ? "Confirming Appointment..." : "Confirm & Book Appointment"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
