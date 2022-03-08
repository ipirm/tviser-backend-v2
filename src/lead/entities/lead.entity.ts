import { BaseEntity } from '../../database/entities/base.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsOptional, IsString } from 'class-validator';
import { Column, Entity } from 'typeorm';
import { IsUniq } from '@join-com/typeorm-class-validator-is-uniq';
import { ImageInterface } from '../../interfaces/image.inteface';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { LocaleEnum } from '../../enums/locale.enum';

@Entity('lead')
export class LeadEntity extends BaseEntity {
  @ApiProperty({ example: 'Sasha', description: 'Name', required: false })
  @IsString()
  @Column()
  @IsOptional()
  name: string;

  @ApiProperty({
    example: 'sasha++22@gmail.com',
    description: 'Email',
    required: true,
  })
  @IsEmail()
  @IsUniq()
  @IsOptional()
  @Column({ unique: true })
  email: string;

  @ApiProperty({
    example: '+7 555 55 55',
    description: 'Phone Number',
    required: true,
  })
  @IsString()
  @Column()
  @IsOptional()
  phone: string;

  @ApiProperty({ example: 'Message', description: 'Message', required: false })
  @IsString()
  @Column()
  @IsOptional()
  text: string;

  @ApiProperty({
    type: 'simple-json',
    example: {
      alt: 'File',
      url: 'https://tviserbuckets.storage.yandexcloud.net/8722fb29-eab8-45c1-b1d9-50d6d3ebe470/79f4bc96707441%201.png',
    },
    description: 'File',
  })
  @IsOptional()
  @Column('simple-json', { default: null })
  file: ImageInterface;

  @IsEnum(LocaleEnum)
  @ApiModelProperty({
    enum: Object.keys(LocaleEnum),
    default: LocaleEnum.RU,
    description: 'Language',
    required: true,
  })
  @Column('enum', { enum: LocaleEnum, default: LocaleEnum.RU })
  @IsOptional()
  language: LocaleEnum;
}
