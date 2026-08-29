import React, { useState } from "react";
import { Camera, Eye, Calendar, Sparkles, Layers, ShieldCheck, ChevronRight, Download } from "lucide-react";
import { RealMachinePhoto, ImpellerRealPhoto } from "./VisualAssets";

interface BrochureGalleryProps {
  onOpenAppointment: () => void;
  onOpenCatalogue: () => void;
  onSelectProduct?: (productId: string) => void;
}

export const BrochureGallery: React.FC<BrochureGalleryProps> = ({
  onOpenAppointment,
  onOpenCatalogue,
  onSelectProduct
}) => {
  const [activeTab, setActiveTab] = useState<"all" | "centrifugal" | "axial" | "impellers" | "installations">("all");
  const [selectedPhoto, setSelectedPhoto] = useState<any | null>(null);

  const galleryItems = [
    {
      id: "blue-heavy-blower",
      type: "blue-heavy-blower",
      category: "centrifugal",
      title: "Heavy-Duty Centrifugal Blower (0.5–100 HP)",
      subtitle: "Flagship royal blue volute casing with bolted suction inlet & laser-cut multi-blade impeller",
      pageRef: "Brochure Cover & Page 1, 4",
      specs: "0.5 – 100 HP | 8,00,000 m³/hr | 250 mm WG",
      appRef: "Boiler Induced / Forced Draft",
      badge: "Core Flagship"
    },
    {
      id: "grey-id-fan",
      type: "grey-id-fan",
      category: "centrifugal",
      title: "Boiler Induced Draft (ID) Fan with 6 Radial Stiffeners",
      subtitle: "Heavy dark grey steel casing with high-strength triangular gusset ribs for high-temperature flue gases",
      pageRef: "Brochure Page 2, 11, 24",
      specs: "Up to 350°C Flue Gas | Hardox / Boiler Quality Plate",
      appRef: "Thermal Boilers & Furnaces",
      badge: "High Temperature"
    },
    {
      id: "conical-high-pressure-blower",
      type: "conical-high-pressure-blower",
      category: "centrifugal",
      title: "High-Pressure Conical Discharge Blower",
      subtitle: "Centrifugal blower with precision conical nozzle reducer for concentrated high-velocity air blast",
      pageRef: "Brochure Page 3",
      specs: "Up to 1000 mm WG Static Pressure | 1 – 100 HP",
      appRef: "Combustion Air & Pneumatics",
      badge: "High Pressure"
    },
    {
      id: "four-blue-blowers",
      type: "four-blue-blowers",
      category: "installations",
      title: "Direct-Drive Centrifugal Blower Array (4 Units)",
      subtitle: "Factory batch fabrication of heavy-duty royal blue direct motor-mount blowers for furnace air booster lines",
      pageRef: "Brochure Page 5, 13",
      specs: "1 – 20 HP | Laser-Cut Volute Casing",
      appRef: "Furnace Combustion & Air Booster",
      badge: "Shopfloor Array"
    },
    {
      id: "group-blowers-shopfloor",
      type: "group-blowers-shopfloor",
      category: "installations",
      title: "Scimax Factory Shop Floor — Multi-Unit Array",
      subtitle: "Batch assembly of industrial centrifugal blowers with direct and belt-drive motors at Chadasna Works",
      pageRef: "Brochure Page 5, 13",
      specs: "Manufactured to ISO 9001:2015 Standards",
      appRef: "Gujarat Manufacturing Bay",
      badge: "Plant Works"
    },
    {
      id: "tube-axial-direct",
      type: "tube-axial-direct",
      category: "axial",
      title: "Tube Axial Flow Fan (Direct Drive)",
      subtitle: "Cylindrical rolled steel duct casing with cast aluminum aerofoil propeller blades",
      pageRef: "Brochure Page 8, 19",
      specs: "850 – 3,00,000 m³/hr | 1,000 – 40,000 CFM",
      appRef: "Ducted Factory Ventilation",
      badge: "High Flow"
    },
    {
      id: "tube-axial-v-belt",
      type: "tube-axial-v-belt",
      category: "axial",
      title: "Tube Axial Fan (External V-Belt Drive)",
      subtitle: "Top-mounted external motor arrangement keeping electricals out of hot or corrosive airstreams",
      pageRef: "Brochure Page 8, 18",
      specs: "Sweep Dia: 310 mm to 1200 mm (12\" to 48\")",
      appRef: "Hot & Fume Laden Air",
      badge: "External Motor"
    },
    {
      id: "bifurcated-axial-fan",
      type: "bifurcated-axial-fan",
      category: "axial",
      title: "Bifurcated Axial Flow Fan (Isolated Motor)",
      subtitle: "Square duct casing with central isolated tunnel chamber keeping motor in ambient cooling air",
      pageRef: "Brochure Page 8, 27",
      specs: "Continuous duty up to 200°C | Chemical / Steam",
      appRef: "Corrosive & Hot Vapors",
      badge: "Isolated Motor"
    },
    {
      id: "axial-air-fan-mancooler",
      type: "axial-air-fan-mancooler",
      category: "axial",
      title: "Industrial Axial Man Cooler & Spot Cooling Fan",
      subtitle: "High-thrust aerofoil impeller with OSHA wire mesh cage mounted on heavy tubular steel pedestal",
      pageRef: "Brochure Page 8, 26",
      specs: "6,000 – 65,000 m³/hr | Up to 35m Air Throw",
      appRef: "Furnace & Operator Spot Cooling",
      badge: "Spot Cooling"
    },
    {
      id: "roots-twin-lobe-skid",
      type: "roots-twin-lobe-skid",
      category: "centrifugal",
      title: "Twin-Lobe Roots Blower Base Assembly",
      subtitle: "Positive displacement blower skid with intake/discharge silencers and heavy-duty TEFC drive motors",
      pageRef: "Brochure Page 12",
      specs: "Continuous Positive Pressure | Aeration Duty",
      appRef: "ETP Aeration & Pneumatic Conveying",
      badge: "Positive Displacement"
    },
    {
      id: "white-blowers-plant",
      type: "white-blowers-plant",
      category: "installations",
      title: "Heavy Chemical & Pharma Exhaust Blowers",
      subtitle: "High-volume white epoxy / polyurethane coated centrifugal fans awaiting client dispatch",
      pageRef: "Brochure Page 14",
      specs: "Corrosion Resistant Coatings | Zero Vibration",
      appRef: "Pharma & Chemical Plants",
      badge: "Clean Room Duty"
    },
    {
      id: "belt-driven-blower-guard",
      type: "belt-driven-blower-guard",
      category: "centrifugal",
      title: "V-Belt Driven Centrifugal Fan with Safety Guard",
      subtitle: "Side-mounted motor on common structural channel base with heavy triangular sheet metal belt guard",
      pageRef: "Brochure Page 15, 21",
      specs: "V-Belt Arrangement 9 | Heavy Bearing Blocks",
      appRef: "Industrial Air Handling",
      badge: "Belt Drive"
    },
    {
      id: "small-utility-pressure-blower",
      type: "small-utility-pressure-blower",
      category: "centrifugal",
      title: "Compact Aluminum High-Pressure Utility Blower",
      subtitle: "Direct-mounted compact blower for gas burner booster air and small furnace combustion",
      pageRef: "Brochure Page 23",
      specs: "Cast Aluminum / Heavy MS | 2800 RPM High Speed",
      appRef: "Oil/Gas Burners & Spot Exhaust",
      badge: "Utility Blower"
    },
    {
      id: "direct-drive-lime-motor-blower",
      type: "direct-drive-lime-motor-blower",
      category: "centrifugal",
      title: "Direct-Drive Industrial Blower (Box Flange Discharge)",
      subtitle: "Turquoise volute casing with flanged rectangular top discharge and direct back-mounted motor",
      pageRef: "Brochure Page 6, 14",
      specs: "Flanged Box Discharge | Direct C-Face Motor Mount",
      appRef: "Cleanroom & Process Drying",
      badge: "Direct Drive"
    },
    {
      id: "narrow-high-pressure-fan",
      type: "narrow-high-pressure-fan",
      category: "centrifugal",
      title: "Narrow Width High-Pressure Centrifugal Blower",
      subtitle: "Radial scroll with raised motor pedestal stand for high static resistance applications",
      pageRef: "Brochure Page 7, 22",
      specs: "Up to 800 mm WG | 1440 / 2880 RPM",
      appRef: "Process Air & Burner Booster",
      badge: "High Pressure"
    },
    {
      id: "blower-inlet-mesh-guard",
      type: "blower-inlet-mesh-guard",
      category: "centrifugal",
      title: "Centrifugal Blower with Cylindrical Inlet Wire Guard",
      subtitle: "Custom fabricated circular suction cowl with safety wire grid and top flange rectangular discharge",
      pageRef: "Brochure Page 6, 17",
      specs: "Direct & Belt Drive | ISO 1940 Balanced",
      appRef: "Plant Ventilation & Exhaust",
      badge: "Safety Inlets"
    }
  ];

  const filteredItems = activeTab === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <section id="brochure-gallery-section" className="py-16 bg-slate-900 text-white border-b border-slate-800 tech-grid-lines-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-800 text-orange-400 border border-slate-700 text-xs font-mono uppercase tracking-wider">
              <Camera className="w-3.5 h-3.5" />
              AUTHENTIC BROCHURE CATALOGUE // REAL MACHINERY
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white tracking-tight">
              Real Machinery & Manufacturing Gallery
            </h2>
            <p className="text-slate-300 text-sm max-w-2xl font-body leading-relaxed">
              Explore authentic equipment manufactured at our Chadasna engineering works, as featured in the 2 official Scimax Industries engineering catalogues.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenCatalogue}
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-md text-xs font-heading font-bold flex items-center gap-2 cursor-pointer transition-colors"
            >
              <Download className="w-4 h-4 text-orange-400" />
              Direct Download PDF Catalogues
            </button>

            <button
              onClick={onOpenAppointment}
              className="px-4 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-md text-xs font-heading font-bold flex items-center gap-2 cursor-pointer transition-colors shadow-xs"
            >
              <Calendar className="w-4 h-4 text-white" />
              Book Plant Inspection
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 py-6">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-3.5 py-1.5 rounded-md text-xs font-mono transition-all cursor-pointer ${
              activeTab === "all"
                ? "bg-orange-500 text-white font-bold shadow-xs"
                : "bg-slate-800/80 text-slate-300 hover:bg-slate-700"
            }`}
          >
            All Real Machines ({galleryItems.length})
          </button>
          <button
            onClick={() => setActiveTab("centrifugal")}
            className={`px-3.5 py-1.5 rounded-md text-xs font-mono transition-all cursor-pointer ${
              activeTab === "centrifugal"
                ? "bg-orange-500 text-white font-bold shadow-xs"
                : "bg-slate-800/80 text-slate-300 hover:bg-slate-700"
            }`}
          >
            Centrifugal Blowers (ID/FD)
          </button>
          <button
            onClick={() => setActiveTab("axial")}
            className={`px-3.5 py-1.5 rounded-md text-xs font-mono transition-all cursor-pointer ${
              activeTab === "axial"
                ? "bg-orange-500 text-white font-bold shadow-xs"
                : "bg-slate-800/80 text-slate-300 hover:bg-slate-700"
            }`}
          >
            Axial Flow & Bifurcated
          </button>
          <button
            onClick={() => setActiveTab("installations")}
            className={`px-3.5 py-1.5 rounded-md text-xs font-mono transition-all cursor-pointer ${
              activeTab === "installations"
                ? "bg-orange-500 text-white font-bold shadow-xs"
                : "bg-slate-800/80 text-slate-300 hover:bg-slate-700"
            }`}
          >
            Shop Floor & Assemblies
          </button>
        </div>

        {/* Real Machines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-slate-950/80 rounded-lg border border-slate-800 overflow-hidden group hover:border-orange-500/60 transition-all duration-200 flex flex-col shadow-lg"
            >
              {/* Real Photo Visual Container */}
              <div className="relative h-64 bg-slate-950 overflow-hidden flex items-center justify-center p-4 border-b border-slate-800/80 tech-grid-pattern-dark">
                <RealMachinePhoto type={item.type} className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-105" />
                
                {/* Top Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-md bg-orange-500/90 backdrop-blur-xs text-white text-[10px] font-mono font-bold uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>

                {/* PDF Page Ref Tag */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="px-2 py-0.5 rounded bg-slate-900/90 text-slate-300 text-[10px] font-mono border border-slate-700">
                    {item.pageRef}
                  </span>
                </div>

                {/* Hover Quick View Trigger */}
                <button
                  onClick={() => setSelectedPhoto(item)}
                  className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-heading font-bold cursor-pointer backdrop-blur-[2px]"
                >
                  <Eye className="w-4 h-4 text-orange-400" />
                  <span>Enlarge Technical Photo</span>
                </button>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono text-orange-400 font-semibold uppercase tracking-wider block">
                    {item.appRef}
                  </span>
                  <h3 className="text-base font-bold text-white font-heading leading-snug group-hover:text-orange-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-body leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 space-y-3">
                  <div className="p-2 bg-slate-900/80 rounded border border-slate-800/80 text-[11px] font-mono text-slate-300 flex items-center justify-between">
                    <span className="text-slate-400">Rating:</span>
                    <span className="font-semibold text-orange-400">{item.specs}</span>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <button
                      onClick={() => onOpenAppointment()}
                      className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-white rounded text-xs font-heading font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5 text-orange-400" />
                      <span>Book Sizing Visit</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 8 Impellers Photographic Showcase Matrix */}
        <div className="mt-16 bg-slate-950 rounded-lg border border-slate-800 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-slate-800 text-orange-400 text-[11px] font-mono uppercase tracking-wider mb-1">
                <Layers className="w-3.5 h-3.5" />
                BROCHURE PAGE 11 // 8 IMPELLER DESIGNS
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                Authentic Impeller Rotors & Blade Geometries
              </h3>
              <p className="text-xs text-slate-300 font-body mt-1">
                Real photos of all 8 dynamically balanced impeller designs fabricated at Scimax Industries.
              </p>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>ISO 1940 Grade G6.3 Zero-Vibration</span>
            </div>
          </div>

          {/* 8 Impellers Photo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mt-6">
            {[
              { id: "forward-curved", name: "Forward Curved", type: "forward-curved", desc: "Dense Drum Multi-Vane" },
              { id: "radial-blade", name: "Radial Blade", type: "radial-blade", desc: "Heavy Flat Radial" },
              { id: "backward-inclined", name: "Backward Inclined", type: "backward-inclined", desc: "Non-Overloading Plate" },
              { id: "backward-curved", name: "Backward Curved", type: "backward-curved", desc: "Curved Aerodynamic" },
              { id: "airfoil", name: "Airfoil Blades", type: "airfoil", desc: "True Hollow Aerofoil" },
              { id: "paddle-open-blade", name: "Paddle Open Blade", type: "paddle-open-blade", desc: "Non-Clogging Spider" },
              { id: "open-radial-blade", name: "Open Radial Blade", type: "open-radial-blade", desc: "Abrasive Scrap Wheel" },
              { id: "dwdi", name: "DWDI Impeller", type: "dwdi", desc: "Double Width Double Inlet" },
            ].map((imp, idx) => (
              <div
                key={imp.id}
                className="bg-slate-900/90 rounded-md border border-slate-800 p-3 flex flex-col items-center text-center group hover:border-orange-500 transition-colors"
              >
                <div className="w-20 h-20 flex items-center justify-center p-1 my-1">
                  <ImpellerRealPhoto type={imp.type} className="w-full h-full object-contain drop-shadow-md group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-[10px] font-mono text-orange-400 font-bold mt-2">
                  [0{idx + 1}]
                </span>
                <h4 className="text-xs font-bold text-white font-heading mt-0.5 line-clamp-1">
                  {imp.name}
                </h4>
                <p className="text-[10px] text-slate-400 font-mono mt-0.5 line-clamp-1">
                  {imp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Full Machine Photo Preview */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-700 rounded-lg p-6 sm:p-8 shadow-2xl space-y-4">
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono text-orange-400 uppercase font-bold tracking-wider block">
                  {selectedPhoto.pageRef} // {selectedPhoto.badge}
                </span>
                <h3 className="text-xl font-bold text-white font-heading">
                  {selectedPhoto.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="p-1.5 bg-slate-800 hover:bg-slate-700 rounded-md text-slate-300 hover:text-white cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="bg-slate-950 rounded-lg p-6 flex items-center justify-center min-h-[300px] border border-slate-800 tech-grid-pattern-dark">
              <RealMachinePhoto type={selectedPhoto.type} className="max-h-72 w-auto object-contain drop-shadow-2xl" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3 bg-slate-950 rounded border border-slate-800">
                <span className="text-slate-400 font-mono block">Design Specifications:</span>
                <strong className="text-white">{selectedPhoto.specs}</strong>
              </div>
              <div className="p-3 bg-slate-950 rounded border border-slate-800">
                <span className="text-slate-400 font-mono block">Primary Application:</span>
                <strong className="text-orange-400">{selectedPhoto.appRef}</strong>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => {
                  setSelectedPhoto(null);
                  onOpenAppointment();
                }}
                className="px-5 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-md text-xs font-bold font-heading flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-white" />
                Book Consultation for this Model
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
