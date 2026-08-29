import React, { useState, useMemo } from "react";
import { PRODUCTS_DATA } from "../data/products";
import { ProductItem } from "../types";
import { MachineVectorArt, BrochureProductVisual, RealMachinePhoto, ProductVisual } from "./VisualAssets";
import { ImpellerShowcase } from "./ImpellerShowcase";
import {
  Search,
  Filter,
  Wind,
  Layers,
  ArrowRight,
  FileDown,
  Eye,
  CheckCircle2,
  Cpu,
  Calendar
} from "lucide-react";

interface ProductCatalogProps {
  onSelectProduct: (product: ProductItem) => void;
  onOpenAppointment: (productName?: string) => void;
  onDownloadSpec: (product: ProductItem) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onSelectProduct,
  onOpenAppointment,
  onDownloadSpec
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedIndustryFilter, setSelectedIndustryFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Products", count: "06" },
    { id: "centrifugal-blowers", label: "Centrifugal Blowers (ID/FD)", count: "02" },
    { id: "dust-collection", label: "Dust Collection & APC", count: "03" },
    { id: "axial-fans", label: "Axial Flow Fans", count: "03" },
    { id: "fume-extraction", label: "Fume Extraction", count: "01" },
    { id: "industrial-vacuum", label: "Industrial Vacuum", count: "01" },
    { id: "accessories", label: "Accessories & Spares", count: "06" }
  ];

  const industriesList = [
    "All Industries",
    "Foundry",
    "Pharma",
    "Iron/Steel",
    "Textile",
    "Boiler",
    "Gasifier Plant",
    "Plastics",
    "Furnaces",
    "Ceramics",
    "Paper Mill",
    "Plywood Manufacturing",
    "Coal",
    "Cement",
    "Chemical",
    "Food"
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((item) => {
      const matchCategory =
        selectedCategory === "all" || item.category === selectedCategory;

      const matchIndustry =
        selectedIndustryFilter === "all" ||
        selectedIndustryFilter === "All Industries" ||
        (item.suitableIndustries && item.suitableIndustries.includes(selectedIndustryFilter));

      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        (item.name && item.name.toLowerCase().includes(q)) ||
        (item.tagline && item.tagline.toLowerCase().includes(q)) ||
        (item.shortDescription && item.shortDescription.toLowerCase().includes(q)) ||
        (item.suitableIndustries && item.suitableIndustries.some((ind) => ind.toLowerCase().includes(q))) ||
        (item.applications && item.applications.some((app) => app.toLowerCase().includes(q)));

      return matchCategory && matchIndustry && matchSearch;
    });
  }, [selectedCategory, selectedIndustryFilter, searchQuery]);

  return (
    <section id="products-catalog-section" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 text-orange-400 text-xs font-mono font-semibold uppercase tracking-widest border border-slate-800">
            <Wind className="w-3.5 h-3.5 text-orange-400" />
            CATALOGUE // CAD/CAM PRODUCTION RANGE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-heading tracking-tight">
            Industrial Blowers, Fans & Air Pollution Control Systems
          </h2>
          <p className="text-slate-600 text-base leading-relaxed font-body">
            In-house CAD/CAM engineered and dynamically balanced to ISO 1940 G6.3 standards at our Chadasna manufacturing plant. Built for 24/7 continuous industrial duty.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-lg border border-slate-200 shadow-sm space-y-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-md text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer font-heading ${
                    isActive
                      ? "bg-slate-900 text-orange-400 border border-slate-800 shadow-xs"
                      : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded-sm ${
                      isActive ? "bg-orange-500 text-white font-bold" : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input & Industry Dropdown */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-3 border-t border-slate-200">
            <div className="sm:col-span-8 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search machine model, CFM rating, dust formulation, boiler type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-md text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-colors font-sans"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-800 cursor-pointer font-mono"
                >
                  [CLEAR]
                </button>
              )}
            </div>

            <div className="sm:col-span-4 relative">
              <Filter className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <select
                value={selectedIndustryFilter}
                onChange={(e) => setSelectedIndustryFilter(e.target.value)}
                aria-label="Filter products by target industry"
                className="w-full pl-9 pr-8 py-2 bg-slate-50 border border-slate-200 rounded-md text-xs font-medium text-slate-900 focus:bg-white focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-colors cursor-pointer font-sans"
              >
                {industriesList.map((ind) => (
                  <option key={ind} value={ind}>
                    {ind === "All Industries" ? "Filter by Industry: All" : `Industry: ${ind}`}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Product Cards Grid with Machine Photos / Visuals */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-lg p-12 text-center border border-slate-200 space-y-3">
            <p className="text-slate-600 text-sm font-medium font-sans">
              No products found matching: <strong className="text-slate-900">"{searchQuery}"</strong>
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSelectedIndustryFilter("all");
              }}
              className="px-4 py-2 bg-orange-500 text-white text-xs font-bold rounded-md hover:bg-orange-600 cursor-pointer font-heading"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg border border-slate-200 hover:border-orange-500 shadow-sm hover:shadow-md transition-all duration-150 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Machine Visual Showcase */}
                  <div className="bg-slate-950 p-2 border-b border-slate-800 relative flex items-center justify-center h-52 overflow-hidden tech-grid-pattern-dark">
                    <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <ProductVisual 
                        product={product} 
                        className="w-full h-full drop-shadow-xl" 
                        imageClassName="w-full h-full object-cover rounded-md"
                      />
                    </div>

                    <div className="absolute top-3 right-3 text-right space-y-1">
                      <span className="px-2 py-0.5 rounded-sm bg-slate-950 text-slate-300 text-[10px] font-mono font-bold uppercase tracking-wider block border border-slate-700">
                        {product.categoryName}
                      </span>
                      {product.badge && (
                        <span className="inline-block px-2 py-0.5 rounded-sm bg-orange-500 text-white text-[10px] font-bold font-mono">
                          {product.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Text Content */}
                  <div className="p-5 space-y-3">
                    <div>
                      <h3
                        onClick={() => onSelectProduct(product)}
                        className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors cursor-pointer font-heading leading-snug"
                      >
                        {product.name}
                      </h3>
                      <p className="text-xs font-medium text-slate-500 mt-1 line-clamp-1 font-mono text-[11px]">
                        {product.tagline}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-body">
                      {product.shortDescription}
                    </p>

                    {/* Spec Snippet Chips */}
                    <div className="pt-2 flex flex-wrap gap-1.5 text-[11px] font-mono">
                      {product.capacityRange && (
                        <span className="px-2 py-0.5 bg-sky-50 text-sky-900 rounded-sm border border-sky-200 font-medium">
                          Flow: {product.capacityRange}
                        </span>
                      )}
                      {product.pressureRange && (
                        <span className="px-2 py-0.5 bg-orange-50 text-orange-950 rounded-sm border border-orange-200 font-medium">
                          SP: {product.pressureRange}
                        </span>
                      )}
                      {product.powerRange && (
                        <span className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded-sm border border-slate-200 font-medium">
                          {product.powerRange}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-800 hover:text-orange-600 py-1 transition-colors cursor-pointer font-heading"
                  >
                    <Eye className="w-3.5 h-3.5 text-sky-600" />
                    <span>INSPECT SPECS</span>
                  </button>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => onDownloadSpec(product)}
                      title="Download PDF Spec Sheet"
                      aria-label={`Download PDF spec sheet for ${product.name}`}
                      className="p-2 rounded-md bg-white border border-slate-200 text-slate-700 hover:text-sky-600 hover:border-sky-300 transition-colors cursor-pointer"
                    >
                      <FileDown className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onOpenAppointment(product.name)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-xs font-bold transition-colors shadow-xs cursor-pointer font-heading"
                    >
                      <Calendar className="w-3 h-3 text-white" />
                      <span>APPOINTMENT</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Embedded Impeller Showcase */}
        <div className="pt-6">
          <ImpellerShowcase onBookImpellerConsultation={(impName) => onOpenAppointment(`Centrifugal Fan with ${impName}`)} />
        </div>
      </div>
    </section>
  );
};
