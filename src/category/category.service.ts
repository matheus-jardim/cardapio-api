import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaClient) {}

  findAll() {
    return this.prisma.categories.findMany();
  }

  findOne(id: string) {
    return this.prisma.categories.findUnique({
      where: {
        id,
      },
    });
  }

  create(category: CategoryDto): void {
    this.prisma.categories.create({
      data: category,
    });
  }

  update(id: string, category: CategoryDto): void {
    this.prisma.categories.update({
      where: {
        id,
      },
      data: category,
    });
  }

  delete(id: string): void {
    this.prisma.categories.delete({
      where: {
        id,
      },
    });
  }
}

export interface CategoryDto {
  name: string;
}

export const prismaClientProvider = {
  provide: PrismaClient,
  useValue: new PrismaClient(),
};