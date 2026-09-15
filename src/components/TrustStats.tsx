"use client";

import React, { useEffect, useState } from "react";
import { Database, Users, Building2, Award } from "lucide-react";

export default function TrustStats() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const stats = [
    {
      value: "127+",
      label: "Forms of Dust Engineered For",
      desc: "Proprietary dust database & testing protocol",
      icon: <Database className="w-5 h-5 text-[#F25920]" />,
      tag: "Proven Formulations"
    },
    {
      value: "96%",
      label: "Customer Retention Rate",
      desc: "Long-standing trust with Indian industrial plants",
      icon: <Users className="w-5 h-5 text-[#F25920]" />,
      tag: "Field Assured"
    },
    {
      value: "14+",
      label: "Heavy Industries Served",
      desc: "From steel foundries to high-potency pharma",
      icon: <Building2 className="w-5 h-5 text-[#F25920]" />,
      tag: "Turnkey Installations"
    },
    {
      value: "ISO 9001",
      label: "2015 Certified Manufacturing",
      desc: "ISO 1940 Grade G6.3 dynamic balancing on fans",
      icon: <Award className="w-5 h-5 text-[#F25920]" />,
      tag: "Audited & Verified"
    }
  ];

  return (
    <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, idx) => (
          <div
            key={stat.label}
            className="group relative bg-white rounded-2xl p-6 shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-orange-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden"
          >
            {/* Top accent glow line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F25920] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#26235E] bg-blue-50 px-2 py-0.5 rounded-full">
                {stat.tag}
              </span>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#26235E] tracking-tight font-sans">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-gray-900 leading-snug">
                {stat.label}
              </div>
              <p className="text-xs text-gray-500 leading-relaxed pt-1">
                {stat.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
