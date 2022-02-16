import { Injectable } from "@nestjs/common";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { PortfolioEntity } from "./entities/portfolio.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { I18nRepository } from "typeorm-i18n";
import { CrudRequest } from "@nestjsx/crud";
import { CategoryEntity } from "../category/entities/category.entity";
import { BrandEntity } from "../brand/entities/brand.entity";
import { UpdateResult } from "typeorm";

@Injectable()
export class PortfolioService extends TypeOrmCrudService<PortfolioEntity> {
  constructor(
    @InjectRepository(PortfolioEntity) private readonly portfolio: I18nRepository<PortfolioEntity>,
    @InjectRepository(CategoryEntity) private readonly category: I18nRepository<CategoryEntity>,
    @InjectRepository(BrandEntity) private readonly brand: I18nRepository<BrandEntity>
  ) {
    super(portfolio);
  }

  async createOneBase(req: CrudRequest, dto: PortfolioEntity): Promise<PortfolioEntity> {

    if (dto.brandEntities) {
      const brandEntities = await this.brand.findByIds(dto.brandEntities.toString().split(",").map(item => parseInt(item)));
      Object.assign(dto, { brandEntities: [...brandEntities] });
    }
    if (dto.categoryEntity) {
      const categoryEntity = await this.category.findOne(dto.categoryEntity);
      Object.assign(dto, { categoryEntity: categoryEntity });
    }

    return await this.portfolio.save(this.portfolio.create(dto));
  }

  async updateOneBase(req: CrudRequest, dto: PortfolioEntity, id: number): Promise<UpdateResult> {

    if (dto.brandEntities) {
      const brandEntities = await this.brand.findByIds(dto.brandEntities.toString().split(",").map(item => parseInt(item)));
      Object.assign(dto, { brandEntities: [...brandEntities] });
    }

    if (dto.categoryEntity) {
      const categoryEntity = await this.category.findOne(dto.categoryEntity);
      Object.assign(dto, { categoryEntity: categoryEntity });
    }
    
    return await this.portfolio.update(id, { ...dto });
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
