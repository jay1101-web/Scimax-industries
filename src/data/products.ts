import { ProductItem, ImpellerType } from "../types";

export const IMPELLER_TYPES: ImpellerType[] = [
  {
    id: "forward-curved",
    name: "Forward Curved Impeller",
    bladeProfile: "Forward Curved Drum (Multi-Vane)",
    description: "Curved in the direction of rotation. Provides high volume air flow at relatively low rotational speeds with compact physical envelope.",
    efficiency: "60% – 75%",
    bestFor: "Clean air ventilation, HVAC units, package air handling, furnace cooling air supply.",
    bestApplications: ["Clean Air Ventilation", "Package AHUs", "Furnace Cooling Air", "Panel Exhaust"],
    dustHandling: "Clean air to very light particulate only (not suitable for sticky or abrasive dust).",
    imageAlt: "Forward Curved Centrifugal Impeller with multi-blade drum design"
  },
  {
    id: "radial-blade",
    name: "Radial Blade (Paddle Wheel)",
    bladeProfile: "Straight Heavy-Plate Radial Vanes",
    description: "Straight blades radiating from hub. Extremely rugged construction with self-cleaning characteristics designed to withstand high particulate loads.",
    efficiency: "55% – 70%",
    bestFor: "Material handling, heavy pneumatic conveying, foundry exhaust, abrasive dust extraction.",
    bestApplications: ["Pneumatic Conveying", "Foundry Cupola Exhaust", "Sawdust Extraction", "Abrasive Sand Handling"],
    dustHandling: "Excellent for heavy, abrasive, coarse dusts, sawdust, metal chips, and particulate laden gases.",
    imageAlt: "Radial Blade Heavy Duty Paddle Impeller"
  },
  {
    id: "backward-inclined",
    name: "Backward Inclined Impeller",
    bladeProfile: "Flat Backward Inclined Single-Plate",
    description: "Flat blades tilted backward away from the direction of rotation. Non-overloading horsepower curve with high mechanical strength.",
    efficiency: "75% – 85%",
    bestFor: "Forced draft boilers, dust collection baghouses, fume scrubbers, chemical process fans.",
    bestApplications: ["Forced Draft Boilers", "Pulse-Jet Baghouses", "Fume Scrubbers", "Chemical Exhaust"],
    dustHandling: "Moderate dust loads; smooth airflow prevents significant particulate buildup on blade surfaces.",
    imageAlt: "Backward Inclined High Efficiency Fan Impeller"
  },
  {
    id: "backward-curved",
    name: "Backward Curved Impeller",
    bladeProfile: "Precision Curved Single-Thickness Aerodynamic",
    description: "Single-thickness curved blades providing high aerodynamic efficiency, quiet operation, and non-overloading power curves.",
    efficiency: "80% – 88%",
    bestFor: "Induced draft boiler fans, incinerators, cement kiln exhaust, high-volume industrial ventilation.",
    bestApplications: ["Induced Draft (ID) Boilers", "Incinerator Exhaust", "Cement Kiln Preheaters", "Heavy Industrial Ventilation"],
    dustHandling: "Good for light to moderate dust loads, flue gases with pre-separator cyclone.",
    imageAlt: "Backward Curved High Efficiency Fan Impeller"
  },
  {
    id: "airfoil",
    name: "Airfoil Blades Impeller",
    bladeProfile: "True Aerodynamic Hollow Airfoil Cross-Section",
    description: "True aerodynamic hollow airfoil blade cross-section delivering the highest mechanical efficiency and lowest acoustic decibel levels.",
    efficiency: "85% – 92%",
    bestFor: "Large power plant FD fans, clean gas circulation, high-capacity HVAC and industrial cleanrooms.",
    bestApplications: ["Power Plant Forced Draft", "Clean Gas Recirculation", "Pharma Cleanrooms", "Large Industrial Air Washers"],
    dustHandling: "Clean air applications where power consumption cost is critical (not for highly abrasive dust).",
    imageAlt: "Precision Aerofoil High Efficiency Fan Impeller"
  },
  {
    id: "paddle-open-blade",
    name: "Paddle Open Blade Impeller",
    bladeProfile: "Open Self-Cleaning Non-Clogging Spider Hub",
    description: "Open construction without front shroud ring. Eliminates any material entrapment and easily passes long fibrous particles.",
    efficiency: "50% – 65%",
    bestFor: "Textile fluff extraction, paper trim conveying, stringy material, woodworking shavings.",
    bestApplications: ["Textile Fluff & Fiber", "Paper Mill Edge Trim", "Wood Planer Shavings", "Plastic Filament Waste"],
    dustHandling: "Superior anti-clogging performance for stringy, sticky, or fibrous waste.",
    imageAlt: "Paddle Open Blade Non-Clogging Centrifugal Impeller"
  },
  {
    id: "open-radial-blade",
    name: "Open Radial Blade Impeller",
    bladeProfile: "Heavy-Gauge Open Radial with Hardox Liners",
    description: "Heavy steel construction with open front plate, allowing free flow of coarse abrasive dusts and high-velocity scrap collection.",
    efficiency: "55% – 68%",
    bestFor: "Shot blast dust extraction, sand reclamation, heavy metal chips pickup, mineral grinding plants.",
    bestApplications: ["Shot Blasting Chambers", "Foundry Sand Reclamation", "Metal Swarf & Chips", "Mineral Crushing"],
    dustHandling: "Built for maximum abrasion resistance with optional Hardox liner plates.",
    imageAlt: "Open Radial Heavy Duty Scrap & Dust Impeller"
  },
  {
    id: "dwdi",
    name: "DWDI (Double Width Double Inlet)",
    bladeProfile: "Double-Inlet Symmetric Double-Width Impeller",
    description: "Double suction design admitting air from both sides into an extra-wide wheel, delivering double the airflow volume for a given diameter.",
    efficiency: "80% – 88%",
    bestFor: "Large industrial ventilation, central air washer plants, furnace recirculating blowers.",
    bestApplications: ["High-Volume Factory Ventilation", "Central Evaporative Coolers", "Industrial Drying Ovens", "Furnace Recirculation"],
    dustHandling: "Clean to moderately filtered air across high volume handling installations.",
    imageAlt: "DWDI Double Width Double Inlet Centrifugal Impeller"
  }
];

export const PRODUCTS_DATA: ProductItem[] = [
  // 1. Dust Collection & Air Pollution Control Systems
  {
    id: "bag-type-dust-collector",
    imageUrl: "/images/products/scimax-brochure-page-industries.jpg",
    images: ["/images/products/scimax-brochure-page-industries.jpg"],
    slug: "bag-type-dust-collector",
    name: "Pulse-Jet Bag Type Dust Collector",
    category: "dust-collection",
    categoryName: "Dust Collection & Air Pollution",
    tagline: "Continuous-Duty Online Reverse Pulse-Jet Air Cleaning",
    shortDescription: "High-efficiency pulse-jet bag filter system with automatic reverse pulse jet cleaning. Heavy dust drops via pyramid hopper while fine particles collect on non-woven filter bags.",
    detailedDescription: "Scimax Bag Type Dust Collectors are engineered for 24/7 continuous duty operation in the most demanding industrial environments. The dust-laden air enters through the hopper or side inlet plenum where heavier particles lose velocity and drop immediately into the collection hopper. Finer particles travel upward and deposit on the exterior of high-grade needle-felt filter bags. Cleaned air passes through the bag centers into the clean air chamber and exhausts to atmosphere. High-pressure compressed air pulses from digital sequential timers provide instantaneous cleaning without stopping process airflow.",
    keyFeatures: [
      "Continuous-duty online & offline reverse pulse-jet cleaning",
      "Modular design expandable from 500 CFM to 1,00,000 CFM",
      "99.9% filtration efficiency down to 1 micron particulate size",
      "Heavy-duty pyramid or trough hopper with rotary airlock valve / counter-weight damper",
      "Quick-release snap-band bag mounting for fast, tool-free changeover",
      "Differential pressure magnehelic gauge port for real-time bag resistance monitoring",
      "Explosion relief vents, spark arrestors, and acoustic enclosures available"
    ],
    specs: [
      { label: "Airflow Capacity Range", value: "500 to 1,00,000 CFM (850 to 1,70,000 m³/hr)" },
      { label: "Filtration Efficiency", value: "Up to 99.9% (CPCB/GPCB emission SPM < 30 mg/Nm³)" },
      { label: "Cleaning Mechanism", value: "Online Pulse-Jet Solenoid & Diaphragm Valves (4-6 bar air)" },
      { label: "Filter Media Options", value: "Polyester Needle Felt, PTFE Membrane, Nomex, Ryton, Polypropylene" },
      { label: "Casing Thickness", value: "3.15 mm to 6 mm Mild Steel / SS 304 / SS 316" },
      { label: "Operating Temperature", value: "Ambient up to 260°C with high-temp Nomex/Fiberglass media" },
      { label: "Discharge Options", value: "Rotary Airlock Valve, Manual Slide Gate, Double Flap Valve" }
    ],
    applications: [
      "Foundries & Metal Grinding",
      "Pharmaceutical Dry Granulation & Tableting",
      "Cement & Fly Ash Handling",
      "Textile Spinning & Fiber Collection",
      "Chemical Powder Mixing & Bagging",
      "Plywood & Woodworking Sanding"
    ],
    suitableIndustries: ["Foundry", "Pharma", "Textile", "Cement", "Chemical", "Plywood Manufacturing", "Food"],
    capacityRange: "500 – 1,00,000 CFM",
    pressureRange: "150 – 450 mm WG",
    materialOptions: ["Mild Steel (IS 2062)", "Stainless Steel SS 304 / 316L", "Epoxy Coated"],
    driveOptions: ["Centrifugal ID Fan Direct / V-Belt"],
    badge: "Bestseller"
  },
  {
    id: "industrial-cyclone-dust-collector",
    imageUrl: "/images/products/centrifugal-blower-pedestal.jpg",
    images: ["/images/products/centrifugal-blower-pedestal.jpg"],
    slug: "industrial-cyclone-dust-collector",
    name: "Industrial High-Efficiency Cyclone Dust Collector",
    category: "dust-collection",
    categoryName: "Dust Collection & Air Pollution",
    tagline: "Centrifugal Pre-Separation for High Dust Loads & Spark Trapping",
    shortDescription: "Heavy-duty tangential inlet centrifugal cyclone separators for bulk dust separation, coarse particle recovery, and pre-filtration ahead of secondary baghouses.",
    detailedDescription: "Scimax Industrial Cyclones utilize centrifugal force and vortex air dynamics to separate medium-to-large particulate from process airstreams. The high-velocity tangential inlet forces the dust-laden stream into a downward helical spiral. Centrifugal force drives particles against the outer cyclone wall where friction reduces velocity, causing them to slide down into the collection bin, while the clean vortex ascends up through the central vortex finder tube. Ideal as standalone primary separators or spark arrestors before expensive fabric filters.",
    keyFeatures: [
      "No moving internal parts — virtually zero maintenance requirements",
      "Handles heavy dust loads, high temperatures, and abrasive particulate",
      "Operates efficiently as primary spark arrester & product reclaim cyclone",
      "Heavy gauge scroll with optional wear-resistant ceramic or Hardox lining",
      "Standard collection bins, barrel adapters, or continuous rotary valve discharge",
      "Single cyclone or multi-cyclone cluster arrangements"
    ],
    specs: [
      { label: "Capacity Range", value: "1,000 to 45,000 CFM" },
      { label: "Separation Efficiency", value: "85% – 95% on particles > 10 microns" },
      { label: "Inlet Velocity", value: "15 – 22 m/sec optimal" },
      { label: "Pressure Drop", value: "50 – 150 mm WG" },
      { label: "Construction", value: "3 mm to 8 mm Mild Steel / SS 304" },
      { label: "Discharge", value: "Hermetic Drum kit / Rotary Air Lock" }
    ],
    applications: [
      "Woodworking shavings & sawdust separation",
      "Boiler fly-ash pre-collection",
      "Metal grinding & foundry sand reclamation",
      "Grain milling & food hulls separation",
      "Ceramics spray dryer exhaust"
    ],
    suitableIndustries: ["Plywood Manufacturing", "Boiler", "Foundry", "Ceramics", "Food", "Coal"],
    capacityRange: "1,000 – 45,000 CFM",
    pressureRange: "50 – 150 mm WG"
  },
  {
    id: "multi-dust-collector-boilers",
    imageUrl: "/images/products/id-fan-heavy-duty.jpg",
    images: ["/images/products/id-fan-heavy-duty.jpg","/images/products/id-fan-v-belt-drive.jpg"],
    slug: "multi-dust-collector-boilers",
    name: "Multi-Dust Collector (MDC) for Boilers",
    category: "dust-collection",
    categoryName: "Dust Collection & Air Pollution",
    tagline: "High-Volume Multi-Tubular Mechanical Flue-Gas Fly Ash Collector",
    shortDescription: "Multi-cyclone tubular collector designed for flue-gas dust separation in solid fuel-fired steam boilers, thermic fluid heaters, and incinerators.",
    detailedDescription: "The Scimax MDC (Multi Dust Collector) houses an array of high-grade cast iron or wear-resistant alloy cyclone tubes inside a unified casing. Each tube is equipped with precision axial swirl vanes that generate intense centrifugal vortices. Flue gas from wood-, coal-, briquette-, or husk-fired boilers passes through these multiple tubes in parallel, achieving high collection efficiency with low space consumption and excellent thermal resistance up to 350°C.",
    keyFeatures: [
      "Heavy cast iron (CI) / Nihard swirl vanes for high abrasion resistance",
      "Compact footprint compared to single large cyclone",
      "Withstands high flue-gas temperatures up to 350°C",
      "Low pressure drop minimizing boiler induced draft fan power draw",
      "Individual tube inspection access doors and insulated casing panels"
    ],
    specs: [
      { label: "Boiler Capacity Range", value: "1 TPH to 30 TPH solid fuel boilers" },
      { label: "Flue Gas Flow", value: "2,000 to 80,000 m³/hr" },
      { label: "Efficiency", value: "80% – 92% fly-ash separation" },
      { label: "Tube Material", value: "High Grade Cast Iron (CI Gr 20/25) / Cast Steel" },
      { label: "Operating Temp", value: "Up to 350°C continuous" }
    ],
    applications: [
      "Coal, Wood, Bagasse & Briquette fired steam boilers",
      "Thermic Fluid Heaters & Waste Heat Recovery Boilers",
      "Biomass gasifier flue gas cleanup",
      "Paper mill & textile process boilers"
    ],
    suitableIndustries: ["Boiler", "Paper Mill", "Textile", "Gasifier Plant", "Chemical"],
    capacityRange: "2,000 – 80,000 m³/hr",
    pressureRange: "60 – 120 mm WG"
  },
  {
    id: "bag-filter-boiler-pollution-control",
    imageUrl: "/images/products/id-fan-v-belt-drive.jpg",
    images: ["/images/products/id-fan-v-belt-drive.jpg","/images/products/scimax-brochure-page-industries.jpg"],
    slug: "bag-filter-boiler-pollution-control",
    name: "Bag Filter for Boiler Pollution Control (APCD)",
    category: "dust-collection",
    categoryName: "Dust Collection & Air Pollution",
    tagline: "Comprehensive APCD Meeting Strict CPCB/GPCB SPM Norms (< 30 mg/Nm³)",
    shortDescription: "Engineered Air Pollution Control Device (APCD) for solid fuel boilers featuring pre-cyclones, multi-clones, bypass dampers, high-temp fiberglass/PPS filter bags, and thermal insulation.",
    detailedDescription: "Designed specifically to satisfy strict Central & State Pollution Control Board guidelines (SPM < 30 mg/Nm³), Scimax Boiler Bag Filter packages provide an integrated solution for coal, lignite, petcoke, biomass, and agro-waste fired boilers. Systems incorporate upstream spark-arrestor cyclones or MDCs to capture burning embers, an emergency cold-air dilution/bypass damper system for thermal protection, high-temperature PPS/Ryton or Woven Fiberglass with PTFE membrane filter bags, insulated casing to prevent acid dew-point condensation, and automated offline/online pulse-jet cleaning.",
    keyFeatures: [
      "Guarantees outlet emission SPM < 30 mg/Nm³ (compliance ready)",
      "Integrated emergency pneumatic bypass & cold air dilution damper",
      "High temperature Ryton / PPS / Nomex / Fiberglass + PTFE bags",
      "Mineral wool thermal insulation with GI/Aluminium cladding",
      "Heavy duty ID fan engineered for high temperature and corrosive flue gas",
      "Real-time PLC/SCADA control panel with Delta-P and temperature interlocks"
    ],
    specs: [
      { label: "Emission Guarantee", value: "SPM < 30 mg/Nm³ (or < 50 mg/Nm³ as specified)" },
      { label: "Operating Temp", value: "140°C – 220°C (with thermal bypass security)" },
      { label: "Air-to-Cloth Ratio", value: "0.8 to 1.1 m/min for flue gas duty" },
      { label: "Filter Media", value: "PPS / Ryton / Woven Fiberglass + PTFE membrane" },
      { label: "Insulation", value: "50 mm - 100 mm Rockwool with 22G Aluminium / GI cladding" }
    ],
    applications: [
      "Industrial solid fuel steam boilers & power plants",
      "Lignite, coal & agro-waste fired furnaces",
      "Gasifier power plants and thermic fluid heating stations"
    ],
    suitableIndustries: ["Boiler", "Textile", "Paper Mill", "Chemical", "Gasifier Plant", "Coal"],
    capacityRange: "3,000 – 1,20,000 m³/hr",
    pressureRange: "200 – 400 mm WG",
    badge: "High Demand"
  },
  {
    id: "packed-bed-scrubber",
    imageUrl: "/images/products/centrifugal-fan-blue-stand.jpg",
    images: ["/images/products/centrifugal-fan-blue-stand.jpg"],
    slug: "packed-bed-scrubber",
    name: "Packed Bed Wet Gas Scrubber",
    category: "dust-collection",
    categoryName: "Dust Collection & Air Pollution",
    tagline: "Acidic Fumes, SOx, NOx & Chemical Vapor Neutralization",
    shortDescription: "Vertical/horizontal packed tower wet scrubbers utilizing chemical scrubbing liquor, high-surface-area Pall rings/Tellerettes packing, and mist eliminators for toxic gas absorption.",
    detailedDescription: "Scimax Packed Bed Scrubbers neutralize corrosive, noxious, and water-soluble fumes generated during chemical synthesis, metal pickling, electroplating, and boiler sulphur-gas emissions. Dust and gas pass counter-currently through a randomly packed bed irrigated with neutralizing liquid (e.g. NaOH, water, oxidizing reagents). A high-efficiency chevron or mesh pad mist eliminator removes entrained droplets before the gas exits via an anti-corrosive PP/FRP or SS blower.",
    keyFeatures: [
      "PP / FRP / SS 316 / HDPE construction for maximum corrosion resistance",
      "High specific surface area polypropylene Pall rings / Tri-Packs",
      "Recirculation pump with pH sensor and automated caustic dosing system",
      "Integrated high-efficiency droplet separator mist eliminator",
      "Compatible as tandem add-on downstream of bag filter systems"
    ],
    specs: [
      { label: "Capacity Range", value: "1,000 to 50,000 m³/hr" },
      { label: "Gas Removal Efficiency", value: "95% – 99% for HCl, SO2, Cl2, NH3, Acid Mists" },
      { label: "Packing Height", value: "1200 mm to 3000 mm tailored to contact time" },
      { label: "Material", value: "PP, FRP, PP+FRP, SS 316L, Mild Steel rubber lined" }
    ],
    applications: [
      "Chemical reactors & acid pickling baths",
      "Boiler flue-gas sulphur dioxide (SO2) reduction",
      "Pharma active ingredient synthesis exhaust",
      "Fertilizer & pesticide fume scrubbing"
    ],
    suitableIndustries: ["Chemical", "Pharma", "Boiler", "Iron/Steel"],
    capacityRange: "1,000 – 50,000 m³/hr"
  },
  {
    id: "floor-type-silo-vent-filter",
    imageUrl: "/images/products/scimax-brochure-page-industries.jpg",
    images: ["/images/products/scimax-brochure-page-industries.jpg"],
    slug: "floor-type-silo-vent-filter",
    name: "Floor Mounted Silo Vent Filter",
    category: "dust-collection",
    categoryName: "Dust Collection & Air Pollution",
    tagline: "Ground-Level Maintenance for Silos with Restricted Rooftop Access",
    shortDescription: "High-pressure pulse-jet silo venting filter stationed at floor level, ducted to silo roof. Features gasketed inspection doors, cartridge or bag elements, and differential pressure ports.",
    detailedDescription: "For industrial silos where rooftop access is restricted, hazardous, or non-compliant with safety regulations, the Scimax Floor Mounted Silo Vent Filter provides a ground-level solution. The venting duct routes displaced air from pneumatic tanker unloading down to the ground unit. Pulse-jet compressed air cleaning automatically dislodges powder back into the silo pneumatic feed or recovery vessel, ensuring 100% safe ground maintenance without working at height.",
    keyFeatures: [
      "Safe ground-level filter inspection, bag changing, and valve maintenance",
      "Cartridge or tubular bag filter options with up to 99.9% separation",
      "Automatic pulse-jet cleaning tied into pneumatic filling cycle",
      "Weatherproof IP65 housing with explosion relief door options",
      "Heavy duty gasketed doors preventing dust and water ingress"
    ],
    specs: [
      { label: "Filtering Area", value: "10 m² to 150 m²" },
      { label: "Pneumatic Airflow", value: "500 to 4,000 m³/hr (handling tanker discharge rates)" },
      { label: "Efficiency", value: "99.9% filtration down to 0.5 micron (spunbond polyester)" },
      { label: "Cleaning Pressure", value: "5 to 6 bar instrument air" }
    ],
    applications: [
      "Cement, fly ash, and slag storage silos",
      "Lime, calcium carbonate, and gypsum tanks",
      "Flour, starch, and grain storage silos in food plants"
    ],
    suitableIndustries: ["Cement", "Coal", "Food", "Chemical", "Ceramics"],
    capacityRange: "500 – 4,000 m³/hr"
  },
  {
    id: "top-mounted-silo-vent-filter",
    imageUrl: "/images/products/scimax-brochure-page-industries.jpg",
    images: ["/images/products/scimax-brochure-page-industries.jpg"],
    slug: "top-mounted-silo-vent-filter",
    name: "Top Mounted Silo Vent Filter",
    category: "dust-collection",
    categoryName: "Dust Collection & Air Pollution",
    tagline: "Direct Silo Roof Mounting with 99.9% Filtration & Gravity Powder Return",
    shortDescription: "Compact cylindrical weatherproof filter mounted directly on top of storage silos. Captures cement, fly ash, lime, flour, returning powder directly into the silo by gravity.",
    detailedDescription: "Scimax Top Mounted Silo Vent Filters are installed directly on the silo roof flange. Displaced air from pneumatic tanker filling passes through pleated spunbonded polyester cartridges. High-efficiency reverse pulse-jet cleaning pulses air down through the cartridges, allowing filtered dust to drop directly back down into the silo under gravity—eliminating any auxiliary dust disposal ductwork or hoppers.",
    keyFeatures: [
      "Direct gravity discharge into silo — no hoppers, ducts, or rotary valves needed",
      "Tool-free cartridge removal from clean air side in minutes",
      "Heavy gauge weather-resistant circular housing with top rain hood",
      "Up to 99.9% filtration efficiency for cement, lime, fly ash, and flour",
      "Integrated electronic timer and compressed air reservoir tank"
    ],
    specs: [
      { label: "Filter Surface Area", value: "12 m², 24 m², 36 m², 48 m² standard" },
      { label: "Body Diameter", value: "600 mm / 800 mm / 1000 mm" },
      { label: "Efficiency", value: "99.9% (residual dust < 10 mg/m³)" },
      { label: "Cartridge Media", value: "Water-repellent Spunbond Polyester with Antistatic / PTFE coat" }
    ],
    applications: [
      "Ready-mix concrete batching plant silos",
      "Fly ash storage in thermal power plants",
      "Lime & silica storage silos in glass/ceramic plants",
      "Grain & flour storage bins in food processing"
    ],
    suitableIndustries: ["Cement", "Ceramics", "Food", "Coal", "Chemical"],
    capacityRange: "800 – 3,500 m³/hr"
  },

  // 2. Fume Extraction Systems
  {
    id: "fume-extraction-system",
    imageUrl: "/images/products/id-fan-v-belt-drive.jpg",
    images: ["/images/products/id-fan-v-belt-drive.jpg","/images/products/id-fan-heavy-duty.jpg","/images/products/centrifugal-blower-pedestal.jpg"],
    slug: "fume-extraction-system",
    name: "Industrial Fume Extraction & Control System",
    category: "fume-extraction",
    categoryName: "Fume Extraction Systems",
    tagline: "GPCB / MPCB / CPCB Norms Compliant Fume Capture & Filtration",
    shortDescription: "Complete turnkey systems capturing hot smoke, toxic vapors, and metallic fumes from induction furnaces, electric arc furnaces, shaft foundries, AOD converters, and chemical reactors.",
    detailedDescription: "Scimax Fume Extraction Systems capture fugitive emissions at the point of generation through custom-engineered swivel hoods, canopy hoods, side suction rings, or lip hoods. The captured hot fumes pass through spark quenchers and dilution systems before entering high-temperature baghouses or scrubbers powered by heavy-duty Scimax ID Fans. Fully compliant with Gujarat Pollution Control Board (GPCB), Maharashtra Pollution Control Board (MPCB), and Central Pollution Control Board (CPCB) norms.",
    keyFeatures: [
      "Heavy duty motorized or counter-balanced 360° swivel hoods for furnace charging",
      "Spark arrestor and thermal dilution dampers preventing bag damage",
      "Non-overloading heavy-duty ID Centrifugal Fan with dynamically balanced impellers",
      "Guarantees clear shop floor visibility and pollution board compliance",
      "Complete package: Hoods, ductwork, damper, bag filter/scrubber, chimney, and panel"
    ],
    specs: [
      { label: "System Airflow Range", value: "5,000 to 1,50,000 CFM (8,500 to 2,55,000 m³/hr)" },
      { label: "Operating Temp Range", value: "Ambient up to 450°C with thermal dilution" },
      { label: "Compliance Standards", value: "CPCB / GPCB / MPCB emission guidelines" },
      { label: "Hood Types", value: "Swivel Hood, Canopy Hood, Side-Draft Hood, Lip Exhaust" }
    ],
    applications: [
      "Induction furnaces in mini steel plants",
      "Electric Arc Furnaces (EAF) & AOD converters",
      "Foundry shaft furnaces & cupolas",
      "Calcium carbide & chemical hazardous incinerators",
      "Copper/Aluminium smelting dryers & rotary kilns"
    ],
    suitableIndustries: ["Iron/Steel", "Foundry", "Furnaces", "Chemical", "Boiler"],
    capacityRange: "5,000 – 1,50,000 CFM",
    pressureRange: "250 – 600 mm WG",
    badge: "Turnkey System"
  },

  // 3. Centrifugal Blowers & Fans
  {
    id: "induced-draft-id-fan",
    imageUrl: "/images/products/id-fan-heavy-duty.jpg",
    images: ["/images/products/id-fan-heavy-duty.jpg","/images/products/id-fan-v-belt-drive.jpg","/images/products/centrifugal-fan-blue-stand.jpg","/images/products/scimax-brochure-page-centrifugal.jpg"],
    slug: "induced-draft-id-fan",
    name: "Induced Draft (ID) Centrifugal Fan",
    category: "centrifugal-blowers",
    categoryName: "Centrifugal Blowers & Fans",
    tagline: "Heavy-Duty Flue Gas & Dust Exhaust with Non-Overloading Power Curve",
    shortDescription: "High-capacity ID Fans engineered from 0.5 to 100 HP, handling volumes from 600 up to 8,00,000 m³/hr and static pressures up to 250 mm WG. Wheel diameters 200 mm to 2762 mm.",
    detailedDescription: "Scimax Induced Draft (ID) Fans are built to extract hot gases, dust, and flue emissions from industrial boilers, furnaces, kilns, and baghouses under negative pressure. Fabricated from heavy-gauge carbon steel or alloy plates, each impeller is statically and dynamically balanced to ISO 6.3 standards on computer-controlled balancing machines. Equipped with heavy-duty bearing blocks, water/air cooled shafts for high-temperature duty, and non-overloading backward curved/inclined or radial impellers.",
    keyFeatures: [
      "Power Range: 0.5 HP to 100 HP (custom higher HP available on request)",
      "Air Capacity: 600 to 8,00,000 m³/hr",
      "Static Pressure: Up to 250 mm WG",
      "Impeller Diameter: 200 mm to 2762 mm",
      "Statically & dynamically balanced to ISO 6.3 for zero vibration",
      "Available in Direct Drive, V-Belt Drive, or Flexible Coupling drive options",
      "Clockwise (CW) & Counter-Clockwise (CCW) in all 8 discharge orientations"
    ],
    specs: [
      { label: "Motor Power Range", value: "0.5 HP to 100 HP" },
      { label: "Air Delivery Capacity", value: "600 to 8,00,000 m³/hr" },
      { label: "Static Pressure", value: "Up to 250 mm WG" },
      { label: "Wheel Diameter", value: "200 mm to 2,762 mm" },
      { label: "Drive Arrangements", value: "Direct Motor Mount, V-Belt, Flexible Coupling (Arrangement 1, 3, 4, 8, 9)" },
      { label: "Balancing Grade", value: "ISO 1940 Grade G 6.3 (or G 2.5 on demand)" },
      { label: "Cooling Options", value: "Shaft Cooling Disc, Water-Cooled Bearing Blocks for >150°C" }
    ],
    applications: [
      "Steam Boilers (Coal, Wood, Bagasse, Gas)",
      "Baghouse dust collection exhaust",
      "Foundry cupola & steel furnace ventilation",
      "Ceramic & brick tunnel kilns",
      "Hot air recirculation systems"
    ],
    suitableIndustries: ["Boiler", "Iron/Steel", "Foundry", "Ceramics", "Paper Mill", "Textile", "Chemical", "Cement"],
    capacityRange: "600 – 8,00,000 m³/hr",
    pressureRange: "Up to 250 mm WG",
    powerRange: "0.5 – 100 HP",
    impellerOptions: ["Backward Curved", "Backward Inclined", "Radial Blade", "Airfoil"],
    badge: "Core Flagship"
  },
  {
    id: "forced-draft-fd-fan",
    imageUrl: "/images/products/fd-fan-burner-blower.jpg",
    images: ["/images/products/fd-fan-burner-blower.jpg","/images/products/fd-fan-conical-outlet.jpg","/images/products/high-pressure-blower-direct.jpg","/images/products/centrifugal-blower-pedestal.jpg","/images/products/scimax-brochure-page-centrifugal.jpg"],
    slug: "forced-draft-fd-fan",
    name: "Forced Draft (FD) High-Pressure Centrifugal Blower",
    category: "centrifugal-blowers",
    categoryName: "Centrifugal Blowers & Fans",
    tagline: "High Air Volume at Elevated Static Pressure & High Speed",
    shortDescription: "High-pressure FD Blowers ranging from 1 to 100 HP, delivering capacities from 20 to 1,20,000 m³/hr and static pressures up to 1000 mm WG. Wheel diameters 200 mm to 1200 mm.",
    detailedDescription: "Scimax Forced Draft (FD) Fans are high-pressure centrifugal blowers engineered to supply combustion air to boilers, burners, gasifiers, fluid bed combustors, and pneumatic conveying lines under positive pressure. Designed to maintain stable airflow even against varying system resistance, with high mechanical efficiency and low operating noise. Impellers are CNC laser-cut and welded with reinforced stiffener rings.",
    keyFeatures: [
      "Power Range: 1 HP to 100 HP",
      "Air Delivery Capacity: 20 to 1,20,000 m³/hr",
      "Static Pressure: High pressure up to 1000 mm WG",
      "Wheel Diameter: 200 mm to 1200 mm",
      "Delivers large air volume at higher pressure and rotational speed",
      "Heavy duty rigid pedestal and dynamically balanced rotor",
      "Precision inlet guide vanes and flow control dampers"
    ],
    specs: [
      { label: "Motor Power Range", value: "1 HP to 100 HP" },
      { label: "Air Capacity", value: "20 to 1,20,000 m³/hr" },
      { label: "Static Pressure", value: "Up to 1000 mm WG" },
      { label: "Wheel Diameter", value: "200 mm to 1,200 mm" },
      { label: "Impeller Types", value: "Forward Curved, Backward Inclined, Radial Blade, Airfoil" },
      { label: "Materials", value: "IS 2062 Mild Steel, SS 304, SS 316, Boiler Quality Plates" }
    ],
    applications: [
      "Boiler combustion primary & secondary air supply",
      "Fluidized bed combustion (FBC) boilers",
      "Furnace oil & gas burner combustion blowers",
      "Pneumatic material conveying pipelines",
      "Cupola furnace blast air supply"
    ],
    suitableIndustries: ["Boiler", "Furnaces", "Iron/Steel", "Gasifier Plant", "Plastics", "Chemical"],
    capacityRange: "20 – 1,20,000 m³/hr",
    pressureRange: "Up to 1000 mm WG",
    powerRange: "1 – 100 HP",
    impellerOptions: ["Forward Curved", "Backward Curved", "Radial Blade", "DWDI"],
    badge: "High Pressure"
  },

  // 4. Axial Flow Fans
  {
    id: "tube-axial-fan",
    imageUrl: "/images/products/tube-axial-direct-drive.jpg",
    images: ["/images/products/tube-axial-direct-drive.jpg", "/images/products/tube-axial-v-belt-pair.jpg", "/images/products/bifurcated-axial-fan-unit.jpg", "/images/products/scimax-axial-flow-fans-brochure.jpg"],
    slug: "tube-axial-fan",
    name: "Tube Axial Flow Fan (Direct / V-Belt)",
    category: "axial-fans",
    categoryName: "Axial Flow Fans",
    tagline: "High-Volume Ducted Ventilation & Fume Exhaust",
    shortDescription: "High-flow tubular casing axial fans with capacities from 850 to 3,00,000 m³/hr. Available in Direct Drive or V-Belt external motor mount, for standing, wall, or roof installation.",
    detailedDescription: "Scimax Tube Axial Fans feature aerodynamically shaped cast aluminum or fabricated steel aerofoil impellers housed within heavy rolled steel cylindrical casings with flanged ends. Designed for ducted ventilation, warehouse air circulation, paint booth exhaust, and industrial cooling. Available in Direct Drive (Arrangement 4) where motor sits in airstream, or V-Belt Driven (Arrangement 9) where the motor is mounted externally out of hot, corrosive, or flammable airstreams.",
    keyFeatures: [
      "Capacity Range: 850 to 3,00,000 m³/hr",
      "Airflow: 1,000 to 40,000 CFM",
      "Sweep Diameter: 310 mm to 1200 mm (12\" to 48\")",
      "Static Pressure: 0 to 75 mm WC (0\" to 3\" WC)",
      "Drive Options: Direct Drive or V-Belt external motor drive",
      "Mounting Configurations: Standing pedestal, wall mounting, or roof flange duct mount",
      "Cast aluminum alloy aerofoil blades with adjustable pitch angles"
    ],
    specs: [
      { label: "Capacity Range", value: "850 to 3,00,000 m³/hr (1,000 to 40,000 CFM)" },
      { label: "Sweep Diameter", value: "310 mm to 1,200 mm (12\" to 48\")" },
      { label: "Static Pressure", value: "0 to 75 mm WC (0\" to 3\" mmWC)" },
      { label: "RPM Range", value: "720 to 1440 RPM" },
      { label: "Impeller Material", value: "Cast Aluminum Aerofoil / Mild Steel / SS 304" },
      { label: "Balancing Grade", value: "Statically & dynamically balanced to ISO 6.3 standards" }
    ],
    applications: [
      "Factory shed & warehouse ventilation",
      "Spray paint booth exhaust systems",
      "Foundry cooling & furnace hall exhaust",
      "Textile humidification & air washer returns",
      "Transformer room & electrical panel cooling"
    ],
    suitableIndustries: ["Textile", "Foundry", "Pharma", "Plastics", "Plywood Manufacturing", "Food"],
    capacityRange: "850 – 3,00,000 m³/hr",
    pressureRange: "0 – 75 mm WC",
    materialOptions: ["Mild Steel", "Stainless Steel SS 304", "Cast Aluminum Blades"],
    driveOptions: ["Direct Motor Mount", "V-Belt Driven (External Motor)"]
  },
  {
    id: "roof-ventilator-axial-fan",
    imageUrl: "/images/products/scimax-brochure-page-axial.jpg",
    images: ["/images/products/scimax-brochure-page-axial.jpg", "/images/products/tube-axial-direct-drive.jpg"],
    slug: "roof-ventilator-axial-fan",
    name: "Industrial Roof Ventilator Fan",
    category: "axial-fans",
    categoryName: "Axial Flow Fans",
    tagline: "Heavy-Duty Weatherproof Factory Roof Exhaust",
    shortDescription: "Roof-mounted powered exhaust ventilator with capacities from 1500 to 75,000 m³/hr. Built with FRP/GI weather cowl, gravity back-draft dampers, and bird screens.",
    detailedDescription: "Engineered to extract hot stale air, fumes, and smoke accumulating near the ceiling of industrial sheds, Scimax Roof Ventilators provide reliable plant ventilation. Each unit incorporates a high-efficiency axial impeller, heavy-gauge base curbing plate matched to factory roofing corrugated sheets, a spun aluminum/FRP weather cap, and automatic gravity louvers that close when the fan shuts down to prevent rain and bird ingress.",
    keyFeatures: [
      "Airflow Capacity: 1500 to 75,000 m³/hr",
      "Aerodynamic weather cowl in FRP / Powder coated Mild Steel",
      "Automatic gravity louvers prevent reverse draft, bird and rain entry",
      "Direct drive weatherproof IP55/IP65 electric motor",
      "Base flange customized to match asbestos, metal sheet, or RCC roof profiles"
    ],
    specs: [
      { label: "Capacity Range", value: "1,500 to 75,000 m³/hr" },
      { label: "Sweep Diameters", value: "450 mm, 600 mm, 750 mm, 900 mm, 1200 mm" },
      { label: "Noise Level", value: "< 75 dBA at 3m distance" },
      { label: "Housing Material", value: "FRP Hood + Mild Steel Base Flange" }
    ],
    applications: [
      "Steel rolling mills & heavy fabrication workshops",
      "Textile weaving & processing sheds",
      "Automotive assembly plants and foundries",
      "Chemical storage warehouses"
    ],
    suitableIndustries: ["Iron/Steel", "Textile", "Chemical", "Plastics", "Plywood Manufacturing"],
    capacityRange: "1,500 – 75,000 m³/hr"
  },
  {
    id: "bifurcated-axial-flow-fan",
    imageUrl: "/images/products/bifurcated-axial-fan-unit.jpg",
    images: ["/images/products/bifurcated-axial-fan-unit.jpg", "/images/products/tube-axial-direct-drive.jpg", "/images/products/scimax-brochure-page-axial.jpg"],
    slug: "bifurcated-axial-flow-fan",
    name: "Bifurcated Axial Flow Fan",
    category: "axial-fans",
    categoryName: "Axial Flow Fans",
    tagline: "Motor Isolated from Hot, Corrosive & Flammable Gas Streams",
    shortDescription: "Special bifurcated dual-channel casing design that isolates the drive motor in an ambient air tunnel, completely shielding it from hostile process gases.",
    detailedDescription: "In applications handling high temperatures (up to 200°C), acid vapors, steam, or volatile solvents, standard direct-drive motors fail prematurely. Scimax Bifurcated Axial Flow Fans divide the airflow around a central isolated tunnel chamber. The motor sits in ambient room air within this open tunnel, maintaining low motor temperatures and isolating electrical windings from corrosive or explosive fumes. Can be installed standing or wall/duct mounted.",
    keyFeatures: [
      "Motor completely isolated from the air stream — no belt maintenance needed",
      "Handles hot air, wet steam, acid fumes, and volatile organic vapors",
      "Standing or inline duct/wall mounting options",
      "Available with anti-corrosive chemical coatings or stainless steel fabrication",
      "Impellers statically & dynamically balanced to ISO 6.3"
    ],
    specs: [
      { label: "Capacity Range", value: "1,000 to 60,000 m³/hr" },
      { label: "Temperature Rating", value: "Continuous duty up to 200°C" },
      { label: "Casing Material", value: "Heavy MS with Epoxy / FRP lining, or SS 304/316" },
      { label: "Mounting", value: "Standing pedestal or flanged inline duct mount" }
    ],
    applications: [
      "Chemical reactor exhaust & acid pickling exhaust",
      "Industrial drying ovens and paint baking tunnels",
      "Paper mill dryer hood exhaust",
      "Steam kettle and brewery exhaust"
    ],
    suitableIndustries: ["Chemical", "Paper Mill", "Food", "Pharma"],
    capacityRange: "1,000 – 60,000 m³/hr"
  },
  {
    id: "man-cooler-product-cooling-fan",
    imageUrl: "/images/products/scimax-brochure-page-axial.jpg",
    images: ["/images/products/scimax-brochure-page-axial.jpg"],
    slug: "man-cooler-product-cooling-fan",
    name: "Industrial Man Cooler & Product Cooling Fan",
    category: "axial-fans",
    categoryName: "Axial Flow Fans",
    tagline: "Heavy-Duty High-Velocity Spot Cooling for Personnel & Castings",
    shortDescription: "Rugged portable spot-cooling fans available in pedestal, tubular stand, swivel bracket, and caster trolley options. Delivers high velocity cooling air jet over long throw distances.",
    detailedDescription: "Designed to provide immediate thermal relief to workers operating near furnaces, kilns, and forging presses, or for accelerated cooling of hot castings and molded plastics. Scimax Man Coolers feature high-thrust cast aluminum aerofoil impellers with heavy-duty finger guards meeting OSHA safety standards, mounted on robust tubular frames with 360° swivel tilt adjustment.",
    keyFeatures: [
      "High air velocity jet throwing cooling breeze up to 30 meters",
      "Pedestal standing, wheel-mounted portable trolley, or wall/column bracket mount",
      "360° vertical swivel adjustment to direct airflow exactly where required",
      "Heavy duty wire mesh safety guards on both suction and discharge sides",
      "Heavy duty TEFC IP55 motor with vibration isolators"
    ],
    specs: [
      { label: "Sweep Diameters", value: "450 mm (18\"), 600 mm (24\"), 750 mm (30\"), 900 mm (36\"), 1200 mm (48\")" },
      { label: "Air Delivery", value: "6,000 to 65,000 m³/hr" },
      { label: "Throw Distance", value: "15 to 35 meters" },
      { label: "Configurations", value: "Column Mount, Pedestal Mount, Portable Caster Trolley" }
    ],
    applications: [
      "Furnace and boiler front operator cooling",
      "Foundry casting shakeout & cooling bay",
      "Glass bottle & ceramic cooling zones",
      "Steel rolling mill inspection bays"
    ],
    suitableIndustries: ["Foundry", "Furnaces", "Iron/Steel", "Ceramics", "Plastics"],
    capacityRange: "6,000 – 65,000 m³/hr"
  },

  // 5. Industrial Vacuum Cleaner
  {
    id: "industrial-vacuum-cleaner",
    imageUrl: "/images/products/high-pressure-blower-direct.jpg",
    images: ["/images/products/high-pressure-blower-direct.jpg"],
    slug: "industrial-vacuum-cleaner",
    name: "Heavy-Duty Three-Stage Industrial Vacuum Cleaner",
    category: "industrial-vacuum",
    categoryName: "Industrial Vacuum Cleaners",
    tagline: "Three-Stage Collection/Extraction of Dust, Granules, Turnings & Liquids",
    shortDescription: "Continuous-duty industrial vacuum extraction system with 400 mm steel tank, 25 mm polyester filter + 10 mm impregnated cellulose cartridge, turbine motor with silencer, and convertible blower function.",
    detailedDescription: "The Scimax Industrial Vacuum Cleaner is a rugged three-stage collection, extraction, and separation unit built for challenging factory floor housekeeping and CNC machine cleanup. It features a heavy 400 mm diameter steel collection tank, 25 mm primary polyester needle felt filter, and 10 mm impregnated cellulose secondary cartridge. Driven by a continuous-duty side-channel turbine motor with built-in acoustic silencer. Mounted on a heavy-duty portable trolley with industrial swivel casters. Delivers 350 m³/hr suction at the hose end and converts quickly into a high-velocity blower.",
    keyFeatures: [
      "Three-stage separation: Cyclone chamber + 25 mm polyester filter + 10 mm impregnated cellulose cartridge",
      "Heavy-duty continuous rated turbine motor with integrated silencer",
      "Large 400 mm diameter steel collection drum on heavy-duty swivel caster trolley",
      "Dual utility: High vacuum suction and convertible to high-velocity blower mode",
      "Delivers 350 m³/hr suction at suction hose end",
      "Ideal for metal turnings, machine coolant pickup, cement dust, and plastic granules"
    ],
    specs: [
      { label: "Collection Tank", value: "400 mm Diameter Heavy Gauge Steel Drum (60L / 100L)" },
      { label: "Filter System", value: "Three-stage: 25 mm Polyester Filter + 10 mm Impregnated Cellulose" },
      { label: "Air Delivery", value: "350 m³/hr at suction hose end" },
      { label: "Motor Type", value: "Heavy-duty continuous turbine motor with silencer" },
      { label: "Mobility", value: "Heavy duty portable trolley with 4 swivel casters" },
      { label: "Mode", value: "Convertible Vacuum Suction / Air Blower" }
    ],
    applications: [
      "CNC machine tool chip, lathe scrap, and cutting oil/coolant pickup",
      "Cast Iron turnings, metal filings, and welding slag cleaning",
      "Textile spinning fiber, fluff, and cotton waste pickup",
      "Pharmaceutical cleanroom and powder packing area floor cleaning",
      "Collection of small nuts, bolts, granules, and abrasive grit"
    ],
    suitableIndustries: ["Foundry", "Pharma", "Textile", "Plastics", "Food"],
    capacityRange: "350 m³/hr air delivery"
  },

  // 6. Accessories & Spare Parts
  {
    id: "core-accessories-spare-parts",
    imageUrl: "/images/products/scimax-brochure-page-impellers.jpg",
    images: ["/images/products/scimax-brochure-page-impellers.jpg"],
    slug: "core-accessories-spare-parts",
    name: "Dust Collector & Blower Core Spares & Accessories",
    category: "accessories",
    categoryName: "Accessories & Spare Parts",
    tagline: "OEM Replacement Spares for Guaranteed Air Quality & Zero Downtime",
    shortDescription: "Complete portfolio of genuine OEM replacement parts: Cartridge Filters, Diaphragm Kits, Pulse Valves, Solenoid Valves, Flexible Hoses, Bag Filters, Filter Cages with Venturi, Rotary Valves, Gravity Dampers, and Digital Sequential Timers.",
    detailedDescription: "To maintain optimal filtration efficiency and minimize plant downtime, Scimax supplies certified OEM spares. Each component is engineered to withstand abrasive dust, high cycle frequencies, and harsh industrial environments.",
    keyFeatures: [
      "Spunbond Polyester, PTFE Membrane & Antistatic Cartridge Filters",
      "High-cycle Diaphragm Repair Kits (3/4\", 1\", 1.5\", 2\", 2.5\" & 3\" Pulse Valves)",
      "High-pressure solenoid pilot valves with IP65 coil enclosures",
      "Precision CNC welded Filter Cages with aerodynamic aluminum/GI Venturi tops",
      "Heavy-duty cast iron / SS Rotary Airlock Valves with flexible tip rotors",
      "Microprocessor Digital Sequential Timers with Delta-P sensor inputs"
    ],
    specs: [
      { label: "Filter Bags", value: "Polyester, Nomex, Ryton, Fiberglass, PTFE (100 mm to 160 mm dia)" },
      { label: "Filter Cages", value: "8, 10, 12, 16, 20 wire GI / Mild Steel / SS 304 with Venturi" },
      { label: "Pulse Valves", value: "1\", 1.5\", 2\", 2.5\", 3\" Threaded / Dresser Nut pulse valves" },
      { label: "Digital Timers", value: "4 to 64 channel solid-state digital sequential timers with LED display" },
      { label: "Rotary Valves", value: "150 mm to 450 mm inlet square/round flange, 0.5 to 3 HP geared motor" }
    ],
    applications: [
      "Routine preventive maintenance of pulse-jet baghouses",
      "Filter changeovers during planned plant shutdowns",
      "Automation upgrades with sequential timers and differential pressure controls"
    ],
    suitableIndustries: ["Foundry", "Pharma", "Iron/Steel", "Textile", "Boiler", "Cement", "Chemical", "Food"],
    capacityRange: "Universal OEM Replacement"
  }
];
