import React from "react";

export default function AirflowGraphic({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full h-full flex items-center justify-center overflow-hidden pointer-events-none select-none ${className}`}>
      <svg
        className="w-full h-full max-w-2xl max-h-[500px]"
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Light Theme Gradients */}
          <linearGradient id="streamGradLight1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F25920" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#FF7442" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#26235E" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="cycloneGradLight" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#FDEEE8" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#F0F2FA" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
          </linearGradient>

          <filter id="subtleGlowLight" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Blueprint Grid Lines in Slate */}
        <path
          d="M 50 150 L 250 150 C 320 150 350 200 350 260 L 350 450"
          stroke="#26235E"
          strokeWidth="2"
          strokeDasharray="6 6"
          opacity="0.25"
        />
        <path
          d="M 80 180 L 250 180 C 300 180 320 220 320 270 L 320 450"
          stroke="#26235E"
          strokeWidth="1.5"
          opacity="0.18"
        />

        {/* Dynamic Airflow Streamlines */}
        <path
          d="M 30 140 C 200 140, 280 170, 360 250 C 440 330, 520 280, 680 290 L 760 290"
          stroke="url(#streamGradLight1)"
          strokeWidth="3.5"
          strokeLinecap="round"
          filter="url(#subtleGlowLight)"
        />
        <path
          d="M 60 200 C 220 200, 310 240, 390 320 C 470 400, 560 360, 740 360"
          stroke="url(#streamGradLight1)"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.8"
        />
        <path
          d="M 40 260 C 180 260, 270 300, 350 380 C 430 460, 580 430, 720 430"
          stroke="#26235E"
          strokeWidth="1.8"
          strokeDasharray="8 4"
          opacity="0.45"
        />

        {/* Central Cyclonic Vortex / Separation Cone */}
        <g transform="translate(420, 240)">
          {/* Cyclone Shell */}
          <path
            d="M -100 -80 L 100 -80 L 50 140 L 15 220 L -15 220 L -50 140 Z"
            stroke="#26235E"
            strokeWidth="2"
            fill="url(#cycloneGradLight)"
            opacity="0.85"
          />

          {/* Internal Vortex Spirals */}
          <ellipse cx="0" cy="-60" rx="80" ry="16" stroke="#F25920" strokeWidth="2.2" opacity="0.85" />
          <ellipse cx="0" cy="-20" rx="65" ry="13" stroke="#F25920" strokeWidth="2" opacity="0.75" />
          <ellipse cx="0" cy="20" rx="50" ry="10" stroke="#F25920" strokeWidth="1.8" opacity="0.8" />
          <ellipse cx="0" cy="60" rx="35" ry="8" stroke="#F25920" strokeWidth="1.8" opacity="0.85" />
          <ellipse cx="0" cy="100" rx="22" ry="6" stroke="#F25920" strokeWidth="2" opacity="0.9" />
          <ellipse cx="0" cy="140" rx="14" ry="4" stroke="#F25920" strokeWidth="2.2" opacity="0.95" />

          {/* Centrifugal Blower Housing Arc */}
          <path
            d="M 60 -80 C 120 -80, 160 -40, 160 20 C 160 90, 110 130, 40 130"
            stroke="#26235E"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Discharge Clean Air Stream upward */}
          <path
            d="M 0 -70 L 0 -180"
            stroke="#0284C7"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="8 6"
            opacity="0.9"
          />
          <polygon points="0,-195 -8,-178 8,-178" fill="#0284C7" opacity="0.95" />
        </g>

        {/* Dust Particles & Flow Vectors */}
        <circle cx="160" cy="145" r="4.5" fill="#F25920" />
        <circle cx="210" cy="155" r="3" fill="#FF7442" />
        <circle cx="270" cy="180" r="4" fill="#F25920" />
        <circle cx="330" cy="230" r="3.5" fill="#26235E" />
        <circle cx="390" cy="290" r="4.5" fill="#F25920" />
        <circle cx="430" cy="360" r="3.5" fill="#F25920" />
        <circle cx="410" cy="420" r="3" fill="#26235E" />

        <circle cx="560" cy="300" r="3.5" fill="#F25920" />
        <circle cx="640" cy="295" r="4.5" fill="#FF7442" />
        <circle cx="710" cy="290" r="4" fill="#26235E" />

        {/* Technical Callout Rings */}
        <g transform="translate(680, 120)">
          <circle cx="0" cy="0" r="36" stroke="#26235E" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.4" />
          <circle cx="0" cy="0" r="4" fill="#F25920" />
          <line x1="0" y1="0" x2="-40" y2="40" stroke="#26235E" strokeWidth="1.2" opacity="0.5" />
          <text x="-135" y="55" fill="#26235E" fontSize="10" fontWeight="bold" fontFamily="monospace" letterSpacing="1">
            VELOCITY: 22 m/s
          </text>
        </g>

        <g transform="translate(180, 480)">
          <circle cx="0" cy="0" r="28" stroke="#0284C7" strokeWidth="1.2" strokeDasharray="4 2" opacity="0.5" />
          <circle cx="0" cy="0" r="3.5" fill="#0284C7" />
          <text x="-40" y="45" fill="#0284C7" fontSize="10" fontWeight="bold" fontFamily="monospace" letterSpacing="1">
            EFFICIENCY: 99.9%
          </text>
        </g>
      </svg>
    </div>
  );
}
