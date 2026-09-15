
export interface ProductSubcategory {
  name: string;
  typicalUse: string;
  construction: string;
  description?: string;
  specs?: Record<string, string>;
}

export interface ImpellerProfile {
  id: number;
  name: string;
  description: string;
  bestFor: string;
  efficiency: string;
  bladeStyle: string;
}

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  badge: string;
  subcategories: ProductSubcategory[];
  keyFeatures: string[];
  operatingPrinciple?: string[];
  specsHighlights?: { label: string; value: string }[];
  industriesServed?: string[];
  bgAccent?: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  iconName: string;
  challenge: string;
  solution: string;
  recommendedEquipment: string[];
  dustTypes: string[];
}

export const COMPANY_INFO = {
  name: "Scimax Industries",
  tagline: "Engineering Cleaner Air for Indian Industry",
  vision: "To be India's premier provider of industrial equipment and system solutions for dust collection & control, air pollution control solutions, and centrifugal blowers & fans.",
  mission: "Dedicated to delivering customer orders on time with assured quality, backed by reliable field performance and service, continuously enhancing execution methods to meet evolving industry demands.",
  values: [
    { title: "Customer Respect & Satisfaction", desc: "Prioritizing client uptime, safety, and long-term operational excellence." },
    { title: "Ethical Practices & Transparency", desc: "Open, honest engineering recommendations without over-specifying or corner-cutting." },
    { title: "Commitment to Promises", desc: "Strict adherence to delivery timelines, guaranteed performance metrics, and compliance." },
    { title: "Teamwork & Loyalty", desc: "Fostering collaborative problem solving from our design desk to field installation." },
    { title: "Employee Welfare & Growth", desc: "Safe manufacturing facilities and continuous skill development for our technical workforce." }
  ],
  contacts: {
    directSales: {
      name: "Raj Patel",
      title: "Direct Sales Desk",
      phone: "+91 79906 59265",
      phoneRaw: "+917990659265",
      whatsappUrl: "https://wa.me/917990659265?text=Hello%20Scimax%20Industries,%20I%20would%20like%20to%20inquire%20about%20your%20industrial%20equipment."
    },
    technicalDesk: {
      name: "Ankit Patel",
      title: "Technical Desk",
      phone: "+91 83204 95952",
      phoneRaw: "+918320495952"
    },
    emails: [
      "sales@scimax.in",
      "scimaxindia@gmail.com"
    ],
    website: "www.scimax.in"
  },
  facilities: {
    registeredOffice: {
      title: "Registered Office",
      address: "110, Gajanan Industrial Estate, Near Hathijan Circle, GIDC Vatva, Ahmedabad - 382445, Gujarat, India",
      city: "Ahmedabad, Gujarat"
    },
    manufacturingPlant: {
      title: "Manufacturing Plant",
      address: "City Survey No. NA298, Shed No. 1, B/h Torrent Pharmaceuticals Ltd., Ahmedabad-Mehsana Highway, Village Chadasna, Tal. Kadi, Dist. Mehsana - 382810, Gujarat, India",
      city: "Kadi / Mehsana, Gujarat"
    },
    engineeringUnit: {
      title: "Advanced Ducting & Systems Facility",
      address: "Kathwada Industrial Zone, Ahmedabad, Gujarat, India",
      city: "Ahmedabad, Gujarat"
    }
  },
  certifications: [
    { title: "ISO 9001:2015", subtitle: "Quality Management System Certified", icon: "Award" },
    { title: "Make in India", subtitle: "100% Indigenous High-Precision Manufacturing", icon: "ShieldCheck" },
    { title: "IndiaMART Verified", subtitle: "Audited & Verified Industrial Supplier", icon: "CheckCircle2" },
    { title: "Pollution Board Compliant", subtitle: "Compliant with CPCB, GPCB & MPCB Norms", icon: "FileCheck" }
  ]
};

export const TRUST_STATS = [
  { value: "127+", label: "Forms of Dust Engineered For", sub: "Proprietary dust database & testing protocols" },
  { value: "96%", label: "Customer Retention Rate", sub: "Long-term relationships with Tier-1 plants" },
  { value: "14+", label: "Heavy Industries Served", sub: "Foundries, steel, pharma, boilers, chemicals" },
  { value: "ISO 9001", label: "Certified Manufacturing", sub: "2015 QMS standard & ISO 1940 G6.3 balancing" }
];

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { 
    name: "Products", 
    href: "/products",
    children: [
      { name: "Dust Collection Systems", href: "/products/dust-collection-systems", badge: "Core Systems" },
      { name: "Air Pollution Control", href: "/products/air-pollution-control", badge: "Boiler & Scrubbers" },
      { name: "Fume Extraction Systems", href: "/products/fume-extraction-systems", badge: "Furnace & Vacuum" },
      { name: "Silo Vent Filters", href: "/products/silo-vent-filters", badge: "99.9% Efficiency" },
      { name: "Centrifugal Blowers & Fans", href: "/products/centrifugal-blowers-fans", badge: "8 Impeller Types" },
      { name: "Accessories & Spares", href: "/products/accessories", badge: "Valves, Cages, Timers" }
    ]
  },
  { name: "Industries", href: "/industries" },
  { name: "Clients", href: "/clients" },
  { name: "Contact", href: "/contact" }
];

export const PRODUCTS: ProductItem[] = [
  {
    id: "dust-collection-systems",
    slug: "dust-collection-systems",
    name: "Dust Collection Systems",
    badge: "High-Efficiency Filtration",
    shortDescription: "Industrial baghouse collectors, high-throughput cyclones, and boiler MDC units engineered for continuous-duty dust removal.",
    longDescription: "At Scimax Industries, we deliver custom-engineered dust collection systems designed for superior performance, extreme durability, and energy efficiency. Built with precision and powered by innovation, each unit is sized according to dust particulate velocity, grain loading, and air-to-cloth ratios.",
    subcategories: [
      {
        name: "Bag Type Dust Collector",
        typicalUse: "General dust extraction across manufacturing floors and dry bulk handling",
        construction: "Heavy Gauge Mild Steel (MS) / Stainless Steel (SS304/SS316)",
        description: "Equipped with automatic online reverse pulse-jet cleaning systems, high-efficiency needle felt or woven filter bags, and airtight rotary airlock discharge hoppers."
      },
      {
        name: "Industrial Cyclone Dust Collector",
        typicalUse: "Coarse particle pre-separation and high-volume heavy dust loading",
        construction: "Wear-resistant Carbon Mild Steel (MS)",
        description: "Utilizes cyclonic centrifugal force to drop out 85-95% of large particulates before secondary filtration, drastically extending bag life."
      },
      {
        name: "Multi Dust Collector (MDC) for Boilers",
        typicalUse: "Boiler flue-gas fly ash control (coal, lignite, bagasse, and wood-fired systems)",
        construction: "Boiler-quality High-Temperature Mild Steel",
        description: "Features high-efficiency cast iron multiclone tubes engineered to handle flue gas sparks, abrasive ash, and fluctuating draft pressures."
      },
      {
        name: "Dust Collector Fans & Blowers",
        typicalUse: "Induced draft (ID) and forced draft (FD) air propulsion for collection loops",
        construction: "IS 2062 Gr.B Mild Steel / SS304",
        description: "Heavy-duty dynamically balanced impellers built specifically to resist material buildup and abrasive wear."
      }
    ],
    keyFeatures: [
      "High-Efficiency Filtration (>99.5% particulate capture)",
      "Continuous-duty online pulse-jet cleaning without shutting down airflow",
      "Robust welded MS/SS construction with corrosion-resistant polyurethane coating",
      "Low maintenance modular design with tool-less top and side bag removal access",
      "Differential pressure monitoring (Magnahelic gauge / digital transmitter ports)",
      "Engineered air-to-cloth ratio tailored to specific dust characteristics"
    ],
    operatingPrinciple: [
      "Dust-laden air enters the inlet plenum where internal baffle deflectors reduce velocity for gravity pre-separation.",
      "Heavier dust particulates drop immediately into the bottom pyramidal collection hopper.",
      "Finer airborne particulate flows upward and is trapped on the outer membrane of high-efficiency filter bags.",
      "Microprocessor-controlled reverse pulse-jet solenoids periodically release 5-6 bar compressed air through Venturi nozzles.",
      "The sudden shockwave flexes the filter fabric, dislodging accumulated dust cake into the hopper.",
      "Clean, purified air passes into the clean air chamber and exits through the induced draft fan into the atmosphere or workspace."
    ],
    specsHighlights: [
      { label: "Filtration Efficiency", value: "Up to 99.9%" },
      { label: "Air Volume Range", value: "500 to 1,50,000 m³/hr" },
      { label: "Filter Media", value: "Polyester, Nomex, Ryton, PTFE" },
      { label: "Discharge Options", value: "Rotary Airlock, Manual Slide Gate, Double Flap" }
    ],
    industriesServed: ["Foundry", "Pharma", "Textile", "Boilers", "Ceramics", "Cement", "Chemical", "Plywood"]
  },
  {
    id: "air-pollution-control",
    slug: "air-pollution-control",
    name: "Air Pollution Control Equipment",
    badge: "CPCB / GPCB / MPCB Compliant",
    shortDescription: "Custom-engineered wet scrubbers, boiler bag filters, and multi-stage emission control systems compliant with stringent Suspended Particulate Matter (SPM) norms.",
    longDescription: "Scimax Industries designs, manufactures, and installs complete Air Pollution Control Systems tailored for steel plants, chemical processing, foundries, metal finishing, and biomass/fossil fuel boilers. From flue-gas desulfurization scrubbers to heavy-duty multiclone separators, our systems guarantee compliance with national environmental standards.",
    subcategories: [
      {
        name: "Bag Filter for Boiler Pollution Control",
        typicalUse: "Flue gas emission management for wood, coal, briquette, and lignite boilers",
        construction: "Insulated Boiler-Grade Carbon Steel",
        description: "Equipped with spark arrestors, pre-cyclone drop boxes, bypass dilution dampers to protect bags from thermal spikes, and mineral wool insulation to prevent dew-point acid condensation."
      },
      {
        name: "Packed Bed & Venturi Scrubbers",
        typicalUse: "Corrosive acid fumes, SOx, NOx, chemical vapors, and wet sticky particulate",
        construction: "Polypropylene (PP), FRP, SS316L, or Rubber-Lined MS",
        description: "High-contact packing media with multi-tier spray headers, droplet eliminators, and caustic recirculation dosing."
      },
      {
        name: "Pre-Cyclone & Multiclone Separators",
        typicalUse: "Primary stage fly ash removal for high-dust flue gas streams",
        construction: "Abrasion-resistant Cast Iron or Heavy Plate MS",
        description: "Multiple parallel cyclone tube arrays providing high collection efficiency with low pressure drop."
      },
      {
        name: "Dilution & Bypass Damper Systems",
        typicalUse: "Thermal protection and emergency chimney routing during boiler trips",
        construction: "Heat-resistant refractory lined / SS310 dampers",
        description: "Pneumatically actuated fast-acting bypass dampers linked to thermocouple fail-safe interlocks."
      }
    ],
    keyFeatures: [
      "Strict SPM compliance (<30 mg/Nm³ or <50 mg/Nm³ based on regional board norms)",
      "Multiple pollution removal technologies: scrubbers, bag filters, electrostatic units, activated carbon",
      "Corrosion-resistant construction: Stainless Steel 304/316, FRP, or epoxy coated alloys",
      "Pre-cyclone separators for initial particulate load reduction",
      "Thermal insulation cladding to minimize thermal shock and moisture condensation",
      "Designed and manufactured at Kathwada & Kadi engineering facilities"
    ],
    specsHighlights: [
      { label: "SPM Emission Limit", value: "< 30 mg/Nm³ achievable" },
      { label: "Temperature Rating", value: "Ambient up to 260°C continuous" },
      { label: "Scrubber Efficiency", value: "Up to 98% acid gas neutralization" },
      { label: "Regulatory Compliance", value: "GPCB, MPCB, CPCB & MOEF" }
    ],
    industriesServed: ["Boiler", "Chemical", "Pharma", "Iron/Steel", "Gasifier Plant", "Plastics"]
  },
  {
    id: "fume-extraction-systems",
    slug: "fume-extraction-systems",
    name: "Fume Extraction Systems & Industrial Vacuums",
    badge: "Source Capture Technology",
    shortDescription: "High-performance furnace hoods, induction furnace swivel capture systems, and heavy-duty 350 m³/hr industrial vacuum recovery units.",
    longDescription: "Engineered to efficiently capture toxic vapors, metal oxides, dense smoke, and sub-micron particulates generated during induction melting, arc furnace tapping, welding, chemical reactions, and hot metal processing. Includes the Scimax Heavy-Duty Industrial Vacuum Cleaner for continuous metal chip, oil, and dust reclamation.",
    subcategories: [
      {
        name: "Furnace Swivel & Canopy Hood Systems",
        typicalUse: "Induction furnaces, electric arc furnaces, and foundry crucible tapping",
        construction: "Heavy Plate MS / Water-cooled or refractory lip shields",
        description: "Motorized or counterweighted swivel hoods that maintain continuous suction during charging, melting, slagging, and pouring operations."
      },
      {
        name: "Chemical & Incinerator Fume Systems",
        typicalUse: "Hazardous waste incinerators, copper dryers, pickling tanks, and reactor vents",
        construction: "Corrosion-resistant PP/FRP or SS316L ducting and collectors",
        description: "Source capture push-pull hoods engineered to eliminate fugitive emissions and worker exposure."
      },
      {
        name: "Industrial Heavy-Duty Vacuum Cleaner",
        typicalUse: "Continuous metal chip pickup, CNC lathe swarf, grease, fibers, and coolants",
        construction: "400 mm Steel Tank with Swivel Trolley Chassis",
        description: "Three-stage filtration system: 25 mm polyester primary filter, 10 mm impregnated cellulose cartridge, powered by heavy-duty continuous-rated turbine motor with integrated silencer."
      }
    ],
    keyFeatures: [
      "Source capture efficiency preventing smoke buildup in foundry bays",
      "High-temperature centrifugal ID fans with precision-balanced backward curved impellers",
      "Compliant with national and international occupational health standards (OSHA & Factory Act)",
      "Industrial Vacuum capacity: 350 m³/hr at suction hose end",
      "Dual vacuum & blower functionality for deep cleaning of CNC machines and automats",
      "No hose blockage design engineered for metal turnings, CI borings, and viscous liquids"
    ],
    specsHighlights: [
      { label: "Vacuum Air Delivery", value: "350 m³/hr at hose end" },
      { label: "Tank Construction", value: "400 mm Heavy Steel Drum" },
      { label: "Primary Filter", value: "25 mm Heavy Polyester" },
      { label: "Secondary Filter", value: "10 mm Impregnated Cellulose" },
      { label: "Furnace Extraction", value: "Induction, Arc, Shaft & AOD" }
    ],
    industriesServed: ["Foundry", "Iron/Steel", "Furnaces", "Chemical", "Machining & CNC", "Copper"]
  },
  {
    id: "silo-vent-filters",
    slug: "silo-vent-filters",
    name: "Silo Vent Filters & Bulk Material Collectors",
    badge: "99.9% Filtration Efficiency",
    shortDescription: "Floor-type and top-mounted compact pulse-jet venting units preventing dust emission during pneumatic tanker filling of dry bulk solids.",
    longDescription: "Storage silos for cement, fly ash, lime, gypsum, and flour experience intense positive air displacement during pneumatic tanker unloading. Scimax Silo Vent Filters automatically separate particulate, allowing only clean air to vent while dropping raw material back into the silo without product loss.",
    subcategories: [
      {
        name: "Top Mounted Silo Vent Filter",
        typicalUse: "Direct flange mounting on top of storage silos and bins",
        construction: "Weather-resistant powder-coated Mild Steel or SS304 body",
        description: "Equipped with automatic reverse pulse-jet cleaning, tool-free snap-in cartridge removal from top or side, and integrated rain-proof exhaust cowl."
      },
      {
        name: "Floor Type Silo Vent Filter",
        typicalUse: "Near-silo or floor installations where silo top height or crane access is restricted",
        construction: "Heavy-duty MS / SS with integrated support legs & hopper",
        description: "Connected to silo top via ducting; features dedicated exhaust blower, explosion vent door option, and ground-level maintenance access."
      }
    ],
    keyFeatures: [
      "Up to 99.9% filtration efficiency down to sub-micron dust particles",
      "Automatic reverse pulse-jet cleaning operating on 5-6 bar dry compressed air",
      "Tool-free cartridge or bag removal for minimal maintenance downtime",
      "Weather-resistant powder-coated MS or Stainless Steel 304/316 construction",
      "Explosion relief vent panel options for combustible dust (organic flour, starch, coal)",
      "Gasketed quick-release inspection doors and differential pressure gauge ports"
    ],
    specsHighlights: [
      { label: "Filtration Efficiency", value: "99.9% Sub-micron" },
      { label: "Cleaning Mechanism", value: "Automated Pulse-Jet" },
      { label: "Mounting Styles", value: "Top-Mounted & Floor-Type" },
      { label: "Materials Handled", value: "Cement, Fly Ash, Lime, Flour, Carbon" }
    ],
    industriesServed: ["Cement", "Coal", "Boiler", "Ceramics", "Chemical", "Plastics"]
  },
  {
    id: "centrifugal-blowers-fans",
    slug: "centrifugal-blowers-fans",
    name: "Centrifugal Blowers & Industrial Fans",
    badge: "ISO 1940 Grade G6.3 Balanced",
    shortDescription: "Heavy-duty Induced Draft (ID) fans up to 8,00,000 m³/hr and Forced Draft (FD) blowers up to 1000 mm WG, with 8 specialized impeller profiles.",
    longDescription: "Scimax Industries is an industry leader in manufacturing heavy-duty industrial centrifugal fans and high-pressure blowers. Every impeller and rotor assembly undergoes dynamic balancing to ISO 1940 Grade G6.3 standards on digital balancing machines, eliminating vibration and guaranteeing decades of reliable 24/7 industrial service.",
    subcategories: [
      {
        name: "Induced Draft (ID) Fans",
        typicalUse: "Boilers, furnace exhaust, kilns, baghouse draft, and high-temp flue gas",
        construction: "IS 2062 Gr.B Mild Steel / Boiler-Quality MS / SS304 / SS316",
        specs: {
          "Power Range": "0.5 HP to 100 HP",
          "Volumetric Capacity": "600 to 8,00,000 m³/hr",
          "Static Pressure": "Up to 250 mm WG",
          "Wheel Diameter": "200 mm to 2762 mm",
          "Operating Temp": "Up to 350°C (boiler flue gas)",
          "Drive Configuration": "Direct Drive, V-Belt (Arr. 9), Flexible Coupling"
        }
      },
      {
        name: "Forced Draft (FD) High-Pressure Blowers",
        typicalUse: "Combustion air supply, pneumatic conveying, fluid bed aeration, gasifiers",
        construction: "Heavy Welded MS / Cast Aluminium / SS304 / SS316",
        specs: {
          "Power Range": "1.0 HP to 100 HP",
          "Volumetric Capacity": "20 to 1,20,000 m³/hr",
          "Static Pressure": "Up to 1000 mm WG (High Pressure)",
          "Wheel Diameter": "200 mm to 1200 mm",
          "Operating Temp": "Ambient to 150°C",
          "Drive Configuration": "Direct Mount & V-Belt Drive"
        }
      }
    ],
    keyFeatures: [
      "Dynamically balanced to ISO 1940 Grade G6.3 on state-of-the-art balancing benches",
      "8 precision impeller profiles engineered for specific gas, dust, and pressure regimes",
      "Water-cooled bearing housings and heat-slinger discs for high-temperature service up to 350°C",
      "Variable discharge orientations complying with IS / AMCA standards (16 orientations)",
      "Robust carbon steel and stainless steel metallurgical selections",
      "Split housing designs on large models (>1500 mm dia) for effortless plant maintenance"
    ],
    specsHighlights: [
      { label: "Max Air Volume (ID)", value: "8,00,000 m³/hr" },
      { label: "Max Static Pressure (FD)", value: "Up to 1000 mm WG" },
      { label: "Max Wheel Diameter", value: "Up to 2762 mm" },
      { label: "Dynamic Balancing", value: "ISO 1940 Grade G6.3" }
    ],
    industriesServed: ["Boiler", "Gasifier Plant", "Foundry", "Iron/Steel", "Chemical", "Textile", "Paper Mill"]
  },
  {
    id: "accessories",
    slug: "accessories",
    name: "Accessories & Spare Parts",
    badge: "Precision OEM Spares",
    shortDescription: "Certified industrial dust collector spares: pulse valves, digital sequential timers, rotary airlocks, filter cages, and replacement media.",
    longDescription: "Maximize equipment uptime and ensure peak filtration performance with Scimax's comprehensive inventory of OEM-grade replacement components. From high-temp diaphragm pulse kits to precision CNC-machined rotary airlock valves, every accessory is engineered to exact dimensional tolerances.",
    subcategories: [
      {
        name: "Cartridge Filters",
        typicalUse: "Fine dust, powder coating, fume filtration, and silo vents",
        construction: "Cellulose, Spunbond Polyester, PTFE Membrane, Antistatic Aluminium Coating"
      },
      {
        name: "Pulse Valves & Diaphragm Kits",
        typicalUse: "High-speed reverse pulse jet cleaning manifolds",
        construction: "Die-cast Aluminium body with Nitrile or Viton high-flex diaphragms (3/4\" to 3\" ports)"
      },
      {
        name: "Filter Bags",
        typicalUse: "Primary filtration media across all baghouse models",
        construction: "Polyester Needle Felt, PPS (Ryton), Nomex (Aramid), Fiberglass, PTFE, Antistatic"
      },
      {
        name: "Filter Cages with Venturi",
        typicalUse: "Internal structural support for fabric filter bags",
        construction: "Galvanized Mild Steel (GI) / SS304 / SS316 with 8, 10, 12, or 20 wire longitudinal frames"
      },
      {
        name: "Rotary Airlock Valves",
        typicalUse: "Continuous dust discharge while maintaining system vacuum seal",
        construction: "Cast Iron / Cast Steel / SS304 with adjustable polyurethane or brass tipped rotors"
      },
      {
        name: "Solenoid Valves & Coils",
        typicalUse: "Pilot actuation for pulse valves",
        construction: "Weatherproof IP65 / Flameproof enclosure coils (24V DC, 110V AC, 230V AC)"
      },
      {
        name: "Gravity Dampers & Backdraft Flaps",
        typicalUse: "Preventing reverse airflow and isolating ductwork branches",
        construction: "Counterweighted MS / SS with high-temperature silicone blade seals"
      },
      {
        name: "Digital Sequential Pulse Timers",
        typicalUse: "Automated pulse-jet interval and pulse-duration sequencing",
        construction: "Solid-state microcontroller in IP65 transparent polycarbonate or metal enclosure (4 to 64 channels)"
      },
      {
        name: "Flexible Hoses & Clamps",
        typicalUse: "Vibration isolation between ductwork and vibrating machinery or blowers",
        construction: "Neoprene-coated fabric with spring steel wire helix / Silicone high-temp ducting"
      }
    ],
    keyFeatures: [
      "100% interchangeable with standard industrial baghouse configurations",
      "Immediate ex-stock availability for rapid turnaround and zero plant downtime",
      "High temperature and chemically aggressive media options",
      "Direct fit guarantee for Scimax equipment as well as retrofit on third-party collectors"
    ],
    specsHighlights: [
      { label: "Timer Channels", value: "4 to 64 Output Channels" },
      { label: "Valve Sizes", value: "3/4\", 1\", 1.5\", 2\", 2.5\", 3\"" },
      { label: "Cage Configurations", value: "8, 10, 12, 16, 20 Wire Frames" },
      { label: "Filter Bag Media", value: "Polyester, Nomex, Ryton, PTFE" }
    ],
    industriesServed: ["All Industrial Dust Collection Operations"]
  }
];

export const IMPELLER_PROFILES: ImpellerProfile[] = [
  {
    id: 1,
    name: "Forward Curved",
    description: "Multi-blade cylindrical drum impeller designed to move high volumes of clean air at relatively low rotational speeds (RPM).",
    bestFor: "Clean air ventilation, HVAC systems, low pressure drying",
    efficiency: "60% - 70%",
    bladeStyle: "Dozens of shallow, forward-curving blades"
  },
  {
    id: 2,
    name: "Radial Blade",
    description: "Flat, heavy-gauge steel blades positioned radially from wheel hub. Highly rugged design built for high dust, sawdust, and pneumatic handling.",
    bestFor: "Material handling, abrasive dusts, sawdust, pneumatic transport",
    efficiency: "65% - 75%",
    bladeStyle: "Heavy-duty flat perpendicular blades"
  },
  {
    id: 3,
    name: "Backward Inclined",
    description: "Flat, single-thickness steel plates angled backwards from direction of rotation. Features a true non-overloading horsepower curve.",
    bestFor: "General industrial draft, air pollution systems, moderate dust",
    efficiency: "75% - 82%",
    bladeStyle: "Flat backward-angled plates"
  },
  {
    id: 4,
    name: "Backward Curved",
    description: "Aerodynamically contoured curved blades delivering high static pressure efficiency with low acoustic noise emission.",
    bestFor: "Induced Draft (ID) boiler fans, baghouse exhaust, clean gas streams",
    efficiency: "80% - 85%",
    bladeStyle: "Single-skin contoured backward curves"
  },
  {
    id: 5,
    name: "Airfoil Blades",
    description: "True aerodynamic hollow aerofoil cross-section inspired by aviation engineering. Delivers the absolute highest mechanical efficiency up to 88%.",
    bestFor: "Forced Draft (FD) fans, large HVAC systems, power plant draft loops",
    efficiency: "85% - 88% (Peak)",
    bladeStyle: "Hollow aerofoil streamlined profile"
  },
  {
    id: 6,
    name: "Paddle Open Blade",
    description: "Spider-arm open wheel without front shroud. Prevents stringy, fibrous, or sticky materials from wrapping or clogging the wheel.",
    bestFor: "Textile fiber extraction, paper trim handling, fluff collection",
    efficiency: "55% - 65%",
    bladeStyle: "Open wheel with radial paddle arms"
  },
  {
    id: 7,
    name: "Open Radial Blade",
    description: "Self-cleaning rugged open wheel designed specifically for heavy metal chips, iron borings, and abrasive particulate slurries.",
    bestFor: "Metal turning pickup, shot blasting exhaust, foundry sand lines",
    efficiency: "60% - 70%",
    bladeStyle: "Self-cleaning reinforced open radial blades"
  },
  {
    id: 8,
    name: "DWDI Impeller",
    description: "Double Width Double Inlet impeller handling massive volumetric flow (CFM) within a compact footprint by drawing air from both sides.",
    bestFor: "Central ventilation, thermal power exhaust, high CFM cooling",
    efficiency: "80% - 86%",
    bladeStyle: "Double-width symmetrical dual-inlet rotor"
  }
];

export const TECHNICAL_SIZING_GUIDE = {
  description: "Approximate capacity in Cubic Feet per Minute (CFM) at Normal Temperature & Pressure (N.T.P. 20°C, 1 atm) at selected static pressures shown in inches Water Gauge (1 inch WG = 25.4 mm WC). Excerpt of the full 17-point Scimax sizing matrix.",
  pressures: ["2\"", "4\"", "6\"", "8\"", "10\"", "12\"", "16\"", "20\""],
  rows: [
    { hp: 0.5, data: ["800", "400", "260", "200", "160", "130", "-", "-"] },
    { hp: 1.0, data: ["1600", "800", "530", "400", "320", "260", "200", "-"] },
    { hp: 3.0, data: ["4800", "2400", "1600", "1443", "1155", "950", "720", "570"] },
    { hp: 5.0, data: ["7350", "4000", "2650", "2400", "1925", "1600", "1203", "960"] },
    { hp: 10.0, data: ["13400", "8000", "5330", "4000", "3850", "3200", "2400", "1925"] },
    { hp: 20.0, data: ["25000", "16000", "10600", "7800", "7700", "6400", "4800", "3850"] },
    { hp: 30.0, data: ["48000", "24000", "16000", "13330", "12000", "11500", "8800", "7200"] },
    { hp: 50.0, data: ["-", "40000", "26000", "20000", "17500", "13300", "12000", "9600"] },
    { hp: 75.0, data: ["-", "-", "40000", "30000", "24000", "20000", "18000", "14450"] },
    { hp: 100.0, data: ["-", "-", "53000", "40000", "32000", "26600", "24000", "19000"] }
  ]
};

export const BLOWER_ORIENTATIONS = [
  { name: "Top Horizontal (90°)", direction: "Clockwise / CCW", angle: 90, desc: "Discharge at top pointing horizontally right" },
  { name: "Top Angular Down (135°)", direction: "Clockwise / CCW", angle: 135, desc: "Discharge directed 45° downward from horizontal" },
  { name: "Down Blast (180°)", direction: "Clockwise / CCW", angle: 180, desc: "Direct downward discharge towards foundation" },
  { name: "Bottom Angular Down (225°)", direction: "Clockwise / CCW", angle: 225, desc: "Discharge directed 45° downward from bottom" },
  { name: "Bottom Horizontal (270°)", direction: "Clockwise / CCW", angle: 270, desc: "Discharge along floor level pointing horizontal" },
  { name: "Bottom Angular Up (315°)", direction: "Clockwise / CCW", angle: 315, desc: "Discharge directed 45° upward from bottom" },
  { name: "Up Blast (360° / 0°)", direction: "Clockwise / CCW", angle: 360, desc: "Direct vertical upward discharge into stack" },
  { name: "Top Angular Up (45°)", direction: "Clockwise / CCW", angle: 45, desc: "Discharge directed 45° upward from top horizontal" }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: "foundry",
    name: "Foundry",
    iconName: "Flame",
    challenge: "Extreme heat, abrasive silica sand, bentonite dust, and hot metallic sparks during sand preparation, molding, and shakeout.",
    solution: "Heavy-duty cyclone pre-separators with spark arrestors combined with pulse-jet baghouses using abrasion-resistant needle felt bags.",
    recommendedEquipment: ["Bag Type Dust Collectors", "Industrial Cyclones", "ID Exhaust Blowers"],
    dustTypes: ["Silica sand", "Bentonite clay", "Graphite", "Metallic oxide dust"]
  },
  {
    id: "pharma",
    name: "Pharma",
    iconName: "Pill",
    challenge: "Cross-contamination hazards, toxic Active Pharmaceutical Ingredients (APIs), micron-level dusts requiring sterile cGMP containment.",
    solution: "Sanitary grade Stainless Steel (SS316) cartridge collectors with HEPA secondary stage polishing and safe-change bag-in/bag-out housings.",
    recommendedEquipment: ["Cartridge Dust Collectors", "Sanitary Ductwork", "Industrial Vacuum Units"],
    dustTypes: ["API granules", "Lactose excipient", "Starch", "Tableting powder"]
  },
  {
    id: "iron-steel",
    name: "Iron & Steel",
    iconName: "Layers",
    challenge: "Massive volumetric flue gases, high-temperature iron oxide fumes, hot red-oxide dust from electric arc and induction furnaces.",
    solution: "Water-cooled swivel hoods, large-capacity multiclone pre-separators, and high-temperature baghouses equipped with Nomex/Ryton media.",
    recommendedEquipment: ["Fume Extraction Systems", "ID Fans up to 8,00,000 m³/hr", "Swivel Hoods"],
    dustTypes: ["Iron oxide", "Mill scale", "Sinter dust", "Coke breeze"]
  },
  {
    id: "textile",
    name: "Textile",
    iconName: "Scissors",
    challenge: "Fibrous cotton lint, micro-fibers, and stringy fluff that quickly clog conventional fans, ducts, and standard filter cartridges.",
    solution: "Continuous extraction using Scimax Paddle Open Blade centrifugal fans that prevent fiber wrapping, combined with pre-filter drum condensers.",
    recommendedEquipment: ["Paddle Open Blade Fans", "Rotary Drum Filters", "Lint Baghouses"],
    dustTypes: ["Cotton lint", "Polyester fibers", "Ginning waste", "Yarn fluff"]
  },
  {
    id: "boiler",
    name: "Boiler & Power",
    iconName: "Zap",
    challenge: "Flue gas fly ash from coal, lignite, bagasse, and agro-waste combustion exceeding CPCB Suspended Particulate Matter (SPM) limits.",
    solution: "Multi Dust Collectors (MDCs) with cast-iron cyclone tubes, high-temp bag filters with bypass dilution dampers, and insulated casings.",
    recommendedEquipment: ["Multi Dust Collectors (MDC)", "Boiler Bag Filters", "ID Fans up to 350°C"],
    dustTypes: ["Coal fly ash", "Lignite ash", "Biomass soot", "Carbon black"]
  },
  {
    id: "gasifier-plant",
    name: "Gasifier Plant",
    iconName: "Fuel",
    challenge: "Tar-laden producer gas, volatile hydrocarbon vapors, and combustible carbon particles requiring spark-proof equipment.",
    solution: "Specialized venturi wet scrubbers, heavy-duty tar precipitators, and explosion-protected high-pressure FD gas booster fans.",
    recommendedEquipment: ["Packed Bed Scrubbers", "FD High-Pressure Blowers", "Explosion Relief Silos"],
    dustTypes: ["Producer gas soot", "Tar mist", "Charcoal dust", "Ash particulate"]
  },
  {
    id: "plastics",
    name: "Plastics & Polymers",
    iconName: "Box",
    challenge: "Static-charged plastic regrind, polymer pellets, PVC powder, and toxic fumes during extrusion, shredding, and compounding.",
    solution: "Antistatic grounded cartridge filters, high-vacuum source capture hoods, and pneumatic convey blowers for pellet transport.",
    recommendedEquipment: ["Antistatic Cartridge Filters", "Pneumatic Convey Fans", "Source Capture Hoods"],
    dustTypes: ["PVC resin", "Polypropylene dust", "Shredder fluff", "Extrusion vapors"]
  },
  {
    id: "furnaces",
    name: "Furnaces & Smelting",
    iconName: "Cpu",
    challenge: "Sudden thermal surges, toxic metal fumes, and sulphur emissions from induction, arc, and crucible furnaces.",
    solution: "High-draft centrifugal ID fans with pneumatic damper modulation, canopy swivel hoods, and chemical packed-bed scrubber arrays.",
    recommendedEquipment: ["Furnace Swivel Hoods", "High-Temperature ID Fans", "Bag Filters"],
    dustTypes: ["Zinc oxide fumes", "Lead vapors", "Furnace slag dust", "Sulphur smoke"]
  },
  {
    id: "ceramics",
    name: "Ceramics & Tiles",
    iconName: "Grid",
    challenge: "Extremely abrasive silica clay, feldspar, and quartz dust from ball mills, spray dryers, and tile polishing lines.",
    solution: "Heavy-duty abrasion-lined cyclone pre-separators, wear-resistant radial blade blowers, and automatic reverse pulse collectors.",
    recommendedEquipment: ["Cyclone Separators", "Baghouse Dust Collectors", "Radial Blade Blowers"],
    dustTypes: ["Feldspar", "Quartz", "Glaze mist", "Clay particulate"]
  },
  {
    id: "paper-mill",
    name: "Paper Mill",
    iconName: "FileText",
    challenge: "High moisture pulp fibers, paper trim ribbons, calcium carbonate filler dust, and starch powder in slitter and rewinder zones.",
    solution: "Non-clogging open wheel blowers for continuous trim conveyance paired with moisture-resistant pulse-jet dust collectors.",
    recommendedEquipment: ["Paddle Open Blade Fans", "Industrial Vacuum Units", "Trim Exhaust Cyclones"],
    dustTypes: ["Paper trim", "Wood pulp fibers", "Calcium carbonate", "Starch powder"]
  },
  {
    id: "plywood-mfg",
    name: "Plywood & Timber",
    iconName: "Trees",
    challenge: "Massive volumes of wood shavings, sawdust, sanding flour, and resin adhesive fumes from saws, sanders, and hot presses.",
    solution: "Centralized pneumatic dust extraction with large-diameter ductwork, heavy cyclone drops, and spark-detection equipped baghouses.",
    recommendedEquipment: ["Baghouse Collectors", "Radial Material Blowers", "Rotary Airlocks"],
    dustTypes: ["Wood shavings", "Sanding flour", "Urea formaldehyde dust", "Sawdust"]
  },
  {
    id: "coal",
    name: "Coal & Minerals",
    iconName: "Mountain",
    challenge: "Explosion-prone coal dust, crusher house fugitives, transfer chute spillage, and rail-wagon dumper emissions.",
    solution: "ATEX/PESO compliant explosion-vented baghouses, water mist suppression scrubbers, and heavy-duty dust extractors.",
    recommendedEquipment: ["Explosion-Vented Baghouses", "Silo Vent Filters", "ID Exhaust Fans"],
    dustTypes: ["Pulverized coal", "Lignite dust", "Mineral ore dust", "Carbon fines"]
  },
  {
    id: "cement",
    name: "Cement & Aggregates",
    iconName: "HardHat",
    challenge: "Ultra-fine raw meal, abrasive clinker dust, limestone crusher plumes, and silo top displacement during tanker discharge.",
    solution: "Top-mounted and floor-type Silo Vent Filters with up to 99.9% filtration, and high-efficiency process baghouses with PTFE membranes.",
    recommendedEquipment: ["Top-Mounted Silo Vent Filters", "Floor-Type Silo Filters", "Pulse Jet Baghouses"],
    dustTypes: ["Clinker dust", "Raw meal", "Portland cement", "Gypsum & lime"]
  },
  {
    id: "chemical",
    name: "Chemical & Fertilizer",
    iconName: "FlaskConical",
    challenge: "Corrosive acid fumes, hygroscopic fertilizer powders (urea, DAP), explosive chemical dusts, and volatile organic compounds (VOCs).",
    solution: "Multi-stage systems combining FRP/PP wet scrubbers with SS316 bag filters, activated carbon beds, and corrosion-resistant blowers.",
    recommendedEquipment: ["Packed Bed Scrubbers", "SS316 Bag Filters", "Explosion Proof Blowers"],
    dustTypes: ["Urea prills", "DAP fertilizer", "Pesticide powders", "Inorganic salts"]
  }
];

export const WHY_CHOOSE_SCIMAX = [
  {
    title: "Experience-Based Expertise",
    subtitle: "127+ Forms of Dust",
    description: "We maintain a comprehensive proprietary empirical database spanning 127 varieties of industrial dusts — matching particulate velocity, abrasiveness, and moisture to the exact right filtration geometry.",
    icon: "Database"
  },
  {
    title: "All For One Integration",
    subtitle: "Complete Single-Vendor Ecosystem",
    description: "Every interrelated equipment — from ductwork and capture hoods to baghouse, rotary airlock, centrifugal blower, and electrical control panel — is engineered and supplied by Scimax.",
    icon: "Boxes"
  },
  {
    title: "Idea to Product Approach",
    subtitle: "Concept to Final Commissioning",
    description: "We don't just supply equipment; we conduct on-site airflow audits, create 3D duct layouts, fabricate in our own manufacturing plants, install on-site, and validate GPCB/CPCB SPM compliance.",
    icon: "Workflow"
  },
  {
    title: "Technology & Innovation",
    subtitle: "ISO 1940 Grade G6.3 Balancing",
    description: "Our centrifugal fan impellers undergo digital dynamic balancing to ISO 1940 Grade G6.3 standards. Laser cutting, CNC forming, and continuous seam welding guarantee zero vibration and zero casing leakage.",
    icon: "Cpu"
  },
  {
    title: "96% Customer Retention",
    subtitle: "Trusted by Indian Industry",
    description: "Almost 96% of industrial clients who install a Scimax dust collector or blower return to us for expansion plants, line upgrades, and replacement systems.",
    icon: "Users"
  },
  {
    title: "Cutting-Edge Infrastructure",
    subtitle: "Ahmedabad & Mehsana Facilities",
    description: "Heavy engineering manufacturing plant at Village Chadasna (Kadi, Mehsana) and registered office at GIDC Vatva (Ahmedabad), equipped with heavy overhead cranes and digital testing bays.",
    icon: "Factory"
  }
];

export const PROBLEM_SOLUTION = {
  challenge: {
    title: "The Industrial Challenge",
    subtitle: "Uncontrolled Dust, Fumes & Regulatory Liability",
    points: [
      {
        title: "Workplace Hazards & Health Risks",
        desc: "Airborne silica, toxic metal fumes, and sub-micron particulates penetrate deep into worker respiratory systems, triggering chronic ailments, absenteeism, and Factory Act liabilities."
      },
      {
        title: "Severe Pollution Board Penalties",
        desc: "Stricter enforcement by GPCB, MPCB, and CPCB with online Continuous Emission Monitoring Systems (CEMS) can result in immediate plant closure notices and hefty environmental compensation fines."
      },
      {
        title: "Excessive Machine Downtime",
        desc: "Abrasive dust infiltrates motor bearings, CNC electronics, ball screws, and hydraulic seals, multiplying machine breakdowns and cutting equipment life in half."
      },
      {
        title: "Diminished Product Quality",
        desc: "Cross-contamination of batches in pharma, ceramic glazing defects, or paint shop imperfections caused by airborne fugitive dust ruin production yields."
      }
    ]
  },
  solution: {
    title: "The Scimax Engineered Solution",
    subtitle: "Guaranteed Air Quality & Zero-Compromise Uptime",
    points: [
      {
        title: "Precision Source Capture",
        desc: "Custom-modeled aerodynamics, swivel hoods, and push-pull ventilation capture over 95% of fumes right at the point of generation before they disperse into the factory air."
      },
      {
        title: "99.9% High-Efficiency Filtration",
        desc: "Optimized air-to-cloth ratios and pulse-jet venturi cleaning drop emissions below 30 mg/Nm³, comfortably meeting and exceeding all State and Central Pollution Board standards."
      },
      {
        title: "Lower Total Cost of Ownership",
        desc: "Aerodynamically superior backward curved and airfoil fan impellers operate with up to 88% mechanical efficiency, slashing monthly electrical power consumption."
      },
      {
        title: "End-to-End Turnkey Execution",
        desc: "From initial CFD airflow modeling to fabrication, ductwork erection, and after-sales maintenance, you receive an undivided single-point engineering warranty."
      }
    ]
  }
};

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Intake & Source Capture",
    short: "Ducting pulls dust-laden air from generation points",
    description: "Strategic capture hoods and aerodynamically designed ductwork draw particulate directly at machinery inlets, furnace lips, or dumping stations with optimal face velocity."
  },
  {
    step: "02",
    title: "Pre-Separation Drop",
    short: "Velocity reduction drops coarse particles into hopper",
    description: "Air enters the collector body where baffle plates expand the cross-sectional area, dropping velocity. Heavy particles lose momentum and fall by gravity straight into the collection hopper."
  },
  {
    step: "03",
    title: "Pulse-Jet Filtration",
    short: "Fine dust trapped on filter media with automatic cleaning",
    description: "Air flows through specialized filter bags/cartridges. High-pressure reverse pulse jets of compressed air fire automatically at preset intervals to shake loose the dust cake into the hopper."
  },
  {
    step: "04",
    title: "Clean Air Discharge",
    short: "Purified air safely exhausted via ID fan into stack or shop",
    description: "Purified air (>99.5% clean) passes into the clean air chamber and is drawn through the dynamically balanced Scimax centrifugal ID fan before returning to the workshop or venting through the stack."
  }
];
