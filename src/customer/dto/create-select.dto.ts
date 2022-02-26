import { IsOptional, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";


export class CreateSelectDto {

  @ApiProperty({ example: "Payment Method", description: "title", required: true })
  @IsString()
  @IsOptional()
  title: string;


}
