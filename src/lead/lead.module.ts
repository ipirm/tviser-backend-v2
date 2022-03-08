import { Module } from '@nestjs/common';
import { LeadService } from './lead.service';
import { LeadController } from './lead.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeadEntity } from './entities/lead.entity';

@Module({
  controllers: [LeadController],
  imports: [TypeOrmModule.forFeature([LeadEntity])],
  providers: [LeadService],
})
export class LeadModule {}
