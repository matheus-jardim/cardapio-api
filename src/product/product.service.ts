import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient, Products } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaClient) { }

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

  async create(product: ProductDto): Promise<Products> {
    const { categoryId, menuId } = product;

    const categoryExists = await this.prisma.categories.findUnique({
      where: {
        id: categoryId,
      },
    });
    if (!categoryExists) {
      throw new NotFoundException(`Categoria com ID ${categoryId} não encontrada.`);
    }

    const menuExists = await this.prisma.menus.findUnique({
      where: {
        id: menuId,
      },
    });
    if (!menuExists) {
      throw new NotFoundException(`Menu com ID ${menuId} não encontrado.`);
    }

    return this.prisma.products.create({
      data: product,
    });
  }

  async update(id: string, product: ProductDto): Promise<Products> {
    const { categoryId, menuId } = product;

    const categoryExists = await this.prisma.categories.findUnique({
      where: {
        id: categoryId,
      },
    });
    if (!categoryExists) {
      throw new NotFoundException(`Categoria com ID ${categoryId} não encontrada.`);
    }

    const menuExists = await this.prisma.menus.findUnique({
      where: {
        id: menuId,
      },
    });
    if (!menuExists) {
      throw new NotFoundException(`Menu com ID ${menuId} não encontrado.`);
    }

    return this.prisma.products.update({
      where: {
        id,
      },
      data: product,
    });
  }

  delete(id: string): Promise<Products> {
    return this.prisma.products.delete({
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
