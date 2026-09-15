"use client";

import React, { createContext, useContext, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";
import QuoteModal from "./QuoteModal";

interface LayoutContextType {
  openQuoteModal: (product?: string) => void;
  closeQuoteModal: () => void;
}

const LayoutContext = createContext<LayoutContextType>({
  openQuoteModal: () => {},
  closeQuoteModal: () => {},
});

export const useLayoutModal = () => useContext(LayoutContext);

export default function LayoutProvider({ children }: { children: React.ReactNode }) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>(undefined);

  const openQuoteModal = (product?: string) => {
    setSelectedProduct(product);
    setIsQuoteOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteOpen(false);
    setSelectedProduct(undefined);
  };

  return (
    <LayoutContext.Provider value={{ openQuoteModal, closeQuoteModal }}>
      <div className="min-h-screen flex flex-col bg-white text-[#1A1A2E] font-sans antialiased selection:bg-[#F25920] selection:text-white">
        <Header onOpenQuoteModal={() => openQuoteModal()} />
        
        <main className="flex-grow">
          {children}
        </main>

        <Footer />
        <FloatingWhatsApp />
        <QuoteModal 
          isOpen={isQuoteOpen} 
          onClose={closeQuoteModal} 
          defaultProduct={selectedProduct} 
        />
      </div>
    </LayoutContext.Provider>
  );
}
