import { Injectable } from "@nestjs/common";
import { v4 as uuid } from "uuid";

const EasyYandexS3 = require("easy-yandex-s3");

@Injectable()
export class AwsService {

  async uploadFile(file: Express.Multer.File, alt: string): Promise<any> {
    const altUnicode = decodeURI(alt).toLowerCase();
    const s3 = new EasyYandexS3({
      auth: {
        accessKeyId: process.env.YANDEX_ACCESS_KEY_ID,
        secretAccessKey: process.env.YANDEX_SECRET_ACCESS_KEY
      },
      Bucket: process.env.YANDEX_BUCKET,
      debug: false
    });

    const data = await s3.Upload({
      buffer: file.buffer,
      name: `${uuid()}/${file.originalname}`,
      save_name: true
    }, `/`);

    return {
      alt: altUnicode,
      url: data.Location
    };
  }
}
