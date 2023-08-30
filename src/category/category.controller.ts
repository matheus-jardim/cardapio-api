import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { CategoryDto, CategoryService } from './category.service';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  @Get()
  getCategories() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  getCategory(@Param('id') id: string) {
    return this.categoryService.findOne(id);
  }

  @Get(':id/details')
  async getCategoryWithProducts(@Param('id') id: string) {
    try {
      const categoryWithProducts = await this.categoryService.findOneWithProducts(id);
      if (!categoryWithProducts) {
        throw new NotFoundException(`Categoria com ID ${id} não encontrada.`);
      }
      return { success: true, category: categoryWithProducts };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  @Post()
  async createCategory(@Body() category: CategoryDto) {
    try {
      const createdCategory = await this.categoryService.create(category);
      return { success: true, category: createdCategory };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  @Put(':id')
  async updateCategory(@Param('id') id: string, @Body() category: CategoryDto) {
    try {
      const updatedCategory = await this.categoryService.update(id, category);
      return { success: true, category: updatedCategory };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  @Delete(':id')
  async deleteCategory(@Param('id') id: string) {
    try {
      const deletedCategory = await this.categoryService.delete(id);
      return { success: true, category: deletedCategory };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}
