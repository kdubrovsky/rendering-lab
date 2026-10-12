import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import type { Product } from '@rendering-lab/contracts';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Product {
    return this.appService.getProduct();
  }
}
