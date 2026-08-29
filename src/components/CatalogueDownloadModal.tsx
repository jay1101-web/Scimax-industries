import React, { useState } from "react";
import {
  X,
  FileDown,
  Download,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Wind,
  Layers,
  ArrowRight,
  Printer
} from "lucide-react";
import {
  CATALOGUES_LIST,
  generateBlowersCataloguePDF,
  generatePollutionControlCataloguePDF,
  CatalogueMetadata
} from "../utils/pdfGenerator";
import { ScimaxLogo, IsoBadge, MakeInIndiaBadge } from "./VisualAssets";

interface CatalogueDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCatalogueId?: "blowers-fans" | "pollution-control";
}

export const CatalogueDownloadModal: React.FC<CatalogueDownloadModalProps> = ({
  isOpen,
  onClose,
  initialCatalogueId
}) => {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [downloadedList, setDownloadedList] = useState<string[]>([]);

  if (!isOpen) return null;

  const handleDirectDownload = (catalogueId: "blowers-fans" | "pollution-control") => {
    setDownloadingId(catalogueId);
    try {
      if (catalogueId === "blowers-fans") {
        generateBlowersCataloguePDF();
      } else {
        generatePollutionControlCataloguePDF();
      }
      setDownloadedList((prev) => Array.from(new Set([...prev, catalogueId])));
    } catch (err) {
      console.error("Error generating PDF:", err);
    } finally {
      setTimeout(() => {
        setDownloadingId(null);
      }, 800);
    }
  };

  const handleDownloadAll = () => {
    setDownloadingId("all");
    try {
      generateBlowersCataloguePDF();
      setTimeout(() => {
        generatePollutionControlCataloguePDF();
        setDownloadedList(["blowers-fans", "pollution-control"]);
        setDownloadingId(null);
      }, 500);
    } catch (err) {
      console.error("Error generating all PDFs:", err);
      setDownloadingId(null);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-150 overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col my-8 max-h-[90vh]">
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 flex items-start justify-between relative shrink-0 border-b border-slate-800">
          <div className="space-y-1.5 pr-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 text-[11px] font-mono font-bold uppercase tracking-wider">
                <FileDown className="w-3.5 h-3.5 text-orange-400" />
                Direct 1-Click PDF Download
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-800">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                No Personal Info Required
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
              Official Scimax Engineering Catalogues
            </h3>
            <p className="text-slate-300 text-xs font-body max-w-xl">
              Download high-resolution technical specifications, 17x17 sizing charts, impeller selection matrices, and air pollution control equipment guides instantly.
            </p>
          </div>

          <button
            id="close-catalogue-modal"
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer border border-slate-700 shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: 2 Official PDF Cards */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 bg-slate-50">
          {/* Quick Notice Banner */}
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center justify-between gap-3 text-xs text-emerald-900 font-body">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                <strong>Instant Access Enabled:</strong> Click download on either catalogue below for immediate direct PDF generation and saving.
              </span>
            </div>
            <button
              onClick={handleDownloadAll}
              disabled={downloadingId !== null}
              className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-md text-[11px] font-bold font-heading shrink-0 flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-50"
            >
              <Download className="w-3.5 h-3.5 text-orange-400" />
              <span>Download Both (Bundle)</span>
            </button>
          </div>

          {/* Catalogues Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CATALOGUES_LIST.map((cat, idx) => {
              const isDownloaded = downloadedList.includes(cat.id);
              const isProcessing = downloadingId === cat.id || downloadingId === "all";

              return (
                <div
                  key={cat.id}
                  className={`bg-white rounded-xl border p-5 flex flex-col justify-between transition-all shadow-xs ${
                    isDownloaded
                      ? "border-emerald-300 ring-2 ring-emerald-500/20 bg-emerald-50/20"
                      : "border-slate-200 hover:border-orange-300 hover:shadow-md"
                  }`}
                >
                  <div className="space-y-3">
                    {/* Header Pill */}
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-sm uppercase ${
                          cat.id === "blowers-fans"
                            ? "bg-blue-100 text-blue-800 border border-blue-200"
                            : "bg-orange-100 text-orange-800 border border-orange-200"
                        }`}
                      >
                        PDF Document [0{idx + 1}]
                      </span>
                      <span className="text-[11px] font-mono text-slate-500">
                        {cat.pagesCount} Pages Official Spec
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <h4 className="text-base font-bold text-slate-900 font-heading leading-snug">
                        {cat.title}
                      </h4>
                      <p className="text-xs text-orange-600 font-medium font-sans mt-0.5">
                        {cat.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 font-body leading-relaxed">
                      {cat.description}
                    </p>

                    {/* Topics bullet list */}
                    <div className="space-y-1 pt-1 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <p className="text-[10px] font-mono font-bold uppercase text-slate-500">
                        Key Sections Included:
                      </p>
                      {cat.topics.slice(0, 4).map((topic, tIdx) => (
                        <div key={tIdx} className="flex items-start gap-1.5 text-[11px] text-slate-700 font-body">
                          <span className="text-orange-500 font-bold shrink-0">•</span>
                          <span className="truncate">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action CTA */}
                  <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono text-slate-400 truncate max-w-[140px]">
                      {cat.filename}
                    </span>

                    <button
                      id={`direct-download-${cat.id}`}
                      onClick={() => handleDirectDownload(cat.id)}
                      disabled={isProcessing}
                      className={`px-4 py-2 rounded-lg text-xs font-bold font-heading flex items-center gap-2 cursor-pointer transition-all shadow-xs ${
                        isDownloaded
                          ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                          : "bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white"
                      } disabled:opacity-50`}
                    >
                      {isProcessing ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Generating PDF...</span>
                        </>
                      ) : isDownloaded ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-white" />
                          <span>Download Again</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4" />
                          <span>Direct PDF Download</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Plant & Engineering Contact Bar */}
          <div className="bg-slate-900 rounded-xl p-4 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border border-slate-800">
            <div className="space-y-0.5">
              <p className="text-xs font-bold text-orange-400 font-heading">
                Need Customized Sizing or Engineering Data Sheets?
              </p>
              <p className="text-[11px] text-slate-300 font-body">
                Contact our design engineers directly: <strong>+91 7990659265</strong> (Raj Patel) / <strong>+91 8320495952</strong> (Ankit Patel)
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => window.print()}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-md text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-700"
              >
                <Printer className="w-3.5 h-3.5 text-slate-400" />
                <span>Print Spec</span>
              </button>
              <button
                onClick={onClose}
                className="px-3.5 py-1.5 bg-white text-slate-900 hover:bg-slate-100 rounded-md text-xs font-bold font-heading cursor-pointer transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
