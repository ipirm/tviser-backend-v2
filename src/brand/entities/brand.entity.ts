import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsOptional, IsString } from "class-validator";
import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { BaseEntity } from "../../database/entities/base.entity";
import { ImageInterface } from "../../interfaces/image.inteface";
import { PortfolioEntity } from "../../portfolio/entities/portfolio.entity";


@Entity("brand")
export class BrandEntity extends BaseEntity {

  @ApiProperty({ example: "LG", description: "Название бренда/Партнера", required: true })
  @IsString()
  @IsOptional()
  @Column({ type: "varchar", length: 500, nullable: true })
  name: string;

  @ApiProperty({ example: "LG", description: "Слэг", required: true })
  @IsString()
  @IsOptional()
  @Column({ type: "varchar", length: 500, nullable: true })
  slug: string;

  @ApiProperty({ example: true, description: "Партнер", required: true })
  @IsBoolean()
  @IsOptional()
  @Column({ type: "boolean", default: false })
  is_partner: boolean;

  @ApiProperty({
    type: "simple-json",
    example: {
      alt: "Картинка",
      url: "https://tviserbuckets.storage.yandexcloud.net/8722fb29-eab8-45c1-b1d9-50d6d3ebe470/79f4bc96707441%201.png"
    },
    description: "Картинка"
  })
  @IsOptional()
  @Column("simple-json", { default: null })
  image: ImageInterface;

  @ManyToMany(() => PortfolioEntity, t => t.brandEntities)
  @JoinTable()
  portfolioEntities: PortfolioEntity[];
}
