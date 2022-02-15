import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AwsModule } from "../aws/aws.module";
import { UserEntity } from "./entities/user.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    AwsModule
  ],
  providers: [UserService],
  exports: [UserService],
  controllers: [UserController]
})
export class UserModule {
}
