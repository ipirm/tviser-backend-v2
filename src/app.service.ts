import { Injectable } from "@nestjs/common";
import { AwsService } from "./aws/aws.service";

@Injectable()
export class AppService {
  constructor(private readonly aws: AwsService) {
  }

  async uploadFile(file: Express.Multer.File, alt: string): Promise<any> {
    return await this.aws.uploadFile(file, alt);
  }


}
