import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { IsUniq } from "@join-com/typeorm-class-validator-is-uniq";
import { MetaEntity } from "../../database/entities/meta.entity";
import { PostEntity } from "../../post/entities/post.entity";
import { I18nColumn } from "typeorm-i18n";
import { DefaultLocale, SupportedLocales } from "../../locale/locale";

@Entity("heading")
export class HeadingEntity extends MetaEntity {

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

  @ManyToMany(() => PostEntity, p => p.headings)
  @JoinTable()
  posts: PostEntity[];
}
