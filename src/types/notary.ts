// src/types/notary.ts
export interface Notary {
  id: string;
  name: string;
  profile_image_url?: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone?: string;
  email?: string;
  website?: string;
  services: string[];
  rating: number;
  review_count: number;
  review_summary?: string;
  latitude?: number;
  longitude?: number;
  about?: string;
  business_hours: {
    [key: string]: { open: string; close: string; }
  };
  certifications?: string[];
  languages: string[];
  pricing: {
    base_fee: number;
    travel_fee?: number;
    rush_fee?: number;
  };
  specialized_services: string[];
  remote_notary_states?: string[];
  is_available_now: boolean;
  accepts_online_booking: boolean;
  starting_price: number;
  price_info?: string;
  business_type: 'mobile' | 'office' | 'both';
  service_radius_miles?: number;
  service_areas?: string[];
  license_number: string;
  license_expiry: string;
  insurance_verified: boolean;
  background_check_verified: boolean;
  featured: boolean;
}

// Service types for filtering
export type NotaryServiceType = 
  | 'mobile'
  | '24_7'
  | 'real_estate'
  | 'loan_signing'
  | 'apostille'
  | 'remote_online'
  | 'free_services';

// Search filters interface
export interface NotarySearchFilters {
  city?: string;
  service_type?: NotaryServiceType;
  is_available_now?: boolean;
  accepts_online_booking?: boolean;
  max_price?: number;
  languages?: string[];
  radius_miles?: number;
}