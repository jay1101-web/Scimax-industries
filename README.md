# 🌀 SciMax Industries - Industrial Air Handling & Pollution Control Systems

[![ISO 9001:2015](https://img.shields.io/badge/ISO-9001%3A2015%20Certified-orange.svg)](https://scimaxindustries.com)
[![Make In India](https://img.shields.io/badge/Make%20In%20India-Verified-blue.svg)](https://scimaxindustries.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![React 19](https://img.shields.io/badge/React-19-61dafb.svg)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL%203D-black.svg)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF.svg)](https://vitejs.dev/)

> **SciMax Industries Pvt. Ltd.** (Kathwada, Ahmedabad, Gujarat, India) is a premier manufacturer of industrial Centrifugal Fans & Blowers, Axial Flow Fans, Pulse-Jet Baghouse Dust Collectors, Multi-Cyclones, Wet Scrubbers, and Turnkey Air Pollution Control Systems (APCD).

---

## 🌟 Key Platform Features

### 1. 📐 Interactive 3D WebGL CAD Viewer
* **Multi-Directional Camera Controls:** 360° Orbiting, Pan, Zoom, with quick-snap angle presets (`[ ISO ]`, `[ FRONT ]`, `[ SIDE ]`, `[ TOP ]`, `[ DRIVE ]`).
* **4 Realistic Procedural Equipment Models:**
  1. **Heavy-Duty Centrifugal Blower** (Volute scroll casing, suction collar, bolted flange, motor pedestal)
  2. **Heavy Ribbed ID Boiler Fan** (Radial stiffener gusset ribs, high-temp hub, foundation skid)
  3. **Tube Axial V-Belt Fan** (Cylindrical duct housing, aerofoil blades, motor bracket, belt guard)
  4. **Pulse-Jet Baghouse Filter** (Plenum box, compressed air manifold, pulse valves, hopper, rotary valve)
* **Rendering Modes:** Solid Shaded, Wireframe CAD Grid, and X-Ray Semi-Transparent inspection.
* **Explode View:** Animated CAD part disassembly showing internal components in action.

### 2. ⚡ Laser Telemetry & Hologram Console (`Hologram3DDesk`)
* Real-time acoustic decibel monitoring ($dB(A)$) and ISO 10816 vibration velocity tracking ($mm/s$).
* Dynamic operational status (RPM, Motor KW, CFM, Static Pressure mmWG).
* Interactive HUD targeting reticle with live laser scanning animation.

### 3. 📊 Engineering Calculators & Visualizers
* **Fan Sizing & Power Calculator:** Computes Operating Flow, Velocity, Velocity Pressure, Total Pressure, Air Power, and Required Motor BHP/kW with automatic sizing recommendations and PDF spec sheet generator.
* **AMCA 99-2404-03 Angular Discharge Visualizer:** 16 standard discharge positions (Clockwise CW & Counter-Clockwise CCW: Top Horizontal, Bottom Horizontal, Up Blast, Down Blast, Top Angular Up/Down, Bottom Angular Up/Down).
* **127+ Dust Formulations Database:** Recommended filtration velocity, air-to-cloth ratios, and specialized filter media (Polyester, Ryton, Nomex, PTFE Membrane, Antistatic).

### 4. 📚 Comprehensive Product Catalog & Digital Brochure
* 23 product lines covering Centrifugal Fans, Axial Flow Fans, Roots Blowers, Wet Scrubbers, and APCD.
* 8 Aerodynamic Impeller Rotor Designs with efficiency and application profiles.
* PDF Catalog and Spec Sheet generation using `jspdf` and `jspdf-autotable`.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Frontend Framework** | React 19 + TypeScript |
| **3D Graphics Engine** | Three.js (WebGL Procedural CAD Models) |
| **Styling & Design System**| TailwindCSS + Lucide Icons + Google Fonts |
| **Backend Server** | Node.js + Express + TypeScript (`server.ts`) |
| **PDF Generation** | jsPDF + jsPDF-AutoTable |
| **Build & Bundling** | Vite 6 |

---

## 🚀 Quick Start

### Prerequisites
* Node.js 18+ or Bun
* npm or bun package manager

### 1. Installation
```bash
git clone https://github.com/jay1101-web/Scimax-industries.git
cd Scimax-industries
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Run Production Backend Server
```bash
# Build the frontend
npm run build

# Start the Express server
npm run serve
# Or directly: npx tsx server.ts
```
The server will bind to `http://localhost:5000` (or your LAN IP address for cross-device testing).

---

## 📁 Repository Structure

```
├── public/                     # Static assets (logos, icons, images)
│   ├── favicon.svg             # SciMax Brand Favicon
│   └── scimax-logo.svg         # High-resolution vector logo
├── src/
│   ├── components/             # React UI & 3D WebGL Components
│   │   ├── Three3DCADViewer.tsx # 3D WebGL Multi-Axis CAD Engine
│   │   ├── Hologram3DDesk.tsx   # Laser HUD telemetry console
│   │   ├── VisualAssets.tsx     # Vector drawings and brochure visuals
│   │   ├── Hero.tsx             # Interactive Hero header
│   │   ├── ProductCatalog.tsx   # Catalog with filter matrix
│   │   ├── FanSizingCalculator.tsx # Engineering sizing tool
│   │   ├── DischargeVisualizer.tsx # AMCA discharge chart visualizer
│   │   ├── ImpellerShowcase.tsx # 8 Rotor designs showcase
│   │   ├── BrochureGallery.tsx  # Interactive brochure flipbook
│   │   ├── IndustriesSection.tsx# Industry application sectors
│   │   ├── AboutSection.tsx     # Company history & facility overview
│   │   ├── ContactSection.tsx   # RFQ form & plant address
│   │   └── ...
│   ├── data/                   # Engineering data & specs
│   │   ├── products.ts          # Complete 23 product specifications
│   │   ├── technicalData.ts     # Fan laws, dust tables, AMCA data
│   │   ├── industries.ts        # Industry sector configurations
│   │   └── company.ts           # Company profile & ISO badges
│   ├── lib/                     # Database & API connectors
│   ├── utils/                   # PDF generation & math utilities
│   ├── App.tsx                  # Main application orchestrator
│   ├── main.tsx                 # React entry point
│   └── index.css                # Global styles & industrial themes
├── server.ts                   # Express server with REST API
├── vite.config.ts              # Vite bundling configuration
└── package.json                # Dependencies and scripts
```

---

## 🏭 About SciMax Industries

* **Headquarters & Works:** Kathwada GIDC, Ahmedabad - 382430, Gujarat, India
* **Specialization:** Heavy Industrial Centrifugal Fans, High Pressure Blowers, Pulse Jet Dust Collectors, Fume Extraction & Gas Scrubbing Systems.
* **Certifications:** ISO 9001:2015, Make in India, CPCB/GPCB Compliant.

---

## 📄 License
MIT © SciMax Industries. All rights reserved.
