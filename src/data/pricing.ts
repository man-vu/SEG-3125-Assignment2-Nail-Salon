export interface CategoryServiceItem {
  // Static data field
  id: number;
  title?: string;
  // Backend field
  name?: string;
  image: string;
  description: string;
  shortDescription?: string;
  // Static field
  cost?: number;
  // Backend field
  currency?: string;
  estimatedTimeMinutesRange?: [number, number];
  // Backend fields for estimated time
  estimatedMin?: number;
  estimatedMax?: number;
  Services?: ServiceItem[];
}

export interface ServiceItem {
  id: number;
  // Static data field
  title?: string;
  // Backend field
  name?: string;
  description: string;
  shortDescription?: string;
  // Static price
  cost?: number;
  // Backend price
  price?: number;
  currency?: string;
  // Static estimated time
  estimatedTimeMinutesRange?: [number, number];
  // Backend duration
  duration?: number;
  image?: string; // optional when loaded from backend
}

