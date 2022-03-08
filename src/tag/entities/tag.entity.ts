import { BaseEntity } from '../../database/entities/base.entity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { PostEntity } from '../../post/entities/post.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { I18nColumn } from 'typeorm-i18n';
import { DefaultLocale, SupportedLocales } from '../../locale/locale';

@Entity('tag')
export class TagEntity extends BaseEntity {
  @ApiProperty({ example: 'Title', description: 'Title', required: true })
  @IsString()
  @IsOptional()
  @I18nColumn({
    default_language: DefaultLocale,
    languages: SupportedLocales,
  })
  @Column({ type: 'varchar', length: 500, nullable: true })
  title: string;

  @ApiProperty({
    example: 'Title (Eng)',
    description: 'Title (Eng)',
    required: false,
  })
  @IsOptional()
  @IsString()
  title__en: string;

  @ApiProperty({ example: 'lg-brand', description: 'Url', required: true })
  @IsString()
  @IsOptional()
  @I18nColumn({
    default_language: DefaultLocale,
    languages: SupportedLocales,
  })
  @Column({ type: 'varchar', length: 500, nullable: true })
  slug: string;

  @ApiProperty({
    example: 'lg-brand',
    description: 'Url (Eng)',
    required: true,
  })
  @IsOptional()
  @IsString()
  slug__en: string;

  @ManyToMany(() => PostEntity, (t) => t.tags)
  @JoinTable()
  posts: PostEntity[];
}
