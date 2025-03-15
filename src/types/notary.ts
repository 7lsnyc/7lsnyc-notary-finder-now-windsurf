// src/types/notary.ts
// Keep types minimal and aligned with PRD requirements
export interface Notary {
  id: string;
  name: string;
  city: string;
  state: string;
  services: string[];
  rating: number;
  review_count: number;
  profile_image_url: string | null;
  about: string | null;
}

export interface NotaryFilters {
  id?: string;
  location?: string;
  service?: string;
  rating?: number;
}