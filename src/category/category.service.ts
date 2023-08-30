import { Injectable } from '@nestjs/common';
import { PrismaClient, Categories } from '@prisma/client';

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

  create(category: CategoryDto): Promise<Categories> {
    return this.prisma.categories.create({
      data: category,
    });
  }

  update(id: string, category: CategoryDto): Promise<Categories> {
    return this.prisma.categories.update({
      where: {
        id,
      },
      data: category,
    });
  }

  delete(id: string): Promise<Categories> {
    return this.prisma.categories.delete({
      where: {
        id,
      },
    });
  }

  async findOneWithProducts(id: string): Promise<Categories | null> {
    return this.prisma.categories.findUnique({
      where: {
        id,
      },
      include: {
        products: true
      }
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