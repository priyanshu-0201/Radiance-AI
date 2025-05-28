export interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  quote: string;
}

export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  description: string;
  link: string;
  store: 'Amazon' | 'Nykaa' | 'Sephora';
}

export type SkinConcern = 'acne' | 'dryness' | 'rash' | 'pigmentation' | 'eczema';

export interface SkinAssessment {
  selfieUrl: string | null;
  description: string;
  skinType: string;
  duration: string;
  sensitivities: string;
}

export interface SkinResult {
  concern: SkinConcern;
  description: string;
  products: Product[];
}