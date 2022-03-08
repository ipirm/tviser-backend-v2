import { Module } from '@nestjs/common';
import { SettingService } from './setting.service';
import { SettingController } from './setting.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SettingEntity } from './entities/setting.entity';

@Module({
  controllers: [SettingController],
  imports: [TypeOrmModule.forFeature([SettingEntity])],
  providers: [SettingService],
})
export class SettingModule {}
