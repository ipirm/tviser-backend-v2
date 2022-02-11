import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { UserService } from "../user/user.service";
import { LoginDto } from "./dto/login-dto";
import * as bcrypt from "bcrypt";
import { Role } from "../enums/roles.enum";
import { User } from "../user/entities/user.entity";

@Injectable()
export class AuthService {
    constructor(
      private jwtService: JwtService,
      private userService: UserService,
      @InjectRepository(User) private readonly user: Repository<User>
    ) {
    }


    async adminLogin(loginDto: LoginDto): Promise<any> {
        const user = await this.user.createQueryBuilder("user")
          .where("user.email = :email", { email: loginDto.email })
          .addSelect(["user.password"])
          .getOne();

        if (!user)
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: "Извините, пользователь с такой комбинацией логина и пароля не найден"
            }, HttpStatus.FORBIDDEN);


        const valid = await bcrypt.compare(loginDto.password, user.password);

        if (!valid)
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: "Извините, пользователь с такой комбинацией логина и пароля не найден"
            }, HttpStatus.FORBIDDEN);


        if (user.role !== Role.Admin)
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: "Вы не являетесь админом"
            }, HttpStatus.FORBIDDEN);

        return {
            access_token: this.jwtService.sign({ ...user })
        };
    }

    async login(loginDto: LoginDto): Promise<any> {
        let valid: Boolean;
        const user = await this.user.createQueryBuilder("user")
          .where("user.email = :email", { email: loginDto.email })
          .addSelect(["user.password"])
          .getOne();

        if (!user)
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: "Извините, пользователь с такой комбинацией логина и пароля не найден"
            }, HttpStatus.FORBIDDEN);

        if (await bcrypt.compare(loginDto.password, user.password))
            valid = true;


        if (!valid)
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: "Неверный пароль"
            }, HttpStatus.FORBIDDEN);


        return {
            access_token: this.jwtService.sign({ ...user })
        };
    }


    async profile(user: any): Promise<any> {
        return await this.user
          .createQueryBuilder("user")
          .select(["user.id", "user.name", "user.email", "user.role"])
          .where("user.id = :id", { id: user.id })
          .getOne();
    }

}
