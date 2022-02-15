import { Controller } from "@nestjs/common";
import { BrandService } from "./brand.service";
import { ApiTags } from "@nestjs/swagger";
import { Crud, CrudController } from "@nestjsx/crud";
import { BrandEntity } from "./entities/brand.entity";

// @ApiBearerAuth()
// @ApiSecurity("bearer")
// @UseGuards(JwtAuthGuard)
@ApiTags("Brand")
@Crud({
  model: {
    type: BrandEntity
  },
  query: {
    join: {
      portfolioEntities: {
        eager: false
      }
    }
  }
})
@Controller("api/brand")
export class BrandController implements CrudController<BrandEntity> {
  constructor(public service: BrandService) {
  }

  // @Post()
  // create(@Body() createBrandDto: CreateBrandDto) {
  //   return this.brandService.create(createBrandDto);
  // }
  //
  // @Get()
  // findAll() {
  //   return this.brandService.findAll();
  // }
  //
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.brandService.findOne(+id);
  // }
  //
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateBrandDto: UpdateBrandDto) {
  //   return this.brandService.update(+id, updateBrandDto);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.brandService.remove(+id);
  // }
}
