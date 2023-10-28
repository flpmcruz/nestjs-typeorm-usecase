import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ActivitiesService } from './activities.service';
import { ActivitiesController } from './activities.controller';
import { Activity } from './entities/activity.entity';

@Module({
  controllers: [ActivitiesController],
  providers: [ActivitiesService],
  imports: [ConfigModule, TypeOrmModule.forFeature([Activity])],
  exports: [TypeOrmModule],
})
export class ActivitiesModule {}
