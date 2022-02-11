import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AwsModule } from "./aws/aws.module";
import { ConfigModule } from "@nestjs/config";
import { AwsService } from "./aws/aws.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "./user/user.module";

import { CrudConfigService } from "@nestjsx/crud";
import { AuthModule } from "./auth/auth.module";

CrudConfigService.load({
  query: {
    limit: 25,
    cache: 2000
  },
  routes: {
    only: ["getOneBase", "updateOneBase", "getManyBase", "createOneBase", "deleteOneBase"]
  }
});

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: "postgres",
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT) || 5432,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [__dirname + "/**/*.entity{.ts,.js}"],
        synchronize: true,
        logging: false
      })
    }),
    AwsModule,
    UserModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService, AwsService]
})
export class AppModule {
}
