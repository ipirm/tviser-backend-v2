import { MetaEntity } from './meta.entity';
import { Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class BaseSocialEntity extends MetaEntity {
  @ApiProperty({
    example: 'https://www.facebook.com/',
    description: 'facebook',
    required: false,
  })
  @IsString()
  @IsOptional()
  @Column({ type: 'varchar', length: 500, nullable: true })
  facebook: string;

  @ApiProperty({
    example: 'https://web.telegram.org/k/',
    description: 'telegram',
    required: false,
  })
  @IsString()
  @IsOptional()
  @Column({ type: 'varchar', length: 500, nullable: true })
  telegram: string;

  @ApiProperty({
    example: 'https://www.instagram.com/',
    description: 'instagram',
    required: false,
  })
  @IsString()
  @IsOptional()
  @Column({ type: 'varchar', length: 500, nullable: true })
  instagram: string;

  @ApiProperty({
    example: 'https://www.youtube.com/',
    description: 'youtube',
    required: false,
  })
  @IsString()
  @IsOptional()
  @Column({ type: 'varchar', length: 500, nullable: true })
  youtube: string;

  @ApiProperty({
    example: 'https://www.reddit.com/',
    description: 'reddit',
    required: false,
  })
  @IsString()
  @IsOptional()
  @Column({ type: 'varchar', length: 500, nullable: true })
  reddit: string;

  @ApiProperty({
    example: 'https://twitter.com/?lang=ru',
    description: 'twitter',
    required: false,
  })
  @IsString()
  @IsOptional()
  @Column({ type: 'varchar', length: 500, nullable: true })
  twitter: string;

  @ApiProperty({
    example: 'https://www.linkedin.com/',
    description: 'linkedin',
    required: false,
  })
  @IsString()
  @IsOptional()
  @Column({ type: 'varchar', length: 500, nullable: true })
  linkedin: string;

  @ApiProperty({
    example: 'https://www.yandex.com/',
    description: 'yandex',
    required: false,
  })
  @IsString()
  @IsOptional()
  @Column({ type: 'varchar', length: 500, nullable: true })
  yandex_directory: string;

  @ApiProperty({
    example: 'https://www.google.com/',
    description: 'google_business',
    required: false,
  })
  @IsString()
  @IsOptional()
  @Column({ type: 'varchar', length: 500, nullable: true })
  google_business: string;

  @ApiProperty({
    example: 'https://www.discord.com/',
    description: 'discord',
    required: false,
  })
  @IsString()
  @IsOptional()
  @Column({ type: 'varchar', length: 500, nullable: true })
  discord: string;
}
