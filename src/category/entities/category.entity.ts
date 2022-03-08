import { MetaEntity } from '../../database/entities/meta.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { I18nColumn } from 'typeorm-i18n';
import { DefaultLocale, SupportedLocales } from '../../locale/locale';
import { Column, Entity, OneToMany } from 'typeorm';
import { PortfolioEntity } from '../../portfolio/entities/portfolio.entity';

@Entity('category')
export class CategoryEntity extends MetaEntity {
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

  @ApiProperty({
    example: 'Description',
    description: 'Description',
    required: true,
  })
  @IsString()
  @IsOptional()
  @I18nColumn({
    default_language: DefaultLocale,
    languages: SupportedLocales,
  })
  @Column({ type: 'varchar', length: 500, nullable: true })
  description: string;

  @ApiProperty({
    example: 'Description',
    description: 'Description (Eng)',
    required: false,
  })
  @IsOptional()
  @IsString()
  description__en: string;

  @OneToMany(
    (type) => PortfolioEntity,
    (portfolio) => portfolio.categoryEntity,
    { onDelete: 'CASCADE' },
  )
  portfolioEntities: PortfolioEntity[];
}
