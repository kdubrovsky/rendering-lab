export interface Product {
  id: string;
  slug: string;
  title: string;
  description: string;
  images: string[];
}

export interface Price {
  amountCents: number;
  currency: string;
  inStock: boolean;
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  rating: number;
  text: string;
  /** ISO 8601 */
  createdAt: string;
}
