import { Controller, Param, Post, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { AppService } from "./app.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiOperation, ApiParam, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "./auth/guards/jwt-auth.guard";


@ApiTags("Default")
@Controller("api")
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiParam({
    name: "alt",
    required: true,
    type: String,
    example: "Картинка Чувака",
    description: "Alt Файла"
  })
  @ApiOperation({ summary: "Загрузка файлов на сервер" })
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        file: {
          type: "string",
          format: "binary"
        }
      }
    }
  })
  @ApiConsumes("multipart/form-data")
  @Post("upload/:alt")
  @UseInterceptors(FileInterceptor("file"))
  uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Param("alt") alt: string
  ) {
    return this.appService.uploadFile(file, alt);
  }
}
