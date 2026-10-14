import { Injectable, NotFoundException } from '@nestjs/common';
import type { Product } from '@rendering-lab/contracts';
import { products } from './products.data'; // fake data
import { sleep } from '../utils/sleep';

const PUBLIC_URL = process.env.PUBLIC_URL ?? 'http://localhost:4000';

@Injectable()
export class ProductsService {
  async findById(id: string): Promise<Product> {
    await sleep(300);
    const product = products.find((product) => product.id === id);
    if (!product) throw new NotFoundException();
    return {
      ...product,
      images: product.images.map((file) => `${PUBLIC_URL}/images/${file}`),
    };
  }
}
