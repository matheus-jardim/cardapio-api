import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService, prismaClientProvider } from './product.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService, prismaClientProvider],
})
export class ProductModule {}
