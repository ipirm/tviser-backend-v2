import { BaseEntity } from "../../database/entities/base.entity";
import { Column, Entity } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

@Entity("customer")
export class CustomerEntity extends BaseEntity {

  @ApiProperty({ example: "Title", description: "Title", required: true })
  @IsString()
  @IsOptional()
  @Column({ type: "varchar", length: 500, nullable: true })
  title: string;
  

}
