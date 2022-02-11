import { Meta } from "../../database/entities/meta.entity";
import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { IsUniq } from "@join-com/typeorm-class-validator-is-uniq";
import { Heading } from "../../heading/entities/heading.entity";
import { Tag } from "../../tag/entities/tag.entity";
import { ImageInterface } from "../../interfaces/image.inteface";

@Entity("post")
export class PostEntity extends Meta {

  @ApiProperty({ example: "Какой то пост с каким то названием", description: "Заголовок", required: true })
  @IsString()
  @IsOptional()
  @Column({ type: "varchar", length: 500, nullable: true })
  title: string;

  @ApiProperty({ example: "Подзаголовок", description: "Подзаголовок", required: true })
  @IsString()
  @IsOptional()
  @Column({ type: "varchar", length: 500, nullable: true })
  subtitle: string;

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

  @ApiProperty({ example: "url", description: "Слэг", required: true })
  @IsString()
  @IsUniq()
  @IsOptional()
  @Column({ unique: true })
  slug: string;

  @ApiProperty({ example: "Описание", description: "Краткое описание", required: true })
  @IsString()
  @IsOptional()
  @Column({ type: "varchar", length: 500, nullable: true })
  description: string;

  @ApiProperty({ example: "Текст", description: "Текст поста", required: true })
  @IsString()
  @IsOptional()
  @Column({ type: "varchar", length: 65000, nullable: true })
  text: string;

  // @ApiModelProperty({type: Heading})
  @ApiProperty({ example: [1, 2], description: "headings", required: true })
  @IsOptional()
  @ManyToMany(() => Heading, h => h.posts)
  headings: Heading[];

  // @ApiModelProperty({type: Tag})
  @ApiProperty({ example: [1, 2], description: "tags", required: true })
  @IsOptional()
  @ManyToMany(() => Tag, p => p.posts)
  tags: Tag[];
}
