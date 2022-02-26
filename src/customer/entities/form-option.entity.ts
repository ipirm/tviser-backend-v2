import { BaseEntity } from "../../database/entities/base.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { FormSelectEntity } from "./form-select.entity";

@Entity("forms_options")
export class FormOptionEntity extends BaseEntity {

  @ApiProperty({ example: "Ödəniş üsulu", description: "title", required: true })
  @IsString()
  @IsOptional()
  @Column({ type: "varchar", length: 500, nullable: true })
  title: string;

  @ApiProperty({ example: "a[href^=\"https\"]", description: "selector", required: true })
  @IsString()
  @IsOptional()
  @Column({ type: "varchar", length: 500, nullable: true })
  selector: string;

  @ManyToOne(() => FormSelectEntity, f => f.formOptionEntities)

  formSelectEntity: FormSelectEntity;

}
