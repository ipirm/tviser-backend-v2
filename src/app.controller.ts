import { Controller, Delete, Param, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { AppService } from "./app.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiBody, ApiConsumes, ApiOperation, ApiParam, ApiTags } from "@nestjs/swagger";


@ApiTags("Default")
@Controller("api")
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  // @ApiBearerAuth()
  // @UseGuards(JwtAuthGuard)
  @ApiParam({
    name: "alt",
    required: true,
    type: String,
    example: "Картинка Чувака",
    description: "Alt Файла"
  })
  @ApiParam({
    name: "folder",
    required: true,
    type: String,
    example: "portfolio",
    description: "Папка сохранения файла"
  })
  @ApiOperation({ summary: "Загрузка файла на сервер" })
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
  @Post("upload/:alt/:folder")
  @UseInterceptors(FileInterceptor("file"))
  uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Param("alt") alt: string,
    @Param("folder") folder: string
  ) {
    return this.appService.uploadFile(file, alt, folder);
  }

  @ApiParam({
    name: "name",
    required: true,
    type: String,
    example: "Name",
    description: "Название файла"
  })
  @ApiParam({
    name: "folder",
    required: true,
    type: String,
    example: "portfolio",
    description: "Папка сохранения файла"
  })
  @ApiOperation({ summary: "Удаление файла с сервера" })
  @Delete("remove/:name/:folder")
  removeFile(
    @Param("name") name: string,
    @Param("folder") folder: string
  ) {
    return this.appService.removeFile(name, folder);
  }
}
