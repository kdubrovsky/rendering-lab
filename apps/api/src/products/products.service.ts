import { Injectable, NotFoundException } from '@nestjs/common';
import type { Product } from '@rendering-lab/contracts';
import { products } from './products.data'; // fake data

@Injectable()
export class ProductsService {
  findById(id: string): Product {
    const product = products.find(product => product.id === id)
    if (!product) throw new NotFoundException();
    return product;
  }
}
