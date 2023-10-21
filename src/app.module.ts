import { ProductModule } from './module/product.module';
import { ProductService } from './service/product.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [ProductModule],
  controllers: [],
  providers: [ProductService],
})
export class AppModule {}
