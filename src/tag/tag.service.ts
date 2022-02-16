import { Injectable } from "@nestjs/common";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { TagEntity } from "./entities/tag.entity";
import { I18nRepository } from "typeorm-i18n";


@Injectable()
export class TagService extends TypeOrmCrudService<TagEntity> {
  constructor(@InjectRepository(TagEntity) private readonly tag: I18nRepository<TagEntity>) {
    super(tag);
  }

  // create(createTagDto: CreateTagDto) {
  //   return 'This action adds a new tag';
  // }
  //
  // findAll() {
  //   return `This action returns all tag`;
  // }
  //
  // findOne(id: number) {
  //   return `This action returns a #${id} tag`;
  // }
  //
  // update(id: number, updateTagDto: UpdateTagDto) {
  //   return `This action updates a #${id} tag`;
  // }
  //
  // remove(id: number) {
  //   return `This action removes a #${id} tag`;
  // }
}
