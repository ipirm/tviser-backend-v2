import { Controller, UseGuards } from "@nestjs/common";
import { HeadingService } from "./heading.service";
import { ApiBearerAuth, ApiSecurity, ApiTags } from "@nestjs/swagger";
import { Crud, CrudController } from "@nestjsx/crud";
import { HeadingEntity } from "./entities/heading.entity";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";


// @ApiBearerAuth()
// @ApiSecurity("bearer")
// @UseGuards(JwtAuthGuard)
@ApiTags("Heading")
@Crud({
  model: {
    type: HeadingEntity
  },
  query: {
    join: {
      posts: {
        eager: true
      },
      "posts.tags": {
        alias: "tags",
        eager: true,
        exclude: ["color", "createdAt", "updatedAt"]
      }
    }
  }
})
@Controller("api/heading")
export class HeadingController implements CrudController<HeadingEntity> {
  constructor(public readonly service: HeadingService) {
  }

  // @Post()
  // create(@Body() createHeadingDto: CreateHeadingDto) {
  //   return this.headingService.create(createHeadingDto);
  // }
  //
  // @Get()
  // findAll() {
  //   return this.headingService.findAll();
  // }
  //
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.headingService.findOne(+id);
  // }
  //
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateHeadingDto: UpdateHeadingDto) {
  //   return this.headingService.update(+id, updateHeadingDto);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.headingService.remove(+id);
  // }
}
