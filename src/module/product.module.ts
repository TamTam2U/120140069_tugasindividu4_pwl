import { ProductController } from './../controller/product.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [],
})
export class ProductModule {}
