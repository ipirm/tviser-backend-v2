import { Module } from '@nestjs/common';
import { HeadingService } from './heading.service';
import { HeadingController } from './heading.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeadingEntity } from './entities/heading.entity';
import { PostEntity } from '../post/entities/post.entity';
import { TagEntity } from '../tag/entities/tag.entity';

@Module({
  controllers: [HeadingController],
  imports: [TypeOrmModule.forFeature([HeadingEntity, PostEntity, TagEntity])],
  providers: [HeadingService],
})
export class HeadingModule {}
