import { Module } from '@nestjs/common';
import { RestuarantResolver } from './restaurants.resolve';

@Module({
  providers: [RestuarantResolver],
})
export class RestaurantModule { }
