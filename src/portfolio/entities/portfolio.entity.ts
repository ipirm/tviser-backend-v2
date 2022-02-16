import { Column, Entity, ManyToMany, ManyToOne } from "typeorm";
import { MetaEntity } from "../../database/entities/meta.entity";
import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { ImageInterface } from "../../interfaces/image.inteface";
import { BrandEntity } from "../../brand/entities/brand.entity";
import { I18nColumn } from "typeorm-i18n";
import { DefaultLocale, SupportedLocales } from "../../locale/locale";
import { CategoryEntity } from "../../category/entities/category.entity";


@Entity("portfolio")
export class PortfolioEntity extends MetaEntity {

  @ApiProperty({ example: "Какой то пост с каким то названием", description: "Заголовок", required: true })
  @IsString()
  @IsOptional()
  @I18nColumn({
    default_language: DefaultLocale,
    languages: SupportedLocales
  })
  @Column({ type: "varchar", length: 500, nullable: true })
  title: string;

  @ApiProperty({
    example: "Some post with some title",
    description: "Заголовок Англ",
    required: false
  })
  @IsOptional()
  @IsString()
  title__en: string;

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

  @ApiProperty({ example: "lg-brand", description: "Слэг", required: true })
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
    description: "Слэг Англ",
    required: true
  })
  @IsOptional()
  @IsString()
  slug__en: string;

  @ApiProperty({ example: "Текст", description: "Текст поста", required: true })
  @IsString()
  @IsOptional()
  @I18nColumn({
    default_language: DefaultLocale,
    languages: SupportedLocales
  })
  @Column({ type: "varchar", length: 65000, nullable: true })
  text: string;

  @ApiProperty({
    example: "Some post with some title",
    description: "Текст Англ",
    required: false
  })
  @IsOptional()
  @IsString()
  text__en: string;

  @ApiProperty({ example: [1, 2], description: "brandEntities", required: false })
  @IsOptional()
  @ManyToMany(() => BrandEntity, p => p.portfolioEntities)
  brandEntities: BrandEntity[];

  @ApiProperty({ example: 1, description: "categoryEntity", required: false })
  @IsOptional()
  @ManyToOne(type => CategoryEntity, category => category.portfolioEntities)
  categoryEntity?: CategoryEntity;
}
