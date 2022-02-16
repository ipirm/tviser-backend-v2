import { Controller } from "@nestjs/common";
import { SettingService } from "./setting.service";
import { ApiTags } from "@nestjs/swagger";
import { Crud, CrudController } from "@nestjsx/crud";
import { SettingEntity } from "./entities/setting.entity";


@ApiTags("Setting")
@Crud({
  model: {
    type: SettingEntity
  }
})
@Controller("api/setting")
export class SettingController implements CrudController<SettingEntity> {
  constructor(public service: SettingService) {
  }

  // @Post()
  // create(@Body() createSettingDto: CreateSettingDto) {
  //   return this.settingService.create(createSettingDto);
  // }
  //
  // @Get()
  // findAll() {
  //   return this.settingService.findAll();
  // }
  //
  // @Get(":id")
  // findOne(@Param("id") id: string) {
  //   return this.settingService.findOne(+id);
  // }
  //
  // @Patch(":id")
  // update(@Param("id") id: string, @Body() updateSettingDto: UpdateSettingDto) {
  //   return this.settingService.update(+id, updateSettingDto);
  // }
  //
  // @Delete(":id")
  // remove(@Param("id") id: string) {
  //   return this.settingService.remove(+id);
  // }
}
