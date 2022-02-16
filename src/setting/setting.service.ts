import { Injectable } from "@nestjs/common";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { SettingEntity } from "./entities/setting.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { I18nRepository } from "typeorm-i18n";

@Injectable()
export class SettingService extends TypeOrmCrudService<SettingEntity> {
  constructor(@InjectRepository(SettingEntity) private readonly setting: I18nRepository<SettingEntity>) {
    super(setting);
  }

  // create(createSettingDto: CreateSettingDto) {
  //   return 'This action adds a new setting';
  // }
  //
  // findAll() {
  //   return `This action returns all setting`;
  // }
  //
  // findOne(id: number) {
  //   return `This action returns a #${id} setting`;
  // }
  //
  // update(id: number, updateSettingDto: UpdateSettingDto) {
  //   return `This action updates a #${id} setting`;
  // }
  //
  // remove(id: number) {
  //   return `This action removes a #${id} setting`;
  // }
}
