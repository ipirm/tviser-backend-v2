import { Controller, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { ApiBearerAuth, ApiSecurity, ApiTags } from "@nestjs/swagger";
import { Crud, CrudController } from "@nestjsx/crud";
import { User } from "./entities/user.entity";
import { UserDto } from "./dto/user.dto";
import { UserManyDto } from "./dto/user-many.dto";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";


@ApiBearerAuth()
@ApiSecurity("bearer")
@UseGuards(JwtAuthGuard)
@ApiTags("User")
@Crud({
  model: {
    type: User
  },
  serialize: {
    getMany: UserManyDto,
    get: UserDto
  }
})
@Controller("api/user")
export class UserController implements CrudController<User> {
  constructor(public service: UserService) {
  }

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.service.create(createUserDto);
  // }

  // @Get()
  // findAll() {
  //   return this.userService.findAll();
  // }
  //
  // @Get(":id")
  // findOne(@Param("id") id: string) {
  //   return this.userService.findOne(+id);
  // }
  //
  // @Patch(":id")
  // update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(+id, updateUserDto);
  // }
  //
  // @Delete(":id")
  // remove(@Param("id") id: string) {
  //   return this.userService.remove(+id);
  // }
}
