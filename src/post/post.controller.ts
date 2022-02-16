import { Controller, Param, UseGuards } from "@nestjs/common";
import { PostService } from "./post.service";
import { ApiBearerAuth, ApiSecurity, ApiTags } from "@nestjs/swagger";
import { Crud, CrudController, CrudRequest, Override, ParsedBody, ParsedRequest } from "@nestjsx/crud";
import { PostEntity } from "./entities/post.entity";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";


// @ApiBearerAuth()
// @ApiSecurity("bearer")
// @UseGuards(JwtAuthGuard)
@ApiTags("Post")
@Crud({
  model: {
    type: PostEntity
  },
  query: {
    join: {
      headings: {
        eager: true
      },
      tags: {
        eager: true
      }
    }
  }
})
@Controller("api/post")
export class PostController implements CrudController<PostEntity> {
  constructor(public service: PostService) {
  }

  @Override()
  createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: PostEntity
  ): Promise<PostEntity> {
    return this.service.createOneBase(req, dto);
  }

  @Override()
  updateOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: PostEntity,
    @Param("id") id: number
  ): Promise<any> {
    return this.service.updateOneBase(req, dto, id);
  }

  // @Post()
  // create(@Body() createPostDto: CreatePostDto) {
  //   return this.postService.create(createPostDto);
  // }
  //
  // @Get()
  // findAll() {
  //   return this.postService.findAll();
  // }
  //
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.postService.findOne(+id);
  // }
  //
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
  //   return this.postService.update(+id, updatePostDto);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.postService.remove(+id);
  // }
}
