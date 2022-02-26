import { Module } from "@nestjs/common";
import { CustomerService } from "./customer.service";
import { CustomerController } from "./customer.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomerEntity } from "./entities/customer.entity";
import { FormSelectEntity } from "./entities/form-select.entity";
import { FormOptionEntity } from "./entities/form-option.entity";

@Module({
  controllers: [CustomerController],
  imports: [
    TypeOrmModule.forFeature([CustomerEntity, FormSelectEntity, FormOptionEntity])
  ],
  providers: [CustomerService]
})
export class CustomerModule {
}
