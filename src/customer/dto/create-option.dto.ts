import { IsOptional, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";


export class CreateOptionDto {

  @ApiProperty({ example: "Öz vəsaiti hesabına", description: "title", required: true })
  @IsString()
  @IsOptional()
  title: string;

  @ApiProperty({ example: "a[href^=\"https\"]", description: "selector", required: true })
  @IsString()
  @IsOptional()
  selector: string;

  @ApiProperty({ example: 1, description: "formSelectEntity", required: true })
  @IsOptional()
  formSelectEntity: any;
}
