import { AuthModule } from './module/auth.module';
import { AuthController } from './controller/auth.controller';
import { ProductModule } from './module/product.module';
import { ProductService } from './service/product.service';
import { Module } from '@nestjs/common';
import { YModule } from './user/y/y.module';

@Module({
  imports: [AuthModule, ProductModule,YModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
