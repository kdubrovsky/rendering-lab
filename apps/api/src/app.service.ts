import { Injectable } from '@nestjs/common';
import type { Product } from '@rendering-lab/contracts'

@Injectable()
export class AppService {
  getProduct(): Product {
    return {
      id: "10385793",
      slug: 'cream-cheese',
      description: "Creamy cream cheese",
      title: "Cream Cheese Special",
      images: ['cheese-front.jpg', 'cheese-back.jpg']
    };
  }
}
