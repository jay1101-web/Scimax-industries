import React from "react";
import { COMPANY_INFO } from "../data/company";
import { MakeInIndiaBadge, IsoBadge, ScimaxLogo } from "./VisualAssets";
import {
  ShieldCheck,
  Cpu,
  CheckCircle2,
  Award,
  Users,
  Compass,
  Building,
  Phone,
  Mail,
  ArrowRight,
  Activity,
  Calendar
} from "lucide-react";

interface AboutSectionProps {
  onOpenAppointment: () => void;
  onOpenQuote?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenAppointment,
  onOpenQuote
}) => {
  return (
    <section id="about-section" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 text-orange-400 text-xs font-mono font-semibold uppercase tracking-widest border border-slate-800">
            <Building className="w-3.5 h-3.5 text-orange-400" />
            FACILITY // HEAVY ENGINEERING & BALANCING BAY
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-heading tracking-tight">
            About Scimax Industries
          </h2>
          <p className="text-slate-600 text-base leading-relaxed font-body">
            Premier manufacturer and CAD/CAM designer of Centrifugal Blowers, Axial Fans, and Dust Collection Systems headquartered in Gujarat, India.
          </p>
        </div>

        {/* Company Overview & CAD/CAM Facility Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 font-heading leading-tight">
                In-House CAD/CAM Design, CNC Laser Cutting & Dynamic Balancing Bay
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-body">
                As an independent producer, <strong>Scimax Industries</strong> provides end-to-end industrial air engineering. Our design engineers utilize advanced CAD/CAM software to model impellers tailored to specific gas volume, static pressure, dust grain density, and abrasive conditions.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed font-body">
                Every rotor is computer-balanced to <strong>ISO 1940 Grade 6.3 standards</strong> to ensure vibration-free, energy-efficient operation before dispatch, validated with digital anemometers, manometers, and acoustic decibel analyzers.
              </p>
            </div>

            {/* Vision & Mission Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block mb-1 font-heading">
                  OUR VISION
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-body">
                  {COMPANY_INFO.vision}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-700 block mb-1 font-heading">
                  OUR MISSION
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-body">
                  {COMPANY_INFO.mission}
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenAppointment}
                className="px-5 py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-md text-xs font-heading font-bold transition-colors shadow-md flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>SCHEDULE PLANT VISIT APPOINTMENT</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
          </div>

          {/* Right: Quality Protocol Panel */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-slate-900 text-white p-6 sm:p-7 rounded-lg border border-slate-800 shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-mono text-orange-400 font-bold uppercase tracking-wider">
                    QUALITY CONTROL PROTOCOL
                  </span>
                  <h4 className="text-lg font-bold text-white font-heading mt-0.5">
                    Certified Manufacturing Standards
                  </h4>
                </div>
                <div className="w-9 h-9 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center text-orange-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-slate-950 rounded-md border border-slate-800 space-y-1">
                  <span className="text-orange-400 font-bold block font-mono">ISO 9001:2015</span>
                  <span className="text-slate-300 text-[11px] block font-sans">Certified Quality Management</span>
                </div>

                <div className="p-3 bg-slate-950 rounded-md border border-slate-800 space-y-1">
                  <span className="text-sky-400 font-bold block font-mono">ISO 1940 G6.3</span>
                  <span className="text-slate-300 text-[11px] block font-sans">Computer Dynamic Balancing</span>
                </div>

                <div className="p-3 bg-slate-950 rounded-md border border-slate-800 space-y-1">
                  <span className="text-orange-400 font-bold block font-mono">IS 4894 / IS 3588</span>
                  <span className="text-slate-300 text-[11px] block font-sans">Centrifugal & Axial Testing</span>
                </div>

                <div className="p-3 bg-slate-950 rounded-md border border-slate-800 space-y-1">
                  <span className="text-emerald-400 font-bold block font-mono">MAKE IN INDIA</span>
                  <span className="text-slate-300 text-[11px] block font-sans">100% In-House Gujarat Built</span>
                </div>
              </div>

              {/* Leadership Spotlight */}
              <div className="pt-3 border-t border-slate-800 space-y-3">
                <span className="text-[10px] text-orange-400 uppercase tracking-wider block font-mono">
                  TECHNICAL DIRECTORS & PLANT MANAGEMENT:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans">
                  <div className="p-2.5 bg-slate-950 rounded-md border border-slate-800">
                    <p className="text-xs font-bold text-white font-heading">Raj Patel</p>
                    <span className="text-[10px] text-orange-400 block font-body">Engineering & Operations</span>
                    <a href="tel:+917990659265" className="text-[11px] text-slate-300 hover:text-white mt-1 block">
                      +91 79906 59265
                    </a>
                  </div>

                  <div className="p-2.5 bg-slate-950 rounded-md border border-slate-800">
                    <p className="text-xs font-bold text-white font-heading">Ankit Patel</p>
                    <span className="text-[10px] text-orange-400 block font-body">Technical Sales & Sizing</span>
                    <a href="tel:+918320495952" className="text-[11px] text-slate-300 hover:text-white mt-1 block">
                      +91 83204 95952
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us & Official Brochure Document Section */}
        <div className="pt-10 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
              OFFICIAL ENGINEERING CATALOGUE // ABOUT US
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
              Why Choose Scimax Industries?
            </h3>
            <p className="text-sm text-slate-600 font-body">
              A unique set of advantages that distinguish us in the field of industrial air movement and pollution control systems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: 6 Core Advantages Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "High Energy Efficiency",
                  desc: "Designed for top-tier energy efficiency, helping reduce both operational power expenses and environmental impact.",
                  icon: Cpu
                },
                {
                  title: "Cost-Effective Solutions",
                  desc: "We offer competitively priced products without sacrificing structural quality, delivering exceptional lifetime value.",
                  icon: Award
                },
                {
                  title: "Noise Reduction",
                  desc: "Engineered for low-noise operation, our aerodynamic scroll casings and acoustic shrouds promote a quieter, safer work environment.",
                  icon: Activity
                },
                {
                  title: "Superior Manufacturing Quality",
                  desc: "Every product is built with CNC precision and heavy-gauge plate to meet the highest standards of durability and performance.",
                  icon: ShieldCheck
                },
                {
                  title: "Precise Flow & Pressure",
                  desc: "Custom impeller profiling ensures blowers deliver exact CFM flow and static head for peak system performance.",
                  icon: Compass
                },
                {
                  title: "Outstanding After-Sales Support",
                  desc: "Dedicated engineering teams providing rapid-response commissioning, dynamic balancing, and genuine spare parts.",
                  icon: CheckCircle2
                }
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-slate-50 border border-slate-200 hover:border-orange-500/60 transition-colors flex gap-3.5 items-start"
                  >
                    <div className="w-8 h-8 rounded-md bg-orange-500/10 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold font-heading text-slate-900">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 font-body leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Authentic Brochure Page Card */}
            <div className="lg:col-span-4 bg-slate-950 p-4 rounded-xl border border-slate-800 shadow-xl space-y-3 flex flex-col items-center text-center">
              <div className="w-full relative rounded-lg overflow-hidden border border-slate-800 bg-slate-900 group">
                <img
                  src="/images/products/scimax-about-us-brochure.jpg"
                  alt="Scimax Industries Official Brochure About Us Page"
                  className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="w-full flex items-center justify-between pt-1">
                <span className="text-[11px] font-mono text-orange-400 font-bold">
                  BROCHURE // ABOUT US
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  ISO 9001:2015
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
