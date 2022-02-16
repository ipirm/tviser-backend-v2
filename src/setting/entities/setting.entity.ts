import { Column, Entity } from "typeorm";
import { BaseSocialEntity } from "../../database/entities/base-social.entity";
import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { I18nColumn } from "typeorm-i18n";
import { DefaultLocale, SupportedLocales } from "../../locale/locale";

@Entity("setting")
export class SettingEntity extends BaseSocialEntity {

  @ApiProperty({ example: [{ title: "string", url: "string" }], description: "politics", required: false })
  @IsOptional()
  @I18nColumn({
    default_language: DefaultLocale,
    languages: SupportedLocales
  })
  @Column("simple-json", { default: null })
  politics: { title: string, url: string }[];

  @ApiProperty({ example: [{ title: "string", url: "string" }], description: "politics__en", required: false })
  @IsOptional()
  politics__en: { title: string, url: string }[];

  @ApiProperty({ example: [{ title: "string", url: "string" }], description: "left_link", required: false })
  @IsOptional()
  @I18nColumn({
    default_language: DefaultLocale,
    languages: SupportedLocales
  })
  @Column("simple-json", { default: null })
  left_link: { title: string, url: string }[];

  @ApiProperty({ example: [{ title: "string", url: "string" }], description: "left_link__en", required: false })
  @IsOptional()
  left_link__en: { title: string, url: string }[];

  @ApiProperty({ example: [{ title: "string", url: "string" }], description: "right_link", required: false })
  @IsOptional()
  @I18nColumn({
    default_language: DefaultLocale,
    languages: SupportedLocales
  })
  @Column("simple-json", { default: null })
  right_link: { title: string, url: string }[];

  @ApiProperty({ example: [{ title: "string", url: "string" }], description: "right_link__en", required: false })
  @IsOptional()
  right_link__en: { title: string, url: string }[];

  @ApiProperty({ example: [{ title: "string", url: "string" }], description: "middle_link", required: false })
  @IsOptional()
  @I18nColumn({
    default_language: DefaultLocale,
    languages: SupportedLocales
  })
  @Column("simple-json", { default: null })
  middle_link: { title: string, url: string }[];

  @ApiProperty({ example: [{ title: "string", url: "string" }], description: "middle_link__en", required: false })
  @IsOptional()
  middle_link__en: { title: string, url: string }[];

  @ApiProperty({ example: "Какой то пост с каким то названием", description: "Заголовок", required: false })
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

  @ApiProperty({ example: "Описание", description: "Краткое описание", required: false })
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
