import { Module } from "@nestjs/common";
import { BrandService } from "./brand.service";
import { BrandController } from "./brand.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BrandEntity } from "./entities/brand.entity";

@Module({
  controllers: [BrandController],
  imports: [TypeOrmModule.forFeature([BrandEntity])],
  providers: [BrandService]
})
export class BrandModule {
}
