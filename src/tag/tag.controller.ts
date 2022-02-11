import { Controller, UseGuards } from "@nestjs/common";
import { TagService } from "./tag.service";
import { ApiBearerAuth, ApiSecurity, ApiTags } from "@nestjs/swagger";
import { Crud, CrudController } from "@nestjsx/crud";
import { Tag } from "./entities/tag.entity";
import { MetaInstance } from "../interfaces/meta.interface";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";

@ApiBearerAuth()
@ApiSecurity("bearer")
@UseGuards(JwtAuthGuard)
@ApiTags("Tag")
@Crud({
  model: {
    type: Tag
  },
  query: {
    join: {
      posts: {
        eager: true
      },
      "posts.headings": {
        alias: "headings",
        eager: true,
        exclude: ["createdAt", "updatedAt", ...Object.keys(MetaInstance)]
      }
    }
  }
})
@Controller("api/tag")
export class TagController implements CrudController<Tag> {
  constructor(public service: TagService) {
  }

  // @Post()
  // create(@Body() createTagDto: CreateTagDto) {
  //   return this.tagService.create(createTagDto);
  // }
  //
  // @Get()
  // findAll() {
  //   return this.tagService.findAll();
  // }
  //
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.tagService.findOne(+id);
  // }
  //
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTagDto: UpdateTagDto) {
  //   return this.tagService.update(+id, updateTagDto);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.tagService.remove(+id);
  // }
}
