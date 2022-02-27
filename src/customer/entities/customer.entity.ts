import { BaseEntity } from "../../database/entities/base.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsOptional, IsString, Max, Min } from "class-validator";
import { FormOptionEntity } from "./form-option.entity";
import { ApiModelProperty } from "@nestjs/swagger/dist/decorators/api-model-property.decorator";
import { BuildingTypeEnum } from "../enums/buildingType.enum";
import { RoomCountEnum } from "../enums/roomCount.enum";
import { RepairTypeEnum } from "../enums/repairType.enum";

@Entity("customer")
export class CustomerEntity extends BaseEntity {

  @ApiProperty({ example: "Title", description: "Title", required: true })
  @IsString()
  @IsOptional()
  @Column({ type: "varchar", length: 500, nullable: true })
  title: string;

  @ApiProperty({ example: 1, description: "Select ( Odenis usulu ) Id", required: false })
  @IsOptional()
  @ManyToOne(() => FormOptionEntity, user => user.customerEntities)
  payment_method: FormOptionEntity;

  @ApiProperty({ example: 1, description: "Select ( Layihe ) Id", required: false })
  @IsOptional()
  @ManyToOne(() => FormOptionEntity, user => user.projectCustomerEntities)
  project: FormOptionEntity;

  @IsEnum(BuildingTypeEnum)
  @ApiModelProperty({
    enum: Object.keys(BuildingTypeEnum),
    default: BuildingTypeEnum.All,
    description: "Bina Tipi"
  })
  @Column("enum", { enum: BuildingTypeEnum, default: BuildingTypeEnum.All })
  @IsOptional()
  building_type: BuildingTypeEnum;

  @ApiProperty({ example: 1, description: "Select ( Mərtəbə seçimi ) from_floor (min 1,max 9)", required: false })
  @Min(1)
  @Max(9)
  @Column("integer", { default: 1 })
  from_floor: number;

  @ApiProperty({ example: 1, description: "Select ( Mərtəbə seçimi ) to_floor (min 1,max 9)", required: false })
  @Min(1)
  @Max(9)
  @Column("integer", { default: 1 })
  to_floor: number;

  @IsEnum(RoomCountEnum)
  @ApiModelProperty({
    enum: Object.keys(RoomCountEnum),
    default: RoomCountEnum.All,
    description: "Otaq sayı"
  })
  @Column("enum", { enum: RoomCountEnum, default: RoomCountEnum.All })
  @IsOptional()
  room: RoomCountEnum;

  @IsEnum(RepairTypeEnum)
  @ApiModelProperty({
    enum: Object.keys(RepairTypeEnum),
    default: RepairTypeEnum.All,
    description: "Təmir növü"
  })
  @Column("enum", { enum: RepairTypeEnum, default: RepairTypeEnum.All })
  @IsOptional()
  repair: RepairTypeEnum;

}
