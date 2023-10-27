import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { ActivitiesModule } from '../activities/activities.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [ActivitiesModule],
})
export class SeedModule {}
