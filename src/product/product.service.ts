import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaClient) {}

  findAll() {
    return this.prisma.products.findMany();
  }

  findOne(id: string) {
    return this.prisma.products.findUnique({
      where: {
        id,
      },
    });
  }

  create(product: ProductDto): void {
    this.prisma.products.create({
      data: product,
    });
  }

  update(id: string, product: ProductDto): void {
    this.prisma.products.update({
      where: {
        id,
      },
      data: product,
    });
  }

  delete(id: string): void {
    this.prisma.products.delete({
      where: {
        id,
      },
    });
  }
}

export interface ProductDto {
  name: string;
  price: number;
  image: string;
  description: string;
  categoryId: string;
  menuId: string;
}

export const prismaClientProvider = {
  provide: PrismaClient,
  useValue: new PrismaClient(),
};