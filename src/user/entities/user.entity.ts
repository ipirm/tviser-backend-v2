import { BeforeInsert, BeforeUpdate, Column, Entity } from "typeorm";
import * as bcrypt from "bcrypt";
import { Role } from "../../enums/roles.enum";
import { BaseEntity } from "../../database/entities/base.entity";
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEnum, IsOptional, IsString } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger/dist/decorators/api-model-property.decorator";

const { faker } = require("@faker-js/faker");

@Entity("user")

export class User extends BaseEntity {

  @ApiProperty({ example: faker.name.firstName(), description: "Имя", required: true })
  @IsString()
  @Column()
  name: string;

  @ApiProperty({ example: faker.internet.email(faker.name.firstName()), description: "Почта", required: true })
  @IsEmail()
  @Column({ unique: true })
  email: string;

  @ApiProperty({ example: "152", description: "Пароль", required: true })
  @IsString()
  @Column()
  password: string;


  @ApiProperty({
    type: "simple-json",
    example: {
      alt: "картинка чувака",
      url: "https://tviserbuckets.storage.yandexcloud.net/8722fb29-eab8-45c1-b1d9-50d6d3ebe470/79f4bc96707441%201.png"
    },
    description: "Аватар"
  })
  @IsOptional()
  @Column("simple-json", { nullable: true })
  avatar: { name: string, url: string };

  @IsEnum(Role)
  @ApiModelProperty({
    enum: Object.keys(Role),
    default: Role.User
  })
  @Column("enum", { enum: Role, default: Role.User })
  role: Role;

  @Column({ type: "integer", default: Math.floor(Math.random() * 10) })
  salt: number;

  @BeforeInsert()
  async generatePasswordHash(): Promise<void> {
    this.password = await bcrypt.hashSync(this.password, bcrypt.genSaltSync(this.salt));
  }

  @BeforeUpdate()
  async generatePasswordHashUpdate(): Promise<void> {
    if (this.password !== this.password)
      this.password = await bcrypt.hashSync(this.password, bcrypt.genSaltSync(this.salt));
  }
}
