// src/types/notary.ts
export interface Notary {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string | null; // Fixed: Allow null
  email: string | null; // Fixed: Allow null
  website: string | null;
  services: string[] | null;
  rating: number | null;
  review_count: number | null;
  review_summary: string | null;
  latitude: number | null;
  longitude: number | null;
  about: string | null;
  business_hours: Record<string, any> | null; // Fixed: JSONB type
  certifications: string[] | null;
  languages: string[] | null;
  pricing: Record<string, any> | null; // Fixed: JSONB type
  specialized_services: string[] | null;
  remote_notary_states: string[] | null;
  is_available_now: boolean | null;
  accepts_online_booking: boolean | null;
  starting_price: number | null;
  price_info: string | null;
  business_type: string | null;
  service_radius_miles: number | null;
  service_areas: string | null; // Fixed: Not an array
  profile_image_url: string | null;
  license_number: string | null;
  license_expiry: string | null; // Confirmed: Supabase returns ISO string
  insurance_verified: boolean | null;
  background_check_verified: boolean | null;
  featured: boolean | null;
}