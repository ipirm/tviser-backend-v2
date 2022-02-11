import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { jwtConstants } from "./jwt/constants";
import { JwtStrategy } from "./jwt/jwt.strategy";
import { UserService } from "../user/user.service";
import { RolesGuard } from "./guards/roles.guard";
import { AwsModule } from "../aws/aws.module";
import { User } from "../user/entities/user.entity";

@Module({
    imports: [
        AwsModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: "286400s" }
        }),
        TypeOrmModule.forFeature([User])],
    providers: [AuthService, JwtStrategy, UserService, RolesGuard],
    controllers: [AuthController]
})
export class AuthModule {
}
