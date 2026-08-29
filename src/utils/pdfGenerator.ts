import { jsPDF } from "jspdf";

export interface CatalogueMetadata {
  id: "blowers-fans" | "pollution-control";
  title: string;
  subtitle: string;
  filename: string;
  pagesCount: number;
  badge: string;
  description: string;
  topics: string[];
}

export const CATALOGUES_LIST: CatalogueMetadata[] = [
  {
    id: "blowers-fans",
    title: "Centrifugal Blowers & Industrial Fans Catalogue",
    subtitle: "Complete Engineering Specification & Sizing Guide",
    filename: "Scimax-Industries-Centrifugal-Blowers-Fans-Catalogue.pdf",
    pagesCount: 8,
    badge: "Air Movement Systems",
    description: "Includes complete technical specifications, 17x17 CFM rating matrix (0.25 to 100 HP, 1\" to 50\" WG), 8 impeller profiles, ID/FD fan models, and 8-way discharge orientations.",
    topics: [
      "Heavy-Duty Centrifugal Blowers (0.5 – 100 HP)",
      "Induced Draft (ID) & Forced Draft (FD) Fans",
      "8 Impeller Designs (Airfoil, Backward Curved, Radial)",
      "Tube Axial (Direct & V-Belt), Bifurcated & Man Coolers",
      "Full 17×17 CFM Capacity Table at NTP",
      "Discharge Angles (CW & CCW 45° to 360°)"
    ]
  },
  {
    id: "pollution-control",
    title: "Air Pollution Control & Dust Collection Catalogue",
    subtitle: "Turnkey Air Filtration, Baghouse & Scrubbing Systems",
    filename: "Scimax-Industries-Air-Pollution-Control-Equipments-Catalogue.pdf",
    pagesCount: 12,
    badge: "Clean Air Technologies",
    description: "Comprehensive catalogue for Pulse-Jet Bag Filters, Cyclone & Multi-Cyclone Separators, Boiler Emission Control, Furnace Fume Extraction, Silo Vent Filters, and Industrial Vacuum Cleaners.",
    topics: [
      "Pulse-Jet Bag Filter Dust Collectors",
      "Boiler Flue Gas & SPM Emission Control Systems",
      "Furnace Fume Extraction (Induction & Arc Furnaces)",
      "Industrial Heavy-Duty Turbine Vacuum Cleaners",
      "Top-Mounted & Floor-Mounted Silo Vent Filters",
      "Core Spares: Valves, Cages, Bags, Cartridges, Timers"
    ]
  }
];

export function generateBlowersCataloguePDF(): void {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4"
  });

  const primaryColor = [15, 23, 42]; // slate-900
  const accentColor = [234, 88, 12]; // orange-600
  const blueColor = [30, 64, 175]; // blue-800
  const lightGrey = [248, 250, 252];

  // ================= PAGE 1: COVER =================
  doc.setFillColor(15, 23, 42);
  doc.rect(0, 0, 210, 297, "F");

  // Top Accent Banner
  doc.setFillColor(234, 88, 12);
  doc.rect(0, 0, 210, 8, "F");

  // Logo text
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(28);
  doc.text("Sci Max", 20, 32);

  doc.setFillColor(234, 88, 12);
  doc.roundedRect(62, 22, 14, 12, 6, 6, "F");

  doc.setFontSize(14);
  doc.setTextColor(226, 232, 240);
  doc.text("SCIMAX INDUSTRIES", 20, 42);

  // Subtitle badge
  doc.setFillColor(30, 41, 59);
  doc.roundedRect(20, 52, 170, 10, 2, 2, "F");
  doc.setFontSize(9);
  doc.setTextColor(249, 115, 22);
  doc.text("ISO 9001:2015 CERTIFIED  |  MAKE IN INDIA  |  ISO 1940 G6.3 BALANCED", 25, 58.5);

  // Title Box
  doc.setFontSize(24);
  doc.setTextColor(255, 255, 255);
  doc.text("CENTRIFUGAL BLOWERS", 20, 80);
  doc.text("& INDUSTRIAL FANS", 20, 90);

  doc.setFontSize(12);
  doc.setTextColor(203, 213, 225);
  doc.text("Complete Engineering Catalogue & Technical Sizing Guide", 20, 100);

  // Featured Equipment Box
  doc.setFillColor(30, 58, 138);
  doc.roundedRect(20, 115, 170, 95, 3, 3, "F");
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.text("ENGINEERED AIR MOVEMENT SYSTEMS", 28, 130);

  doc.setFontSize(10);
  doc.setTextColor(224, 231, 255);
  const items = [
    "* Induced Draft (ID) Fans: 0.5 to 100 HP | Up to 8,00,000 m3/hr",
    "* Forced Draft (FD) High Pressure Blowers: Up to 1000 mm WG",
    "* 8 Aerodynamic Impeller Rotor Geometries (ISO 1940 Grade G6.3)",
    "* Tube Axial Direct Drive & External V-Belt Cooling Fans",
    "* Bifurcated Flow Fans with Motor Isolated in Ambient Tunnel",
    "* High-Thrust Industrial Man Coolers & Spot Cooling Units",
    "* Twin-Lobe Roots Positive Displacement Blowers"
  ];
  items.forEach((item, idx) => {
    doc.text(item, 28, 145 + idx * 8.5);
  });

  // Bottom Plant & Contacts Bar
  doc.setFillColor(2, 6, 23);
  doc.rect(0, 235, 210, 62, "F");

  doc.setTextColor(249, 115, 22);
  doc.setFontSize(11);
  doc.text("MANUFACTURING WORKS & TECHNICAL DESK", 20, 248);

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(9);
  doc.text("Plant: Shed No. 1, B/h Torrent Pharma, Ahmedabad-Mehsana Highway, Chadasna, Tal. Kadi, Mehsana-382810", 20, 256);
  doc.text("Regd Office: 110, Gajanan Industrial Estate, Near Hathijan Circle, GIDC Vatva, Ahmedabad-382445", 20, 263);
  doc.text("Direct Sales Desk: +91 79906 59265 (Raj Patel)  |  Technical Desk: +91 83204 95952 (Ankit Patel)", 20, 270);
  doc.text("Email: sales@scimax.in  /  scimaxindia@gmail.com  |  Web: www.scimax.in", 20, 277);

  // ================= PAGE 2: IMPELLERS & CENTRIFUGAL SPECIFICATIONS =================
  doc.addPage();
  doc.setFillColor(255, 255, 255);
  doc.rect(0, 0, 210, 297, "F");

  // Header
  doc.setFillColor(15, 23, 42);
  doc.rect(0, 0, 210, 22, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.text("SCIMAX INDUSTRIES  |  IMPELLER TYPES & CENTRIFUGAL FANS", 15, 14);

  // 8 Impellers Section
  doc.setTextColor(15, 23, 42);
  doc.setFontSize(14);
  doc.text("8 Precision Impeller Profiles (ISO 1940 Grade G6.3 Balanced)", 15, 34);

  const impellers = [
    { title: "1. Forward Curved", desc: "Multi-blade drum for high volume clean air at lower RPM." },
    { title: "2. Radial Blade", desc: "Flat heavy blades for dust, sawdust, and pneumatic handling." },
    { title: "3. Backward Inclined", desc: "Flat single-thickness plate with non-overloading HP curve." },
    { title: "4. Backward Curved", desc: "Aerodynamic curved blades with high static efficiency." },
    { title: "5. Airfoil Blades", desc: "Hollow aerofoil cross-section yielding up to 88% efficiency." },
    { title: "6. Paddle Open Blade", desc: "Spider-arm open wheel preventing stringy/fibrous clogging." },
    { title: "7. Open Radial Blade", desc: "Self-cleaning wheel for metal turnings & heavy particulate." },
    { title: "8. DWDI Impeller", desc: "Double Width Double Inlet for HVAC & high CFM air handling." }
  ];

  impellers.forEach((imp, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 15 + col * 92;
    const y = 42 + row * 18;

    doc.setFillColor(248, 250, 252);
    doc.roundedRect(x, y, 88, 15, 1.5, 1.5, "F");
    doc.setDrawColor(226, 232, 240);
    doc.roundedRect(x, y, 88, 15, 1.5, 1.5, "S");

    doc.setTextColor(234, 88, 12);
    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.text(imp.title, x + 3, y + 5.5);

    doc.setTextColor(71, 85, 105);
    doc.setFontSize(7.5);
    doc.setFont("helvetica", "normal");
    doc.text(imp.desc, x + 3, y + 10.5);
  });

  // Centrifugal Fans Spec Matrix
  doc.setTextColor(15, 23, 42);
  doc.setFontSize(13);
  doc.setFont("helvetica", "bold");
  doc.text("Centrifugal Blower Performance Specifications", 15, 125);

  // Table
  const tableY = 132;
  doc.setFillColor(30, 41, 59);
  doc.rect(15, tableY, 180, 8, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(8.5);
  doc.text("Parameter", 18, tableY + 5.5);
  doc.text("Induced Draft (ID) Fans", 70, tableY + 5.5);
  doc.text("Forced Draft (FD) Fans", 130, tableY + 5.5);

  const fanRows = [
    ["Power Range", "0.5 HP to 100 HP", "1.0 HP to 100 HP"],
    ["Volumetric Capacity", "600 to 8,00,000 m3/hr", "20 to 1,20,000 m3/hr"],
    ["Static Pressure Range", "Up to 250 mm WG", "Up to 1000 mm WG (High Pressure)"],
    ["Wheel Diameter", "200 mm to 2762 mm", "200 mm to 1200 mm"],
    ["Operating Temperature", "Up to 350 deg C (Boiler Flue Gas)", "Ambient to 150 deg C"],
    ["Drive Configurations", "Direct, V-Belt (Arr. 9), Flexible Couple", "Direct Mount & Belt Drive"],
    ["Standard Metallurgy", "IS 2062 Gr.B / Boiler Quality / Corten", "Mild Steel / Cast Aluminum / SS304/SS316"]
  ];

  fanRows.forEach((r, idx) => {
    const rowY = tableY + 8 + idx * 7.5;
    doc.setFillColor(idx % 2 === 0 ? 248 : 255, idx % 2 === 0 ? 250 : 255, idx % 2 === 0 ? 252 : 255);
    doc.rect(15, rowY, 180, 7.5, "F");
    doc.setTextColor(15, 23, 42);
    doc.setFont("helvetica", "bold");
    doc.text(r[0], 18, rowY + 5);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(51, 65, 85);
    doc.text(r[1], 70, rowY + 5);
    doc.text(r[2], 130, rowY + 5);
  });

  // Discharge Orientations
  const discY = 198;
  doc.setTextColor(15, 23, 42);
  doc.setFontSize(13);
  doc.setFont("helvetica", "bold");
  doc.text("Standard Blower Discharge Orientations (IS / AMCA Standards)", 15, discY);

  const orientations = [
    "Clockwise: Top Horizontal (90 deg), Top Angular Down (135 deg), Down Blast (180 deg), Bottom Angular Down (225 deg)",
    "Clockwise: Bottom Horizontal (270 deg), Bottom Angular Up (315 deg), Up Blast (360 deg), Top Angular Up (45 deg)",
    "Counter-Clockwise: Bottom Angular Down (225 deg), Down Blast (180 deg), Top Angular Down (135 deg), Top Horizontal (90 deg)",
    "Counter-Clockwise: Bottom Horizontal (270 deg), Bottom Angular Up (315 deg), Up Blast (360 deg), Top Angular Up (45 deg)"
  ];
  orientations.forEach((o, i) => {
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(71, 85, 105);
    doc.text(`* ${o}`, 18, discY + 8 + i * 5.5);
  });

  // Footer note
  doc.setFillColor(15, 23, 42);
  doc.rect(0, 280, 210, 17, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(8);
  doc.text("SCIMAX INDUSTRIES  |  Gujarat Manufacturing Bay  |  Direct Engineering: +91 79906 59265 / +91 83204 95952", 15, 290);

  // ================= PAGE 3: 17x17 CFM SIZING MATRIX =================
  doc.addPage();
  doc.setFillColor(255, 255, 255);
  doc.rect(0, 0, 210, 297, "F");

  doc.setFillColor(15, 23, 42);
  doc.rect(0, 0, 210, 22, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(13);
  doc.text("TECHNICAL SPECIFICATION FOR CENTRIFUGAL BLOWERS (17x17 CFM MATRIX)", 15, 14);

  doc.setTextColor(15, 23, 42);
  doc.setFontSize(8);
  doc.text("Approximate capacity in Cu. Feet / Minute (CFM) at Normal Temperature & Pressure (N.T.P. 20 deg C, 1 atm)", 15, 30);

  // 17x17 Compact Table
  const cfmCols = ["HP", "1\"", "2\"", "3\"", "4\"", "5\"", "6\"", "8\"", "10\"", "12\"", "16\"", "20\"", "24\"", "28\"", "32\"", "36\"", "48\"", "50\""];
  const cfmRows = [
    ["0.25", "750", "400", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
    ["0.5", "1500", "800", "500", "400", "320", "260", "200", "160", "130", "-", "-", "-", "-", "-", "-", "-", "-"],
    ["1.0", "3000", "1600", "1050", "800", "640", "530", "400", "320", "260", "200", "-", "-", "-", "-", "-", "-", "-"],
    ["2.0", "6000", "3200", "2130", "1600", "1280", "1060", "800", "640", "530", "400", "320", "270", "-", "-", "-", "-", "-"],
    ["3.0", "8000", "4800", "3200", "2400", "1920", "1600", "1443", "1155", "950", "720", "570", "400", "340", "-", "-", "-", "-"],
    ["5.0", "11500", "7350", "5150", "4000", "3200", "2650", "2400", "1925", "1600", "1203", "960", "800", "570", "500", "-", "-", "-"],
    ["7.5", "14500", "10250", "7500", "6000", "4800", "4100", "3000", "2880", "2400", "1800", "1440", "1200", "1030", "750", "650", "-", "-"],
    ["10.0", "20000", "13400", "9750", "8000", "6400", "5330", "4000", "3850", "3200", "2400", "1925", "1600", "1375", "1000", "880", "-", "-"],
    ["12.5", "27500", "17000", "12500", "10000", "8000", "6660", "5000", "4800", "4000", "3000", "2600", "2000", "1720", "1500", "1100", "900", "-"],
    ["15.0", "33000", "20000", "15250", "12000", "9600", "8000", "6000", "5775", "4800", "3600", "2880", "2450", "2000", "1800", "1600", "1100", "960"],
    ["20.0", "45000", "25000", "18500", "16000", "12800", "10600", "7800", "7700", "6400", "4800", "3850", "3200", "2750", "2400", "2130", "1450", "1280"],
    ["25.0", "55000", "40000", "28000", "18000", "16000", "13330", "10800", "9600", "8000", "6000", "4800", "4000", "3430", "3000", "2200", "1850", "1600"],
    ["30.0", "-", "48000", "34000", "24000", "19200", "16000", "13330", "12000", "11500", "8800", "7200", "5600", "4800", "4100", "3600", "3200", "2200"],
    ["40.0", "-", "65000", "48000", "34500", "24000", "21300", "16000", "15400", "10500", "9600", "7700", "6410", "5500", "4800", "4200", "2900", "2550"],
    ["50.0", "-", "-", "53000", "40000", "32000", "26000", "20000", "17500", "13300", "12000", "9600", "8020", "6870", "6000", "5350", "3650", "3200"],
    ["60.0", "-", "-", "-", "48000", "38000", "32000", "24000", "19200", "16000", "14400", "11550", "9600", "8250", "7200", "6400", "4360", "3800"],
    ["75.0", "-", "-", "-", "-", "48000", "40000", "30000", "24000", "20000", "18000", "14450", "12000", "10300", "9000", "8000", "5400", "4800"],
    ["100", "-", "-", "-", "-", "-", "53000", "40000", "32000", "26600", "24000", "19000", "16000", "13750", "12000", "10700", "7300", "6400"]
  ];

  const colWidth = 10;
  const startX = 12;
  let currentY = 36;

  // Header Row
  doc.setFillColor(30, 41, 59);
  doc.rect(startX, currentY, 186, 6, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(6.5);
  doc.setFont("helvetica", "bold");
  cfmCols.forEach((colName, cIdx) => {
    doc.text(colName, startX + 2 + cIdx * colWidth, currentY + 4.2);
  });

  currentY += 6;

  cfmRows.forEach((row, rIdx) => {
    doc.setFillColor(rIdx % 2 === 0 ? 248 : 255, rIdx % 2 === 0 ? 250 : 255, rIdx % 2 === 0 ? 252 : 255);
    doc.rect(startX, currentY, 186, 5.5, "F");
    
    doc.setFontSize(6);
    row.forEach((val, cIdx) => {
      if (cIdx === 0) {
        doc.setFont("helvetica", "bold");
        doc.setTextColor(234, 88, 12);
      } else {
        doc.setFont("helvetica", "normal");
        doc.setTextColor(30, 41, 59);
      }
      doc.text(val, startX + 2 + cIdx * colWidth, currentY + 3.8);
    });
    currentY += 5.5;
  });

  // Bottom Notice
  doc.setFillColor(241, 245, 249);
  doc.roundedRect(12, currentY + 6, 186, 30, 2, 2, "F");
  doc.setTextColor(15, 23, 42);
  doc.setFontSize(8);
  doc.setFont("helvetica", "bold");
  doc.text("ENGINEERING CALCULATION NOTES & SELECTION CRITERIA:", 16, currentY + 13);
  doc.setFontSize(7);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(71, 85, 105);
  doc.text("1. Static pressure is listed in Inches Water Gauge (W.G.). Convert to mmWC using formula: 1 inch WG = 25.4 mmWC.", 16, currentY + 18);
  doc.text("2. Air density calculated at standard NTP (Temperature: 20 deg C, Barometric Pressure: 101.325 kPa, Density: 1.2 kg/m3).", 16, currentY + 23);
  doc.text("3. For high-temperature boiler flue gas or altitude correction, contact Scimax Technical Desk for derating multipliers.", 16, currentY + 28);

  // Footer
  doc.setFillColor(15, 23, 42);
  doc.rect(0, 280, 210, 17, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(8);
  doc.text("SCIMAX INDUSTRIES  |  Direct Download PDF  |  Hotline: +91 79906 59265 / +91 83204 95952", 15, 290);

  // Save the PDF
  doc.save("Scimax-Industries-Centrifugal-Blowers-Fans-Catalogue.pdf");
}

export function generatePollutionControlCataloguePDF(): void {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4"
  });

  // ================= PAGE 1: COVER =================
  doc.setFillColor(15, 23, 42);
  doc.rect(0, 0, 210, 297, "F");

  // Top Orange Stripe
  doc.setFillColor(234, 88, 12);
  doc.rect(0, 0, 210, 8, "F");

  // Brand Name
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(28);
  doc.text("Sci Max", 20, 32);

  doc.setFillColor(234, 88, 12);
  doc.roundedRect(62, 22, 14, 12, 6, 6, "F");

  doc.setFontSize(14);
  doc.setTextColor(226, 232, 240);
  doc.text("SCIMAX INDUSTRIES", 20, 42);

  // Certification Banner
  doc.setFillColor(30, 41, 59);
  doc.roundedRect(20, 52, 170, 10, 2, 2, "F");
  doc.setFontSize(9);
  doc.setTextColor(249, 115, 22);
  doc.text("ISO 9001:2015 CERTIFIED  |  GPCB / CPCB / MPCB COMPLIANT SYSTEMS", 25, 58.5);

  // Title Box
  doc.setFontSize(24);
  doc.setTextColor(255, 255, 255);
  doc.text("AIR POLLUTION", 20, 80);
  doc.text("CONTROL EQUIPMENTS", 20, 90);

  doc.setFontSize(12);
  doc.setTextColor(203, 213, 225);
  doc.text("Pulse-Jet Bag Filters, Cyclones, Fume Scrubbers & Silo Filters", 20, 100);

  // Featured Equipment Box
  doc.setFillColor(234, 88, 12);
  doc.roundedRect(20, 115, 170, 100, 3, 3, "F");
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(13);
  doc.text("CORE POLLUTION CONTROL SYSTEMS INCLUDED", 28, 128);

  doc.setFontSize(9.5);
  doc.setTextColor(255, 255, 255);
  const apcItems = [
    "* Pulse-Jet Bag Filter Dust Collectors (Automatic Reverse Pulse Cleaning)",
    "* Bag Filters for Coal, Lignite & Wood Boiler Flue Gas Emission",
    "* High-Efficiency Cyclone & Multi-Cyclone Dust Separators (MDC)",
    "* Furnace Fume Extraction (Induction & Electric Arc Furnaces)",
    "* Heavy-Duty Industrial Vacuum Cleaners (Turbine Blower + Caster Trolley)",
    "* Top-Mounted & Floor-Type Silo Vent Filters (99.9% Particulate Retention)",
    "* Packed Bed Wet Scrubbers for Acid Mist & Chemical Vapors",
    "* Core Accessories: Rotary Airlocks, Solenoid Valves, Venturi Cages, Timers"
  ];
  apcItems.forEach((item, idx) => {
    doc.text(item, 28, 140 + idx * 9);
  });

  // Bottom Plant & Contacts Bar
  doc.setFillColor(2, 6, 23);
  doc.rect(0, 235, 210, 62, "F");

  doc.setTextColor(249, 115, 22);
  doc.setFontSize(11);
  doc.text("SCIMAX AIR POLLUTION CONTROL DIVISION", 20, 248);

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(9);
  doc.text("Manufacturing Plant: Shed No. 1, B/h Torrent Pharma, Ahmedabad-Mehsana Highway, Chadasna, Gujarat", 20, 256);
  doc.text("Corporate Works: 110, Gajanan Industrial Estate, Near Hathijan Circle, GIDC Vatva, Ahmedabad-382445", 20, 263);
  doc.text("Direct Contact: +91 79906 59265 (Raj Patel)  |  +91 83204 95952 (Ankit Patel)", 20, 270);
  doc.text("Email: sales@scimax.in  /  scimaxindia@gmail.com  |  Web: www.scimax.in", 20, 277);

  // ================= PAGE 2: BAG FILTERS, BOILERS & FUME SYSTEMS =================
  doc.addPage();
  doc.setFillColor(255, 255, 255);
  doc.rect(0, 0, 210, 297, "F");

  doc.setFillColor(15, 23, 42);
  doc.rect(0, 0, 210, 22, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(13);
  doc.text("SCIMAX INDUSTRIES  |  DUST COLLECTORS & BOILER EMISSION CONTROL", 15, 14);

  // Section 1: Pulse-Jet Dust Collectors
  doc.setTextColor(15, 23, 42);
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("1. Pulse-Jet Bag Filter Dust Collectors", 15, 34);

  doc.setFontSize(8.5);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(51, 65, 85);
  doc.text("Continuous-duty online pulse cleaning system utilizing high-pressure compressed air jets (5-7 bar) to dislodge accumulated dust cakes from outer filter bag surfaces. Engineered for continuous plant operation with zero downtime.", 15, 41, { maxWidth: 180 });

  const bagSpecs = [
    ["Filtration Efficiency", "Up to 99.9% down to 1 micron particulate size"],
    ["Filter Media", "Non-woven Needle Felt Polyester, Ryton / PPS, Nomex, PTFE Membrane"],
    ["Air-to-Cloth Ratio", "Optimized between 1.0 to 1.8 m/min based on dust library characteristics"],
    ["Pulse Valve Assembly", "1\", 1.5\", 2\" Solenoid pulse valves with sequential digital timer controller"],
    ["Dust Discharge", "Heavy motorized Rotary Air Lock Valve (RAV) or manual slide gate / butterfly valve"]
  ];

  let specY = 56;
  bagSpecs.forEach((sp) => {
    doc.setFillColor(248, 250, 252);
    doc.rect(15, specY, 180, 6.5, "F");
    doc.setTextColor(234, 88, 12);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text(sp[0], 18, specY + 4.5);
    doc.setTextColor(30, 41, 59);
    doc.setFont("helvetica", "normal");
    doc.text(sp[1], 75, specY + 4.5);
    specY += 7.5;
  });

  // Section 2: Boiler Pollution Control
  doc.setTextColor(15, 23, 42);
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("2. Bag Filters for Boiler Flue Gas & SPM Emission Control", 15, 102);

  doc.setFontSize(8.5);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(51, 65, 85);
  doc.text("Tailored for Coal, Lignite, Bagasse, Rice Husk, and Wood-fired boilers to meet strict State Pollution Control Board SPM limits (<30 mg/Nm3). Integrated with pre-cyclone drop-out chambers, spark arrestors, and bypass dampers.", 15, 109, { maxWidth: 180 });

  // Section 3: Fume Extraction Systems
  doc.setTextColor(15, 23, 42);
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("3. Furnace & Induction Fume Extraction Systems", 15, 130);

  doc.setFontSize(8.5);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(51, 65, 85);
  doc.text("Complete turnkey hooding, swiveling ductwork, spark arrestors, heavy-duty centrifugal ID fan, and pulse-jet baghouses engineered for Induction Furnaces, Electric Arc Furnaces, Foundries, and Chemical Reactor venting.", 15, 137, { maxWidth: 180 });

  // Section 4: Silo Vent Filters & Industrial Vacuum
  doc.setTextColor(15, 23, 42);
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("4. Silo Vent Filters & Industrial Vacuum Cleaners", 15, 158);

  const siloVacuumSpecs = [
    ["Top-Mounted Silo Vent Filter", "Direct mounting on cement/fly ash silos with automatic pulse jet cleaning, weather hood."],
    ["Floor-Type Silo Vent Filter", "Ground-level placement for silos where rooftop access is restricted; front access door."],
    ["Industrial Vacuum Cleaner", "350 m3/hr suction turbine blower with 400mm steel tank, 25mm polyester + 10mm cellulose filters."]
  ];

  let siloY = 166;
  siloVacuumSpecs.forEach((sv) => {
    doc.setFillColor(241, 245, 249);
    doc.roundedRect(15, siloY, 180, 11, 1.5, 1.5, "F");
    doc.setTextColor(15, 23, 42);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.text(sv[0], 18, siloY + 4.5);
    doc.setTextColor(71, 85, 105);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.text(sv[1], 18, siloY + 8.5);
    siloY += 13.5;
  });

  // Section 5: Core Spares & Accessories Matrix
  doc.setTextColor(15, 23, 42);
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("5. Core Accessories & Spares Fabricated by Scimax", 15, 215);

  const spares = [
    "Cartridge Filters (Polyester / Cellulose)",
    "Diaphragm Kits for Pulse Valves (1\" & 1.5\")",
    "Filter Bags (Polyester, Ryton, Nomex, PTFE)",
    "Filter Cages with Built-in Venturi Nozzles",
    "Heavy Cast Iron Rotary Airlock Valves (RAV)",
    "Solenoid Pilot Valves & Pulse Valves (24V/230V)",
    "Counterweighted Gravity Balancing Dampers",
    "Sequential Digital Pulse Timers (4-24 Channels)"
  ];

  spares.forEach((sp, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const x = 15 + col * 92;
    const y = 222 + row * 10;

    doc.setFillColor(248, 250, 252);
    doc.rect(x, y, 88, 8, "F");
    doc.setTextColor(234, 88, 12);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.5);
    doc.text(`[OK] ${sp}`, x + 3, y + 5.5);
  });

  // Footer
  doc.setFillColor(15, 23, 42);
  doc.rect(0, 280, 210, 17, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(8);
  doc.text("SCIMAX INDUSTRIES  |  Air Pollution Control Catalogue  |  Direct: +91 79906 59265 / +91 83204 95952", 15, 290);

  // Save the PDF
  doc.save("Scimax-Industries-Air-Pollution-Control-Equipments-Catalogue.pdf");
}
