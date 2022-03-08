import { Controller, Param } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { ApiTags } from '@nestjs/swagger';
import {
  Crud,
  CrudController,
  CrudRequest,
  Override,
  ParsedBody,
  ParsedRequest,
} from '@nestjsx/crud';
import { PortfolioEntity } from './entities/portfolio.entity';
import { UpdateResult } from 'typeorm';
import { MetaInstance } from '../interfaces/meta.interface';

// @ApiBearerAuth()
// @ApiSecurity("bearer")
// @UseGuards(JwtAuthGuard)
@ApiTags('Portfolio')
@Crud({
  model: {
    type: PortfolioEntity,
  },
  query: {
    join: {
      brandEntities: {
        eager: true,
        exclude: ['createdAt', 'updatedAt'],
      },
      categoryEntity: {
        alias: 'categoryEntity',
        eager: true,
        exclude: ['createdAt', 'updatedAt', ...Object.keys(MetaInstance)],
      },
    },
  },
})
@Controller('api/portfolio')
export class PortfolioController implements CrudController<PortfolioEntity> {
  constructor(public service: PortfolioService) {}

  @Override()
  createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: PortfolioEntity,
  ): Promise<PortfolioEntity> {
    return this.service.createOneBase(req, dto);
  }

  @Override()
  updateOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: PortfolioEntity,
    @Param('id') id: number,
  ): Promise<UpdateResult> {
    return this.service.updateOneBase(req, dto, id);
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
