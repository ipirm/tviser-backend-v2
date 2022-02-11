import { Module } from "@nestjs/common";
import { HeadingService } from "./heading.service";
import { HeadingController } from "./heading.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Heading } from "./entities/heading.entity";
import { PostEntity } from "../post/entities/post.entity";
import { Tag } from "../tag/entities/tag.entity";

@Module({
  controllers: [HeadingController],
  imports: [
    TypeOrmModule.forFeature([Heading,PostEntity,Tag])
  ],
  providers: [HeadingService]
})
export class HeadingModule {
}
