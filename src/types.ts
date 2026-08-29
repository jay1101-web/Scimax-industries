export type ProductCategory =
  | "dust-collection"
  | "fume-extraction"
  | "centrifugal-blowers"
  | "axial-fans"
  | "industrial-vacuum"
  | "accessories";

export interface ImpellerType {
  id: string;
  name: string;
  description: string;
  efficiency: string;
  bestFor: string;
  dustHandling: string;
  imageAlt: string;
  bladeProfile?: string;
  bestApplications?: string[];
}

export interface ProductSpecRow {
  label: string;
  value: string;
}

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  categoryName: string;
  tagline: string;
  shortDescription: string;
  detailedDescription: string;
  keyFeatures: string[];
  specs: ProductSpecRow[];
  applications: string[];
  suitableIndustries: string[];
  capacityRange?: string;
  pressureRange?: string;
  powerRange?: string;
  materialOptions?: string[];
  driveOptions?: string[];
  impellerOptions?: string[];
  imagePlaceholderColor?: string;
  badge?: string;
  imageUrl?: string;
  images?: string[];
}

export interface IndustryItem {
  id: string;
  name: string;
  iconName: string;
  tagline: string;
  description: string;
  dustVaporCharacteristics: string;
  recommendedProducts: string[];
  keyChallenges: string[];
  complianceNorms: string[];
}

export interface BlowerCapacityRow {
  hp: number;
  pressures: { [key: string]: number | null }; // key: "1", "2", "3", "4", "5", "6", "8", "10", "12", "16", "20", "24", "28", "32", "36", "48", "50"
}

export interface DischargePosition {
  id: string;
  direction: "Clockwise (CW)" | "Counter-Clockwise (CCW)";
  name: string;
  angleDeg: number;
  description: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  type: "quote" | "contact" | "catalogue" | "general";
  productInterest?: string;
  airflowCFM?: string;
  staticPressure?: string;
  industry?: string;
  message?: string;
}

export interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  location: "Chadasna Plant (Mehsana / Ahmedabad Highway)" | "Virtual Consultation (Google Meet / Phone)" | "On-Site Facility Visit";
  preferredDate: string;
  preferredTime: string;
  agenda: string;
}
