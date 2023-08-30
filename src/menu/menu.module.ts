import { Module } from '@nestjs/common';
import { MenuController } from './menu.controller';
import { MenuService, prismaClientProvider } from './menu.service';

@Module({
  controllers: [MenuController],
  providers: [MenuService, prismaClientProvider]
})
export class MenuModule {}
