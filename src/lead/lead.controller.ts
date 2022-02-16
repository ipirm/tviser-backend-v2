import { Controller, UseGuards } from "@nestjs/common";
import { LeadService } from "./lead.service";
import { ApiBearerAuth, ApiSecurity, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { Crud, CrudController } from "@nestjsx/crud";
import { LeadEntity } from "./entities/lead.entity";

// @ApiBearerAuth()
// @ApiSecurity("bearer")
// @UseGuards(JwtAuthGuard)
@ApiTags("Lead")
@Crud({
  model: {
    type: LeadEntity
  }
})
@Controller("api/lead")
export class LeadController implements CrudController<LeadEntity> {
  constructor(public service: LeadService) {
  }

  // @Post()
  // create(@Body() createLeadDto: CreateLeadDto) {
  //   return this.leadService.create(createLeadDto);
  // }
  //
  // @Get()
  // findAll() {
  //   return this.leadService.findAll();
  // }
  //
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.leadService.findOne(+id);
  // }
  //
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateLeadDto: UpdateLeadDto) {
  //   return this.leadService.update(+id, updateLeadDto);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.leadService.remove(+id);
  // }
}
