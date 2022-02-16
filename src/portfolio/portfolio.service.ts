import { Injectable } from "@nestjs/common";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { PortfolioEntity } from "./entities/portfolio.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { I18nRepository } from "typeorm-i18n";

@Injectable()
export class PortfolioService extends TypeOrmCrudService<PortfolioEntity> {
  constructor(
    @InjectRepository(PortfolioEntity) private readonly portfolio: I18nRepository<PortfolioEntity>
  ) {
    super(portfolio);
  }

  // create(createPortfolioDto: CreatePortfolioDto) {
  //   return 'This action adds a new portfolio';
  // }
  //
  // findAll() {
  //   return `This action returns all portfolio`;
  // }
  //
  // findOne(id: number) {
  //   return `This action returns a #${id} portfolio`;
  // }
  //
  // update(id: number, updatePortfolioDto: UpdatePortfolioDto) {
  //   return `This action updates a #${id} portfolio`;
  // }
  //
  // remove(id: number) {
  //   return `This action removes a #${id} portfolio`;
  // }
}
