import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService, prismaClientProvider } from './category.service';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService, prismaClientProvider],
})
export class CategoryModule {}
