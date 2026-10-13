import { Injectable, NotFoundException } from '@nestjs/common';
import type { Review } from '@rendering-lab/contracts';
import { reviews } from './reviews.data';
import { sleep } from '../utils/sleep';
import { products } from '../products/products.data';

@Injectable()
export class ReviewsService {
  async findByProductId(productId: string): Promise<Review[]> {
    await sleep(2000);

    const product = products.find((product) => product.id === productId);
    if (!product) throw new NotFoundException();

    return reviews.filter((review) => review.productId === productId);
  }
}
