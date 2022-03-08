import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService extends TypeOrmCrudService<UserEntity> {
  constructor(
    @InjectRepository(UserEntity) private readonly user: Repository<UserEntity>,
  ) {
    super(user);
  }

  // create(createUserDto: CreateUserDto) {
  //   console.log('fafa')
  //   return this.user.save(this.user.create(createUserDto));
  // }

  //
  // findAll() {
  //   return `This action returns all user`;
  // }
  //
  // // findOne(id: number) {
  // //   return `This action returns a #${id} user`;
  // // }
  //
  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }
  //
  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
