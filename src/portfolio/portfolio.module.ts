import { Module } from "@nestjs/common";
import { PortfolioService } from "./portfolio.service";
import { PortfolioController } from "./portfolio.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PortfolioEntity } from "./entities/portfolio.entity";

@Module({
  controllers: [PortfolioController],
  imports: [
    TypeOrmModule.forFeature([PortfolioEntity])
  ],
  providers: [PortfolioService]
})
export class PortfolioModule {
}
