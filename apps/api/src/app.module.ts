import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { PricesModule } from './prices/prices.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  imports: [ProductsModule, PricesModule, ReviewsModule],
})
export class AppModule {}
