import type { Product } from '@rendering-lab/contracts';

export const products: Product[] = [
  {
    id: '0',
    slug: 'cream-cheese',
    description: 'Creamy cream cheese',
    title: 'Cream Cheese Special',
    images: ['cheese-front.jpg', 'cheese-back.jpg'],
  },
  {
    id: '1',
    slug: 'protein-bread',
    description: 'Healthy bread full of protein',
    title: 'Bread proteinski',
    images: ['bread-front.jpg', 'bread-back.jpg'],
  },
  {
    id: '2',
    slug: 'milk',
    description: 'Whole natural cow milk 2.5%',
    title: 'Milk 2.5%',
    images: ['milk-front.jpg', 'milk-back.jpg'],
  },
];
