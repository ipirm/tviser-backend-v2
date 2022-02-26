import { Injectable } from "@nestjs/common";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CustomerEntity } from "./entities/customer.entity";
import { Repository } from "typeorm";
import { CreateSelectDto } from "./dto/create-select.dto";
import { FormSelectEntity } from "./entities/form-select.entity";
import { FormOptionEntity } from "./entities/form-option.entity";
import { CreateOptionDto } from "./dto/create-option.dto";

@Injectable()
export class CustomerService extends TypeOrmCrudService<CustomerEntity> {
  constructor(
    @InjectRepository(CustomerEntity) private readonly customer: Repository<CustomerEntity>,
    @InjectRepository(FormSelectEntity) private readonly formSelect: Repository<FormSelectEntity>,
    @InjectRepository(FormOptionEntity) private readonly formOption: Repository<FormOptionEntity>
  ) {
    super(customer);
  }

  async saveSelect(createSelectDto: CreateSelectDto): Promise<CreateSelectDto> {
    return await this.formSelect.save(this.formSelect.create(createSelectDto));
  }

  async saveOption(createOptionDto: CreateOptionDto): Promise<any> {
    return await this.formOption.save(this.formOption.create(createOptionDto));
  }

  async findAllSelect(): Promise<any> {
    return await this.formSelect.createQueryBuilder("f").leftJoinAndSelect("f.formOptionEntities", "options").getMany();
  }

  async findAllOptions(): Promise<any> {
    return await this.formOption.createQueryBuilder("f").getMany();
  }

  async removeSelect(id: number): Promise<any> {
    return await this.formSelect.delete(id);
  }

  async removeOption(id: number): Promise<any> {
    return await this.formOption.delete(id);
  }

  async getOneSelect(id: number): Promise<any> {
    return await this.formSelect.findOne(id);
  }

  async getOneOption(id: number): Promise<any> {
    const data = this.formOption
      .createQueryBuilder('formOption')
      .where('formOption.id = :id', { id })
      .leftJoinAndSelect('formOption.formSelectEntity', 'formSelectEntity');
    return await data.getOne();
  }

  async updateSelect(id, createSelectDto: CreateSelectDto): Promise<any> {
    return await this.formSelect.update(id, createSelectDto);
  }

  async updateOption(id, createOptionDto: CreateOptionDto): Promise<any> {
    return await this.formOption.update(id, createOptionDto);
  }

}
