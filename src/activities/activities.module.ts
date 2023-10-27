import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivitiesService } from './activities.service';
import { ActivitiesController } from './activities.controller';
import { Activity } from './entities/activity.entity';

@Module({
  controllers: [ActivitiesController],
  providers: [ActivitiesService],
  imports: [TypeOrmModule.forFeature([Activity])],
})
export class ActivitiesModule {}
