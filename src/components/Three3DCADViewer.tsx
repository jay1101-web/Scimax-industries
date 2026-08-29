import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import {
  RotateCw,
  Layers,
  Eye,
  Gauge,
  Activity,
  Wind,
  Info,
  Sparkles,
  Zap,
  CheckCircle2,
  Calendar,
  ArrowUpRight,
  Maximize2,
  Minimize2
} from "lucide-react";

export type Machine3DType = "centrifugal-blowers" | "induced-draft-id-fan" | "axial-fans" | "dust-collection";
type RenderMode = "solid" | "wire" | "xray";
type CameraView = "ISO" | "FRONT" | "SIDE" | "TOP" | "DRIVE";

interface MachineMetadata {
  id: Machine3DType;
  name: string;
  tag: string;
  spec: string;
  badge: string;
  rpm: number;
  pressure: string;
  airflow: string;
  power: string;
  efficiency: string;
  vibration: string;
  balanceGrade: string;
  hotspots: {
    id: number;
    title: string;
    desc: string;
    pos: [number, number, number];
  }[];
}

const MACHINES_DATA: Record<Machine3DType, MachineMetadata> = {
  "centrifugal-blowers": {
    id: "centrifugal-blowers",
    name: "Heavy Centrifugal Blower",
    tag: "ID/FD FAN",
    spec: "0.5 – 100 HP | 8,00,000 m³/hr",
    badge: "Centrifugal",
    rpm: 1440,
    pressure: "Up to 800 mm WG",
    airflow: "45,000 m³/hr (26,500 CFM)",
    power: "0.5 – 100 HP",
    efficiency: "88.4% Peak Aerodynamic",
    vibration: "0.42 mm/s RMS (Class 1)",
    balanceGrade: "ISO 1940 Grade 6.3",
    hotspots: [
      { id: 1, title: "8-Blade Impeller", desc: "Dynamic Balanced Rotor • ISO 1940 G6.3", pos: [2.4, 3.2, 0] },
      { id: 2, title: "Volute Scroll", desc: "CNC Plasma Cut Continuous Welded Steel", pos: [2.4, 4.8, -1.2] },
      { id: 3, title: "Top Discharge Flange", desc: "Standard Heavy Duct Flange (IS 2062)", pos: [0.8, 7.2, 0] },
      { id: 4, title: "IE3 Electric Motor", desc: "High-Efficiency Finned Motor (0.5 – 100 HP)", pos: [-3.6, 3.2, 0] },
      { id: 5, title: "Plummer Block Bearing", desc: "Heavy Cast Bearing with Grease Nipple", pos: [0.6, 2.2, 0] }
    ]
  },
  "induced-draft-id-fan": {
    id: "induced-draft-id-fan",
    name: "Heavy Ribbed ID Boiler Fan",
    tag: "BOILER DUTY",
    spec: "Radial Stiffeners | 1000mm WG",
    badge: "Boiler Duty",
    rpm: 960,
    pressure: "Up to 1000 mm WG",
    airflow: "85,000 m³/hr (50,000 CFM)",
    power: "15 – 150 HP",
    efficiency: "89.2% High Temp",
    vibration: "0.55 mm/s RMS (Class 1)",
    balanceGrade: "ISO 1940 Grade 6.3",
    hotspots: [
      { id: 1, title: "Radial Gusset Stiffeners", desc: "Reinforced structural ribs for 350°C thermal expansion", pos: [2.4, 3.2, 1.6] },
      { id: 2, title: "Heavy Flue Gas Volute", desc: "8mm MS abrasion-resistant liner plate", pos: [2.4, 5.0, -1.0] },
      { id: 3, title: "Water-Cooled Bearings", desc: "Plummer block with heat dissipation disc", pos: [0.2, 2.2, 0] },
      { id: 4, title: "ISMB Channel Skid Frame", desc: "Heavy rolled steel I-beam foundation", pos: [-1.0, 0.4, 0] }
    ]
  },
  "axial-fans": {
    id: "axial-fans",
    name: "Tube Axial V-Belt Fan",
    tag: "VENTILATION",
    spec: "Aerofoil Blades | Cast Al Hub",
    badge: "Ventilation",
    rpm: 1440,
    pressure: "0 – 75 mm WG",
    airflow: "3,00,000 m³/hr (40,000 CFM)",
    power: "1 – 20 HP",
    efficiency: "85.6% High Flow",
    vibration: "0.38 mm/s RMS",
    balanceGrade: "ISO 1940 Grade 6.3",
    hotspots: [
      { id: 1, title: "Cast Al Aerofoil Rotor", desc: "6-blade high-efficiency adjustable pitch impeller", pos: [0, 3.2, 0] },
      { id: 2, title: "Rolled Steel Cylindrical Tube", desc: "Heavy rolled steel duct casing with end flanges", pos: [0, 3.2, -1.8] },
      { id: 3, title: "Top Motor Cradle Mount", desc: "External motor mount isolated from airstream", pos: [0, 7.2, 0] },
      { id: 4, title: "Enclosed V-Belt Drive Guard", desc: "Heavy sheet metal triangular belt safety casing", pos: [2.2, 5.2, 0] },
      { id: 5, title: "Safety Wire Mesh Guard", desc: "Protective finger guard wire mesh screen", pos: [0, 3.2, 3.2] }
    ]
  },
  "dust-collection": {
    id: "dust-collection",
    name: "Pulse-Jet Baghouse Filter",
    tag: "POLLUTION",
    spec: "99.9% Filtration | Auto Timer",
    badge: "Pollution Control",
    rpm: 0,
    pressure: "150 – 250 mm WG",
    airflow: "1,20,000 m³/hr",
    power: "5 – 75 HP",
    efficiency: "99.9% PM 2.5 Separation",
    vibration: "N/A (Static Unit)",
    balanceGrade: "GPCB / CPCB Norms",
    hotspots: [
      { id: 1, title: "Pulse Solenoid Valves", desc: "Sequential auto compressed air reverse pulse headers", pos: [0, 8.4, 0] },
      { id: 2, title: "Filter Bag Chamber", desc: "PTFE / Polyester needle felt bag array with wire cages", pos: [0, 5.2, 0] },
      { id: 3, title: "60° Pyramidal Hopper", desc: "Steep angle dust collection cone with cleanout door", pos: [0, 2.2, 0] },
      { id: 4, title: "Rotary Airlock Valve", desc: "Motorized continuous airtight dust discharge valve", pos: [0, 0.4, 0] },
      { id: 5, title: "Dirty Air Inlet Duct", desc: "Pre-separation baffle box with abrasive wear plate", pos: [2.8, 4.4, 0] }
    ]
  }
};

interface Three3DCADViewerProps {
  onOpenAppointment?: () => void;
  onNavigateToSizing?: () => void;
}

export const Three3DCADViewer: React.FC<Three3DCADViewerProps> = ({
  onOpenAppointment,
  onNavigateToSizing
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  
  // Interactive UI State
  const [selectedMachine, setSelectedMachine] = useState<Machine3DType>("centrifugal-blowers");
  const [isOrbiting, setIsOrbiting] = useState<boolean>(true);
  const [isExploded, setIsExploded] = useState<boolean>(false);
  const [renderMode, setRenderMode] = useState<RenderMode>("solid");
  const [currentView, setCurrentView] = useState<CameraView>("ISO");
  const [showHotspots, setShowHotspots] = useState<boolean>(true);
  const [selectedHotspot, setSelectedHotspot] = useState<number | null>(null);
  const [hotspotScreenPositions, setHotspotScreenPositions] = useState<{ id: number; title: string; desc: string; x: number; y: number; visible: boolean }[]>([]);

  // Three.js References
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const modelMasterGroupRef = useRef<THREE.Group | null>(null);
  const rotatingPartRef = useRef<THREE.Group | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);

  // Exploded Parts References for dynamic morphing
  const explodePartsRef = useRef<{ part: THREE.Object3D; dir: THREE.Vector3; distance: number }[]>([]);
  const explodeFactorRef = useRef<number>(0);

  // Camera Target for Smooth Orbit & View Transitions
  const cameraStateRef = useRef({
    radius: 24,
    theta: Math.PI / 4,
    phi: Math.PI / 3.2,
    targetTheta: Math.PI / 4,
    targetPhi: Math.PI / 3.2,
    targetRadius: 24,
    isDragging: false,
    prevMouseX: 0,
    prevMouseY: 0
  });

  const activeMetadata = MACHINES_DATA[selectedMachine];

  // Helper to build 3D Models
  const buildModel = (scene: THREE.Scene, machineType: Machine3DType) => {
    // Clear existing model group
    if (modelMasterGroupRef.current) {
      scene.remove(modelMasterGroupRef.current);
      modelMasterGroupRef.current.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          if (Array.isArray(child.material)) child.material.forEach((m) => m.dispose());
          else child.material.dispose();
        }
      });
    }

    explodePartsRef.current = [];
    rotatingPartRef.current = null;

    const masterGroup = new THREE.Group();
    masterGroup.position.set(0, 0.5, 0);
    scene.add(masterGroup);
    modelMasterGroupRef.current = masterGroup;

    // Materials Palette
    const blueColor = 0x0284c7;   // Scimax Cyan/Blue
    const darkBlue = 0x0369a1;
    const greyMetal = 0x475569;   // Industrial Steel Grey
    const darkSteel = 0x1e293b;   // Heavy Base Skid
    const motorBlack = 0x0f172a;  // Finned Motor
    const orangeAccent = 0xea580c; // Anti-Vibration Mounts
    const shinySteel = 0xe2e8f0;  // Shaft & Bearing Chrome
    const meshCyan = 0x38bdf8;    // Wire Mesh Guard

    // ─────────────────────────────────────────────────────────────
    // MODEL 1: Heavy Centrifugal Blower
    // ─────────────────────────────────────────────────────────────
    if (machineType === "centrifugal-blowers") {
      // 1. Base Skid
      const baseGroup = new THREE.Group();
      const skidGeo = new THREE.BoxGeometry(11, 0.6, 6.5);
      const skidMat = new THREE.MeshStandardMaterial({ color: darkSteel, roughness: 0.5, metalness: 0.7 });
      const skidMesh = new THREE.Mesh(skidGeo, skidMat);
      skidMesh.castShadow = true;
      skidMesh.receiveShadow = true;
      baseGroup.add(skidMesh);

      [[-4.5, -0.45, -2.4], [4.5, -0.45, -2.4], [-4.5, -0.45, 2.4], [4.5, -0.45, 2.4]].forEach(([x, y, z]) => {
        const mountGeo = new THREE.CylinderGeometry(0.5, 0.6, 0.5, 16);
        const mountMat = new THREE.MeshStandardMaterial({ color: orangeAccent, roughness: 0.4, metalness: 0.5 });
        const mountMesh = new THREE.Mesh(mountGeo, mountMat);
        mountMesh.position.set(x, y, z);
        baseGroup.add(mountMesh);
      });
      masterGroup.add(baseGroup);

      // 2. Volute Scroll
      const voluteGroup = new THREE.Group();
      voluteGroup.position.set(2.4, 3.2, 0);

      const voluteScrollGeo = new THREE.CylinderGeometry(3.6, 3.8, 3.2, 32);
      const voluteMat = new THREE.MeshStandardMaterial({ color: blueColor, roughness: 0.35, metalness: 0.45 });
      const voluteMesh = new THREE.Mesh(voluteScrollGeo, voluteMat);
      voluteMesh.rotation.x = Math.PI / 2;
      voluteMesh.castShadow = true;
      voluteGroup.add(voluteMesh);

      const dischargeGeo = new THREE.BoxGeometry(2.4, 3.6, 2.6);
      const dischargeMesh = new THREE.Mesh(dischargeGeo, voluteMat);
      dischargeMesh.position.set(-1.6, 2.6, 0);
      voluteGroup.add(dischargeMesh);

      const flangeLipGeo = new THREE.BoxGeometry(2.8, 0.4, 3.0);
      const flangeLipMat = new THREE.MeshStandardMaterial({ color: darkSteel, roughness: 0.3, metalness: 0.8 });
      const flangeLipMesh = new THREE.Mesh(flangeLipGeo, flangeLipMat);
      flangeLipMesh.position.set(-1.6, 4.4, 0);
      voluteGroup.add(flangeLipMesh);

      masterGroup.add(voluteGroup);

      // 3. Suction Flange
      const inletGroup = new THREE.Group();
      inletGroup.position.set(2.4, 3.2, 1.8);
      const inletConeGeo = new THREE.CylinderGeometry(2.1, 2.4, 0.9, 32);
      const inletConeMesh = new THREE.Mesh(inletConeGeo, voluteMat);
      inletConeMesh.rotation.x = Math.PI / 2;
      inletGroup.add(inletConeMesh);
      const inletRingGeo = new THREE.TorusGeometry(2.3, 0.22, 16, 32);
      const inletRingMesh = new THREE.Mesh(inletRingGeo, flangeLipMat);
      inletRingMesh.position.z = 0.5;
      inletGroup.add(inletRingMesh);
      masterGroup.add(inletGroup);

      // 4. Impeller Core (8 Blades)
      const impellerGroup = new THREE.Group();
      impellerGroup.position.set(2.4, 3.2, 0);
      rotatingPartRef.current = impellerGroup;

      const backplateGeo = new THREE.CylinderGeometry(3.2, 3.2, 0.15, 32);
      const backplateMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.2, metalness: 0.8 });
      const backplateMesh = new THREE.Mesh(backplateGeo, backplateMat);
      backplateMesh.rotation.x = Math.PI / 2;
      backplateMesh.position.z = -0.8;
      impellerGroup.add(backplateMesh);

      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const bladeGeo = new THREE.BoxGeometry(1.6, 0.1, 1.4);
        const bladeMat = new THREE.MeshStandardMaterial({ color: blueColor, roughness: 0.25, metalness: 0.75 });
        const bladeMesh = new THREE.Mesh(bladeGeo, bladeMat);
        bladeMesh.position.x = Math.cos(angle) * 1.8;
        bladeMesh.position.y = Math.sin(angle) * 1.8;
        bladeMesh.rotation.z = angle + 0.45;
        impellerGroup.add(bladeMesh);
      }
      masterGroup.add(impellerGroup);

      // 5. Shaft & Bearing
      const shaftGroup = new THREE.Group();
      shaftGroup.position.set(0, 3.2, 0);
      const shaftGeo = new THREE.CylinderGeometry(0.28, 0.28, 4.8, 24);
      const shaftMat = new THREE.MeshStandardMaterial({ color: shinySteel, roughness: 0.15, metalness: 0.95 });
      const shaftMesh = new THREE.Mesh(shaftGeo, shaftMat);
      shaftMesh.rotation.z = Math.PI / 2;
      shaftGroup.add(shaftMesh);
      masterGroup.add(shaftGroup);

      const bearingGroup = new THREE.Group();
      bearingGroup.position.set(0.6, 2.0, 0);
      const plummerGeo = new THREE.BoxGeometry(1.6, 2.2, 1.8);
      const plummerMat = new THREE.MeshStandardMaterial({ color: darkSteel, roughness: 0.4, metalness: 0.7 });
      const plummerMesh = new THREE.Mesh(plummerGeo, plummerMat);
      bearingGroup.add(plummerMesh);
      masterGroup.add(bearingGroup);

      // 6. Motor
      const motorGroup = new THREE.Group();
      motorGroup.position.set(-3.6, 3.2, 0);
      const motorCasingGeo = new THREE.CylinderGeometry(1.8, 1.8, 3.4, 24);
      const motorCasingMat = new THREE.MeshStandardMaterial({ color: motorBlack, roughness: 0.35, metalness: 0.65 });
      const motorCasingMesh = new THREE.Mesh(motorCasingGeo, motorCasingMat);
      motorCasingMesh.rotation.z = Math.PI / 2;
      motorGroup.add(motorCasingMesh);

      const termGeo = new THREE.BoxGeometry(1.2, 0.8, 1.2);
      const termMesh = new THREE.Mesh(termGeo, new THREE.MeshStandardMaterial({ color: blueColor }));
      termMesh.position.set(-0.3, 1.9, 0);
      motorGroup.add(termMesh);
      masterGroup.add(motorGroup);

      // Register Explode Parts
      explodePartsRef.current = [
        { part: inletGroup, dir: new THREE.Vector3(0, 0, 1), distance: 4.0 },
        { part: voluteGroup, dir: new THREE.Vector3(1, 0, 0), distance: 2.0 },
        { part: impellerGroup, dir: new THREE.Vector3(0, 0, 1), distance: 2.5 },
        { part: bearingGroup, dir: new THREE.Vector3(-1, 0, 0), distance: 1.8 },
        { part: motorGroup, dir: new THREE.Vector3(-1, 0, 0), distance: 4.5 }
      ];
    }

    // ─────────────────────────────────────────────────────────────
    // MODEL 2: Heavy Ribbed ID Boiler Fan
    // ─────────────────────────────────────────────────────────────
    else if (machineType === "induced-draft-id-fan") {
      // 1. Heavy I-Beam Channel Skid
      const baseGroup = new THREE.Group();
      const skidGeo = new THREE.BoxGeometry(13, 0.8, 7.5);
      const skidMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.4, metalness: 0.8 });
      const skidMesh = new THREE.Mesh(skidGeo, skidMat);
      baseGroup.add(skidMesh);
      masterGroup.add(baseGroup);

      // 2. Heavy-Duty Ribbed Volute Scroll (Grey)
      const voluteGroup = new THREE.Group();
      voluteGroup.position.set(2.6, 3.6, 0);

      const voluteGeo = new THREE.CylinderGeometry(4.2, 4.4, 3.6, 32);
      const voluteMat = new THREE.MeshStandardMaterial({ color: greyMetal, roughness: 0.4, metalness: 0.6 });
      const voluteMesh = new THREE.Mesh(voluteGeo, voluteMat);
      voluteMesh.rotation.x = Math.PI / 2;
      voluteGroup.add(voluteMesh);

      // 8 Radial Gusset Stiffeners on front plate
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const ribGeo = new THREE.BoxGeometry(2.4, 0.2, 0.4);
        const ribMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.3, metalness: 0.7 });
        const ribMesh = new THREE.Mesh(ribGeo, ribMat);
        ribMesh.position.set(Math.cos(angle) * 2.6, Math.sin(angle) * 2.6, 1.85);
        ribMesh.rotation.z = angle;
        voluteGroup.add(ribMesh);
      }

      // Top Discharge Duct
      const dischargeGeo = new THREE.BoxGeometry(2.8, 3.8, 3.0);
      const dischargeMesh = new THREE.Mesh(dischargeGeo, voluteMat);
      dischargeMesh.position.set(-1.8, 3.0, 0);
      voluteGroup.add(dischargeMesh);

      // Heavy Duct Flange with Bolted Angle
      const flangeGeo = new THREE.BoxGeometry(3.2, 0.4, 3.4);
      const flangeMat = new THREE.MeshStandardMaterial({ color: darkSteel, roughness: 0.2, metalness: 0.9 });
      const flangeMesh = new THREE.Mesh(flangeGeo, flangeMat);
      flangeMesh.position.set(-1.8, 4.9, 0);
      voluteGroup.add(flangeMesh);

      masterGroup.add(voluteGroup);

      // 3. Suction Flange with Heavy Collar
      const inletGroup = new THREE.Group();
      inletGroup.position.set(2.6, 3.6, 2.0);
      const inletConeGeo = new THREE.CylinderGeometry(2.4, 2.8, 1.2, 32);
      const inletConeMesh = new THREE.Mesh(inletConeGeo, voluteMat);
      inletConeMesh.rotation.x = Math.PI / 2;
      inletGroup.add(inletConeMesh);
      masterGroup.add(inletGroup);

      // 4. Heavy High-Temp Impeller
      const impellerGroup = new THREE.Group();
      impellerGroup.position.set(2.6, 3.6, 0);
      rotatingPartRef.current = impellerGroup;

      const backplateGeo = new THREE.CylinderGeometry(3.8, 3.8, 0.2, 32);
      const backplateMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.3, metalness: 0.8 });
      const backplateMesh = new THREE.Mesh(backplateGeo, backplateMat);
      backplateMesh.rotation.x = Math.PI / 2;
      backplateMesh.position.z = -0.9;
      impellerGroup.add(backplateMesh);

      for (let i = 0; i < 10; i++) {
        const angle = (i / 10) * Math.PI * 2;
        const bladeGeo = new THREE.BoxGeometry(1.8, 0.15, 1.6);
        const bladeMat = new THREE.MeshStandardMaterial({ color: greyMetal, roughness: 0.3, metalness: 0.7 });
        const bladeMesh = new THREE.Mesh(bladeGeo, bladeMat);
        bladeMesh.position.x = Math.cos(angle) * 2.0;
        bladeMesh.position.y = Math.sin(angle) * 2.0;
        bladeMesh.rotation.z = angle + 0.3;
        impellerGroup.add(bladeMesh);
      }
      masterGroup.add(impellerGroup);

      // 5. Heavy Plummer Block & Shaft
      const shaftGroup = new THREE.Group();
      shaftGroup.position.set(0, 3.6, 0);
      const shaftGeo = new THREE.CylinderGeometry(0.35, 0.35, 6.0, 24);
      const shaftMesh = new THREE.Mesh(shaftGeo, new THREE.MeshStandardMaterial({ color: shinySteel, roughness: 0.15, metalness: 0.95 }));
      shaftMesh.rotation.z = Math.PI / 2;
      shaftGroup.add(shaftMesh);

      // Heat Dissipation Disc (Water Cooled)
      const heatDiscGeo = new THREE.CylinderGeometry(1.2, 1.2, 0.25, 24);
      const heatDiscMat = new THREE.MeshStandardMaterial({ color: orangeAccent, roughness: 0.3, metalness: 0.6 });
      const heatDiscMesh = new THREE.Mesh(heatDiscGeo, heatDiscMat);
      heatDiscMesh.rotation.z = Math.PI / 2;
      heatDiscMesh.position.set(1.5, 0, 0);
      shaftGroup.add(heatDiscMesh);

      masterGroup.add(shaftGroup);

      // 6. Side High-Power Motor
      const motorGroup = new THREE.Group();
      motorGroup.position.set(-4.2, 3.6, 0);
      const motorGeo = new THREE.CylinderGeometry(2.2, 2.2, 4.2, 24);
      const motorMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.35, metalness: 0.65 });
      const motorMesh = new THREE.Mesh(motorGeo, motorMat);
      motorMesh.rotation.z = Math.PI / 2;
      motorGroup.add(motorMesh);
      masterGroup.add(motorGroup);

      explodePartsRef.current = [
        { part: inletGroup, dir: new THREE.Vector3(0, 0, 1), distance: 4.5 },
        { part: voluteGroup, dir: new THREE.Vector3(1, 0, 0), distance: 2.5 },
        { part: impellerGroup, dir: new THREE.Vector3(0, 0, 1), distance: 3.0 },
        { part: motorGroup, dir: new THREE.Vector3(-1, 0, 0), distance: 4.5 }
      ];
    }

    // ─────────────────────────────────────────────────────────────
    // MODEL 3: Tube Axial V-Belt Fan
    // ─────────────────────────────────────────────────────────────
    else if (machineType === "axial-fans") {
      // 1. Cylindrical Duct Tube Housing
      const tubeGroup = new THREE.Group();
      tubeGroup.position.set(0, 3.2, 0);

      // Main Outer Rolled Shell
      const tubeGeo = new THREE.CylinderGeometry(3.6, 3.6, 6.4, 32, 1, true);
      const tubeMat = new THREE.MeshStandardMaterial({ color: greyMetal, roughness: 0.35, metalness: 0.6, side: THREE.DoubleSide });
      const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
      tubeMesh.rotation.x = Math.PI / 2;
      tubeGroup.add(tubeMesh);

      // Circular Duct Flanges (Front & Back)
      const flangeGeo = new THREE.TorusGeometry(3.8, 0.25, 16, 32);
      const flangeMat = new THREE.MeshStandardMaterial({ color: darkSteel, roughness: 0.3, metalness: 0.8 });
      const frontFlange = new THREE.Mesh(flangeGeo, flangeMat);
      frontFlange.position.z = 3.2;
      tubeGroup.add(frontFlange);

      const backFlange = new THREE.Mesh(flangeGeo, flangeMat);
      backFlange.position.z = -3.2;
      tubeGroup.add(backFlange);

      // Cylindrical Motor Tunnel Pod in Center
      const podGeo = new THREE.CylinderGeometry(1.2, 1.2, 3.2, 24);
      const podMat = new THREE.MeshStandardMaterial({ color: darkSteel, roughness: 0.4, metalness: 0.7 });
      const podMesh = new THREE.Mesh(podGeo, podMat);
      podMesh.rotation.x = Math.PI / 2;
      tubeGroup.add(podMesh);

      // Support Struts holding center pod
      for (let i = 0; i < 4; i++) {
        const angle = (i / 4) * Math.PI * 2;
        const strutGeo = new THREE.BoxGeometry(2.4, 0.2, 0.8);
        const strutMesh = new THREE.Mesh(strutGeo, podMat);
        strutMesh.position.set(Math.cos(angle) * 2.4, Math.sin(angle) * 2.4, 0);
        strutMesh.rotation.z = angle;
        tubeGroup.add(strutMesh);
      }

      // Mounting Feet / Pedestal
      const feetGeo = new THREE.BoxGeometry(4.8, 0.5, 5.0);
      const feetMesh = new THREE.Mesh(feetGeo, flangeMat);
      feetMesh.position.set(0, -3.8, 0);
      tubeGroup.add(feetMesh);

      masterGroup.add(tubeGroup);

      // 2. Cast Aluminum Aerofoil 6-Blade Rotor (Spinning)
      const rotorGroup = new THREE.Group();
      rotorGroup.position.set(0, 3.2, 0.6);
      rotatingPartRef.current = rotorGroup;

      const hubGeo = new THREE.CylinderGeometry(1.4, 1.4, 1.2, 24);
      const hubMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.2, metalness: 0.9 });
      const hubMesh = new THREE.Mesh(hubGeo, hubMat);
      hubMesh.rotation.x = Math.PI / 2;
      rotorGroup.add(hubMesh);

      const noseConeGeo = new THREE.ConeGeometry(1.4, 1.2, 24);
      const noseConeMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.2, metalness: 0.8 });
      const noseConeMesh = new THREE.Mesh(noseConeGeo, noseConeMat);
      noseConeMesh.rotation.x = Math.PI / 2;
      noseConeMesh.position.z = 0.9;
      rotorGroup.add(noseConeMesh);

      // 6 Aerofoil Blades
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const bladeGeo = new THREE.BoxGeometry(2.0, 0.12, 0.9);
        const bladeMat = new THREE.MeshStandardMaterial({ color: 0x0ea5e9, roughness: 0.2, metalness: 0.8 });
        const bladeMesh = new THREE.Mesh(bladeGeo, bladeMat);
        bladeMesh.position.x = Math.cos(angle) * 2.2;
        bladeMesh.position.y = Math.sin(angle) * 2.2;
        bladeMesh.rotation.z = angle;
        bladeMesh.rotation.x = 0.45; // Pitch angle
        rotorGroup.add(bladeMesh);
      }
      masterGroup.add(rotorGroup);

      // 3. Top-Mounted Electric Motor
      const topMotorGroup = new THREE.Group();
      topMotorGroup.position.set(0, 7.2, 0);

      const motorCasingGeo = new THREE.CylinderGeometry(1.4, 1.4, 2.8, 24);
      const motorMat = new THREE.MeshStandardMaterial({ color: motorBlack, roughness: 0.35, metalness: 0.65 });
      const motorMesh = new THREE.Mesh(motorCasingGeo, motorMat);
      motorMesh.rotation.z = Math.PI / 2;
      topMotorGroup.add(motorMesh);

      // Motor Cradle
      const cradleGeo = new THREE.BoxGeometry(2.4, 0.4, 2.0);
      const cradleMesh = new THREE.Mesh(cradleGeo, flangeMat);
      cradleMesh.position.set(0, -1.5, 0);
      topMotorGroup.add(cradleMesh);

      masterGroup.add(topMotorGroup);

      // 4. Side Triangular V-Belt Guard
      const beltGuardGroup = new THREE.Group();
      beltGuardGroup.position.set(0, 5.2, 0);

      const guardGeo = new THREE.BoxGeometry(0.8, 4.2, 1.2);
      const guardMat = new THREE.MeshStandardMaterial({ color: blueColor, roughness: 0.35, metalness: 0.6 });
      const guardMesh = new THREE.Mesh(guardGeo, guardMat);
      guardMesh.position.set(2.8, 0, 0);
      beltGuardGroup.add(guardMesh);
      masterGroup.add(beltGuardGroup);

      // 5. Front Protective Wire Mesh Guard
      const frontMeshGroup = new THREE.Group();
      frontMeshGroup.position.set(0, 3.2, 3.25);
      const meshRingGeo = new THREE.RingGeometry(0.5, 3.5, 32);
      const meshMat = new THREE.MeshStandardMaterial({ color: meshCyan, wireframe: true, transparent: true, opacity: 0.6 });
      const meshObj = new THREE.Mesh(meshRingGeo, meshMat);
      frontMeshGroup.add(meshObj);
      masterGroup.add(frontMeshGroup);

      explodePartsRef.current = [
        { part: frontMeshGroup, dir: new THREE.Vector3(0, 0, 1), distance: 3.5 },
        { part: rotorGroup, dir: new THREE.Vector3(0, 0, 1), distance: 2.2 },
        { part: topMotorGroup, dir: new THREE.Vector3(0, 1, 0), distance: 3.0 },
        { part: beltGuardGroup, dir: new THREE.Vector3(1, 0, 0), distance: 2.5 }
      ];
    }

    // ─────────────────────────────────────────────────────────────
    // MODEL 4: Pulse-Jet Baghouse Filter System
    // ─────────────────────────────────────────────────────────────
    else if (machineType === "dust-collection") {
      // 1. Structural Support Legs
      const legGroup = new THREE.Group();
      const legMat = new THREE.MeshStandardMaterial({ color: darkSteel, roughness: 0.4, metalness: 0.8 });
      [[-2.2, -2.2], [2.2, -2.2], [-2.2, 2.2], [2.2, 2.2]].forEach(([x, z]) => {
        const columnGeo = new THREE.BoxGeometry(0.5, 4.5, 0.5);
        const colMesh = new THREE.Mesh(columnGeo, legMat);
        colMesh.position.set(x, 0.2, z);
        legGroup.add(colMesh);
      });
      masterGroup.add(legGroup);

      // 2. 60° Pyramidal Hopper Cone
      const hopperGroup = new THREE.Group();
      hopperGroup.position.set(0, 2.2, 0);

      const hopperGeo = new THREE.ConeGeometry(3.4, 2.6, 4);
      const hopperMat = new THREE.MeshStandardMaterial({ color: darkSteel, roughness: 0.4, metalness: 0.7 });
      const hopperMesh = new THREE.Mesh(hopperGeo, hopperMat);
      hopperMesh.rotation.y = Math.PI / 4;
      hopperMesh.rotation.x = Math.PI; // upside down cone
      hopperGroup.add(hopperMesh);

      // Rotary Airlock Valve at Apex
      const airlockGeo = new THREE.CylinderGeometry(0.8, 0.8, 1.2, 16);
      const airlockMat = new THREE.MeshStandardMaterial({ color: orangeAccent, roughness: 0.3, metalness: 0.6 });
      const airlockMesh = new THREE.Mesh(airlockGeo, airlockMat);
      airlockMesh.rotation.z = Math.PI / 2;
      airlockMesh.position.set(0, -1.6, 0);
      hopperGroup.add(airlockMesh);

      masterGroup.add(hopperGroup);

      // 3. Middle Filter Baghouse Chamber (Sheet Metal Box)
      const baghouseGroup = new THREE.Group();
      baghouseGroup.position.set(0, 5.2, 0);

      const boxGeo = new THREE.BoxGeometry(4.6, 3.8, 4.6);
      const boxMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.4, metalness: 0.65 });
      const boxMesh = new THREE.Mesh(boxGeo, boxMat);
      baghouseGroup.add(boxMesh);

      // Side Dirty Gas Inlet Duct
      const inletDuctGeo = new THREE.BoxGeometry(1.6, 1.6, 1.6);
      const inletDuctMat = new THREE.MeshStandardMaterial({ color: blueColor, roughness: 0.35, metalness: 0.5 });
      const inletDuctMesh = new THREE.Mesh(inletDuctGeo, inletDuctMat);
      inletDuctMesh.position.set(2.8, -0.6, 0);
      baghouseGroup.add(inletDuctMesh);

      masterGroup.add(baghouseGroup);

      // 4. Internal Filter Bag Array (9 Cages)
      const bagsGroup = new THREE.Group();
      bagsGroup.position.set(0, 5.0, 0);
      const bagGeo = new THREE.CylinderGeometry(0.3, 0.3, 3.0, 16);
      const bagMat = new THREE.MeshStandardMaterial({ color: 0xdbeafe, roughness: 0.8, metalness: 0.1 });

      for (let x = -1.2; x <= 1.2; x += 1.2) {
        for (let z = -1.2; z <= 1.2; z += 1.2) {
          const bagMesh = new THREE.Mesh(bagGeo, bagMat);
          bagMesh.position.set(x, 0, z);
          bagsGroup.add(bagMesh);
        }
      }
      masterGroup.add(bagsGroup);

      // 5. Top Clean Air Plenum & Pulse Solenoid Manifolds
      const topPlenumGroup = new THREE.Group();
      topPlenumGroup.position.set(0, 7.8, 0);

      const topPlenumGeo = new THREE.BoxGeometry(4.8, 1.4, 4.8);
      const topPlenumMat = new THREE.MeshStandardMaterial({ color: blueColor, roughness: 0.35, metalness: 0.55 });
      const topPlenumMesh = new THREE.Mesh(topPlenumGeo, topPlenumMat);
      topPlenumGroup.add(topPlenumMesh);

      // Compressed Air Header Pipe
      const headerGeo = new THREE.CylinderGeometry(0.3, 0.3, 5.2, 16);
      const headerMat = new THREE.MeshStandardMaterial({ color: orangeAccent, roughness: 0.3, metalness: 0.8 });
      const headerMesh = new THREE.Mesh(headerGeo, headerMat);
      headerMesh.rotation.z = Math.PI / 2;
      headerMesh.position.set(0, 1.1, 0);
      topPlenumGroup.add(headerMesh);

      // 4 Solenoid Valves
      for (let i = -1.5; i <= 1.5; i += 1.0) {
        const valveGeo = new THREE.BoxGeometry(0.35, 0.5, 0.35);
        const valveMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.2, metalness: 0.8 });
        const valveMesh = new THREE.Mesh(valveGeo, valveMat);
        valveMesh.position.set(i, 0.8, 0);
        topPlenumGroup.add(valveMesh);
      }

      masterGroup.add(topPlenumGroup);

      explodePartsRef.current = [
        { part: topPlenumGroup, dir: new THREE.Vector3(0, 1, 0), distance: 4.0 },
        { part: bagsGroup, dir: new THREE.Vector3(0, 1, 0), distance: 2.0 },
        { part: hopperGroup, dir: new THREE.Vector3(0, -1, 0), distance: 2.5 }
      ];
    }
  };

  // Initialize Scene & Engine
  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 360;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x080d1a);
    scene.fog = new THREE.FogExp2(0x080d1a, 0.02);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(16, 12, 18);
    camera.lookAt(0, 3.2, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.innerHTML = "";
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xdbeafe, 1.3);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffedd5, 2.2);
    keyLight.position.set(16, 26, 18);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 1.8);
    rimLight.position.set(-18, 10, -15);
    scene.add(rimLight);

    const bottomGlow = new THREE.PointLight(0x06b6d4, 2.5, 30);
    bottomGlow.position.set(0, 0.5, 0);
    scene.add(bottomGlow);

    // Floor Grid Plane
    const gridHelper = new THREE.GridHelper(36, 36, 0x0284c7, 0x1e293b);
    gridHelper.position.y = -0.01;
    scene.add(gridHelper);

    // Coordinate Ring
    const ringGeo = new THREE.RingGeometry(9.8, 10, 64);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x0ea5e9, side: THREE.DoubleSide, transparent: true, opacity: 0.4 });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2;
    ringMesh.position.y = 0.02;
    scene.add(ringMesh);

    // Build Initial Selected Model
    buildModel(scene, selectedMachine);

    // Mouse & Touch Controls
    const handleMouseDown = (e: MouseEvent) => {
      cameraStateRef.current.isDragging = true;
      cameraStateRef.current.prevMouseX = e.clientX;
      cameraStateRef.current.prevMouseY = e.clientY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!cameraStateRef.current.isDragging) return;
      const deltaX = e.clientX - cameraStateRef.current.prevMouseX;
      const deltaY = e.clientY - cameraStateRef.current.prevMouseY;

      cameraStateRef.current.prevMouseX = e.clientX;
      cameraStateRef.current.prevMouseY = e.clientY;

      cameraStateRef.current.targetTheta -= deltaX * 0.008;
      cameraStateRef.current.targetPhi = Math.max(0.1, Math.min(Math.PI / 2.05, cameraStateRef.current.targetPhi - deltaY * 0.008));
    };

    const handleMouseUp = () => {
      cameraStateRef.current.isDragging = false;
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      cameraStateRef.current.targetRadius = Math.max(12, Math.min(46, cameraStateRef.current.targetRadius + e.deltaY * 0.02));
    };

    container.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("wheel", handleWheel, { passive: false });

    // Touch Handling
    let touchStartX = 0;
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        cameraStateRef.current.isDragging = true;
      }
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (!cameraStateRef.current.isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - touchStartX;
      const deltaY = e.touches[0].clientY - touchStartY;
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;

      cameraStateRef.current.targetTheta -= deltaX * 0.01;
      cameraStateRef.current.targetPhi = Math.max(0.1, Math.min(Math.PI / 2.05, cameraStateRef.current.targetPhi - deltaY * 0.01));
    };
    const handleTouchEnd = () => {
      cameraStateRef.current.isDragging = false;
    };
    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchmove", handleTouchMove);
    container.addEventListener("touchend", handleTouchEnd);

    // Animation Loop
    let lastTime = performance.now();
    const animate = () => {
      const now = performance.now();
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      // Rotate Internal Impeller/Rotor
      if (rotatingPartRef.current && activeMetadata.rpm > 0) {
        const radPerSec = (activeMetadata.rpm / 60) * Math.PI * 2;
        rotatingPartRef.current.rotation.z += radPerSec * delta * 0.12;
      }

      // Auto Orbit
      if (isOrbiting && !cameraStateRef.current.isDragging) {
        cameraStateRef.current.targetTheta += 0.32 * delta;
      }

      // Damping
      const cs = cameraStateRef.current;
      cs.theta += (cs.targetTheta - cs.theta) * 0.08;
      cs.phi += (cs.targetPhi - cs.phi) * 0.08;
      cs.radius += (cs.targetRadius - cs.radius) * 0.08;

      const camX = cs.radius * Math.sin(cs.phi) * Math.sin(cs.theta);
      const camY = cs.radius * Math.cos(cs.phi);
      const camZ = cs.radius * Math.sin(cs.phi) * Math.cos(cs.theta);

      camera.position.set(camX, camY + 2.5, camZ);
      camera.lookAt(0, 3.2, 0);

      // Smooth Exploded Separation
      const targetExplode = isExploded ? 1 : 0;
      explodeFactorRef.current += (targetExplode - explodeFactorRef.current) * 0.08;
      const ef = explodeFactorRef.current;

      explodePartsRef.current.forEach(({ part, dir, distance }) => {
        part.position.x = dir.x * distance * ef;
        part.position.y = (part.userData.originalY || part.position.y) + dir.y * distance * ef;
        part.position.z = dir.z * distance * ef;
      });

      renderer.render(scene, camera);

      // Calculate 2D Hotspot Positions
      if (showHotspots && container) {
        const calculated = activeMetadata.hotspots.map((spot) => {
          const v = new THREE.Vector3(...spot.pos);
          v.project(camera);

          const isBehind = v.z > 1;
          const x = (v.x * 0.5 + 0.5) * width;
          const y = (-(v.y * 0.5) + 0.5) * height;

          return {
            id: spot.id,
            title: spot.title,
            desc: spot.desc,
            x,
            y,
            visible: !isBehind && x >= 0 && x <= width && y >= 0 && y <= height
          };
        });
        setHotspotScreenPositions(calculated);
      }

      animationFrameIdRef.current = requestAnimationFrame(animate);
    };

    animationFrameIdRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (animationFrameIdRef.current) cancelAnimationFrame(animationFrameIdRef.current);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
      renderer.dispose();
    };
  }, [selectedMachine]);

  // Update Materials when Render Mode changes (Solid, Wire, X-Ray)
  useEffect(() => {
    if (!modelMasterGroupRef.current) return;
    modelMasterGroupRef.current.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        if (renderMode === "wire") {
          child.material.wireframe = true;
          child.material.transparent = false;
          child.material.opacity = 1.0;
        } else if (renderMode === "xray") {
          child.material.wireframe = false;
          child.material.transparent = true;
          child.material.opacity = 0.45;
          child.material.depthWrite = false;
        } else {
          child.material.wireframe = false;
          child.material.transparent = false;
          child.material.opacity = 1.0;
          child.material.depthWrite = true;
        }
        child.material.needsUpdate = true;
      }
    });
  }, [renderMode, selectedMachine]);

  // Set Camera View Angles
  const setCameraAngle = (view: CameraView) => {
    setCurrentView(view);
    setIsOrbiting(false);
    const cs = cameraStateRef.current;

    switch (view) {
      case "ISO":
        cs.targetTheta = Math.PI / 4;
        cs.targetPhi = Math.PI / 3.2;
        cs.targetRadius = 24;
        break;
      case "FRONT":
        cs.targetTheta = 0;
        cs.targetPhi = Math.PI / 2.2;
        cs.targetRadius = 22;
        break;
      case "SIDE":
        cs.targetTheta = Math.PI / 2;
        cs.targetPhi = Math.PI / 2.3;
        cs.targetRadius = 22;
        break;
      case "TOP":
        cs.targetTheta = 0;
        cs.targetPhi = 0.08;
        cs.targetRadius = 28;
        break;
      case "DRIVE":
        cs.targetTheta = Math.PI * 1.35;
        cs.targetPhi = Math.PI / 2.6;
        cs.targetRadius = 24;
        break;
    }
  };

  return (
    <div className="bg-slate-900/95 rounded-xl border border-slate-700/80 shadow-2xl overflow-hidden backdrop-blur-md relative flex flex-col">
      {/* Top Diagnostics Header */}
      <div className="px-4 py-2.5 bg-[#090d16]/95 border-b border-slate-800/90 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-orange-500/15 border border-orange-500/40 text-orange-400 text-xs font-mono font-bold uppercase">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></span>
            3D CAD // 360° ORBIT
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/40 text-[10px] font-mono text-emerald-300 font-bold">
            <Zap className="w-3 h-3 text-emerald-400" />
            {activeMetadata.rpm > 0 ? `${activeMetadata.rpm} RPM DYNAMIC ROTATION` : "STATIC POLLUTION CAD"}
          </span>
        </div>

        {/* Action Controls Tip */}
        <span className="text-[10px] font-mono text-slate-400 hidden lg:inline">
          Left-Click: 360° Rotate • Scroll: Zoom • Right-Click: Pan
        </span>
      </div>

      {/* Main WebGL 3D Canvas Viewport */}
      <div className="relative w-full h-[320px] sm:h-[380px] bg-[#080d1a] overflow-hidden select-none cursor-grab active:cursor-grabbing">
        <div ref={mountRef} className="w-full h-full" />

        {/* Floating 3D Control Pill Overlay exactly as in screenshot */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-950/90 border border-slate-700/80 rounded-xl p-2 shadow-2xl backdrop-blur-md flex flex-col items-center gap-2 z-20">
          <div className="flex items-center gap-2">
            {/* Orbiting Button */}
            <button
              onClick={() => setIsOrbiting(!isOrbiting)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-heading font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                isOrbiting
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/30 ring-1 ring-orange-400"
                  : "bg-slate-800 text-slate-300 hover:text-white border border-slate-700"
              }`}
            >
              <RotateCw className={`w-3.5 h-3.5 ${isOrbiting ? "animate-spin" : ""}`} />
              <span>{isOrbiting ? "Orbiting" : "Orbit"}</span>
            </button>

            {/* Explode CAD Button */}
            <button
              onClick={() => setIsExploded(!isExploded)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                isExploded
                  ? "bg-cyan-500/25 text-cyan-300 border border-cyan-400 shadow-md shadow-cyan-500/20"
                  : "bg-slate-800/90 text-slate-300 hover:text-white border border-slate-700"
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>{isExploded ? "Assembled CAD" : "Explode CAD"}</span>
            </button>

            {/* Render Mode [ Solid | Wire | X-Ray ] */}
            <div className="flex items-center p-0.5 bg-slate-900 rounded-lg border border-slate-800 text-xs font-mono">
              <button
                onClick={() => setRenderMode("solid")}
                className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
                  renderMode === "solid" ? "bg-slate-800 text-orange-400 font-bold shadow-xs" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Solid
              </button>
              <button
                onClick={() => setRenderMode("wire")}
                className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
                  renderMode === "wire" ? "bg-slate-800 text-cyan-400 font-bold shadow-xs" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Wire
              </button>
              <button
                onClick={() => setRenderMode("xray")}
                className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
                  renderMode === "xray" ? "bg-slate-800 text-sky-400 font-bold shadow-xs" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                X-Ray
              </button>
            </div>
          </div>

          {/* Directional Camera Angles [ ISO | FRONT | SIDE | TOP | DRIVE ] */}
          <div className="flex items-center gap-1.5 pt-1 border-t border-slate-800/80 w-full justify-center text-xs font-mono">
            {(["ISO", "FRONT", "SIDE", "TOP", "DRIVE"] as CameraView[]).map((view) => (
              <button
                key={view}
                onClick={() => setCameraAngle(view)}
                className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all cursor-pointer ${
                  currentView === view && !isOrbiting
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50"
                    : "text-slate-400 hover:text-slate-200 border border-transparent"
                }`}
              >
                {view}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Hotspot Overlays */}
        {showHotspots &&
          hotspotScreenPositions.map((spot) => {
            if (!spot.visible) return null;
            const isSelected = selectedHotspot === spot.id;

            return (
              <div
                key={spot.id}
                className="absolute z-20 pointer-events-auto"
                style={{
                  left: `${spot.x}px`,
                  top: `${spot.y}px`,
                  transform: "translate(-50%, -50%)"
                }}
              >
                <button
                  onClick={() => setSelectedHotspot(isSelected ? null : spot.id)}
                  onMouseEnter={() => setSelectedHotspot(spot.id)}
                  className="relative group cursor-pointer"
                >
                  <span className="w-5 h-5 rounded-full bg-cyan-500/30 border border-cyan-400 flex items-center justify-center animate-ping absolute -inset-0.5"></span>
                  <span className="relative w-4 h-4 rounded-full bg-cyan-950 border-2 border-cyan-400 flex items-center justify-center text-[8px] font-mono font-bold text-cyan-300 group-hover:scale-125 transition-transform shadow-lg shadow-cyan-500/50">
                    {spot.id}
                  </span>

                  {/* Hotspot Tooltip */}
                  {isSelected && (
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 p-2.5 bg-slate-950/95 border border-cyan-500/70 rounded-md shadow-2xl text-left z-30 backdrop-blur-md animate-in fade-in zoom-in-95 duration-150">
                      <div className="flex items-center justify-between pb-1 border-b border-slate-800">
                        <span className="text-[10px] font-mono font-bold text-cyan-400">{spot.title}</span>
                        <span className="text-[8px] font-mono text-slate-500">PIN #{spot.id}</span>
                      </div>
                      <p className="text-[10px] text-slate-300 font-sans mt-1 leading-tight">{spot.desc}</p>
                    </div>
                  )}
                </button>
              </div>
            );
          })}
      </div>

      {/* Active Machine Name & Headline Spec */}
      <div className="px-4 py-2.5 bg-[#090d16] border-t border-slate-800 flex items-center justify-between text-xs">
        <span className="text-white font-bold font-heading text-sm">
          {activeMetadata.name}
        </span>
        <span className="font-mono text-orange-400 font-bold text-xs">
          {activeMetadata.spec}
        </span>
      </div>

      {/* 4 3D Machine Option Selector Grid matching the user's exact buttons */}
      <div className="p-4 bg-slate-950/90 border-t border-slate-800 space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
          {/* Option 1: Heavy Centrifugal Blower */}
          <button
            onClick={() => {
              setSelectedMachine("centrifugal-blowers");
              setSelectedHotspot(null);
            }}
            className={`p-3 rounded-lg text-left border transition-all cursor-pointer ${
              selectedMachine === "centrifugal-blowers"
                ? "bg-slate-900 border-orange-500 text-white font-bold shadow-md shadow-orange-500/10 ring-1 ring-orange-500/40"
                : "bg-slate-950/60 border-slate-800 text-slate-400 hover:bg-slate-900/60 hover:text-slate-200"
            }`}
          >
            <span className="text-[10px] font-mono text-orange-400 block font-bold uppercase">
              ID/FD FAN
            </span>
            <p className="text-sm font-semibold text-slate-200 mt-0.5">
              Heavy Centrifugal Blower
            </p>
          </button>

          {/* Option 2: Heavy Ribbed ID Boiler Fan */}
          <button
            onClick={() => {
              setSelectedMachine("induced-draft-id-fan");
              setSelectedHotspot(null);
            }}
            className={`p-3 rounded-lg text-left border transition-all cursor-pointer ${
              selectedMachine === "induced-draft-id-fan"
                ? "bg-slate-900 border-orange-500 text-white font-bold shadow-md shadow-orange-500/10 ring-1 ring-orange-500/40"
                : "bg-slate-950/60 border-slate-800 text-slate-400 hover:bg-slate-900/60 hover:text-slate-200"
            }`}
          >
            <span className="text-[10px] font-mono text-orange-400 block font-bold uppercase">
              BOILER DUTY
            </span>
            <p className="text-sm font-semibold text-slate-200 mt-0.5">
              Heavy Ribbed ID Boiler Fan
            </p>
          </button>

          {/* Option 3: Tube Axial V-Belt Fan */}
          <button
            onClick={() => {
              setSelectedMachine("axial-fans");
              setSelectedHotspot(null);
            }}
            className={`p-3 rounded-lg text-left border transition-all cursor-pointer ${
              selectedMachine === "axial-fans"
                ? "bg-slate-900 border-orange-500 text-white font-bold shadow-md shadow-orange-500/10 ring-1 ring-orange-500/40"
                : "bg-slate-950/60 border-slate-800 text-slate-400 hover:bg-slate-900/60 hover:text-slate-200"
            }`}
          >
            <span className="text-[10px] font-mono text-orange-400 block font-bold uppercase">
              VENTILATION
            </span>
            <p className="text-sm font-semibold text-slate-200 mt-0.5">
              Tube Axial V-Belt Fan
            </p>
          </button>

          {/* Option 4: Pulse-Jet Baghouse Filter */}
          <button
            onClick={() => {
              setSelectedMachine("dust-collection");
              setSelectedHotspot(null);
            }}
            className={`p-3 rounded-lg text-left border transition-all cursor-pointer ${
              selectedMachine === "dust-collection"
                ? "bg-slate-900 border-orange-500 text-white font-bold shadow-md shadow-orange-500/10 ring-1 ring-orange-500/40"
                : "bg-slate-950/60 border-slate-800 text-slate-400 hover:bg-slate-900/60 hover:text-slate-200"
            }`}
          >
            <span className="text-[10px] font-mono text-orange-400 block font-bold uppercase">
              POLLUTION
            </span>
            <p className="text-sm font-semibold text-slate-200 mt-0.5">
              Pulse–Jet Baghouse Filter
            </p>
          </button>
        </div>

        {/* Direct Appointment & Testing Visit Box */}
        <div className="pt-2">
          <div className="p-3.5 bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-between gap-3">
            <div className="space-y-0.5">
              <p className="text-xs font-bold text-white font-heading">
                Book Machine Testing or Plant Visit
              </p>
              <p className="text-[11px] text-slate-400 font-mono">
                Chadasna Works • Dynamic Balancing Bay
              </p>
            </div>
            <button
              onClick={onOpenAppointment}
              className="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-heading font-bold rounded-md text-xs transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Calendar className="w-3.5 h-3.5 text-white" />
              <span>Book</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
