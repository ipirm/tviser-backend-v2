import { BaseEntity } from "./base.entity";
import { Column, Entity } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { ImageInterface } from "../../interfaces/image.inteface";

@Entity("meta")
export class Meta extends BaseEntity {

  @ApiProperty({ example: "Meta title", description: "meta_title", required: true })
  @IsString()
  @IsOptional()
  @Column({ type: "varchar", length: 500, nullable: true })
  meta_title: string;

  @ApiProperty({ example: "Meta description", description: "meta_description", required: true })
  @IsString()
  @IsOptional()
  @Column({ type: "varchar", length: 500, nullable: true })
  meta_description: string;

  @ApiProperty({ example: "Meta keywords", description: "meta_keywords", required: true })
  @IsString()
  @IsOptional()
  @Column({ type: "varchar", length: 500, nullable: true })
  meta_keywords: string;

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
  @Column({ type: "varchar", length: 500, nullable: true })
  twitter_title: string;

  @ApiProperty({ example: "Twitter description", description: "twitter_description", required: true })
  @IsString()
  @IsOptional()
  @Column({ type: "varchar", length: 500, nullable: true })
  twitter_description: string;

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
  @Column({ type: "varchar", length: 500, nullable: true })
  facebook_title: string;

  @ApiProperty({ example: "Facebook description", description: "facebook_desctiption", required: true })
  @IsString()
  @IsOptional()
  @Column({ type: "varchar", length: 500, nullable: true })
  facebook_description: string;

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
