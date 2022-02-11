import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { IsUniq } from "@join-com/typeorm-class-validator-is-uniq";
import { Meta } from "../../database/entities/meta.entity";
import { PostEntity } from "../../post/entities/post.entity";

@Entity("heading")
export class Heading extends Meta {

  @ApiProperty({ example: "Какой то пост с каким то названием", description: "Заголовок", required: true })
  @IsString()
  @IsOptional()
  @Column({ type: "varchar", length: 500, nullable: true })
  public title: string;

  @ApiProperty({ example: "url", description: "Слэг", required: true })
  @IsString()
  @IsUniq()
  @IsOptional()
  @Column({ unique: true })
  slug: string;

  @ManyToMany(() => PostEntity, p => p.headings)
  @JoinTable()
  posts: PostEntity[];
}
