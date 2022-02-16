import { MetaEntity } from "../../database/entities/meta.entity";
import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { I18nColumn } from "typeorm-i18n";
import { DefaultLocale, SupportedLocales } from "../../locale/locale";
import { Column, Entity } from "typeorm";

@Entity("category")
export class CategoryEntity extends MetaEntity {

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

  @ApiProperty({ example: "Описание", description: "Краткое описание", required: true })
  @IsString()
  @IsOptional()
  @I18nColumn({
    default_language: DefaultLocale,
    languages: SupportedLocales
  })
  @Column({ type: "varchar", length: 500, nullable: true })
  description: string;

  @ApiProperty({
    example: "Description",
    description: "Описание Англ",
    required: false
  })
  @IsOptional()
  @IsString()
  description__en: string;
}
