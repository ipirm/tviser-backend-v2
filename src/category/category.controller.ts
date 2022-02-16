import { Controller } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { Crud, CrudController } from "@nestjsx/crud";
import { CategoryEntity } from "./entities/category.entity";
import { ApiTags } from "@nestjs/swagger";


@ApiTags("Category")
@Crud({
  model: {
    type: CategoryEntity
  }
})
@Controller("category")
export class CategoryController implements CrudController<CategoryEntity> {
  constructor(public service: CategoryService) {
  }

  // @Post()
  // create(@Body() createCategoryDto: CreateCategoryDto) {
  //   return this.categoryService.create(createCategoryDto);
  // }
  //
  // @Get()
  // findAll() {
  //   return this.categoryService.findAll();
  // }
  //
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.categoryService.findOne(+id);
  // }
  //
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
  //   return this.categoryService.update(+id, updateCategoryDto);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.categoryService.remove(+id);
  // }
}
