export type Database = {
  public: {
    Tables: {
      notaries: {
        Row: {
          id: string;
          name: string;
          city: string;
          state: string;
          services: string[];
          rating: number;
          review_count: number;
          profile_image_url?: string;
          about?: string;
        };
        Insert: {
          id?: string;
          name: string;
          city: string;
          state: string;
          services: string[];
          rating?: number;
          review_count?: number;
          profile_image_url?: string;
          about?: string;
        };
        Update: {
          id?: string;
          name?: string;
          city?: string;
          state?: string;
          services?: string[];
          rating?: number;
          review_count?: number;
          profile_image_url?: string;
          about?: string;
        };
      };
    };
  };
};
