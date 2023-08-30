import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { initializeDatabase } from './prisma/prisma.service';

@Module({
  imports: [MenuModule, CategoryModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    initializeDatabase().catch((error) => {
      console.error('Erro ao inicializar o banco de dados:', error);
    });
  }
}
