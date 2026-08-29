import React from "react";

export const PRODUCT_PHOTOS: Record<string, string> = {
  "induced-draft-id-fan": "/images/products/id-fan-heavy-duty.jpg",
  "grey-id-fan": "/images/products/id-fan-heavy-duty.jpg",
  "forced-draft-fd-fan": "/images/products/fd-fan-burner-blower.jpg",
  "blue-heavy-blower": "/images/products/fd-fan-burner-blower.jpg",
  "centrifugal-blowers": "/images/products/centrifugal-blower-pedestal.jpg",
  "conical-high-pressure-blower": "/images/products/fd-fan-conical-outlet.jpg",
  "id-fan-v-belt": "/images/products/id-fan-v-belt-drive.jpg",
  "id-fan-v-belt-drive": "/images/products/id-fan-v-belt-drive.jpg",
  "centrifugal-blower-pedestal": "/images/products/centrifugal-blower-pedestal.jpg",
  "high-pressure-blower-direct": "/images/products/high-pressure-blower-direct.jpg",
  "group-blowers-shopfloor": "/images/products/brochure-cover-main.jpg",
  "tube-axial-direct": "/images/products/tube-axial-direct-drive.jpg",
  "tube-axial-v-belt": "/images/products/tube-axial-v-belt-pair.jpg",
  "tube-axial-fan": "/images/products/tube-axial-direct-drive.jpg",
  "roof-ventilator-axial-fan": "/images/products/scimax-brochure-page-axial.jpg",
  "bifurcated-axial-fan": "/images/products/bifurcated-axial-fan-unit.jpg",
  "bifurcated-axial-flow-fan": "/images/products/bifurcated-axial-fan-unit.jpg",
  "axial-air-fan-mancooler": "/images/products/axial-air-fan-mancooler.jpg",
  "axial-fans": "/images/products/tube-axial-direct-drive.jpg",
  "flagship-centrifugal-blower": "/images/products/scimax-flagship-centrifugal-blower.jpg",
  "scimax-flagship-blower": "/images/products/scimax-flagship-centrifugal-blower.jpg",
  "roots-twin-lobe-skid": "/images/products/roots-twin-lobe-blowers.jpg",
  "white-blowers-plant": "/images/products/chemical-cleanroom-blowers-white.jpg",
  "belt-driven-blower-guard": "/images/products/centrifugal-fan-v-belt-guard.jpg",
  "small-utility-pressure-blower": "/images/products/small-utility-pressure-blower.jpg",
  "direct-drive-lime-motor-blower": "/images/products/direct-drive-lime-motor-blower.jpg",
  "centrifugal-blower-radial-ribs": "/images/products/centrifugal-blower-radial-ribs.jpg",
  "id-fan-heavy-direct-mount": "/images/products/id-fan-heavy-direct-mount.jpg",
  "narrow-high-pressure-fan": "/images/products/narrow-high-pressure-fan.jpg",
  "blower-inlet-mesh-guard": "/images/products/blower-inlet-mesh-guard.jpg",
  "dust-collection": "/images/products/scimax-brochure-page-industries.jpg",
  "bag-type-dust-collector": "/images/products/scimax-brochure-page-industries.jpg",
  "industrial-cyclone-dust-collector": "/images/products/centrifugal-blower-pedestal.jpg",
  "multi-dust-collector-boilers": "/images/products/id-fan-heavy-duty.jpg",
  "bag-filter-boiler-pollution-control": "/images/products/id-fan-v-belt-drive.jpg",
  "packed-bed-scrubber": "/images/products/chemical-cleanroom-blowers-white.jpg",
  "floor-type-silo-vent-filter": "/images/products/scimax-brochure-page-industries.jpg",
  "top-mounted-silo-vent-filter": "/images/products/scimax-brochure-page-industries.jpg",
  "four-blue-blowers": "/images/products/four-blue-blowers-shopfloor.jpg",
  "fume-extraction-system": "/images/products/id-fan-v-belt-drive.jpg",
  "industrial-vacuum-cleaner": "/images/products/high-pressure-blower-direct.jpg",
  "core-accessories-spare-parts": "/images/products/scimax-impellers-and-centrifugal-brochure.jpg"
};

export const IMPELLER_PHOTOS: Record<string, string> = {
  "forward-curved": "/images/products/impeller-forward-curved.jpg",
  "radial-blade": "/images/products/impeller-radial-blade.jpg",
  "backward-curved": "/images/products/impeller-backward-curved-copper.jpg",
  "backward-inclined": "/images/products/impeller-backward-inclined.jpg",
  "airfoil": "/images/products/impeller-airfoil.jpg",
  "paddle-open-blade": "/images/products/impeller-paddle-open.jpg",
  "open-radial-blade": "/images/products/impeller-open-radial.jpg",
  "dwdi-impeller": "/images/products/impeller-dwdi.jpg",
  "dwdi": "/images/products/impeller-dwdi.jpg"
};

// Real Machine Photos matching exact pages from Scimax Brochure PDF
export const RealMachinePhoto: React.FC<{ type: string; className?: string; forceSvg?: boolean }> = ({ type, className = "w-full h-full", forceSvg = false }) => {
  const [loadError, setLoadError] = React.useState(false);
  const photoSrc = PRODUCT_PHOTOS[type];

  if (photoSrc && !loadError && !forceSvg) {
    return (
      <img
        src={photoSrc}
        alt={type}
        className={`${className} object-cover rounded-md`}
        onError={() => setLoadError(true)}
        loading="lazy"
      />
    );
  }

  switch (type) {
    // 1. Blue Heavy Centrifugal Blower (Page 1, 4, 43, 46)
    case "blue-heavy-blower":
    case "centrifugal-blowers":
    case "forced-draft-fd-fan":
      return (
        <svg viewBox="0 0 400 360" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="blueVoluteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="50%" stopColor="#1D4ED8" />
              <stop offset="100%" stopColor="#1E3A8A" />
            </linearGradient>
            <linearGradient id="blueMetal" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>
            <radialGradient id="inletDark" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0B132B" />
              <stop offset="70%" stopColor="#172554" />
              <stop offset="100%" stopColor="#0F172A" />
            </radialGradient>
          </defs>

          {/* Heavy Base Skid Frame (ISMC Channel) */}
          <rect x="70" y="290" width="260" height="24" rx="3" fill="#1E3A8A" stroke="#3B82F6" strokeWidth="2" />
          <line x1="80" y1="302" x2="320" y2="302" stroke="#60A5FA" strokeWidth="1" strokeDasharray="8 8" />
          <rect x="90" y="260" width="220" height="30" fill="#0F172A" stroke="#1E40AF" strokeWidth="2" />

          {/* Front and Back Structural Leg Gussets */}
          <polygon points="100,260 145,180 155,180 115,260" fill="#1E40AF" stroke="#60A5FA" strokeWidth="1.5" />
          <polygon points="300,260 255,180 245,180 285,260" fill="#1E40AF" stroke="#60A5FA" strokeWidth="1.5" />

          {/* Volute Spiral Scroll Casing */}
          <path
            d="M 195 40 
               C 310 40, 360 130, 340 220 
               C 320 290, 240 300, 160 290 
               C 100 280, 85 220, 85 160 
               L 85 55 
               L 195 55 Z"
            fill="url(#blueVoluteGrad)"
            stroke="#93C5FD"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Casing Stiffener Angle Welds */}
          <path d="M 85 110 L 195 110" stroke="#3B82F6" strokeWidth="3" />
          <path d="M 85 170 L 195 170" stroke="#3B82F6" strokeWidth="3" />
          <path d="M 280 90 L 330 140" stroke="#1E40AF" strokeWidth="3" />
          <path d="M 270 240 L 310 270" stroke="#1E40AF" strokeWidth="3" />

          {/* Top Rectangular Discharge Flange */}
          <rect x="75" y="32" width="130" height="24" rx="2" fill="url(#blueMetal)" stroke="#BFDBFE" strokeWidth="3" />
          <line x1="85" y1="44" x2="195" y2="44" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="10 10" />

          {/* Large Suction Inlet Circular Bolted Collar */}
          <circle cx="205" cy="180" r="75" fill="url(#inletDark)" stroke="#60A5FA" strokeWidth="8" />
          <circle cx="205" cy="180" r="62" stroke="#93C5FD" strokeWidth="2" strokeDasharray="6 6" />

          {/* Flange Bolts Ring */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
            <circle
              key={i}
              cx={205 + 68 * Math.cos((deg * Math.PI) / 180)}
              cy={180 + 68 * Math.sin((deg * Math.PI) / 180)}
              r="3.5"
              fill="#F8FAFC"
              stroke="#0F172A"
              strokeWidth="1.5"
            />
          ))}

          {/* Internal Impeller Wheel Blades (Visible inside suction ring) */}
          <circle cx="205" cy="180" r="42" fill="#1E3A8A" stroke="#38BDF8" strokeWidth="3" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
            <g key={i}>
              <line
                x1={205 + 14 * Math.cos((deg * Math.PI) / 180)}
                y1={180 + 14 * Math.sin((deg * Math.PI) / 180)}
                x2={205 + 56 * Math.cos((deg * Math.PI) / 180)}
                y2={180 + 56 * Math.sin((deg * Math.PI) / 180)}
                stroke="#EA580C"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <line
                x1={205 + 14 * Math.cos((deg * Math.PI) / 180)}
                y1={180 + 14 * Math.sin((deg * Math.PI) / 180)}
                x2={205 + 56 * Math.cos((deg * Math.PI) / 180)}
                y2={180 + 56 * Math.sin((deg * Math.PI) / 180)}
                stroke="#FDBA74"
                strokeWidth="2"
              />
            </g>
          ))}

          {/* Center Hub & Shaft Eye */}
          <circle cx="205" cy="180" r="14" fill="#F8FAFC" stroke="#0F172A" strokeWidth="4" />
          <circle cx="205" cy="180" r="5" fill="#EA580C" />
        </svg>
      );

    // 2. Grey ID Fan with 6 Triangular Radial Stiffener Ribs (Page 2, 24, 45, 76)
    case "grey-id-fan":
    case "induced-draft-id-fan":
      return (
        <svg viewBox="0 0 400 360" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="greyVolute" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#64748B" />
              <stop offset="60%" stopColor="#475569" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>
          </defs>

          {/* Base Foundation Channels */}
          <rect x="60" y="290" width="280" height="24" rx="2" fill="#334155" stroke="#94A3B8" strokeWidth="2" />
          <rect x="80" y="260" width="240" height="30" fill="#1E293B" stroke="#475569" strokeWidth="2" />

          {/* Heavy Steel Volute Housing */}
          <path
            d="M 190 40 
               C 315 40, 365 130, 345 225 
               C 325 295, 235 305, 150 290 
               C 90 280, 75 210, 75 150 
               L 75 55 
               L 190 55 Z"
            fill="url(#greyVolute)"
            stroke="#CBD5E1"
            strokeWidth="4"
          />

          {/* Top Flange */}
          <rect x="65" y="32" width="135" height="24" rx="2" fill="#334155" stroke="#E2E8F0" strokeWidth="3" />
          <line x1="75" y1="44" x2="190" y2="44" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="8 8" />

          {/* Large Suction Inlet Ring */}
          <circle cx="205" cy="180" r="82" fill="#0F172A" stroke="#94A3B8" strokeWidth="8" />
          <circle cx="205" cy="180" r="50" fill="#1E293B" stroke="#64748B" strokeWidth="5" />

          {/* 6 Heavy Radial Gusset / Stiffener Ribs on Front Plate (Authentic ID Fan feature) */}
          {[0, 60, 120, 180, 240, 300].map((deg, i) => (
            <polygon
              key={i}
              points={`
                ${205 + 50 * Math.cos(((deg - 7) * Math.PI) / 180)},${180 + 50 * Math.sin(((deg - 7) * Math.PI) / 180)}
                ${205 + 105 * Math.cos((deg * Math.PI) / 180)},${180 + 105 * Math.sin((deg * Math.PI) / 180)}
                ${205 + 50 * Math.cos(((deg + 7) * Math.PI) / 180)},${180 + 50 * Math.sin(((deg + 7) * Math.PI) / 180)}
              `}
              fill="#64748B"
              stroke="#CBD5E1"
              strokeWidth="2"
            />
          ))}

          {/* Center Eye & Rotor Hub */}
          <circle cx="205" cy="180" r="22" fill="#94A3B8" stroke="#0F172A" strokeWidth="4" />
          <circle cx="205" cy="180" r="8" fill="#F8FAFC" />
        </svg>
      );

    // 3. High Pressure Conical Discharge Blower (Page 3, 50)
    case "conical-high-pressure-blower":
      return (
        <svg viewBox="0 0 400 360" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="80" y="290" width="240" height="24" rx="2" fill="#1E3A8A" stroke="#3B82F6" strokeWidth="2" />
          <rect x="100" y="260" width="200" height="30" fill="#0F172A" />

          {/* Volute Spiral */}
          <circle cx="220" cy="180" r="105" fill="#1D4ED8" stroke="#93C5FD" strokeWidth="4" />

          {/* Distinctive Conical Tapered Discharge Nozzle Pipe */}
          <polygon points="180,75 240,75 140,35 90,50" fill="#2563EB" stroke="#BFDBFE" strokeWidth="3" />
          <circle cx="90" cy="50" r="16" stroke="#EA580C" strokeWidth="4" fill="#0F172A" />
          <circle cx="90" cy="50" r="8" fill="#FDBA74" />

          {/* Circular Inlet */}
          <circle cx="220" cy="180" r="60" fill="#0F172A" stroke="#60A5FA" strokeWidth="8" />
          <circle cx="220" cy="180" r="25" fill="#1E3A8A" stroke="#93C5FD" strokeWidth="3" />
          <circle cx="220" cy="180" r="8" fill="#F8FAFC" />
        </svg>
      );

    // 4. Shop Floor Group of Blowers (Page 5, 13, 44, 70)
    case "group-blowers-shopfloor":
      return (
        <svg viewBox="0 0 400 360" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Concrete Floor Background Grid */}
          <rect x="0" y="200" width="400" height="160" fill="#1E293B" />
          <line x1="0" y1="280" x2="400" y2="280" stroke="#334155" strokeWidth="1" strokeDasharray="10 10" />

          {/* Rear Large Blue Blower */}
          <circle cx="220" cy="140" r="95" fill="#1E40AF" stroke="#60A5FA" strokeWidth="4" />
          <rect x="150" y="50" width="70" height="30" fill="#2563EB" stroke="#93C5FD" strokeWidth="2" />
          <rect x="230" y="110" width="60" height="50" fill="#64748B" stroke="#94A3B8" strokeWidth="2" rx="4" />

          {/* Left Mid Blower */}
          <circle cx="110" cy="200" r="65" fill="#1D4ED8" stroke="#3B82F6" strokeWidth="3" />
          <rect x="60" y="140" width="45" height="25" fill="#1E40AF" stroke="#93C5FD" strokeWidth="2" />
          <rect x="120" y="180" width="55" height="45" fill="#64748B" stroke="#94A3B8" strokeWidth="2" rx="3" />

          {/* Front Small Blue Blower */}
          <circle cx="200" cy="260" r="55" fill="#2563EB" stroke="#93C5FD" strokeWidth="3" />
          <rect x="160" y="210" width="40" height="20" fill="#1D4ED8" stroke="#BFDBFE" strokeWidth="2" />
          <rect x="210" y="240" width="50" height="40" fill="#475569" stroke="#94A3B8" strokeWidth="2" rx="3" />

          {/* Right Mid Blower */}
          <circle cx="310" cy="210" r="60" fill="#1E40AF" stroke="#60A5FA" strokeWidth="3" />
          <rect x="300" y="190" width="50" height="40" fill="#64748B" stroke="#94A3B8" strokeWidth="2" rx="3" />
        </svg>
      );

    // 5. Tube Axial Fan Direct Drive (Page 8, 19, 53)
    case "tube-axial-direct":
    case "tube-axial-fan":
      return (
        <svg viewBox="0 0 400 360" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Base Stand */}
          <rect x="100" y="290" width="200" height="20" fill="#0F172A" stroke="#334155" strokeWidth="2" />
          <polygon points="120,290 150,220 250,220 280,290" fill="#1E293B" stroke="#475569" strokeWidth="2" />

          {/* Cylindrical Casing Outer Ring */}
          <circle cx="200" cy="170" r="115" fill="#1E40AF" stroke="#60A5FA" strokeWidth="10" />
          <circle cx="200" cy="170" r="100" fill="#0F172A" stroke="#93C5FD" strokeWidth="4" strokeDasharray="6 6" />

          {/* 6 Aerodynamic Aluminum Aerofoil Blades */}
          {[0, 60, 120, 180, 240, 300].map((deg, i) => (
            <g key={i} transform={`rotate(${deg} 200 170)`}>
              <path
                d="M 190 120 C 180 65, 220 65, 210 120 Z"
                fill="#E2E8F0"
                stroke="#94A3B8"
                strokeWidth="3.5"
              />
              <line x1="200" y1="120" x2="200" y2="75" stroke="#64748B" strokeWidth="2" />
            </g>
          ))}

          {/* Heavy Cast Aluminum Central Hub */}
          <circle cx="200" cy="170" r="42" fill="#1E293B" stroke="#EA580C" strokeWidth="5" />
          <circle cx="200" cy="170" r="18" fill="#E2E8F0" stroke="#0F172A" strokeWidth="3" />
          <circle cx="200" cy="170" r="6" fill="#EA580C" />
        </svg>
      );

    // 6. Tube Axial V-Belt Fan (Page 8, 18, 62)
    case "tube-axial-v-belt":
      return (
        <svg viewBox="0 0 400 360" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Top Mounted External Green Motor */}
          <rect x="170" y="20" width="60" height="35" rx="4" fill="#16A34A" stroke="#86EFAC" strokeWidth="3" />
          <rect x="190" y="55" width="20" height="15" fill="#334155" />
          <line x1="180" y1="35" x2="220" y2="35" stroke="#FDE047" strokeWidth="2" />

          {/* Casing */}
          <circle cx="200" cy="180" r="110" fill="#475569" stroke="#CBD5E1" strokeWidth="8" />
          <circle cx="200" cy="180" r="95" fill="#0F172A" stroke="#94A3B8" strokeWidth="3" />

          {/* Protective Wire Mesh Grid */}
          <circle cx="200" cy="180" r="75" stroke="#64748B" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="105" y1="180" x2="295" y2="180" stroke="#64748B" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="200" y1="85" x2="200" y2="275" stroke="#64748B" strokeWidth="1.5" strokeDasharray="3 3" />

          {/* 6 Blades */}
          {[0, 60, 120, 180, 240, 300].map((deg, i) => (
            <g key={i} transform={`rotate(${deg} 200 180)`}>
              <path
                d="M 190 135 C 180 90, 220 90, 210 135 Z"
                fill="#CBD5E1"
                stroke="#64748B"
                strokeWidth="3"
              />
            </g>
          ))}

          {/* Center Hub */}
          <circle cx="200" cy="180" r="38" fill="#1E293B" stroke="#EA580C" strokeWidth="4" />
          <circle cx="200" cy="180" r="14" fill="#F8FAFC" />
        </svg>
      );

    // 7. Bifurcated Axial Flow Fan (Page 8, 27, 55)
    case "bifurcated-axial-fan":
    case "bifurcated-axial-flow-fan":
      return (
        <svg viewBox="0 0 400 360" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Square Heavy Tunnel Housing */}
          <rect x="70" y="45" width="260" height="270" rx="6" fill="#334155" stroke="#94A3B8" strokeWidth="8" />
          <rect x="55" y="30" width="290" height="300" rx="6" fill="none" stroke="#CBD5E1" strokeWidth="3" strokeDasharray="10 10" />

          {/* Center Isolated Motor Tunnel Chamber */}
          <rect x="150" y="90" width="100" height="180" rx="50" fill="#0F172A" stroke="#EA580C" strokeWidth="6" />

          {/* Dual Bifurcated Air Passages (Left & Right) */}
          <path d="M 85 60 Q 140 180 85 300" stroke="#38BDF8" strokeWidth="4" fill="none" />
          <path d="M 315 60 Q 260 180 315 300" stroke="#38BDF8" strokeWidth="4" fill="none" />

          {/* Isolated Electric Motor inside chamber */}
          <rect x="165" y="130" width="70" height="100" rx="6" fill="#1E40AF" stroke="#60A5FA" strokeWidth="3" />
          <circle cx="200" cy="180" r="16" fill="#F8FAFC" />
          <text x="162" y="270" fill="#EA580C" fontSize="12" fontWeight="bold" fontFamily="monospace">ISOLATED</text>
        </svg>
      );

    // 8. Axial Air Fan / Man Cooler (Page 8, 26, 40)
    case "axial-air-fan-mancooler":
    case "man-cooler-product-cooling-fan":
      return (
        <svg viewBox="0 0 400 360" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Tubular Pedestal Stand */}
          <rect x="120" y="310" width="160" height="16" rx="2" fill="#0F172A" stroke="#475569" strokeWidth="3" />
          <line x1="140" y1="310" x2="170" y2="230" stroke="#475569" strokeWidth="6" />
          <line x1="260" y1="310" x2="230" y2="230" stroke="#475569" strokeWidth="6" />

          {/* Circular Protective Mesh Cage */}
          <circle cx="200" cy="140" r="100" fill="#0F172A" stroke="#334155" strokeWidth="10" />
          <circle cx="200" cy="140" r="88" stroke="#64748B" strokeWidth="2" strokeDasharray="4 4" />

          {/* 6 High-Thrust Aluminum Blades */}
          {[0, 60, 120, 180, 240, 300].map((deg, i) => (
            <g key={i} transform={`rotate(${deg} 200 140)`}>
              <polygon
                points="190,105 210,105 220,55 180,55"
                fill="#E2E8F0"
                stroke="#94A3B8"
                strokeWidth="2.5"
              />
            </g>
          ))}

          {/* Center Hub & OSHA Finger Guard */}
          <circle cx="200" cy="140" r="32" fill="#1E293B" stroke="#EA580C" strokeWidth="4" />
          <circle cx="200" cy="140" r="12" fill="#F8FAFC" />
        </svg>
      );

    // 9. Twin Lobe Roots Blower Skid (Page 12, 68)
    case "roots-twin-lobe-skid":
      return (
        <svg viewBox="0 0 400 360" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Base Channel Frame */}
          <rect x="60" y="270" width="280" height="25" rx="3" fill="#1E293B" stroke="#475569" strokeWidth="3" />
          <rect x="80" y="220" width="100" height="50" fill="#0F172A" stroke="#334155" strokeWidth="2" />
          <rect x="220" y="220" width="100" height="50" fill="#0F172A" stroke="#334155" strokeWidth="2" />

          {/* Dual Roots Blower Housings */}
          <rect x="85" y="160" width="90" height="70" rx="8" fill="#1E40AF" stroke="#60A5FA" strokeWidth="3" />
          <rect x="225" y="160" width="90" height="70" rx="8" fill="#1E40AF" stroke="#60A5FA" strokeWidth="3" />

          {/* Blue Electric Motors */}
          <rect x="100" y="120" width="60" height="50" rx="5" fill="#2563EB" stroke="#93C5FD" strokeWidth="3" />
          <rect x="240" y="120" width="60" height="50" rx="5" fill="#2563EB" stroke="#93C5FD" strokeWidth="3" />

          {/* Top Horizontal Silencer Canisters */}
          <rect x="70" y="80" width="120" height="30" rx="15" fill="#64748B" stroke="#CBD5E1" strokeWidth="3" />
          <rect x="210" y="80" width="120" height="30" rx="15" fill="#64748B" stroke="#CBD5E1" strokeWidth="3" />

          {/* Vertical Connecting Manifolds */}
          <line x1="130" y1="110" x2="130" y2="160" stroke="#94A3B8" strokeWidth="10" />
          <line x1="270" y1="110" x2="270" y2="160" stroke="#94A3B8" strokeWidth="10" />
        </svg>
      );

    // 10. White Multi Blowers in Plant (Page 14, 66)
    case "white-blowers-plant":
      return (
        <svg viewBox="0 0 400 360" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* 3 White Epoxy Coated Blowers in Perspective */}
          {/* Blower 1 (Front Left) */}
          <circle cx="140" cy="180" r="90" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="6" />
          <rect x="100" y="80" width="60" height="25" fill="#E2E8F0" stroke="#64748B" strokeWidth="3" />
          <circle cx="140" cy="180" r="45" fill="#0F172A" stroke="#64748B" strokeWidth="6" />

          {/* Blower 2 (Middle) */}
          <circle cx="240" cy="170" r="75" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="5" />
          <rect x="210" y="85" width="50" height="20" fill="#E2E8F0" stroke="#64748B" strokeWidth="2" />
          <circle cx="240" cy="170" r="35" fill="#0F172A" stroke="#64748B" strokeWidth="5" />

          {/* Blower 3 (Far Right) */}
          <circle cx="325" cy="180" r="60" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="4" />
          <rect x="300" y="110" width="40" height="18" fill="#CBD5E1" stroke="#64748B" strokeWidth="2" />
          <circle cx="325" cy="180" r="28" fill="#0F172A" stroke="#64748B" strokeWidth="4" />
        </svg>
      );

    // 11. Belt Driven Blower with Triangular Guard (Page 15, 21, 51, 72)
    case "belt-driven-blower-guard":
      return (
        <svg viewBox="0 0 400 360" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Base Stand */}
          <rect x="70" y="280" width="260" height="25" rx="3" fill="#334155" stroke="#94A3B8" strokeWidth="2" />

          {/* Centrifugal Volute */}
          <circle cx="160" cy="170" r="90" fill="#64748B" stroke="#CBD5E1" strokeWidth="4" />
          <circle cx="160" cy="170" r="45" fill="#0F172A" stroke="#94A3B8" strokeWidth="6" />

          {/* Motor Mounted on Base */}
          <rect x="210" y="210" width="70" height="50" rx="4" fill="#B45309" stroke="#FDE047" strokeWidth="2" />

          {/* Distinctive Triangular Sheet Metal Belt Guard (Page 21) */}
          <polygon points="270,120 310,240 250,240" fill="#CBD5E1" stroke="#475569" strokeWidth="4" />
          <line x1="260" y1="150" x2="280" y2="230" stroke="#64748B" strokeWidth="2" strokeDasharray="4 4" />

          {/* Bearing Pedestal Pillow Block */}
          <rect x="180" y="160" width="60" height="20" fill="#1E293B" stroke="#64748B" strokeWidth="2" />
        </svg>
      );

    // 12. Small Utility Blower (Page 23, 73)
    case "small-utility-pressure-blower":
      return (
        <svg viewBox="0 0 400 360" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Compact Base */}
          <rect x="140" y="270" width="120" height="20" rx="3" fill="#1E3A8A" stroke="#3B82F6" strokeWidth="2" />

          {/* Blue Aluminum Volute */}
          <circle cx="210" cy="170" r="75" fill="#2563EB" stroke="#93C5FD" strokeWidth="4" />

          {/* Direct Electric Motor on Back */}
          <rect x="120" y="140" width="70" height="60" rx="5" fill="#1E293B" stroke="#64748B" strokeWidth="3" />

          {/* Circular Spout Nozzle */}
          <circle cx="265" cy="235" r="20" fill="#F8FAFC" stroke="#1D4ED8" strokeWidth="6" />
          <circle cx="265" cy="235" r="10" fill="#0F172A" />
        </svg>
      );

    // 13. Pulse-Jet Bag Type Dust Collector (Page 6, 10, 32)
    case "bag-type-dust-collector":
    case "dust-collection":
      return (
        <svg viewBox="0 0 400 360" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="baghousePlenum" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="50%" stopColor="#334155" />
              <stop offset="100%" stopColor="#1E293B" />
            </linearGradient>
            <linearGradient id="hopperGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
          </defs>

          {/* Heavy Structural Legs Stand */}
          <line x1="110" y1="210" x2="80" y2="340" stroke="#475569" strokeWidth="7" />
          <line x1="290" y1="210" x2="320" y2="340" stroke="#475569" strokeWidth="7" />
          <line x1="85" y1="310" x2="315" y2="310" stroke="#64748B" strokeWidth="4" />
          <line x1="85" y1="310" x2="315" y2="250" stroke="#334155" strokeWidth="2" strokeDasharray="5 5" />
          <line x1="315" y1="310" x2="85" y2="250" stroke="#334155" strokeWidth="2" strokeDasharray="5 5" />

          {/* Main Rectangular Filter Baghouse Body */}
          <rect x="110" y="60" width="180" height="150" rx="4" fill="url(#baghousePlenum)" stroke="#38BDF8" strokeWidth="4" />
          <line x1="110" y1="90" x2="290" y2="90" stroke="#0284C7" strokeWidth="3" />

          {/* Top Clean Air Header & Manifold Chamber */}
          <rect x="100" y="35" width="200" height="30" rx="3" fill="#0284C7" stroke="#93C5FD" strokeWidth="2" />
          <rect x="120" y="44" width="160" height="12" rx="3" fill="#EA580C" stroke="#FDBA74" strokeWidth="1.5" />
          {[135, 160, 185, 210, 235, 260].map((x, i) => (
            <circle key={i} cx={x} cy={50} r="4.5" fill="#FDE047" stroke="#9A3412" strokeWidth="1.5" />
          ))}

          {/* Filter Bag Cages Visual Window */}
          {[130, 155, 180, 205, 230, 255, 270].map((x, i) => (
            <g key={i}>
              <line x1={x} y1="95" x2={x} y2="200" stroke="#94A3B8" strokeWidth="7" strokeLinecap="round" />
              <line x1={x} y1="95" x2={x} y2="200" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="4 4" />
            </g>
          ))}

          {/* Pyramidal Hopper */}
          <polygon points="110,210 290,210 230,290 170,290" fill="url(#hopperGrad)" stroke="#38BDF8" strokeWidth="4" />

          {/* Motorized Rotary Airlock Discharge Valve */}
          <rect x="160" y="290" width="80" height="35" rx="4" fill="#B45309" stroke="#FDE047" strokeWidth="2.5" />
          <circle cx="200" cy="307" r="10" fill="#0F172A" stroke="#FDE047" strokeWidth="2" />
          <line x1="200" y1="297" x2="200" y2="317" stroke="#FDE047" strokeWidth="2" />
          <line x1="190" y1="307" x2="210" y2="307" stroke="#FDE047" strokeWidth="2" />

          {/* Differential Pressure Magnehelic Gauge */}
          <circle cx="95" cy="110" r="14" fill="#F8FAFC" stroke="#0F172A" strokeWidth="3" />
          <line x1="95" y1="110" x2="102" y2="104" stroke="#EA580C" strokeWidth="2" />
          <text x="88" y="132" fill="#38BDF8" fontSize="8" fontWeight="bold" fontFamily="monospace">ΔP</text>
        </svg>
      );

    // 14. Industrial Cyclone Dust Collector
    case "industrial-cyclone-dust-collector":
      return (
        <svg viewBox="0 0 400 360" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="cycloneGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1E40AF" />
              <stop offset="50%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#1E3A8A" />
            </linearGradient>
          </defs>

          {/* Structural Leg Supports */}
          <line x1="130" y1="180" x2="100" y2="330" stroke="#475569" strokeWidth="6" />
          <line x1="270" y1="180" x2="300" y2="330" stroke="#475569" strokeWidth="6" />
          <line x1="105" y1="300" x2="295" y2="300" stroke="#64748B" strokeWidth="3" />

          {/* Tangential Air Inlet Scroll */}
          <polygon points="80,90 140,75 140,125 80,110" fill="#1D4ED8" stroke="#93C5FD" strokeWidth="3" />
          <line x1="85" y1="100" x2="135" y2="92" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="4 4" />

          {/* Top Cylindrical Cyclone Barrel */}
          <rect x="140" y="70" width="120" height="90" rx="3" fill="url(#cycloneGrad)" stroke="#60A5FA" strokeWidth="4" />
          
          {/* Upper Vortex Finder Clean Air Exhaust Tube */}
          <rect x="175" y="25" width="50" height="55" rx="3" fill="#334155" stroke="#94A3B8" strokeWidth="3" />
          <ellipse cx="200" cy="25" rx="25" ry="8" fill="#475569" stroke="#CBD5E1" strokeWidth="2" />

          {/* Long Conical Lower Taper */}
          <polygon points="140,160 260,160 218,275 182,275" fill="url(#cycloneGrad)" stroke="#60A5FA" strokeWidth="4" />

          {/* Dust Collection Drum / Bin at Bottom */}
          <rect x="170" y="275" width="60" height="50" rx="4" fill="#0F172A" stroke="#EA580C" strokeWidth="3" />
          <line x1="170" y1="290" x2="230" y2="290" stroke="#FDBA74" strokeWidth="2" />
          <line x1="170" y1="310" x2="230" y2="310" stroke="#FDBA74" strokeWidth="2" />

          {/* Air Vortex Spiral Indicator */}
          <path d="M 200 95 C 230 110, 170 140, 200 160 C 220 180, 185 200, 200 220 C 210 235, 190 250, 200 265" stroke="#FDE047" strokeWidth="2" strokeDasharray="4 4" fill="none" />
        </svg>
      );

    // 15. Multi-Dust Collector (MDC) for Boilers
    case "multi-dust-collector-boilers":
      return (
        <svg viewBox="0 0 400 360" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Base Stand */}
          <line x1="110" y1="200" x2="90" y2="330" stroke="#475569" strokeWidth="6" />
          <line x1="290" y1="200" x2="310" y2="330" stroke="#475569" strokeWidth="6" />
          <line x1="95" y1="295" x2="305" y2="295" stroke="#64748B" strokeWidth="3" />

          {/* MDC Main Multi-Tubular Casing */}
          <rect x="110" y="70" width="180" height="130" rx="4" fill="#334155" stroke="#94A3B8" strokeWidth="4" />
          
          {/* Top Flue Gas Clean Outlet Hood */}
          <polygon points="110,70 290,70 250,30 150,30" fill="#1E293B" stroke="#64748B" strokeWidth="3" />
          <rect x="175" y="15" width="50" height="20" fill="#475569" stroke="#CBD5E1" strokeWidth="2" />

          {/* Cast Iron Multi-Cyclone Tubes Grid (3x3 Matrix) */}
          {[135, 175, 215, 255].map((x, col) =>
            [95, 135, 170].map((y, row) => (
              <g key={`${col}-${row}`}>
                <circle cx={x} cy={y} r="14" fill="#0F172A" stroke="#EA580C" strokeWidth="2.5" />
                <circle cx={x} cy={y} r="6" fill="#F8FAFC" />
                <line x1={x - 10} y1={y} x2={x + 10} y2={y} stroke="#EA580C" strokeWidth="1.5" />
                <line x1={x} y1={y - 10} x2={x} y2={y + 10} stroke="#EA580C" strokeWidth="1.5" />
              </g>
            ))
          )}

          {/* Lower Fly Ash Collection Hopper */}
          <polygon points="110,200 290,200 230,270 170,270" fill="#1E293B" stroke="#94A3B8" strokeWidth="4" />
          {/* Double Flap Valve / Rotary Valve */}
          <rect x="175" y="270" width="50" height="30" rx="3" fill="#B45309" stroke="#FDE047" strokeWidth="2" />
          <circle cx="200" cy="285" r="7" fill="#0F172A" />
        </svg>
      );

    // 16. Bag Filter for Boiler Pollution Control (APCD)
    case "bag-filter-boiler-pollution-control":
      return (
        <svg viewBox="0 0 400 360" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Insulated Casing Exterior (Rockwool Cladding) */}
          <rect x="100" y="55" width="190" height="165" rx="5" fill="#475569" stroke="#E2E8F0" strokeWidth="4" />
          <line x1="100" y1="85" x2="290" y2="85" stroke="#CBD5E1" strokeWidth="2" />

          {/* Integrated Pre-Cyclone Spark Arrester Inlet on Left */}
          <polygon points="50,110 100,85 100,155 50,135" fill="#1E293B" stroke="#EA580C" strokeWidth="3" />
          <text x="56" y="126" fill="#FDBA74" fontSize="8" fontWeight="bold" fontFamily="mono">INLET</text>

          {/* High-Temp Ryton/Fiberglass Bags Display */}
          {[125, 150, 175, 200, 225, 250, 275].map((x, i) => (
            <g key={i}>
              <line x1={x} y1="92" x2={x} y2="210" stroke="#FDE047" strokeWidth="6" strokeLinecap="round" />
              <line x1={x} y1="92" x2={x} y2="210" stroke="#B45309" strokeWidth="1.5" strokeDasharray="3 3" />
            </g>
          ))}

          {/* Emergency Cold Air Dilution Bypass Damper Top */}
          <rect x="120" y="25" width="150" height="30" rx="3" fill="#0284C7" stroke="#38BDF8" strokeWidth="2.5" />
          <circle cx="140" cy="40" r="6" fill="#F8FAFC" />
          <circle cx="250" cy="40" r="6" fill="#F8FAFC" />
          <text x="160" y="44" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="mono">APCD // CPCB</text>

          {/* Insulated Collection Hopper */}
          <polygon points="100,220 290,220 230,290 160,290" fill="#1E293B" stroke="#E2E8F0" strokeWidth="4" />
          <rect x="165" y="290" width="60" height="30" rx="3" fill="#EA580C" stroke="#FDE047" strokeWidth="2" />

          {/* Support Columns */}
          <line x1="100" y1="220" x2="70" y2="340" stroke="#334155" strokeWidth="7" />
          <line x1="290" y1="220" x2="320" y2="340" stroke="#334155" strokeWidth="7" />
          <line x1="75" y1="315" x2="315" y2="315" stroke="#64748B" strokeWidth="4" />
        </svg>
      );

    // 17. Packed Bed Wet Gas Scrubber
    case "packed-bed-scrubber":
      return (
        <svg viewBox="0 0 400 360" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Base Recirculation Liquid Tank (PP/FRP Tank) */}
          <rect x="130" y="260" width="140" height="70" rx="6" fill="#0369A1" stroke="#38BDF8" strokeWidth="4" />
          <line x1="140" y1="285" x2="260" y2="285" stroke="#7DD3FC" strokeWidth="2" strokeDasharray="6 4" />
          <text x="148" y="310" fill="#E0F2FE" fontSize="9" fontWeight="bold" fontFamily="mono">RECIRC TANK</text>

          {/* Main Vertical Packed Tower Body */}
          <rect x="150" y="50" width="100" height="210" rx="4" fill="#0284C7" stroke="#38BDF8" strokeWidth="4" />

          {/* High Surface Area Pall Rings / Packing Zone */}
          <rect x="156" y="115" width="88" height="90" fill="#0C4A6E" stroke="#7DD3FC" strokeWidth="2" rx="2" />
          {[125, 145, 165, 185].map((y, row) => (
            <g key={row}>
              {[165, 180, 195, 210, 225].map((x, col) => (
                <circle key={`${row}-${col}`} cx={x} cy={y} r="4" fill="#38BDF8" stroke="#E0F2FE" strokeWidth="1" />
              ))}
            </g>
          ))}

          {/* Top Liquid Spray Distributor Nozzles Header */}
          <line x1="155" y1="95" x2="245" y2="95" stroke="#FDE047" strokeWidth="3" />
          {[170, 190, 210, 230].map((x, i) => (
            <polygon key={i} points={`${x - 4},98 ${x + 4},98 ${x},107`} fill="#FDE047" />
          ))}

          {/* Chevron Mist Eliminator Layer */}
          <rect x="156" y="65" width="88" height="20" fill="#1E293B" stroke="#94A3B8" strokeWidth="1.5" />
          <path d="M 160 75 L 170 80 L 180 75 L 190 80 L 200 75 L 210 80 L 220 75 L 230 80 L 240 75" stroke="#38BDF8" strokeWidth="2" fill="none" />

          {/* Top Gas Discharge Outlet & Anti-Corrosive FRP Blower Mount */}
          <ellipse cx="200" cy="50" rx="50" ry="10" fill="#0369A1" stroke="#38BDF8" strokeWidth="3" />
          <rect x="180" y="20" width="40" height="30" fill="#0284C7" stroke="#38BDF8" strokeWidth="2" />

          {/* Side Recirculation Pump & Dosing Pipeline */}
          <path d="M 270 295 L 300 295 L 300 95 L 250 95" stroke="#F59E0B" strokeWidth="4" fill="none" />
          <circle cx="285" cy="295" r="12" fill="#B45309" stroke="#FDE047" strokeWidth="2" />
        </svg>
      );

    // 18. Floor Mounted Silo Vent Filter
    case "floor-type-silo-vent-filter":
      return (
        <svg viewBox="0 0 400 360" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Base Stand & Ground Mounting Plate */}
          <rect x="90" y="300" width="220" height="25" rx="3" fill="#1E293B" stroke="#64748B" strokeWidth="3" />
          <line x1="100" y1="312" x2="300" y2="312" stroke="#94A3B8" strokeWidth="2" strokeDasharray="6 6" />

          {/* Main Floor-Standing Filter Housing Body */}
          <rect x="110" y="70" width="180" height="230" rx="5" fill="#334155" stroke="#94A3B8" strokeWidth="4" />

          {/* Large Gasketed Front Inspection Door with Latches */}
          <rect x="125" y="110" width="150" height="150" rx="4" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
          {[130, 260].map((x, i) =>
            [125, 175, 225, 250].map((y, j) => (
              <circle key={`${i}-${j}`} cx={x} cy={y} r="3.5" fill="#FDE047" stroke="#0F172A" strokeWidth="1" />
            ))
          )}

          {/* Top Pulse Manifold & Compressed Air Receiver */}
          <rect x="120" y="45" width="160" height="25" rx="12" fill="#EA580C" stroke="#FDBA74" strokeWidth="2.5" />
          {[140, 170, 200, 230, 260].map((x, i) => (
            <circle key={i} cx={x} cy={57} r="4" fill="#FDE047" stroke="#9A3412" strokeWidth="1.5" />
          ))}

          {/* Differential Pressure Magnehelic Manometer Gauge on Door */}
          <circle cx="200" cy="150" r="16" fill="#F8FAFC" stroke="#0F172A" strokeWidth="3" />
          <line x1="200" y1="150" x2="208" y2="142" stroke="#EA580C" strokeWidth="2.5" />
          <text x="180" y="180" fill="#38BDF8" fontSize="8" fontWeight="bold" fontFamily="mono">GROUND MAINT</text>

          {/* Side Tanker Exhaust Duct Infeed Flange */}
          <rect x="70" y="160" width="40" height="50" fill="#1E293B" stroke="#60A5FA" strokeWidth="3" />
          <line x1="75" y1="185" x2="105" y2="185" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="4 4" />
        </svg>
      );

    // 19. Top Mounted Silo Vent Filter
    case "top-mounted-silo-vent-filter":
      return (
        <svg viewBox="0 0 400 360" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Silo Roof Top Mounting Flange Collar */}
          <rect x="110" y="280" width="180" height="30" rx="3" fill="#1E293B" stroke="#64748B" strokeWidth="4" />
          <line x1="120" y1="295" x2="280" y2="295" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="8 8" />
          {[125, 155, 185, 215, 245, 275].map((x, i) => (
            <circle key={i} cx={x} cy={295} r="3" fill="#FDE047" />
          ))}

          {/* Circular Cylindrical Stainless / MS Body */}
          <rect x="135" y="90" width="130" height="190" rx="4" fill="#475569" stroke="#CBD5E1" strokeWidth="4" />

          {/* Top Aerodynamic Rain Hood / Weather Cowl */}
          <path d="M 110 90 Q 200 35 290 90 Z" fill="#1E40AF" stroke="#60A5FA" strokeWidth="4" />
          <line x1="110" y1="90" x2="290" y2="90" stroke="#93C5FD" strokeWidth="3" />

          {/* Pleated Spunbond Polyester Cartridge Filters inside Cutout */}
          <rect x="150" y="115" width="100" height="145" rx="3" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
          {[162, 178, 194, 210, 226, 238].map((x, i) => (
            <g key={i}>
              <line x1={x} y1="120" x2={x} y2="255" stroke="#F8FAFC" strokeWidth="4" strokeLinecap="round" />
              <line x1={x} y1="120" x2={x} y2="255" stroke="#38BDF8" strokeWidth="1" strokeDasharray="3 3" />
            </g>
          ))}

          {/* Top Pulse Air Reservoir Tank */}
          <rect x="160" y="70" width="80" height="15" rx="6" fill="#EA580C" stroke="#FDBA74" strokeWidth="1.5" />
        </svg>
      );

    // 20. Industrial Fume Extraction & Control System
    case "fume-extraction-system":
    case "fume-extraction":
      return (
        <svg viewBox="0 0 400 360" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Induction Furnace Vessel on Left */}
          <rect x="40" y="210" width="85" height="95" rx="6" fill="#1E293B" stroke="#EA580C" strokeWidth="4" />
          <path d="M 50 220 Q 82 195 115 220" fill="#EA580C" />
          <text x="48" y="270" fill="#FDBA74" fontSize="9" fontWeight="bold" fontFamily="mono">FURNACE</text>

          {/* Motorized 360° Swivel Hood over furnace */}
          <path d="M 35 180 L 130 180 L 105 130 L 60 130 Z" fill="#334155" stroke="#FDE047" strokeWidth="3" />
          
          {/* Heavy Articulated Ductwork with Spark Quencher */}
          <path d="M 82 130 L 82 90 L 170 90 L 170 120" stroke="#94A3B8" strokeWidth="12" fill="none" strokeLinecap="round" />
          <circle cx="170" cy="130" r="16" fill="#EA580C" stroke="#FDE047" strokeWidth="3" />
          
          {/* Main High-Temp Baghouse Filter */}
          <rect x="195" y="70" width="110" height="130" rx="4" fill="#1E293B" stroke="#38BDF8" strokeWidth="3.5" />
          <polygon points="195,200 305,200 270,250 230,250" fill="#0F172A" stroke="#38BDF8" strokeWidth="3" />
          
          {/* High-Pressure ID Blower and Tall Exhaust Chimney */}
          <circle cx="330" cy="230" r="30" fill="#1E40AF" stroke="#60A5FA" strokeWidth="4" />
          <path d="M 330 200 L 330 35 L 355 35 L 355 230" fill="#334155" stroke="#CBD5E1" strokeWidth="2.5" />
          <line x1="330" y1="35" x2="355" y2="35" stroke="#EA580C" strokeWidth="3" />
          
          <line x1="30" y1="310" x2="370" y2="310" stroke="#475569" strokeWidth="3" />
        </svg>
      );

    // 21. Industrial Roof Ventilator Fan
    case "roof-ventilator-axial-fan":
      return (
        <svg viewBox="0 0 400 360" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Corrugated Factory Roof Curb Base Flange */}
          <polygon points="60,285 340,285 360,325 40,325" fill="#334155" stroke="#94A3B8" strokeWidth="3" />
          <line x1="60" y1="305" x2="340" y2="305" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="10 10" />

          {/* Central Cylindrical Fan Throttle Housing */}
          <rect x="130" y="160" width="140" height="125" rx="3" fill="#1E293B" stroke="#60A5FA" strokeWidth="4" />

          {/* Internal Axial Fan Propeller */}
          <circle cx="200" cy="220" r="50" stroke="#93C5FD" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="200" cy="220" r="16" fill="#EA580C" stroke="#FDE047" strokeWidth="2" />
          {[0, 60, 120, 180, 240, 300].map((deg, i) => (
            <line
              key={i}
              x1={200 + 16 * Math.cos((deg * Math.PI) / 180)}
              y1={220 + 16 * Math.sin((deg * Math.PI) / 180)}
              x2={200 + 48 * Math.cos((deg * Math.PI) / 180)}
              y2={220 + 48 * Math.sin((deg * Math.PI) / 180)}
              stroke="#E2E8F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
          ))}

          {/* Large Spun FRP Weather Cowl Dome Hood */}
          <path d="M 80 160 Q 200 60 320 160 Z" fill="#2563EB" stroke="#93C5FD" strokeWidth="4" />
          <rect x="90" y="150" width="220" height="15" rx="3" fill="#1D4ED8" stroke="#BFDBFE" strokeWidth="2" />

          {/* Automatic Gravity Backdraft Louver Vanes */}
          <line x1="140" y1="180" x2="260" y2="180" stroke="#FDE047" strokeWidth="2.5" />
          <line x1="140" y1="195" x2="260" y2="195" stroke="#FDE047" strokeWidth="2.5" />
        </svg>
      );

    // 22. Heavy-Duty Three-Stage Industrial Vacuum Cleaner
    case "industrial-vacuum-cleaner":
    case "industrial-vacuum":
      return (
        <svg viewBox="0 0 400 360" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Heavy Caster Trolley Base */}
          <rect x="110" y="285" width="180" height="20" rx="4" fill="#0F172A" stroke="#475569" strokeWidth="3" />
          {/* 4 Heavy Swivel Casters */}
          <circle cx="130" cy="320" r="14" fill="#334155" stroke="#94A3B8" strokeWidth="3" />
          <circle cx="130" cy="320" r="5" fill="#F8FAFC" />
          <circle cx="270" cy="320" r="14" fill="#334155" stroke="#94A3B8" strokeWidth="3" />
          <circle cx="270" cy="320" r="5" fill="#F8FAFC" />

          {/* Heavy 400 mm Steel Collection Drum */}
          <rect x="125" y="140" width="150" height="145" rx="8" fill="#1E293B" stroke="#38BDF8" strokeWidth="4" />
          <line x1="125" y1="190" x2="275" y2="190" stroke="#64748B" strokeWidth="2" />
          <line x1="125" y1="240" x2="275" y2="240" stroke="#64748B" strokeWidth="2" />

          {/* Dual Toggle Clamp Locks */}
          <rect x="115" y="150" width="10" height="25" rx="2" fill="#EA580C" stroke="#FDBA74" strokeWidth="1" />
          <rect x="275" y="150" width="10" height="25" rx="2" fill="#EA580C" stroke="#FDBA74" strokeWidth="1" />

          {/* Top Head Housing with High-Vacuum Turbine Motor & Silencer */}
          <path d="M 125 140 Q 200 80 275 140 Z" fill="#0284C7" stroke="#38BDF8" strokeWidth="3.5" />
          <rect x="160" y="55" width="80" height="40" rx="5" fill="#0F172A" stroke="#FDE047" strokeWidth="2.5" />
          <text x="172" y="80" fill="#FDE047" fontSize="9" fontWeight="bold" fontFamily="mono">TURBINE</text>

          {/* Front Tangential Suction Hose Port */}
          <circle cx="200" cy="210" r="20" fill="#0F172A" stroke="#EA580C" strokeWidth="4" />
          <circle cx="200" cy="210" r="10" fill="#F8FAFC" />

          {/* Ergonomic Tubular Push Handle */}
          <path d="M 120 280 L 90 200 L 90 100 L 120 100" stroke="#94A3B8" strokeWidth="6" fill="none" strokeLinecap="round" />
        </svg>
      );

    // 23. Dust Collector & Blower Core Spares & Accessories
    case "core-accessories-spare-parts":
    case "accessories":
      return (
        <svg viewBox="0 0 400 360" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* 1. Pleated Filter Cartridge (Left) */}
          <rect x="40" y="90" width="70" height="170" rx="5" fill="#F8FAFC" stroke="#0284C7" strokeWidth="3" />
          <ellipse cx="75" cy="90" rx="35" ry="10" fill="#0284C7" stroke="#38BDF8" strokeWidth="2" />
          <ellipse cx="75" cy="260" rx="35" ry="10" fill="#0284C7" stroke="#38BDF8" strokeWidth="2" />
          {[52, 63, 75, 87, 98].map((x, i) => (
            <line key={i} x1={x} y1="98" x2={x} y2="252" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 4" />
          ))}
          <text x="46" y="285" fill="#38BDF8" fontSize="9" fontWeight="bold" fontFamily="mono">CARTRIDGE</text>

          {/* 2. Pulse Jet Diaphragm Valve & Solenoid Coil (Center Top) */}
          <rect x="140" y="60" width="90" height="70" rx="6" fill="#1E293B" stroke="#EA580C" strokeWidth="3" />
          <circle cx="185" cy="95" r="22" fill="#0F172A" stroke="#FDE047" strokeWidth="2" />
          <rect x="175" y="35" width="20" height="25" rx="3" fill="#EA580C" stroke="#FDBA74" strokeWidth="2" />
          <text x="148" y="150" fill="#FDBA74" fontSize="9" fontWeight="bold" fontFamily="mono">PULSE VALVE</text>

          {/* 3. Filter Cage with Aluminum Venturi (Center Bottom) */}
          <polygon points="170,180 200,180 195,200 175,200" fill="#CBD5E1" stroke="#475569" strokeWidth="2" />
          <line x1="175" y1="200" x2="175" y2="300" stroke="#94A3B8" strokeWidth="3" />
          <line x1="195" y1="200" x2="195" y2="300" stroke="#94A3B8" strokeWidth="3" />
          {[220, 240, 260, 280].map((y, i) => (
            <ellipse key={i} cx="185" cy={y} rx="10" ry="3" stroke="#CBD5E1" strokeWidth="2" fill="none" />
          ))}
          <text x="156" y="325" fill="#CBD5E1" fontSize="9" fontWeight="bold" fontFamily="mono">VENTURI CAGE</text>

          {/* 4. Digital Sequential Timer & Rotary Airlock (Right) */}
          <rect x="260" y="60" width="105" height="85" rx="5" fill="#0F172A" stroke="#10B981" strokeWidth="3" />
          <rect x="275" y="75" width="75" height="25" rx="2" fill="#064E3B" />
          <text x="285" y="92" fill="#34D399" fontSize="12" fontWeight="bold" fontFamily="mono">88:88</text>
          {[275, 295, 315, 335].map((x, i) => (
            <circle key={i} cx={x} cy={120} r="4" fill="#10B981" />
          ))}
          <text x="272" y="162" fill="#34D399" fontSize="9" fontWeight="bold" fontFamily="mono">DIGITAL TIMER</text>

          {/* Rotary Valve */}
          <rect x="265" y="190" width="95" height="75" rx="6" fill="#B45309" stroke="#FDE047" strokeWidth="3" />
          <circle cx="312" cy="227" r="22" fill="#0F172A" stroke="#FDE047" strokeWidth="2" />
          <line x1="312" y1="205" x2="312" y2="249" stroke="#FDE047" strokeWidth="2" />
          <line x1="290" y1="227" x2="334" y2="227" stroke="#FDE047" strokeWidth="2" />
          <text x="270" y="285" fill="#FDE047" fontSize="9" fontWeight="bold" fontFamily="mono">ROTARY AIRLOCK</text>
        </svg>
      );

    default:
      return <MachineVectorArt type={type} className={className} />;
  }
};

// Reusable Universal Product Visual Component (Handles custom image URL fallback)
export const ProductVisual: React.FC<{
  product: { id: string; name?: string; imageUrl?: string };
  className?: string;
  imageClassName?: string;
}> = ({ product, className = "w-full h-full", imageClassName = "w-full h-full object-cover rounded-md" }) => {
  const [imgError, setImgError] = React.useState(false);
  const src = product.imageUrl || PRODUCT_PHOTOS[product.id];

  if (src && !imgError) {
    return (
      <img
        src={src}
        alt={product.name || product.id}
        className={imageClassName}
        onError={() => setImgError(true)}
        loading="lazy"
      />
    );
  }

  return <RealMachinePhoto type={product.id} className={className} />;
};

// Real Impeller Photos matching the 8 designs on Page 11 & 54 of Scimax PDF Brochure
export const ImpellerRealPhoto: React.FC<{ type: string; className?: string; forceSvg?: boolean }> = ({ type, className = "w-24 h-24", forceSvg = false }) => {
  const [imgError, setImgError] = React.useState(false);
  const photoSrc = IMPELLER_PHOTOS[type];

  if (photoSrc && !imgError && !forceSvg) {
    return (
      <img
        src={photoSrc}
        alt={type}
        className={`${className} object-contain`}
        onError={() => setImgError(true)}
        loading="lazy"
      />
    );
  }

  switch (type) {
    // 1. Forward Curved (Drum multi-vane)
    case "forward-curved":
      return (
        <svg viewBox="0 0 160 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="80" r="68" fill="#475569" stroke="#CBD5E1" strokeWidth="3" />
          <circle cx="80" cy="80" r="48" fill="#1E293B" stroke="#94A3B8" strokeWidth="2" />
          {/* Dense forward curved vanes around perimeter */}
          {[0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345].map((deg, i) => (
            <path
              key={i}
              d={`M ${80 + 48 * Math.cos((deg * Math.PI) / 180)} ${80 + 48 * Math.sin((deg * Math.PI) / 180)} 
                 Q ${80 + 58 * Math.cos(((deg + 10) * Math.PI) / 180)} ${80 + 58 * Math.sin(((deg + 10) * Math.PI) / 180)} 
                 ${80 + 66 * Math.cos(((deg + 5) * Math.PI) / 180)} ${80 + 66 * Math.sin(((deg + 5) * Math.PI) / 180)}`}
              stroke="#E2E8F0"
              strokeWidth="2.5"
              fill="none"
            />
          ))}
          <circle cx="80" cy="80" r="16" fill="#CBD5E1" stroke="#0F172A" strokeWidth="3" />
          <circle cx="80" cy="80" r="6" fill="#0F172A" />
        </svg>
      );

    // 2. Radial Blade (Straight radial paddle vanes)
    case "radial-blade":
      return (
        <svg viewBox="0 0 160 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="80" r="68" fill="#334155" stroke="#94A3B8" strokeWidth="3" />
          {/* 10 Heavy Straight Radial Vanes */}
          {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((deg, i) => (
            <polygon
              key={i}
              points={`
                ${80 + 20 * Math.cos(((deg - 4) * Math.PI) / 180)},${80 + 20 * Math.sin(((deg - 4) * Math.PI) / 180)}
                ${80 + 66 * Math.cos(((deg - 2) * Math.PI) / 180)},${80 + 66 * Math.sin(((deg - 2) * Math.PI) / 180)}
                ${80 + 66 * Math.cos(((deg + 2) * Math.PI) / 180)},${80 + 66 * Math.sin(((deg + 2) * Math.PI) / 180)}
                ${80 + 20 * Math.cos(((deg + 4) * Math.PI) / 180)},${80 + 20 * Math.sin(((deg + 4) * Math.PI) / 180)}
              `}
              fill="#E2E8F0"
              stroke="#64748B"
              strokeWidth="1"
            />
          ))}
          <circle cx="80" cy="80" r="22" fill="#475569" stroke="#CBD5E1" strokeWidth="3" />
          <circle cx="80" cy="80" r="8" fill="#0F172A" />
        </svg>
      );

    // 3. Backward Inclined (Flat backward tilted single plate)
    case "backward-inclined":
      return (
        <svg viewBox="0 0 160 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="80" r="68" fill="#1E293B" stroke="#38BDF8" strokeWidth="3" />
          {/* 8 Backward Tilted Flat Blades */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
            <line
              key={i}
              x1={80 + 18 * Math.cos(((deg + 25) * Math.PI) / 180)}
              y1={80 + 18 * Math.sin(((deg + 25) * Math.PI) / 180)}
              x2={80 + 66 * Math.cos((deg * Math.PI) / 180)}
              y2={80 + 66 * Math.sin((deg * Math.PI) / 180)}
              stroke="#EA580C"
              strokeWidth="5"
              strokeLinecap="round"
            />
          ))}
          <circle cx="80" cy="80" r="24" fill="#334155" stroke="#FDE047" strokeWidth="2" />
          <circle cx="80" cy="80" r="8" fill="#0F172A" />
        </svg>
      );

    // 4. Backward Curved (Curved aerodynamic vanes - Copper/Bronze sheen as shown in PDF)
    case "backward-curved":
      return (
        <svg viewBox="0 0 160 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="bronzeRotor" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#C2410C" />
              <stop offset="60%" stopColor="#9A3412" />
              <stop offset="100%" stopColor="#7C2D12" />
            </radialGradient>
          </defs>
          <circle cx="80" cy="80" r="68" fill="url(#bronzeRotor)" stroke="#FDBA74" strokeWidth="3" />
          {/* Curved Back Blades */}
          {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((deg, i) => (
            <path
              key={i}
              d={`M ${80 + 22 * Math.cos((deg * Math.PI) / 180)} ${80 + 22 * Math.sin((deg * Math.PI) / 180)} 
                 Q ${80 + 45 * Math.cos(((deg - 20) * Math.PI) / 180)} ${80 + 45 * Math.sin(((deg - 20) * Math.PI) / 180)} 
                 ${80 + 66 * Math.cos(((deg - 10) * Math.PI) / 180)} ${80 + 66 * Math.sin(((deg - 10) * Math.PI) / 180)}`}
              stroke="#FED7AA"
              strokeWidth="4"
              fill="none"
            />
          ))}
          <circle cx="80" cy="80" r="26" fill="#431407" stroke="#FDBA74" strokeWidth="3" />
          <circle cx="80" cy="80" r="8" fill="#F8FAFC" />
        </svg>
      );

    // 5. Airfoil Blades (True hollow aerofoil cross-section)
    case "airfoil":
      return (
        <svg viewBox="0 0 160 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="80" r="68" fill="#0F172A" stroke="#38BDF8" strokeWidth="3" />
          {/* 8 Thick Hollow Airfoil Teardrop Blades */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
            <g key={i} transform={`rotate(${deg} 80 80)`}>
              <path
                d="M 80 58 C 72 32, 92 20, 84 15 C 76 25, 74 45, 80 58 Z"
                fill="#E2E8F0"
                stroke="#60A5FA"
                strokeWidth="1.5"
              />
            </g>
          ))}
          <circle cx="80" cy="80" r="24" fill="#1E293B" stroke="#38BDF8" strokeWidth="3" />
          <circle cx="80" cy="80" r="8" fill="#F8FAFC" />
        </svg>
      );

    // 6. Paddle Open Blade (Spider hub non-clogging)
    case "paddle-open-blade":
      return (
        <svg viewBox="0 0 160 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* 8 Open Paddle Spider Arms radiating without front plate */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
            <g key={i} transform={`rotate(${deg} 80 80)`}>
              <polygon
                points="76,60 84,60 92,15 68,15"
                fill="#475569"
                stroke="#94A3B8"
                strokeWidth="2"
              />
            </g>
          ))}
          <circle cx="80" cy="80" r="24" fill="#0F172A" stroke="#EA580C" strokeWidth="4" />
          <circle cx="80" cy="80" r="8" fill="#F8FAFC" />
        </svg>
      );

    // 7. Open Radial Blade (Heavy scrap wheel with open front)
    case "open-radial-blade":
      return (
        <svg viewBox="0 0 160 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* 6 Heavy Open Radial Blades with Back Disk Plate */}
          <circle cx="80" cy="80" r="66" fill="#334155" stroke="#64748B" strokeWidth="2" />
          {[0, 60, 120, 180, 240, 300].map((deg, i) => (
            <polygon
              key={i}
              points={`
                ${80 + 16 * Math.cos(((deg - 8) * Math.PI) / 180)},${80 + 16 * Math.sin(((deg - 8) * Math.PI) / 180)}
                ${80 + 64 * Math.cos(((deg - 14) * Math.PI) / 180)},${80 + 64 * Math.sin(((deg - 14) * Math.PI) / 180)}
                ${80 + 64 * Math.cos(((deg + 14) * Math.PI) / 180)},${80 + 64 * Math.sin(((deg + 14) * Math.PI) / 180)}
                ${80 + 16 * Math.cos(((deg + 8) * Math.PI) / 180)},${80 + 16 * Math.sin(((deg + 8) * Math.PI) / 180)}
              `}
              fill="#E2E8F0"
              stroke="#475569"
              strokeWidth="2"
            />
          ))}
          <circle cx="80" cy="80" r="18" fill="#0F172A" stroke="#FDE047" strokeWidth="3" />
          <circle cx="80" cy="80" r="6" fill="#FFFFFF" />
        </svg>
      );

    // 8. DWDI Impeller (Double Width Double Inlet cage)
    case "dwdi":
      return (
        <svg viewBox="0 0 160 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Double width perspective */}
          <ellipse cx="80" cy="80" rx="66" ry="60" fill="#1E293B" stroke="#94A3B8" strokeWidth="3" />
          <ellipse cx="80" cy="80" rx="46" ry="40" fill="#334155" stroke="#CBD5E1" strokeWidth="2" />
          {/* Dual side vanes */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
            <line
              key={i}
              x1={80 + 44 * Math.cos((deg * Math.PI) / 180)}
              y1={80 + 38 * Math.sin((deg * Math.PI) / 180)}
              x2={80 + 64 * Math.cos((deg * Math.PI) / 180)}
              y2={80 + 58 * Math.sin((deg * Math.PI) / 180)}
              stroke="#38BDF8"
              strokeWidth="3.5"
            />
          ))}
          <circle cx="80" cy="80" r="18" fill="#0F172A" stroke="#EA580C" strokeWidth="3" />
          <circle cx="80" cy="80" r="6" fill="#F8FAFC" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 160 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="80" r="60" stroke="#38BDF8" strokeWidth="4" fill="#0F172A" />
          <circle cx="80" cy="80" r="20" fill="#EA580C" />
        </svg>
      );
  }
};

export const ScimaxLogo: React.FC<{ className?: string; light?: boolean; showTagline?: boolean }> = ({
  className = "h-10",
  light = false,
  showTagline = true,
}) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Exact SciMax Brand Emblem */}
      <img
        src="/images/products/scimax-logo-hd.jpg"
        alt="SciMax Industries"
        className="h-full w-auto object-contain shrink-0 rounded-xs"
        style={{ minWidth: "90px" }}
      />

      {showTagline && (
        <div className="flex flex-col justify-center leading-tight">
          <span
            className={`text-xs uppercase font-extrabold tracking-wider font-heading ${
              light ? "text-orange-400" : "text-slate-900"
            }`}
          >
            SCIMAX INDUSTRIES
          </span>
          <span
            className={`text-[10px] font-medium tracking-tight ${
              light ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Air Systems & Pollution Control
          </span>
        </div>
      )}
    </div>
  );
};

// Make in India Badge - Authentic Brand Lion
export const MakeInIndiaBadge: React.FC<{ className?: string }> = ({ className = "h-8" }) => {
  return (
    <div className={`flex items-center gap-2 px-3 py-1 bg-slate-900/5 dark:bg-white/10 rounded-md border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold font-mono ${className}`}>
      <img
        src="/images/products/make-in-india-lion.png"
        alt="Make In India"
        className="h-4 w-auto object-contain shrink-0"
        loading="lazy"
      />
      <span className="tracking-wider">MAKE IN INDIA</span>
    </div>
  );
};

// ISO 9001:2015 Precision Badge
export const IsoBadge: React.FC<{ className?: string }> = ({ className = "h-8" }) => {
  return (
    <div className={`flex items-center gap-1.5 px-3 py-1 bg-orange-50 rounded-md border border-orange-200 text-orange-950 text-xs font-bold font-mono ${className}`}>
      <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
      <span className="tracking-wider">ISO 9001:2015</span>
    </div>
  );
};

// Authentic Brochure Machine Image Renderer with Fallback & Machine Schematics
export const BrochureProductVisual: React.FC<{
  type: string;
  className?: string;
  caption?: string;
  badge?: string;
}> = ({ type, className = "h-56", caption, badge }) => {
  return (
    <div className={`relative overflow-hidden bg-slate-950 rounded-md group flex items-center justify-center border border-slate-800/80 tech-grid-pattern-dark ${className}`}>
      {/* Background Industrial Subtle Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-950 opacity-95 pointer-events-none"></div>
      
      {/* Real Machine Photo Rendering */}
      <div className="relative z-10 p-3 w-full h-full flex items-center justify-center">
        <RealMachinePhoto type={type} className="max-h-full max-w-full drop-shadow-2xl transition-transform duration-300 group-hover:scale-105" />
      </div>

      {badge && (
        <div className="absolute top-2.5 left-2.5 z-20 px-2.5 py-1 bg-orange-500/90 backdrop-blur-xs text-white text-[10px] font-mono font-bold uppercase rounded-md shadow-xs border border-orange-400">
          {badge}
        </div>
      )}

      {caption && (
        <div className="absolute bottom-0 inset-x-0 z-20 px-3 py-1.5 bg-slate-950/90 backdrop-blur-xs border-t border-slate-800 text-[11px] font-mono text-slate-300 flex items-center justify-between">
          <span className="truncate">{caption}</span>
          <span className="text-[9px] text-orange-400 font-bold shrink-0 ml-2">MFR: SCIMAX</span>
        </div>
      )}
    </div>
  );
};

// Precise Vector Graphics for each Machine in the PDF Brochure
export const MachineVectorArt: React.FC<{ type: string; className?: string }> = ({ type, className = "w-48 h-48" }) => {
  switch (type) {
    // 1. Blue Centrifugal Blower (Page 1, 4, 43, 46)
    case "centrifugal-blowers":
    case "blue-heavy-blower":
    case "forced-draft-fd-fan":
      return (
        <svg viewBox="0 0 240 240" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Base Stand & Foundation Channels */}
          <rect x="40" y="195" width="160" height="14" rx="2" fill="#1E3A8A" stroke="#3B82F6" strokeWidth="2" />
          <rect x="55" y="175" width="130" height="20" fill="#0F172A" stroke="#1E293B" strokeWidth="2" />
          {/* Rear Support Brackets */}
          <line x1="60" y1="175" x2="90" y2="120" stroke="#1E40AF" strokeWidth="8" strokeLinecap="round" />
          <line x1="180" y1="175" x2="150" y2="120" stroke="#1E40AF" strokeWidth="8" strokeLinecap="round" />
          
          {/* Main Blower Volute Casing (Industrial SciMax Blue #1D4ED8) */}
          <path
            d="M 120 30 A 85 85 0 0 1 205 115 A 85 85 0 0 1 120 200 A 85 85 0 0 1 45 130 L 45 40 L 115 40"
            fill="#1E40AF"
            stroke="#60A5FA"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          {/* Discharge Flange Top Rectangular Spout */}
          <rect x="40" y="25" width="80" height="20" fill="#1D4ED8" stroke="#93C5FD" strokeWidth="3" rx="2" />
          <line x1="45" y1="35" x2="115" y2="35" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="6 6" />

          {/* Heavy Bolted Circular Inlet Suction Ring */}
          <circle cx="125" cy="120" r="50" fill="#172554" stroke="#60A5FA" strokeWidth="6" />
          <circle cx="125" cy="120" r="42" stroke="#93C5FD" strokeWidth="2" strokeDasharray="4 4" />
          
          {/* Bolted Studs Around Inlet */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
            <circle
              key={i}
              cx={125 + 46 * Math.cos((deg * Math.PI) / 180)}
              cy={120 + 46 * Math.sin((deg * Math.PI) / 180)}
              r="2.5"
              fill="#E2E8F0"
            />
          ))}

          {/* Internal Impeller Wheel Blades */}
          <circle cx="125" cy="120" r="28" fill="#1E3A8A" stroke="#3B82F6" strokeWidth="3" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
            <line
              key={i}
              x1={125 + 10 * Math.cos((deg * Math.PI) / 180)}
              y1={120 + 10 * Math.sin((deg * Math.PI) / 180)}
              x2={125 + 38 * Math.cos((deg * Math.PI) / 180)}
              y2={120 + 38 * Math.sin((deg * Math.PI) / 180)}
              stroke="#F59E0B"
              strokeWidth="4"
              strokeLinecap="round"
            />
          ))}
          {/* Center Hub */}
          <circle cx="125" cy="120" r="8" fill="#F8FAFC" stroke="#0F172A" strokeWidth="3" />
        </svg>
      );

    // 2. Grey Heavy Duty Induced Draft (ID) Boiler Fan (Page 2, 24, 45, 76)
    case "induced-draft-id-fan":
    case "grey-id-fan":
      return (
        <svg viewBox="0 0 240 240" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Base Heavy Foundation Channel */}
          <rect x="35" y="195" width="170" height="15" fill="#334155" stroke="#64748B" strokeWidth="2" />
          <rect x="50" y="175" width="140" height="20" fill="#1E293B" stroke="#475569" strokeWidth="2" />

          {/* Heavy Ribbed Grey Volute Casing (#475569) */}
          <path
            d="M 120 30 A 85 85 0 0 1 205 115 A 85 85 0 0 1 120 200 A 85 85 0 0 1 45 130 L 45 40 L 115 40"
            fill="#475569"
            stroke="#94A3B8"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          {/* Heavy Top Flange */}
          <rect x="40" y="25" width="80" height="20" fill="#334155" stroke="#CBD5E1" strokeWidth="3" />

          {/* Large Suction Cone Collar */}
          <circle cx="125" cy="120" r="54" fill="#1E293B" stroke="#94A3B8" strokeWidth="6" />
          <circle cx="125" cy="120" r="32" fill="#0F172A" stroke="#64748B" strokeWidth="4" />

          {/* 6 Radial Heavy Stiffener Ribs on Front Plate (Distinctive ID Fan feature from PDF Page 2) */}
          {[0, 60, 120, 180, 240, 300].map((deg, i) => (
            <polygon
              key={i}
              points={`
                ${125 + 32 * Math.cos(((deg - 6) * Math.PI) / 180)},${120 + 32 * Math.sin(((deg - 6) * Math.PI) / 180)}
                ${125 + 68 * Math.cos((deg * Math.PI) / 180)},${120 + 68 * Math.sin((deg * Math.PI) / 180)}
                ${125 + 32 * Math.cos(((deg + 6) * Math.PI) / 180)},${120 + 32 * Math.sin(((deg + 6) * Math.PI) / 180)}
              `}
              fill="#64748B"
              stroke="#CBD5E1"
              strokeWidth="1.5"
            />
          ))}

          {/* Center Shaft Eye */}
          <circle cx="125" cy="120" r="12" fill="#94A3B8" stroke="#0F172A" strokeWidth="3" />
        </svg>
      );

    // 3. Tube Axial Flow Fan (Page 8, 18, 19, 53, 62)
    case "axial-fans":
    case "tube-axial-fan":
    case "roof-ventilator-axial-fan":
      return (
        <svg viewBox="0 0 240 240" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Support Cradle Stand */}
          <path d="M 50 190 L 190 190 L 175 210 L 65 210 Z" fill="#0F172A" stroke="#334155" strokeWidth="2" />
          
          {/* Heavy Steel Duct Casing Outer Ring */}
          <circle cx="120" cy="115" r="85" fill="#1E40AF" stroke="#60A5FA" strokeWidth="8" />
          <circle cx="120" cy="115" r="75" fill="#0F172A" stroke="#93C5FD" strokeWidth="3" strokeDasharray="5 5" />

          {/* Wire Mesh Guard */}
          <line x1="45" y1="115" x2="195" y2="115" stroke="#64748B" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="120" y1="40" x2="120" y2="190" stroke="#64748B" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="120" cy="115" r="55" stroke="#64748B" strokeWidth="1" strokeDasharray="3 3" />

          {/* 6 Aerodynamic Aluminum Aerofoil Blades (From PDF Page 8 & 19) */}
          {[0, 60, 120, 180, 240, 300].map((deg, i) => (
            <g key={i} transform={`rotate(${deg} 120 115)`}>
              <path
                d="M 112 85 C 104 50, 136 50, 128 85 Z"
                fill="#E2E8F0"
                stroke="#94A3B8"
                strokeWidth="2.5"
              />
              <line x1="120" y1="85" x2="120" y2="55" stroke="#64748B" strokeWidth="2" />
            </g>
          ))}

          {/* Heavy Cast Aluminum Central Hub */}
          <circle cx="120" cy="115" r="30" fill="#1E293B" stroke="#F59E0B" strokeWidth="4" />
          <circle cx="120" cy="115" r="14" fill="#E2E8F0" stroke="#0F172A" strokeWidth="3" />
          <circle cx="120" cy="115" r="5" fill="#D97706" />

          {/* Top Mounted Motor for V-Belt Variant */}
          <rect x="100" y="8" width="40" height="24" rx="3" fill="#15803D" stroke="#86EFAC" strokeWidth="2" />
          <rect x="112" y="30" width="16" height="8" fill="#334155" />
        </svg>
      );

    // 4. Bifurcated Axial Flow Fan (Page 8, 27, 55)
    case "bifurcated-axial-flow-fan":
      return (
        <svg viewBox="0 0 240 240" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Square Heavy Tunnel Housing */}
          <rect x="40" y="30" width="160" height="170" rx="4" fill="#334155" stroke="#94A3B8" strokeWidth="6" />
          {/* Square Inlet Flange */}
          <rect x="30" y="20" width="180" height="190" rx="4" fill="none" stroke="#CBD5E1" strokeWidth="3" strokeDasharray="8 8" />
          
          {/* Center Isolated Motor Tunnel Chamber */}
          <rect x="90" y="60" width="60" height="110" rx="30" fill="#0F172A" stroke="#F59E0B" strokeWidth="4" />
          
          {/* Dual Bifurcated Air Passages (Left & Right) */}
          <path d="M 45 40 Q 85 115 45 190" stroke="#38BDF8" strokeWidth="3" fill="none" />
          <path d="M 195 40 Q 155 115 195 190" stroke="#38BDF8" strokeWidth="3" fill="none" />

          {/* Isolated Electric Motor inside chamber */}
          <rect x="100" y="85" width="40" height="60" rx="4" fill="#1E40AF" stroke="#60A5FA" strokeWidth="2" />
          <circle cx="120" cy="115" r="10" fill="#F8FAFC" />
          <text x="96" y="175" fill="#F59E0B" fontSize="9" fontWeight="bold" fontFamily="monospace">ISOLATED</text>
        </svg>
      );

    // 5. Pulse Jet Baghouse Dust Collector (Page 6, 10)
    case "dust-collection":
    case "bag-type-dust-collector":
    case "bag-filter-boiler-pollution-control":
      return (
        <svg viewBox="0 0 240 240" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main Rectangular Filter Bag Plenum Box */}
          <rect x="60" y="30" width="120" height="100" rx="3" fill="#1E293B" stroke="#38BDF8" strokeWidth="4" />
          {/* Clean Air Top Header Plenum */}
          <rect x="55" y="15" width="130" height="20" rx="2" fill="#0284C7" stroke="#60A5FA" strokeWidth="2" />
          
          {/* Compressed Air Header & Pulse Valves */}
          <rect x="65" y="20" width="110" height="8" rx="2" fill="#EA580C" />
          {[75, 95, 115, 135, 155].map((x, i) => (
            <circle key={i} cx={x} cy={24} r="3.5" fill="#FDE047" stroke="#9A3412" strokeWidth="1" />
          ))}

          {/* Filter Bag Cages inside */}
          {[75, 95, 115, 135, 155].map((x, i) => (
            <g key={i}>
              <line x1={x} y1="35" x2={x} y2="125" stroke="#94A3B8" strokeWidth="6" strokeLinecap="round" />
              <line x1={x} y1="35" x2={x} y2="125" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="3 3" />
            </g>
          ))}

          {/* Pyramidal Dust Discharge Hopper */}
          <polygon points="60,130 180,130 140,195 100,195" fill="#0F172A" stroke="#38BDF8" strokeWidth="4" />
          {/* Motorized Rotary Airlock Valve */}
          <rect x="95" y="195" width="50" height="25" rx="3" fill="#B45309" stroke="#FDE047" strokeWidth="2" />
          <circle cx="120" cy="207" r="7" fill="#0F172A" />

          {/* Legs Frame */}
          <line x1="60" y1="130" x2="45" y2="225" stroke="#64748B" strokeWidth="5" />
          <line x1="180" y1="130" x2="195" y2="225" stroke="#64748B" strokeWidth="5" />
          <line x1="45" y1="210" x2="195" y2="210" stroke="#64748B" strokeWidth="3" />
        </svg>
      );

    // 6. High Pressure Conical Discharge Blower (Page 3, 50)
    case "conical-high-pressure-blower":
      return (
        <svg viewBox="0 0 240 240" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="50" y="195" width="140" height="15" fill="#1E3A8A" stroke="#3B82F6" strokeWidth="2" />
          {/* Scroll */}
          <circle cx="130" cy="120" r="70" fill="#1E40AF" stroke="#60A5FA" strokeWidth="5" />
          {/* Distinctive Conical Tapered Discharge Nozzle */}
          <polygon points="110,50 145,50 85,25 60,35" fill="#1D4ED8" stroke="#93C5FD" strokeWidth="3" />
          <circle cx="60" cy="35" r="10" stroke="#F59E0B" strokeWidth="3" fill="#172554" />
          {/* Inlet */}
          <circle cx="130" cy="120" r="40" fill="#0F172A" stroke="#93C5FD" strokeWidth="4" />
          <circle cx="130" cy="120" r="15" fill="#E2E8F0" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 240 240" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="120" cy="120" r="80" stroke="#1E40AF" strokeWidth="6" fill="#0F172A" />
          <circle cx="120" cy="120" r="30" fill="#F59E0B" />
          <line x1="120" y1="40" x2="120" y2="200" stroke="#38BDF8" strokeWidth="4" />
          <line x1="40" y1="120" x2="200" y2="120" stroke="#38BDF8" strokeWidth="4" />
        </svg>
      );
  }
};

