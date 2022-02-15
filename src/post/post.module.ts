import { Module } from "@nestjs/common";
import { PostService } from "./post.service";
import { PostController } from "./post.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostEntity } from "./entities/post.entity";
import { TagEntity } from "../tag/entities/tag.entity";
import { HeadingEntity } from "../heading/entities/heading.entity";

@Module({
  controllers: [PostController],
  imports: [
    TypeOrmModule.forFeature([PostEntity, TagEntity, HeadingEntity])
  ],
  providers: [PostService]
})
export class PostModule {
}
