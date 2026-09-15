import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import LayoutProvider from "@/components/LayoutProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0E0C29",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.scimax.in"),
  title: {
    default: "Scimax Industries | Dust Collection Systems, Air Pollution Control & Centrifugal Blowers",
    template: "%s | Scimax Industries Ahmedabad"
  },
  description: "Scimax Industries is an ISO 9001:2015 certified manufacturer of industrial Dust Collection Systems, Air Pollution Control Equipment, and Centrifugal Blowers & Fans based in Ahmedabad, Gujarat, India.",
  keywords: [
    "Scimax Industries",
    "Dust Collection Systems Ahmedabad",
    "Industrial Baghouse Collectors",
    "Air Pollution Control Equipment Gujarat",
    "Centrifugal Blowers and Industrial Fans",
    "Induced Draft ID Fans",
    "Forced Draft FD Blowers",
    "Fume Extraction Systems",
    "Silo Vent Filters",
    "Multi Dust Collector for Boilers",
    "ISO 1940 Grade G6.3 Balancing",
    "Make in India Industrial Fans"
  ],
  authors: [{ name: "Scimax Industries", url: "https://www.scimax.in" }],
  creator: "Scimax Industries",
  publisher: "Scimax Industries",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.scimax.in",
    siteName: "Scimax Industries",
    title: "Scimax Industries | Engineering Cleaner Air for Indian Industry",
    description: "ISO 9001:2015 certified manufacturer of Dust Collection Systems, Air Pollution Control Equipment, and Centrifugal Fans. Plant in Kadi, Mehsana & Vatva, Ahmedabad.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scimax Industries | Engineering Cleaner Air for Indian Industry",
    description: "Industrial Dust Collectors, Air Pollution Control, and Centrifugal Blowers & Fans in Ahmedabad, Gujarat.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-white text-gray-900">
        <LayoutProvider>
          {children}
        </LayoutProvider>
      </body>
    </html>
  );
}
