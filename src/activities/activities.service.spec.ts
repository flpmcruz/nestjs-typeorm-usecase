import { Test, TestingModule } from '@nestjs/testing';
import { ActivitiesService } from './activities.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Activity } from './entities/activity.entity';

describe('ActivitiesService', () => {
  let service: ActivitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ActivitiesService,
        {
          provide: getRepositoryToken(Activity),
          useValue: {
            create: jest.fn().mockReturnValue({}), // Simula el método create de TypeORM
            find: jest.fn().mockResolvedValue([]), // Simula el método find de TypeORM
            findOne: jest.fn().mockResolvedValue({}), // Simula el método findOne de TypeORM
            save: jest.fn().mockReturnValue({}), // Simula el método save de TypeORM
            preload: jest.fn().mockResolvedValue({}), // Simula el método preload de TypeORM
            remove: jest.fn().mockReturnValue({}), // Simula el método remove de TypeORM
          },
        },
      ],
    }).compile();

    service = module.get<ActivitiesService>(ActivitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
