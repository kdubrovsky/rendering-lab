import { Controller, Get, Param } from '@nestjs/common';
import { ReviewsService } from './reviews.service';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Get(':id')
  findByProductId(@Param('id') productId: string) {
    return this.reviewsService.findByProductId(productId);
  }
}
