import { Controller } from "@nestjs/common";
import { PortfolioService } from "./portfolio.service";
import { ApiTags } from "@nestjs/swagger";
import { Crud, CrudController } from "@nestjsx/crud";
import { PortfolioEntity } from "./entities/portfolio.entity";

// @ApiBearerAuth()
// @ApiSecurity("bearer")
// @UseGuards(JwtAuthGuard)
@ApiTags("Portfolio")
@Crud({
  model: {
    type: PortfolioEntity
  },
  query: {
    join: {
      brandEntities: {
        eager: true
      }
    }
  }
})
@Controller("api/portfolio")
export class PortfolioController implements CrudController<PortfolioEntity> {
  constructor(public service: PortfolioService) {
  }

  // @Post()
  // create(@Body() createPortfolioDto: CreatePortfolioDto) {
  //   return this.portfolioService.create(createPortfolioDto);
  // }
  //
  // @Get()
  // findAll() {
  //   return this.portfolioService.findAll();
  // }
  //
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.portfolioService.findOne(+id);
  // }
  //
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePortfolioDto: UpdatePortfolioDto) {
  //   return this.portfolioService.update(+id, updatePortfolioDto);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.portfolioService.remove(+id);
  // }
}
