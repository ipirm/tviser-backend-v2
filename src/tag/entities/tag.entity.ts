import { BaseEntity } from "../../database/entities/base.entity";
import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { PostEntity } from "../../post/entities/post.entity";
import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { IsUniq } from "@join-com/typeorm-class-validator-is-uniq";

@Entity("tag")
export class Tag extends BaseEntity {

  @ApiProperty({ example: "Какой то пост с каким то названием", description: "Заголовок", required: true })
  @IsString()
  @IsOptional()
  @Column({ type: "varchar", length: 500, nullable: false })
  title: string;

  @ApiProperty({ example: "url", description: "Слэг", required: true })
  @IsString()
  @IsUniq()
  @IsOptional()
  @Column({ unique: true })
  slug: string;

  @ApiProperty({ example: "f5f5f5", description: "Цвет", required: false })
  @IsString()
  @IsOptional()
  @Column({ type: "varchar", length: 500, nullable: true })
  color: string;

  @ManyToMany(() => PostEntity, t => t.tags)
  @JoinTable()
  posts: PostEntity[];
}
