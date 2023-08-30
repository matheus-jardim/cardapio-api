import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CategoryDto, CategoryService } from './category.service';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  getCategories() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  getCategory(@Param('id') id: string) {
    return this.categoryService.findOne(id);
  }

  @Post()
  createCategory(@Body() category: CategoryDto) {
    return this.categoryService.create(category);
  }

  @Put(':id')
  updateCategory(@Param('id') id: string, @Body() category: CategoryDto) {
    return this.categoryService.update(id, category);
  }

  @Delete(':id')
  deleteCategory(@Param('id') id: string) {
    return this.categoryService.delete(id);
  }
}
