import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { I18nRepository } from 'typeorm-i18n';
import { CategoryEntity } from './entities/category.entity';

@Injectable()
export class CategoryService extends TypeOrmCrudService<CategoryEntity> {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly category: I18nRepository<CategoryEntity>,
  ) {
    super(category);
  }

  // create(createCategoryDto: CreateCategoryDto) {
  //   return 'This action adds a new category';
  // }
  //
  // findAll() {
  //   return `This action returns all category`;
  // }
  //
  // findOne(id: number) {
  //   return `This action returns a #${id} category`;
  // }
  //
  // update(id: number, updateCategoryDto: UpdateCategoryDto) {
  //   return `This action updates a #${id} category`;
  // }
  //
  // remove(id: number) {
  //   return `This action removes a #${id} category`;
  // }
}
