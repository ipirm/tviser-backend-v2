import { BaseEntity } from "./base.entity";
import { Column, Entity } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { ImageInterface } from "../../interfaces/image.inteface";
import { I18nColumn } from "typeorm-i18n";
import { DefaultLocale, SupportedLocales } from "../../locale/locale";

@Entity("meta")
export class MetaEntity extends BaseEntity {

  @ApiProperty({ example: "Мета тайтл", description: "meta_title", required: true })
  @IsString()
  @IsOptional()
  @I18nColumn({
    default_language: DefaultLocale,
    languages: SupportedLocales
  })
  @Column({ type: "varchar", length: 500, nullable: true })
  meta_title: string;

  @ApiProperty({
    example: "Meta Title",
    description: "Мета тайтл Англ",
    required: false
  })
  @IsOptional()
  @IsString()
  meta_title__en: string;

  @ApiProperty({ example: "Мета описание", description: "meta_description", required: true })
  @IsString()
  @IsOptional()
  @I18nColumn({
    default_language: DefaultLocale,
    languages: SupportedLocales
  })
  @Column({ type: "varchar", length: 500, nullable: true })
  meta_description: string;

  @ApiProperty({
    example: "Meta Description",
    description: "Meta Description En",
    required: false
  })
  @IsOptional()
  @IsString()
  meta_description__en: string;

  @ApiProperty({ example: "Meta keywords", description: "meta_keywords", required: true })
  @IsString()
  @IsOptional()
  @I18nColumn({
    default_language: DefaultLocale,
    languages: SupportedLocales
  })
  @Column({ type: "varchar", length: 500, nullable: true })
  meta_keywords: string;

  @ApiProperty({
    example: "Meta keywords",
    description: "Meta keywords En",
    required: false
  })
  @IsOptional()
  @IsString()
  meta_keywords__en: string;

  @ApiProperty({
    type: "simple-json",
    example: {
      alt: "Meta Image",
      url: "https://tviserbuckets.storage.yandexcloud.net/8722fb29-eab8-45c1-b1d9-50d6d3ebe470/79f4bc96707441%201.png"
    },
    description: "Meta Image"
  })
  @Column("simple-json", { default: null })
  @IsOptional()
  meta_image: ImageInterface;

  @ApiProperty({ example: "Twitter title", description: "twitter_title", required: true })
  @IsString()
  @IsOptional()
  @I18nColumn({
    default_language: DefaultLocale,
    languages: SupportedLocales
  })
  @Column({ type: "varchar", length: 500, nullable: true })
  twitter_title: string;

  @ApiProperty({
    example: "Meta title",
    description: "Twitter title En",
    required: false
  })
  @IsOptional()
  @IsString()
  twitter_title__en: string;


  @ApiProperty({ example: "Twitter description", description: "twitter_description", required: true })
  @IsString()
  @IsOptional()
  @I18nColumn({
    default_language: DefaultLocale,
    languages: SupportedLocales
  })
  @Column({ type: "varchar", length: 500, nullable: true })
  twitter_description: string;

  @ApiProperty({
    example: "Meta description",
    description: "Meta description En",
    required: false
  })
  @IsOptional()
  @IsString()
  twitter_description__en: string;


  @ApiProperty({
    type: "simple-json",
    example: {
      alt: "Twitter Image",
      url: "https://tviserbuckets.storage.yandexcloud.net/8722fb29-eab8-45c1-b1d9-50d6d3ebe470/79f4bc96707441%201.png"
    },
    description: "Twitter Image"
  })
  @IsOptional()
  @Column("simple-json", { default: null })
  twitter_image: ImageInterface;

  @ApiProperty({ example: "Facebook title", description: "facebook_title", required: true })
  @IsString()
  @IsOptional()
  @I18nColumn({
    default_language: DefaultLocale,
    languages: SupportedLocales
  })
  @Column({ type: "varchar", length: 500, nullable: true })
  facebook_title: string;

  @ApiProperty({
    example: "Facebook title",
    description: "Facebook title En",
    required: false
  })
  @IsOptional()
  @IsString()
  facebook_title__en: string;

  @ApiProperty({ example: "Facebook description", description: "facebook_desctiption", required: true })
  @IsString()
  @IsOptional()
  @I18nColumn({
    default_language: DefaultLocale,
    languages: SupportedLocales
  })
  @Column({ type: "varchar", length: 500, nullable: true })
  facebook_description: string;

  @ApiProperty({
    example: "Facebook description",
    description: "Facebook description En",
    required: false
  })
  @IsOptional()
  @IsString()
  facebook_description__en: string;


  @ApiProperty({
    type: "simple-json",
    example: {
      alt: "Facebook Image",
      url: "https://tviserbuckets.storage.yandexcloud.net/8722fb29-eab8-45c1-b1d9-50d6d3ebe470/79f4bc96707441%201.png"
    },
    description: "Facebook Image"
  })
  @IsOptional()
  @Column("simple-json", { default: null })
  facebook_image: ImageInterface;


}
