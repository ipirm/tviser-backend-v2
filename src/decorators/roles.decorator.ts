import { SetMetadata } from "@nestjs/common";
import { Role } from "../enums/roles.enum";


export const ROLES_KEY = Role;
export const Roles = (...roles: Role[]) => {
 console.log(roles)
 return  SetMetadata(ROLES_KEY, roles);
}
