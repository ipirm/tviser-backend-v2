import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { Crud, CrudController } from "@nestjsx/crud";
import { CustomerEntity } from "./entities/customer.entity";
import { CustomerService } from "./customer.service";
import { CreateSelectDto } from "./dto/create-select.dto";
import { CreateOptionDto } from "./dto/create-option.dto";


@ApiTags("Customer")
@Crud({
  model: {
    type: CustomerEntity
  },
  query: {
    join: {
      userEntity: {
        eager: true
      }
    }
  }
})
@Controller("api/customer")
export class CustomerController implements CrudController<CustomerEntity> {
  constructor(public service: CustomerService) {
  }

  @ApiOperation({ summary: "Create Select" })
  @Post("select")
  createSelect(@Body() createSelectDto: CreateSelectDto): Promise<CreateSelectDto> {
    return this.service.saveSelect(createSelectDto);
  }

  @ApiOperation({ summary: "Create Option" })
  @Post("option")
  createOption(@Body() createOptionDto: CreateOptionDto): Promise<any> {
    return this.service.saveOption(createOptionDto);
  }

  @ApiOperation({ summary: "Find All Select" })
  @Get("select")
  findSelect(): Promise<any> {
    return this.service.findAllSelect();
  }

  @ApiOperation({ summary: "Find All Options" })
  @Get("option")
  findOptions(): Promise<any> {
    return this.service.findAllOptions();
  }

  @ApiOperation({ summary: "Delete Select" })
  @Delete("select/:id")
  removeSelect(@Param("id") id: number) {
    return this.service.removeSelect(id);
  }

  @ApiOperation({ summary: "Delete Option" })
  @Delete("option/:id")
  removeOption(@Param("id") id: number) {
    return this.service.removeOption(id);
  }

  @ApiOperation({ summary: "Find One Select" })
  @Get("select")
  getOneSelect(@Param("id") id: number): Promise<any> {
    return this.service.getOneSelect(id);
  }

  @ApiOperation({ summary: "Find One Option" })
  @Get("option")
  getOneOption(@Param("id") id: number): Promise<any> {
    return this.service.getOneOption(id);
  }

  @ApiOperation({ summary: "Update One Select" })
  @Patch("select/:id")
  updateSelect(@Param("id") id: string, @Body() createSelectDto: CreateSelectDto) {
    return this.service.updateSelect(id, createSelectDto);
  }

  @ApiOperation({ summary: "Update One Option" })
  @Patch("option/:id")
  updateOption(@Param("id") id: string, @Body() createOptionDto: CreateOptionDto) {
    return this.service.updateSelect(id, createOptionDto);
  }


}
