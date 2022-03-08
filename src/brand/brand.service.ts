import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BrandEntity } from './entities/brand.entity';
import { I18nRepository } from 'typeorm-i18n';

@Injectable()
export class BrandService extends TypeOrmCrudService<BrandEntity> {
  constructor(
    @InjectRepository(BrandEntity)
    private readonly brandEntityRepository: I18nRepository<BrandEntity>,
  ) {
    super(brandEntityRepository);
  }

  // create(createBrandDto: CreateBrandDto) {
  //   return 'This action adds a new brand';
  // }
  //
  // findAll() {
  //   return `This action returns all brand`;
  // }
  //
  // findOne(id: number) {
  //   return `This action returns a #${id} brand`;
  // }
  //
  // update(id: number, updateBrandDto: UpdateBrandDto) {
  //   return `This action updates a #${id} brand`;
  // }
  //
  // remove(id: number) {
  //   return `This action removes a #${id} brand`;
  // }
}
