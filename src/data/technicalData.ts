import { BlowerCapacityRow, DischargePosition } from "../types";

export const DISCHARGE_POSITIONS_CW: DischargePosition[] = [
  { id: "cw-90", direction: "Clockwise (CW)", name: "Top Horizontal", angleDeg: 90, description: "Discharge horizontal towards right from top (90°)" },
  { id: "cw-135", direction: "Clockwise (CW)", name: "Top Angular Down", angleDeg: 135, description: "Discharge at 45° angle downwards right (135°)" },
  { id: "cw-180", direction: "Clockwise (CW)", name: "Down Blast", angleDeg: 180, description: "Direct vertical downward blast (180°)" },
  { id: "cw-225", direction: "Clockwise (CW)", name: "Bottom Angular Down", angleDeg: 225, description: "Discharge at 45° downwards left (225°)" },
  { id: "cw-270", direction: "Clockwise (CW)", name: "Bottom Horizontal", angleDeg: 270, description: "Discharge horizontal towards left along bottom base (270°)" },
  { id: "cw-315", direction: "Clockwise (CW)", name: "Bottom Angular Up", angleDeg: 315, description: "Discharge angled 45° upwards left (315°)" },
  { id: "cw-360", direction: "Clockwise (CW)", name: "Up Blast", angleDeg: 360, description: "Direct vertical upward blast (360° / 0°)" },
  { id: "cw-45", direction: "Clockwise (CW)", name: "Top Angular Up", angleDeg: 45, description: "Discharge angled 45° upwards right (45°)" }
];

export const DISCHARGE_POSITIONS_CCW: DischargePosition[] = [
  { id: "ccw-90", direction: "Counter-Clockwise (CCW)", name: "Top Horizontal", angleDeg: 90, description: "Discharge horizontal towards left from top (90°)" },
  { id: "ccw-135", direction: "Counter-Clockwise (CCW)", name: "Top Angular Down", angleDeg: 135, description: "Discharge at 45° angle downwards left (135°)" },
  { id: "ccw-180", direction: "Counter-Clockwise (CCW)", name: "Down Blast", angleDeg: 180, description: "Direct vertical downward blast (180°)" },
  { id: "ccw-225", direction: "Counter-Clockwise (CCW)", name: "Bottom Angular Down", angleDeg: 225, description: "Discharge at 45° downwards right (225°)" },
  { id: "ccw-270", direction: "Counter-Clockwise (CCW)", name: "Bottom Horizontal", angleDeg: 270, description: "Discharge horizontal towards right along bottom base (270°)" },
  { id: "ccw-315", direction: "Counter-Clockwise (CCW)", name: "Bottom Angular Up", angleDeg: 315, description: "Discharge angled 45° upwards right (315°)" },
  { id: "ccw-360", direction: "Counter-Clockwise (CCW)", name: "Up Blast", angleDeg: 360, description: "Direct vertical upward blast (360° / 0°)" },
  { id: "ccw-45", direction: "Counter-Clockwise (CCW)", name: "Top Angular Up", angleDeg: 45, description: "Discharge angled 45° upwards left (45°)" }
];

// Full 17 HP ratings x 17 static pressure columns table from brochure (approx CFM at NTP)
export const BLOWER_CAPACITY_MATRIX: BlowerCapacityRow[] = [
  {
    hp: 0.25,
    pressures: { "1": 750, "2": 400, "3": null, "4": null, "5": null, "6": null, "8": null, "10": null, "12": null, "16": null, "20": null, "24": null, "28": null, "32": null, "36": null, "48": null, "50": null }
  },
  {
    hp: 0.5,
    pressures: { "1": 1500, "2": 800, "3": 500, "4": 400, "5": 320, "6": 260, "8": 200, "10": 160, "12": 130, "16": null, "20": null, "24": null, "28": null, "32": null, "36": null, "48": null, "50": null }
  },
  {
    hp: 1.0,
    pressures: { "1": 3000, "2": 1600, "3": 1050, "4": 800, "5": 640, "6": 530, "8": 400, "10": 320, "12": 260, "16": 200, "20": null, "24": null, "28": null, "32": null, "36": null, "48": null, "50": null }
  },
  {
    hp: 2.0,
    pressures: { "1": 6000, "2": 3200, "3": 2130, "4": 1600, "5": 1280, "6": 1060, "8": 800, "10": 640, "12": 530, "16": 400, "20": 320, "24": 270, "28": null, "32": null, "36": null, "48": null, "50": null }
  },
  {
    hp: 3.0,
    pressures: { "1": 8000, "2": 4800, "3": 3200, "4": 2400, "5": 1920, "6": 1600, "8": 1443, "10": 1155, "12": 950, "16": 720, "20": 570, "24": 400, "28": 340, "32": null, "36": null, "48": null, "50": null }
  },
  {
    hp: 5.0,
    pressures: { "1": 11500, "2": 7350, "3": 5150, "4": 4000, "5": 3200, "6": 2650, "8": 2400, "10": 1925, "12": 1600, "16": 1203, "20": 960, "24": 800, "28": 570, "32": 500, "36": null, "48": null, "50": null }
  },
  {
    hp: 7.5,
    pressures: { "1": 14500, "2": 10250, "3": 7500, "4": 6000, "5": 4800, "6": 4100, "8": 3000, "10": 2880, "12": 2400, "16": 1800, "20": 1440, "24": 1200, "28": 1030, "32": 750, "36": 650, "48": null, "50": null }
  },
  {
    hp: 10.0,
    pressures: { "1": 20000, "2": 13400, "3": 9750, "4": 8000, "5": 6400, "6": 5330, "8": 4000, "10": 3850, "12": 3200, "16": 2400, "20": 1925, "24": 1600, "28": 1375, "32": 1000, "36": 880, "48": null, "50": null }
  },
  {
    hp: 12.5,
    pressures: { "1": 27500, "2": 17000, "3": 12500, "4": 10000, "5": 8000, "6": 6660, "8": 5000, "10": 4800, "12": 4000, "16": 3000, "20": 2600, "24": 2000, "28": 1720, "32": 1500, "36": 1100, "48": 900, "50": null }
  },
  {
    hp: 15.0,
    pressures: { "1": 33000, "2": 20000, "3": 15250, "4": 12000, "5": 9600, "6": 8000, "8": 6000, "10": 5775, "12": 4800, "16": 3600, "20": 2880, "24": 2450, "28": 2000, "32": 1800, "36": 1600, "48": 1100, "50": 960 }
  },
  {
    hp: 20.0,
    pressures: { "1": 45000, "2": 25000, "3": 18500, "4": 16000, "5": 12800, "6": 10600, "8": 7800, "10": 7700, "12": 6400, "16": 4800, "20": 3850, "24": 3200, "28": 2750, "32": 2400, "36": 2130, "48": 1450, "50": 1280 }
  },
  {
    hp: 25.0,
    pressures: { "1": 55000, "2": 40000, "3": 28000, "4": 18000, "5": 16000, "6": 13330, "8": 10800, "10": 9600, "12": 8000, "16": 6000, "20": 4800, "24": 4000, "28": 3430, "32": 3000, "36": 2200, "48": 1850, "50": 1600 }
  },
  {
    hp: 30.0,
    pressures: { "1": null, "2": 48000, "3": 34000, "4": 24000, "5": 19200, "6": 16000, "8": 12000, "10": 11500, "12": 8800, "16": 7200, "20": 5600, "24": 4800, "28": 4100, "32": 3600, "36": 3200, "48": 2200, "50": 1900 }
  },
  {
    hp: 40.0,
    pressures: { "1": null, "2": 65000, "3": 48000, "4": 34500, "5": 24000, "6": 21300, "8": 16000, "10": 15400, "12": 10500, "16": 9600, "20": 7700, "24": 6410, "28": 5500, "32": 4800, "36": 4200, "48": 2900, "50": 2550 }
  },
  {
    hp: 50.0,
    pressures: { "1": null, "2": null, "3": 53000, "4": 40000, "5": 32000, "6": 26000, "8": 20000, "10": 17500, "12": 13300, "16": 12000, "20": 9600, "24": 8020, "28": 6870, "32": 6000, "36": 5350, "48": 3650, "50": 3200 }
  },
  {
    hp: 60.0,
    pressures: { "1": null, "2": null, "3": 48000, "4": 38000, "5": 32000, "6": 24000, "8": 19200, "10": 16000, "12": 14400, "16": 11550, "20": 9600, "24": 8250, "28": 7200, "32": 6400, "36": 4360, "48": 3800, "50": null }
  },
  {
    hp: 75.0,
    pressures: { "1": null, "2": null, "3": null, "4": 48000, "5": 40000, "6": 30000, "8": 24000, "10": 20000, "12": 18000, "16": 14450, "20": 12000, "24": 10300, "28": 9000, "32": 8000, "36": 5400, "48": 4800, "50": null }
  },
  {
    hp: 100.0,
    pressures: { "1": null, "2": null, "3": null, "4": 53000, "5": 40000, "6": 32000, "8": 26600, "10": 24000, "12": 19000, "16": 16000, "20": 13750, "24": 12000, "28": 10700, "32": 7300, "36": 6400, "48": null, "50": null }
  }
];

export const DUST_DATABASE_SAMPLE = [
  { name: "Foundry Silica Sand", category: "Abrasive / Heavy", bulkDensity: "1400 kg/m³", typicalAirToCloth: "1.2 m/min", recommendedBag: "Polyester with singed finish + pre-cyclone" },
  { name: "Boiler Fly Ash (Coal/Lignite)", category: "Abrasive / Hot", bulkDensity: "750 kg/m³", typicalAirToCloth: "0.9 m/min", recommendedBag: "Woven Fiberglass + PTFE membrane or Ryton" },
  { name: "Pharma API Granules / Starch", category: "Fine / Static", bulkDensity: "450 kg/m³", typicalAirToCloth: "1.0 m/min", recommendedBag: "Antistatic Spunbond Polyester with grounding wire" },
  { name: "Textile Cotton Lint & Fluff", category: "Fibrous / Low Density", bulkDensity: "120 kg/m³", typicalAirToCloth: "1.8 m/min", recommendedBag: "Paddle open impeller + large pleat filter" },
  { name: "Cement & Clinker Dust", category: "Fine / Abrasive", bulkDensity: "1100 kg/m³", typicalAirToCloth: "1.1 m/min", recommendedBag: "PTFE coated Needle felt + rotary airlock" },
  { name: "Woodworking Sawdust & Shavings", category: "Bulk / Combustible", bulkDensity: "250 kg/m³", typicalAirToCloth: "1.5 m/min", recommendedBag: "High efficiency cyclone + pulse-jet bag filter with explosion vent" },
  { name: "Steel Induction Furnace Fume", category: "Sub-Micron / Hot", bulkDensity: "350 kg/m³", typicalAirToCloth: "0.8 m/min", recommendedBag: "Nomex / PPS with spark arrestor quench chamber" },
  { name: "Chemical Pigments (Titanium Dioxide)", category: "Ultrafine / Sticky", bulkDensity: "600 kg/m³", typicalAirToCloth: "0.7 m/min", recommendedBag: "ePTFE membrane cartridge filter with Teflon coating" },
  { name: "Ceramics Glaze Powder", category: "Dense / Abrasive", bulkDensity: "900 kg/m³", typicalAirToCloth: "1.0 m/min", recommendedBag: "Polyester needle felt with water-repellent dip" },
  { name: "Sugar Dust & Starch", category: "Hygroscopic / Combustible", bulkDensity: "800 kg/m³", typicalAirToCloth: "1.1 m/min", recommendedBag: "Oleophobic antistatic polyester + explosion door" }
];
