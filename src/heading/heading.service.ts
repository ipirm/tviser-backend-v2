import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HeadingEntity } from './entities/heading.entity';
import { I18nRepository } from 'typeorm-i18n';

export class HeadingService extends TypeOrmCrudService<HeadingEntity> {
  constructor(
    @InjectRepository(HeadingEntity)
    private readonly heading: I18nRepository<HeadingEntity>,
  ) {
    super(heading);
  }

  // create(createHeadingDto: CreateHeadingDto) {
  //   return 'This action adds a new heading';
  // }
  //
  // findAll() {
  //   return `This action returns all heading`;
  // }
  //
  // findOne(id: number) {
  //   return `This action returns a #${id} heading`;
  // }
  //
  // update(id: number, updateHeadingDto: UpdateHeadingDto) {
  //   return `This action updates a #${id} heading`;
  // }
  //
  // remove(id: number) {
  //   return `This action removes a #${id} heading`;
  // }
}
