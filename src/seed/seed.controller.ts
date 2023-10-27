import { Controller, Get, Delete } from '@nestjs/common';
import { SeedService } from './seed.service';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  runSeed() {
    return this.seedService.populateDB();
  }
  @Delete()
  deleteSeed() {
    return this.seedService.deleteDB();
  }
}
