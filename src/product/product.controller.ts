import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProductDto, ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Get()
  getProducts() {
    return this.productService.findAll();
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @Post()
  async createProduct(@Body() product: ProductDto) {
    try {
      const createdProduct = await this.productService.create(product);
      return { success: true, product: createdProduct };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }


  @Put(':id')
  async updateProduct(@Param('id') id: string, @Body() product: ProductDto) {
    try {
      const updatedProduct = await this.productService.update(id, product);
      return { success: true, product: updatedProduct };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    try {
      const deletedProduct = await this.productService.delete(id);
      return { success: true, product: deletedProduct };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}
