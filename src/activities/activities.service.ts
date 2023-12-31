import {
  Injectable,
  InternalServerErrorException,
  Logger,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Repository } from 'typeorm';

import { Activity } from './entities/activity.entity';

import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Injectable()
export class ActivitiesService {
  private readonly logger = new Logger('ActivitiesService');
  private defaultLimit: number;

  constructor(
    @InjectRepository(Activity)
    private readonly activityRepository: Repository<Activity>,
    private readonly configService: ConfigService,
  ) {
    this.defaultLimit = this.configService.get<number>('default_limit');
  }

  async create(createActivityDto: CreateActivityDto) {
    try {
      const activity = this.activityRepository.create(createActivityDto);
      await this.activityRepository.save(activity);
      return activity;
    } catch (error) {
      this.handleDBException(error);
    }
  }

  async createBulk(createActivityDto: CreateActivityDto[]) {
    try {
      const activity = this.activityRepository.create(createActivityDto);
      await this.activityRepository.save(activity);
      return activity;
    } catch (error) {
      this.handleDBException(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = this.defaultLimit, offset = 0 } = paginationDto;
    return await this.activityRepository.find({
      skip: offset,
      take: limit,
    });
  }

  async findOne(id: number) {
    const activity = await this.activityRepository.findOneBy({ id });
    if (!activity) throw new NotFoundException(`Activity ${id} not found`);
    return activity;
  }

  async update(id: number, updateActivityDto: UpdateActivityDto) {
    const activity = await this.activityRepository.preload({
      id,
      ...updateActivityDto,
    });

    if (!activity) throw new NotFoundException(`Activity ${id} not found`);

    try {
      await this.activityRepository.save(activity);
      return activity;
    } catch (error) {
      this.handleDBException(error);
    }
  }

  async remove(id: number) {
    const activity = await this.findOne(id);
    await this.activityRepository.remove(activity);
    return `Activity ${id} removed`;
  }

  private handleDBException(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    this.logger.error(error);
    // TODO: log errors to a file or external service
    throw new InternalServerErrorException('Internal server error');
  }
}
