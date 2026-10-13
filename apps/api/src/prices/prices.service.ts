import { Injectable, NotFoundException } from '@nestjs/common';
import type { Price } from '@rendering-lab/contracts';
import { sleep } from '../utils/sleep';
import { randomInt } from '../utils/random';
import { products } from '../products/products.data';

@Injectable()
export class PricesService {
  async findById(id: string): Promise<Price> {
    await sleep(100);
    const product = products.find((product) => product.id === id);
    if (!product) throw new NotFoundException();

    const amountCents = randomInt(1000) + 1;
    const inStock = Math.random() < 0.5;
    const currency = 'EUR';

    return {
      amountCents,
      currency,
      inStock,
    };
  }
}
