import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LeadEntity } from './entities/lead.entity';

@Injectable()
export class LeadService extends TypeOrmCrudService<LeadEntity> {
  constructor(
    @InjectRepository(LeadEntity) private readonly lead: Repository<LeadEntity>,
  ) {
    super(lead);
  }

  // @Cron('* * * * * *', {
  //   name: 'notifications',
  //   timeZone: 'Europe/Paris',
  // })
  // triggerNotifications() {
  //
  //   console.log('faf')
  // }
}
