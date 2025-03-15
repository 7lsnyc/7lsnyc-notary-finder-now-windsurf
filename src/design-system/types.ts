export interface NotaryProfile {
  id: string;
  name: string;
  rating: number;
  reviewCount: number;
  services: ('mobile' | 'remote' | 'office')[];
  location: {
    city: string;
    state: string;
  };
}

export interface SearchFilters {
  location: string;
  service?: 'mobile' | 'remote' | 'office';
}

// Shared component props
export interface ButtonProps {
  variant?: 'primary' | 'accent' | 'ghost';
  size?: 'default' | 'large';
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}
