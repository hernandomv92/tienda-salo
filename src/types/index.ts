export type ProductCategory = 'pulseras' | 'collares' | 'anillos';
export type Gender = 'mujer' | 'hombre' | 'unisex';
export type AgeGroup = 'niños' | 'adolescentes' | 'adultos';

export interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  category: ProductCategory;
  gender: Gender;
  ageGroup: AgeGroup;
  featured: boolean;
  newArrival: boolean;
  bestseller: boolean;
  description: string;
  stock: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}