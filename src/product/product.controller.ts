import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProductDto, ProductService } from './product.service';

@Controller('products') 
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getProducts() {
    return this.productService.findAll();
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @Post()
  createProduct(@Body() product: ProductDto) {
    return this.productService.create(product);
  }

  @Put(':id')
  updateProduct(@Param('id') id: string, @Body() product: ProductDto) {
    return this.productService.update(id, product);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productService.delete(id);
  }
}
