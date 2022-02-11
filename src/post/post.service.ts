import { Injectable } from "@nestjs/common";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PostEntity } from "./entities/post.entity";
import { CrudRequest } from "@nestjsx/crud";
import { Tag } from "../tag/entities/tag.entity";
import { Heading } from "../heading/entities/heading.entity";


@Injectable()
export class PostService extends TypeOrmCrudService<PostEntity> {
  constructor(
    @InjectRepository(PostEntity) private readonly post: Repository<PostEntity>,
    @InjectRepository(Tag) private readonly tag: Repository<Tag>,
    @InjectRepository(Heading) private readonly heading: Repository<Heading>
  ) {
    super(post);
  }

  async createOneBase(req: CrudRequest, dto: PostEntity): Promise<PostEntity> {

    if (dto.tags) {
      const tags = await this.tag.findByIds(dto.tags.toString().split(",").map(item => parseInt(item)));
      Object.assign(dto, { tags: [...tags] });
    }
    if (dto.headings) {
      const headings = await this.heading.findByIds(dto.headings.toString().split(",").map(item => parseInt(item)));
      Object.assign(dto, { headings: [...headings] });
    }

    return await this.post.save(this.post.create(dto));
  }

  async updateOneBase(req: CrudRequest, dto: PostEntity, id: number): Promise<PostEntity> {

    if (dto.tags) {
      const tags = await this.tag.findByIds(dto.tags.toString().split(",").map(item => parseInt(item)));
      Object.assign(dto, { tags: [...tags] });
    }

    if (dto.headings) {
      const headings = await this.heading.findByIds(dto.headings.toString().split(",").map(item => parseInt(item)));
      Object.assign(dto, { headings: [...headings] });
    }

    await this.post.update(id, { ...dto });

    return null;
  }

  // create(createPostDto: CreatePostDto) {
  //   return "This action adds a new post";
  // }
  //
  // findAll() {
  //   return `This action returns all post`;
  // }
  //
  // findOne(id: number) {
  //   return `This action returns a #${id} post`;
  // }
  //
  // update(id: number, updatePostDto: UpdatePostDto) {
  //   return `This action updates a #${id} post`;
  // }
  //
  // remove(id: number) {
  //   return `This action removes a #${id} post`;
  // }
}
