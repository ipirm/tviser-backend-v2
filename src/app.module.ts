import { CrudConfigService } from "@nestjsx/crud";
CrudConfigService.load({
  query: {
    limit: 25,
    cache: 2000
  },
  routes: {
    only: ["getOneBase", "updateOneBase", "getManyBase", "createOneBase", "deleteOneBase"]
  }
});
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { AwsService } from "./aws/aws.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "./user/user.module";
import { AuthModule } from "./auth/auth.module";
import { TagModule } from "./tag/tag.module";
import { PostModule } from "./post/post.module";
import { HeadingModule } from "./heading/heading.module";
import { AwsModule } from "./aws/aws.module";
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
    AuthModule,
    TagModule,
    PostModule,
    HeadingModule
  ],
  controllers: [AppController],
  providers: [AppService, AwsService]
})
export class AppModule {
}
