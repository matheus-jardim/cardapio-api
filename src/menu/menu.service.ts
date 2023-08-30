import { Injectable } from '@nestjs/common';
import { PrismaClient, Prisma } from '@prisma/client';

@Injectable()
export class MenuService {
  constructor(private readonly prisma: PrismaClient) { }

  findAll() {
    return this.prisma.menus.findMany();
  }

  getCurrentMenu() {
    const now = new Date();
    const hour = now.getHours();

    if (hour < 6 || hour >= 18) {
      return this.prisma.menus.findFirst({ where: { shift: { equals: 'night' } } as Prisma.MenusWhereInput });
    } else {
      return this.prisma.menus.findFirst({ where: { shift: { equals: 'day' } } as Prisma.MenusWhereInput });
    }
  }

}

export const prismaClientProvider = {
  provide: PrismaClient,
  useValue: new PrismaClient(),
};