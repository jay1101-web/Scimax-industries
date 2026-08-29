import React, { useState } from "react";
import { MessageCircle, Phone, Calendar, ChevronUp, X, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "../data/company";

interface QuickContactFabProps {
  onOpenAppointment: () => void;
  onOpenQuote?: () => void;
}

export const QuickContactFab: React.FC<QuickContactFabProps> = ({
  onOpenAppointment,
  onOpenQuote
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const whatsappUrl = COMPANY_INFO.contacts[0].whatsappUrl;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Expanded Quick Options */}
      {isExpanded && (
        <div className="bg-slate-900 text-white rounded-lg p-3.5 border border-slate-800 shadow-2xl space-y-2 mb-1 animate-in fade-in slide-in-from-bottom-3 duration-200 w-64 text-xs font-heading">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="font-bold text-orange-400 font-heading">Engineering Consultation</span>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={() => {
              setIsExpanded(false);
              onOpenAppointment();
            }}
            className="w-full text-left p-2.5 rounded-md bg-slate-950 hover:bg-slate-800 text-orange-300 font-semibold flex items-center gap-2 transition-colors border border-orange-500/20 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-orange-400 shrink-0" />
            <span>Book In-Person Appointment</span>
          </button>

          <a
            href="tel:+917990659265"
            className="w-full text-left p-2.5 rounded-md bg-slate-950 hover:bg-slate-800 text-slate-200 font-semibold flex items-center gap-2 transition-colors border border-slate-800 font-mono"
          >
            <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Call: +91 79906 59265</span>
          </a>
        </div>
      )}

      {/* Main Trigger Buttons */}
      <div className="flex items-center gap-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Direct WhatsApp with Raj Patel"
          className="p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl hover:scale-105 transition-all duration-150 flex items-center justify-center cursor-pointer"
        >
          <MessageCircle className="w-5 h-5" />
        </a>

        <button
          onClick={() => {
            onOpenAppointment();
          }}
          className="px-4 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-xl text-xs font-bold flex items-center gap-2 hover:scale-102 transition-all cursor-pointer font-heading uppercase tracking-wider"
        >
          <Calendar className="w-4 h-4 text-white" />
          <span>Book Appointment</span>
        </button>
      </div>
    </div>
  );
};
