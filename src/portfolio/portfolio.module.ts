import { Module } from "@nestjs/common";
import { PortfolioService } from "./portfolio.service";
import { PortfolioController } from "./portfolio.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PortfolioEntity } from "./entities/portfolio.entity";
import { CategoryEntity } from "../category/entities/category.entity";
import { BrandEntity } from "../brand/entities/brand.entity";

@Module({
  controllers: [PortfolioController],
  imports: [
    TypeOrmModule.forFeature([PortfolioEntity, CategoryEntity, BrandEntity])
  ],
  providers: [PortfolioService]
})
export class PortfolioModule {
}
