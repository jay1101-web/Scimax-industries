import React from "react";
import { ProductItem } from "../types";
import { MachineVectorArt, RealMachinePhoto, ScimaxLogo, IsoBadge, ProductVisual } from "./VisualAssets";
import { X, CheckCircle, ArrowRight, MessageCircle, FileDown, Layers, Building, ShieldCheck, Calendar } from "lucide-react";

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onOpenAppointment?: (productName?: string) => void;
  onOpenQuote?: (productName: string) => void;
  onDownloadSpec: (product: ProductItem) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onOpenAppointment,
  onOpenQuote,
  onDownloadSpec
}) => {
  const [selectedImg, setSelectedImg] = React.useState<string | null>(null);

  React.useEffect(() => {
    setSelectedImg(product?.imageUrl || null);
  }, [product]);

  if (!product) return null;

  const currentDisplayImg = selectedImg || product.imageUrl;
  const allImages = product.images && product.images.length > 0 ? product.images : (product.imageUrl ? [product.imageUrl] : []);

  const handleBooking = () => {
    onClose();
    if (onOpenAppointment) {
      onOpenAppointment(product.name);
    } else if (onOpenQuote) {
      onOpenQuote(product.name);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Scimax Industries, I am interested in technical specs and booking a consultation for: ${product.name}. Please share technical GA drawing and schedule an appointment.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-6 sm:p-7 flex items-start justify-between relative shrink-0 border-b border-slate-800">
          <div className="space-y-1.5 pr-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-slate-800 text-orange-400 border border-slate-700 text-xs font-mono uppercase tracking-wider">
                {product.categoryName}
              </span>
              {product.badge && (
                <span className="px-2 py-0.5 rounded-md bg-orange-500 text-white text-[11px] font-bold font-mono">
                  {product.badge}
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight font-heading text-white">
              {product.name}
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm font-body">
              {product.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-md bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 border border-slate-700 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 divide-y divide-slate-200">
          {/* Top Overview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Visual Machine Render from Brochure */}
            <div className="md:col-span-5 bg-slate-950 border border-slate-800 rounded-lg p-4 flex flex-col items-center justify-center text-center tech-grid-pattern-dark">
              <div className="w-full h-52 flex items-center justify-center my-1 overflow-hidden rounded-md bg-slate-900/60 border border-slate-800">
                <ProductVisual 
                  product={{ ...product, imageUrl: currentDisplayImg }} 
                  className="w-full h-full drop-shadow-2xl" 
                  imageClassName="w-full h-full object-cover rounded-md"
                />
              </div>

              {/* Gallery Thumbnails if multiple images exist */}
              {allImages.length > 1 && (
                <div className="flex items-center gap-2 mt-3 w-full justify-center overflow-x-auto pb-1">
                  {allImages.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImg(img)}
                      className={`w-12 h-12 rounded-md overflow-hidden border-2 transition-all cursor-pointer ${
                        currentDisplayImg === img ? "border-orange-500 scale-105 shadow-md shadow-orange-500/20" : "border-slate-700 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              <p className="text-xs font-heading font-bold text-orange-400 mt-2">
                CAD/CAM Precision Fabricated
              </p>
              <div className="mt-2 flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-500/40 font-mono">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>ISO 1940 Dynamically Balanced</span>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="md:col-span-7 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                Engineering Overview
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-body">
                {product.detailedDescription}
              </p>
              {product.capacityRange && (
                <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 px-3 py-1.5 rounded-md text-xs font-mono text-orange-950 font-bold">
                  <span>Capacity: {product.capacityRange}</span>
                </div>
              )}
            </div>
          </div>

          {/* Key Features Bulleted */}
          <div className="pt-6 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2 font-heading">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              Key Product Features & Heavy-Duty Construction
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {(product.keyFeatures || []).map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-md border border-slate-200">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="font-body">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div className="pt-6 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center justify-between font-heading">
              <span>Technical Specifications</span>
              <span className="text-xs font-mono text-slate-500 font-normal">Standard Engineering Metrics</span>
            </h3>
            <div className="border border-slate-200 rounded-lg overflow-hidden shadow-xs">
              <table className="w-full text-left text-xs border-collapse">
                <thead className="bg-slate-900 text-white font-bold border-b border-slate-800 uppercase text-[10px] tracking-wider font-mono">
                  <tr>
                    <th className="p-3 w-1/3">Parameter</th>
                    <th className="p-3">Specification / Design Rating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-medium text-slate-800 font-sans">
                  {(product.specs || []).map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/80"}>
                      <td className="p-3 font-semibold text-slate-900 font-body">{row.label}</td>
                      <td className="p-3 text-slate-700 font-mono">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Applications & Suitable Industries */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5 font-heading">
                <Layers className="w-3.5 h-3.5 text-sky-600" />
                Typical Applications
              </h4>
              <ul className="space-y-1.5 font-body">
                {(product.applications || []).map((app, i) => (
                  <li key={i} className="text-xs text-slate-600 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                    {app}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5 font-heading">
                <Building className="w-3.5 h-3.5 text-orange-600" />
                Suitable Industries
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {(product.suitableIndustries || []).map((ind, i) => (
                  <span key={i} className="px-2.5 py-1 bg-orange-50 border border-orange-200 text-orange-950 rounded-md text-[11px] font-semibold font-body">
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <button
            onClick={() => onDownloadSpec(product)}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md border border-slate-300 bg-white text-slate-800 hover:bg-slate-100 text-xs font-bold transition-colors shadow-xs font-heading cursor-pointer"
          >
            <FileDown className="w-4 h-4 text-sky-600" />
            <span>Download Spec Sheet (PDF)</span>
          </button>

          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/917990659265?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-xs font-heading cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>

            <button
              onClick={handleBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-xs font-bold transition-colors shadow-md font-heading cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
