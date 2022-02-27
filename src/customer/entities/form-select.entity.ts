import { BaseEntity } from "../../database/entities/base.entity";
import { Column, Entity, OneToMany } from "typeorm";
import { FormOptionEntity } from "./form-option.entity";
import { CustomerEntity } from "./customer.entity";

@Entity("forms")
export class FormSelectEntity extends BaseEntity {

  @Column({ type: "varchar", length: 500, nullable: true })
  title: string;

  @OneToMany(() => FormOptionEntity, photo => photo.formSelectEntity)
  formOptionEntities: FormOptionEntity[];

}
