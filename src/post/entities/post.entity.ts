import { MetaEntity } from "../../database/entities/meta.entity";
import { Column, Entity, ManyToMany } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { HeadingEntity } from "../../heading/entities/heading.entity";
import { TagEntity } from "../../tag/entities/tag.entity";
import { ImageInterface } from "../../interfaces/image.inteface";
import { I18nColumn } from "typeorm-i18n";
import { DefaultLocale, SupportedLocales } from "../../locale/locale";

@Entity("post")
export class PostEntity extends MetaEntity {

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

  @ApiProperty({ example: "Подзаголовок", description: "Подзаголовок", required: true })
  @IsString()
  @IsOptional()
  @I18nColumn({
    default_language: DefaultLocale,
    languages: SupportedLocales
  })
  @Column({ type: "varchar", length: 500, nullable: true })
  subtitle: string;

  @ApiProperty({
    example: "Subtitle",
    description: "Подзаголовок Англ",
    required: false
  })
  @IsOptional()
  @IsString()
  subtitle__en: string;


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
    example: "Text",
    description: "Текст Англ",
    required: false
  })
  @IsOptional()
  @IsString()
  text__en: string;


  // @ApiModelProperty({type: Heading})
  @ApiProperty({ example: [1, 2], description: "headings", required: true })
  @IsOptional()
  @ManyToMany(() => HeadingEntity, h => h.posts)
  headings: HeadingEntity[];

  // @ApiModelProperty({type: Tag})
  @ApiProperty({ example: [1, 2], description: "tags", required: true })
  @IsOptional()
  @ManyToMany(() => TagEntity, p => p.posts)
  tags: TagEntity[];
}
