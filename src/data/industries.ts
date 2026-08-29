import { IndustryItem } from "../types";

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "foundry",
    name: "Foundry & Casting",
    iconName: "Flame",
    tagline: "Sand handling, shot blast exhaust, cupola & shakeout fume extraction",
    description: "Foundries generate severe abrasive silica dust, hot sand emissions, and dense metallic fumes during melting, molding, casting shakeout, and shot blasting.",
    dustVaporCharacteristics: "High temperature, highly abrasive silica, metal oxides, heavy particulate load.",
    recommendedProducts: ["Pulse-Jet Bag Type Dust Collector", "Induced Draft (ID) Centrifugal Fan", "Industrial High-Efficiency Cyclone Dust Collector", "Industrial Man Cooler & Product Cooling Fan"],
    keyChallenges: ["Combating severe abrasion on fan impellers", "Capturing fugitive fumes over pouring bays", "Handling sand reclamation dust"],
    complianceNorms: ["CPCB Foundry particulate limits (< 50 mg/Nm³)", "OSHA silica respirable dust standards"]
  },
  {
    id: "pharma",
    name: "Pharmaceuticals & Healthcare",
    iconName: "Pill",
    tagline: "Cleanroom ventilation, tablet compression dedusting, fluid bed exhaust & chemical API scrubbing",
    description: "Pharmaceutical manufacturing demands hygienic air systems, cross-contamination prevention, ATEX/explosion compliance, and high filtration efficiency for potent active pharmaceutical ingredients (APIs).",
    dustVaporCharacteristics: "Ultrafine active powders, organic solvents, sterile cleanroom airflow requirements.",
    recommendedProducts: ["Top Mounted Silo Vent Filter", "Pulse-Jet Bag Type Dust Collector", "Packed Bed Wet Gas Scrubber", "Heavy-Duty Three-Stage Industrial Vacuum Cleaner"],
    keyChallenges: ["Zero cross-contamination between batches", "Safe recovery of costly active powders", "Static electricity dissipation"],
    complianceNorms: ["GMP cleanroom standards", "FDA Title 21 CFR Part 11", "CPCB VOC & hazardous emission guidelines"]
  },
  {
    id: "iron-steel",
    name: "Iron & Steel Plants",
    iconName: "Factory",
    tagline: "Induction furnace swivel hoods, electric arc furnace extraction & rolling mill cooling",
    description: "Mini steel plants, rolling mills, and smelting shops produce massive thermal plumes and toxic metal oxides during melting, refining, and scrap preheating.",
    dustVaporCharacteristics: "Sub-micron metallurgical smoke, red iron oxide fumes, burning scrap contaminants up to 450°C.",
    recommendedProducts: ["Industrial Fume Extraction & Control System", "Induced Draft (ID) Centrifugal Fan", "Forced Draft (FD) High-Pressure Centrifugal Blower", "Industrial Roof Ventilator Fan"],
    keyChallenges: ["High temperature gas handling without bag burnout", "Capture efficiency over tilting furnaces", "Continuous 24/7 uptime without fan imbalance"],
    complianceNorms: ["GPCB/MPCB metallurgical smelting emission limits (< 30 mg/Nm³)", "Shop floor air quality standards"]
  },
  {
    id: "textile",
    name: "Textile & Garment Mills",
    iconName: "Scissors",
    tagline: "Blowroom fluff extraction, carding dust filtration, humidification & stenter exhaust",
    description: "Textile processing releases extensive cotton lint, micro-fibers, fly dust, and sizing chemicals that quickly clog standard air filters and create severe fire hazards.",
    recommendedProducts: ["Tube Axial Flow Fan (Direct / V-Belt)", "Pulse-Jet Bag Type Dust Collector", "Paddle Open Blade Centrifugal Blowers", "Industrial Roof Ventilator Fan"],
    dustVaporCharacteristics: "Low density, stringy, highly combustible cotton and synthetic microfibers.",
    keyChallenges: ["Preventing filter clogging from stringy lint", "Uniform humidification airflow across spinning halls", "Fire and spark prevention"],
    complianceNorms: ["Factory inspectorate cotton dust exposure limits", "Environmental air exchange norms"]
  },
  {
    id: "boiler",
    name: "Industrial Boilers & Thermic Heaters",
    iconName: "Gauge",
    tagline: "ID/FD Fans, Multiclone Dust Collectors & APCD Bag Filters for solid fuel boilers",
    description: "Coal, lignite, bagasse, wood, and briquette-fired steam boilers require balanced draft systems (FD/ID) and Air Pollution Control Devices (APCD) to comply with SPM norms.",
    dustVaporCharacteristics: "Hot fly ash (140°C–220°C), abrasive unburnt carbon, SO2/SO3 acid gases.",
    recommendedProducts: ["Induced Draft (ID) Centrifugal Fan", "Forced Draft (FD) High-Pressure Centrifugal Blower", "Multi-Dust Collector (MDC) for Boilers", "Bag Filter for Boiler Pollution Control (APCD)"],
    keyChallenges: ["Guaranteed SPM < 30 mg/Nm³", "Protection against spark burn-through on filter bags", "Resisting flue gas dew-point acid corrosion"],
    complianceNorms: ["Central Pollution Control Board (CPCB) SPM < 30 mg/Nm³", "Boiler regulations (IBR compatible equipment)"]
  },
  {
    id: "gasifier-plant",
    name: "Biomass Gasifier Plants",
    iconName: "Zap",
    tagline: "Producer gas blowers, tar gas cleanup & wood pellet gasifier air movement",
    description: "Biomass gasification requires high-pressure explosion-proof blowers for primary/secondary air supply and gas clean-up trains to separate charcoal dust and soot.",
    dustVaporCharacteristics: "Hot producer gas, tar vapors, lightweight char dust, combustible syngas.",
    recommendedProducts: ["Forced Draft (FD) High-Pressure Centrifugal Blower", "Multi-Dust Collector (MDC) for Boilers", "Industrial High-Efficiency Cyclone Dust Collector"],
    keyChallenges: ["Gas tightness to prevent syngas leaks", "Handling sticky tar-laden particulates", "High static pressure boost"],
    complianceNorms: ["Syngas safety standards", "Pollution board thermal gasification norms"]
  },
  {
    id: "plastics",
    name: "Plastics & Polymer Processing",
    iconName: "Layers",
    tagline: "Pneumatic granule conveying, compounding dust collection & mold cooling ventilation",
    description: "Plastic extruders, compounders, and injection molding lines produce plastic pellet dust, polymer additives fumes, and volatile plasticizer vapors.",
    dustVaporCharacteristics: "Static-charged plastic fines, polymer dust, volatile organic fumes.",
    recommendedProducts: ["Forced Draft (FD) High-Pressure Centrifugal Blower", "Tube Axial Flow Fan (Direct / V-Belt)", "Heavy-Duty Three-Stage Industrial Vacuum Cleaner", "Industrial Roof Ventilator Fan"],
    keyChallenges: ["Static charge buildup on plastic dust", "High velocity pneumatic conveying without pellet degradation", "Shop floor heat dissipation"],
    complianceNorms: ["Clean factory environment standards", "VOC emission limits"]
  },
  {
    id: "furnaces",
    name: "Industrial Furnaces & Kilns",
    iconName: "Flame",
    tagline: "Combustion air supply, hot air recirculation & waste heat exhaust",
    description: "Heat treatment furnaces, reverberatory smelting, rotary kilns, and forging furnaces rely on heavy-duty Scimax blowers for burner combustion and flue extraction.",
    dustVaporCharacteristics: "Extremely high temperature flue gas (up to 400°C), combustion soot, hot air.",
    recommendedProducts: ["Induced Draft (ID) Centrifugal Fan", "Forced Draft (FD) High-Pressure Centrifugal Blower", "Industrial Man Cooler & Product Cooling Fan"],
    keyChallenges: ["Water-cooled/heat-dissipating shaft assemblies", "Thermal expansion compensation", "High static pressure burner boosting"],
    complianceNorms: ["Combustion efficiency benchmarks", "Thermal pollution control"]
  },
  {
    id: "ceramics",
    name: "Ceramics & Tiles",
    iconName: "Grid",
    tagline: "Spray dryer exhaust, raw glaze powder dedusting & press area extraction",
    description: "Ceramic tile, sanitaryware, and tableware plants in Gujarat (Morbi/Himmatnagar hubs) process large volumes of dry clay, feldspar, and silica glaze powders.",
    dustVaporCharacteristics: "Dense, abrasive ceramic dust, moisture-laden spray dryer exhaust.",
    recommendedProducts: ["Pulse-Jet Bag Type Dust Collector", "Industrial High-Efficiency Cyclone Dust Collector", "Induced Draft (ID) Centrifugal Fan", "Top Mounted Silo Vent Filter"],
    keyChallenges: ["Handling abrasive silica without wearing impeller blades", "Preventing bag blinding in humid spray dryer exhaust", "Bulk powder reclamation"],
    complianceNorms: ["GPCB Ceramics pollution compliance", "Silica particulate exposure limits"]
  },
  {
    id: "paper-mill",
    name: "Paper & Pulp Mills",
    iconName: "FileText",
    tagline: "Boiler flue gas cleanup, trim conveying, paper dust removal & hood exhaust",
    description: "Paper machines generate excessive steam and paper dust in dryer hoods, while kraft boilers require robust flue gas fly ash collection.",
    dustVaporCharacteristics: "Moist hot air, airborne paper fluff, chemical pulp vapors, boiler ash.",
    recommendedProducts: ["Bifurcated Axial Flow Fan", "Bag Filter for Boiler Pollution Control (APCD)", "Induced Draft (ID) Centrifugal Fan", "Tube Axial Flow Fan (Direct / V-Belt)"],
    keyChallenges: ["Handling 100% relative humidity steam without motor burnout", "Transporting paper trim without impeller clogging", "Boiler emission compliance"],
    complianceNorms: ["CPCB Pulp & Paper effluent/emission standards"]
  },
  {
    id: "plywood-mfg",
    name: "Plywood & Woodworking",
    iconName: "TreePine",
    tagline: "Sawdust extraction, sander machine bag filters, pneumatic wood waste conveying",
    description: "Plywood peeling, sizing saws, wide-belt sanding, and MDF processing generate heavy volumes of wood shavings, fine sanding flour, and resinous dust.",
    dustVaporCharacteristics: "Combustible fine wood flour, coarse chips, urea-formaldehyde resin particles.",
    recommendedProducts: ["Industrial High-Efficiency Cyclone Dust Collector", "Pulse-Jet Bag Type Dust Collector", "Paddle Open Blade Centrifugal Blowers", "Tube Axial Flow Fan (Direct / V-Belt)"],
    keyChallenges: ["Explosion and fire risk prevention in wood dust collectors", "High volume suction over high-speed sanders", "Pneumatic transport to boiler feed"],
    complianceNorms: ["Combustible dust NFPA/OSHA guidelines", "Factory safety regulations"]
  },
  {
    id: "coal",
    name: "Coal Handling & Power Plants",
    iconName: "Mountain",
    tagline: "Crusher house dust suppression, conveyor transfer point dedusting & coal silo vents",
    description: "Coal screening, crushing, and conveyor transfer chutes emit thick black fugitive coal dust clouds that create explosion and respiratory hazards.",
    dustVaporCharacteristics: "Abrasive, highly combustible, explosive coal dust with low minimum ignition energy.",
    recommendedProducts: ["Pulse-Jet Bag Type Dust Collector", "Floor Mounted Silo Vent Filter", "Induced Draft (ID) Centrifugal Fan"],
    keyChallenges: ["Explosion venting and antistatic grounding", "Handling high moisture wet coal fines", "Conveyor belt suction hood design"],
    complianceNorms: ["CEA/CPCB Thermal power plant coal dust norms", "ATEX / PESO safety compliance"]
  },
  {
    id: "cement",
    name: "Cement & Mineral Grinding",
    iconName: "Building2",
    tagline: "Ball mill venting, packer dedusting, clinker cooler exhaust & silo top filters",
    description: "Limestone crushing, raw meal grinding, clinker cooling, and bulk cement packing generate millions of tons of high-abrasion alkaline dust.",
    dustVaporCharacteristics: "Ultra-abrasive, dense, fine calcium carbonate and clinker dust.",
    recommendedProducts: ["Top Mounted Silo Vent Filter", "Pulse-Jet Bag Type Dust Collector", "Induced Draft (ID) Centrifugal Fan", "Floor Mounted Silo Vent Filter"],
    keyChallenges: ["Extreme abrasion requiring Hardox impeller liners", "Heavy duty 24/7 continuous operation", "Silo venting during 40-ton bulk tanker unloading"],
    complianceNorms: ["Cement plant emission standards (< 30 mg/Nm³)", "Zero visible stack emissions"]
  },
  {
    id: "chemical",
    name: "Chemical & Fertilizer",
    iconName: "Beaker",
    tagline: "Acid fume scrubbing, fluid bed dryer exhaust, bagging plant dust collection & corrosive gas fans",
    description: "Chemical manufacturing requires specialized metallurgy (SS 316, PP, FRP, Rubber Lining) to handle corrosive gases, toxic mists, and hazardous powders.",
    dustVaporCharacteristics: "Corrosive acid fumes (HCl, SO2, NOx), toxic powders, explosive dusts.",
    recommendedProducts: ["Packed Bed Wet Gas Scrubber", "Bifurcated Axial Flow Fan", "Pulse-Jet Bag Type Dust Collector", "Induced Draft (ID) Centrifugal Fan"],
    keyChallenges: ["Resisting chemical attack and acid condensation", "99%+ toxic gas absorption in wet scrubbers", "Hazardous area flameproof motor compliance"],
    complianceNorms: ["GPCB / CPCB hazardous chemical emission guidelines", "Factory safety act"]
  },
  {
    id: "food",
    name: "Food & Grain Processing",
    iconName: "Apple",
    tagline: "Flour mill dedusting, spice grinding cyclone collectors, grain silo vents & sugar dust handling",
    description: "Grain silos, dal mills, flour mills, and spice grinding plants require sanitary food-grade stainless steel air handling systems and explosion protection.",
    dustVaporCharacteristics: "Hygroscopic, organic combustible dusts (starch, flour, spices, sugar).",
    recommendedProducts: ["Top Mounted Silo Vent Filter", "Pulse-Jet Bag Type Dust Collector", "Industrial High-Efficiency Cyclone Dust Collector", "Heavy-Duty Three-Stage Industrial Vacuum Cleaner"],
    keyChallenges: ["Food safety contact standards (SS 304)", "Preventing mold and moisture condensation in hoppers", "Combustible dust safety"],
    complianceNorms: ["FSSAI hygiene compliance", "Dust explosion mitigation"]
  }
];
