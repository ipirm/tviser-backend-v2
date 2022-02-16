import { Column, Entity, ManyToMany, ManyToOne } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { ImageInterface } from "../../interfaces/image.inteface";
import { BrandEntity } from "../../brand/entities/brand.entity";
import { I18nColumn } from "typeorm-i18n";
import { DefaultLocale, SupportedLocales } from "../../locale/locale";
import { CategoryEntity } from "../../category/entities/category.entity";
import { BaseEntity } from "../../database/entities/base.entity";


@Entity("portfolio")
export class PortfolioEntity extends BaseEntity {

  @ApiProperty({ example: "Title", description: "Title", required: true })
  @IsString()
  @IsOptional()
  @I18nColumn({
    default_language: DefaultLocale,
    languages: SupportedLocales
  })
  @Column({ type: "varchar", length: 500, nullable: true })
  title: string;

  @ApiProperty({
    example: "Title (Eng)",
    description: "Title (Eng)",
    required: false
  })
  @IsOptional()
  @IsString()
  title__en: string;

  @ApiProperty({
    type: "simple-json",
    example: {
      alt: "Image",
      url: "https://tviserbuckets.storage.yandexcloud.net/8722fb29-eab8-45c1-b1d9-50d6d3ebe470/79f4bc96707441%201.png"
    },
    description: "Image"
  })
  @IsOptional()
  @Column("simple-json", { default: null })
  image: ImageInterface;

  @ApiProperty({
    type: "simple-json",
    example: [
      {
        alt: "Image",
        url: "https://tviserbuckets.storage.yandexcloud.net/8722fb29-eab8-45c1-b1d9-50d6d3ebe470/79f4bc96707441%201.png"
      },
      {
        alt: "Image",
        url: "https://tviserbuckets.storage.yandexcloud.net/8722fb29-eab8-45c1-b1d9-50d6d3ebe470/79f4bc96707441%201.png"
      }
    ],
    description: "Images"
  })
  @IsOptional()
  @Column("simple-json", { default: null })
  files: ImageInterface[];

  @ApiProperty({ example: "lg-brand", description: "Url", required: true })
  @IsString()
  @IsOptional()
  @I18nColumn({
    default_language: DefaultLocale,
    languages: SupportedLocales
  })
  @Column({ type: "varchar", length: 500, nullable: true })
  slug: string;

  @ApiProperty({
    example: "lg-brand",
    description: "Url (Eng)",
    required: true
  })
  @IsOptional()
  @IsString()
  slug__en: string;

  @ApiProperty({ example: "Text", description: "Post text", required: true })
  @IsString()
  @IsOptional()
  @I18nColumn({
    default_language: DefaultLocale,
    languages: SupportedLocales
  })
  @Column({ type: "varchar", length: 65000, nullable: true })
  text: string;

  @ApiProperty({
    example: "Title (Eng)",
    description: "Title (Eng)",
    required: false
  })
  @IsOptional()
  @IsString()
  text__en: string;

  @ApiProperty({ example: [1, 2], description: "Brands Ids", required: false })
  @IsOptional()
  @ManyToMany(() => BrandEntity, p => p.portfolioEntities)
  brandEntities: BrandEntity[];

  @ApiProperty({ example: 1, description: "Category Id", required: false })
  @IsOptional()
  @ManyToOne(type => CategoryEntity, category => category.portfolioEntities)
  categoryEntity?: CategoryEntity;
}
