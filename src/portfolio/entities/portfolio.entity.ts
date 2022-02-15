import { Column, Entity, ManyToMany } from "typeorm";
import { MetaEntity } from "../../database/entities/meta.entity";
import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { ImageInterface } from "../../interfaces/image.inteface";
import { IsUniq } from "@join-com/typeorm-class-validator-is-uniq";
import { BrandEntity } from "../../brand/entities/brand.entity";


@Entity("portfolio")
export class PortfolioEntity extends MetaEntity {

  @ApiProperty({ example: "Какой то пост с каким то названием", description: "Заголовок", required: true })
  @IsString()
  @IsOptional()
  @Column({ type: "varchar", length: 500, nullable: true })
  title: string;

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

  @ApiProperty({
    type: "simple-json",
    example: [
      {
        alt: "Картинка",
        url: "https://tviserbuckets.storage.yandexcloud.net/8722fb29-eab8-45c1-b1d9-50d6d3ebe470/79f4bc96707441%201.png"
      },
      {
        alt: "Картинка",
        url: "https://tviserbuckets.storage.yandexcloud.net/8722fb29-eab8-45c1-b1d9-50d6d3ebe470/79f4bc96707441%201.png"
      }
    ],
    description: "Картинки"
  })
  @IsOptional()
  @Column("simple-json", { default: null })
  files: ImageInterface[];

  @ApiProperty({ example: "url", description: "Слэг", required: true })
  @IsString()
  @IsUniq()
  @IsOptional()
  @Column({ unique: true })
  slug: string;

  @ApiProperty({ example: "Текст", description: "Текст поста", required: true })
  @IsString()
  @IsOptional()
  @Column({ type: "varchar", length: 65000, nullable: true })
  text: string;

  @ApiProperty({ example: [1, 2], description: "brands", required: true })
  @IsOptional()
  @ManyToMany(() => BrandEntity, p => p.portfolioEntities)
  brandEntities: BrandEntity[];

}
