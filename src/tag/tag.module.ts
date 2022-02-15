import { Module } from "@nestjs/common";
import { TagService } from "./tag.service";
import { TagController } from "./tag.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TagEntity } from "./entities/tag.entity";
import { PostEntity } from "../post/entities/post.entity";

@Module({
  controllers: [TagController],
  imports: [TypeOrmModule.forFeature([TagEntity, PostEntity])],
  providers: [TagService]
})
export class TagModule {
}
