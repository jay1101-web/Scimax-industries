import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { BrochureGallery } from "./components/BrochureGallery";
import { ProductCatalog } from "./components/ProductCatalog";
import { ProductDetailModal } from "./components/ProductDetailModal";
import { IndustriesSection } from "./components/IndustriesSection";
import { TechnicalResources } from "./components/TechnicalResources";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { AppointmentModal } from "./components/AppointmentModal";
import { QuoteModal } from "./components/QuoteModal";
import { CatalogueDownloadModal } from "./components/CatalogueDownloadModal";
import { QuickContactFab } from "./components/QuickContactFab";
import { Footer } from "./components/Footer";
import { ProductItem } from "./types";
import { PRODUCTS_DATA } from "./data/products";

export function App() {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quotePrefillProduct, setQuotePrefillProduct] = useState<string>("");
  const [isCatalogueOpen, setIsCatalogueOpen] = useState(false);

  const handleOpenQuote = (productName: string = "") => {
    setQuotePrefillProduct(productName);
    setIsQuoteOpen(true);
  };

  const handleSelectProductByName = (productName: string) => {
    const found = PRODUCTS_DATA.find((p) =>
      p.name.toLowerCase().includes(productName.toLowerCase())
    );
    if (found) {
      setSelectedProduct(found);
    } else {
      handleOpenQuote(productName);
    }
  };

  const handleDownloadSpec = (product: ProductItem) => {
    setIsCatalogueOpen(true);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-body selection:bg-orange-500 selection:text-white flex flex-col">
      {/* Top Main Navigation Bar */}
      <Navbar
        onOpenAppointment={() => setIsAppointmentOpen(true)}
        onOpenQuote={() => handleOpenQuote()}
        onOpenCatalogue={() => setIsCatalogueOpen(true)}
        onSelectCategory={(catId) => {
          scrollToSection("products-catalog-section");
        }}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onOpenAppointment={() => setIsAppointmentOpen(true)}
          onOpenQuote={() => setIsAppointmentOpen(true)}
          onOpenCatalogue={() => setIsCatalogueOpen(true)}
          onNavigateToSizing={() => scrollToSection("technical-resources-section")}
        />

        {/* 2. Real Brochure Machinery Showcase & Impeller Gallery */}
        <BrochureGallery
          onOpenAppointment={() => setIsAppointmentOpen(true)}
          onOpenCatalogue={() => setIsCatalogueOpen(true)}
          onSelectProduct={(pName) => handleSelectProductByName(pName)}
        />

        {/* 3. Products Catalog & Impeller Showcase */}
        <ProductCatalog
          onSelectProduct={(p) => setSelectedProduct(p)}
          onOpenQuote={(pName) => setIsAppointmentOpen(true)}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
          onDownloadSpec={(p) => handleDownloadSpec(p)}
        />

        {/* 3. 15+ Specialized Industry Sectors */}
        <IndustriesSection
          onOpenQuote={(item) => setIsAppointmentOpen(true)}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
          onSelectProductByName={handleSelectProductByName}
        />

        {/* 4. Technical Performance Resources (Sizing Calculator, 17x17 Matrix Table, Discharge Positions, 127 Dust Database) */}
        <TechnicalResources
          onOpenQuote={(specs) => setIsAppointmentOpen(true)}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
          onOpenCatalogue={() => setIsCatalogueOpen(true)}
        />

        {/* 5. About Scimax Industries (CAD/CAM Facility, Testing Bay, ISO Dynamic Balancing, Leadership) */}
        <AboutSection
          onOpenAppointment={() => setIsAppointmentOpen(true)}
          onOpenQuote={() => setIsAppointmentOpen(true)}
        />

        {/* 6. Plant Locations & Direct Contact Section */}
        <ContactSection onOpenAppointment={() => setIsAppointmentOpen(true)} />
      </main>

      {/* Footer */}
      <Footer
        onOpenAppointment={() => setIsAppointmentOpen(true)}
        onOpenQuote={() => setIsAppointmentOpen(true)}
        onOpenCatalogue={() => setIsCatalogueOpen(true)}
        onNavigateSection={scrollToSection}
      />

      {/* Floating Action Button (WhatsApp & Quick Visit Booking) */}
      <QuickContactFab
        onOpenAppointment={() => setIsAppointmentOpen(true)}
        onOpenQuote={() => setIsAppointmentOpen(true)}
      />

      {/* Modals */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenQuote={(pName) => setIsAppointmentOpen(true)}
        onOpenAppointment={() => setIsAppointmentOpen(true)}
        onDownloadSpec={(p) => handleDownloadSpec(p)}
      />

      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
      />

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => {
          setIsQuoteOpen(false);
          setQuotePrefillProduct("");
        }}
        initialProduct={quotePrefillProduct}
      />

      <CatalogueDownloadModal
        isOpen={isCatalogueOpen}
        onClose={() => setIsCatalogueOpen(false)}
      />
    </div>
  );
}

export default App;
