import { MetaEntity } from "../../database/entities/meta.entity";
import { Entity } from "typeorm";

@Entity("setting")
export class SettingEntity extends MetaEntity {
}
