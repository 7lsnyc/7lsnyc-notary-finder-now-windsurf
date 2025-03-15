// src/types/notary.ts
export interface Notary {
  id: string;
  name: string;
  city: string;
  state: string;
  services: string[];
  rating: number;
  review_count: number;
  profile_image_url?: string;
  about?: string;
}

export interface NotaryFilters {
  location?: string;
  service?: string;
}