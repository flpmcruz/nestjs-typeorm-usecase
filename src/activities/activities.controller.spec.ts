import { Test, TestingModule } from '@nestjs/testing';
import { ActivitiesController } from './activities.controller';
import { ActivitiesService } from './activities.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Activity } from './entities/activity.entity';

describe('ActivitiesController', () => {
  let controller: ActivitiesController;

  const mockRepository = {
    create: jest.fn(),
    find: jest.fn(),
    findOneBy: jest.fn(),
    save: jest.fn(),
    preload: jest.fn(),
    remove: jest.fn(),
  };

  const data = [
    {
      rec_id: 1234,
      title: 'Ejemplo de título1',
      manufacturer_id: 456,
      sales_team_id: 789,
      sales_team_name: 'Equipo de ventas1',
      user_id: 987,
      user_name: 'Usuario1',
      created_at: '2023-10-26T12:34:56Z',
      updated_at: '2023-10-26T12:34:56Z',
    },
    {
      rec_id: 5678,
      title: 'Ejemplo de título2',
      manufacturer_id: 123,
      sales_team_id: 456,
      sales_team_name: 'Equipo de ventas2',
      user_id: 789,
      user_name: 'Usuario2',
      created_at: '2023-10-26T12:35:56Z',
      updated_at: '2023-10-26T12:35:56Z',
    },
    {
      rec_id: 9012,
      title: 'Ejemplo de título3',
      manufacturer_id: 789,
      sales_team_id: 123,
      sales_team_name: 'Equipo de ventas3',
      user_id: 456,
      user_name: 'Usuario3',
      created_at: '2023-10-26T12:36:56Z',
      updated_at: '2023-10-26T12:36:56Z',
    },
    {
      rec_id: 3456,
      title: 'Ejemplo de título4',
      manufacturer_id: 234,
      sales_team_id: 567,
      sales_team_name: 'Equipo de ventas4',
      user_id: 890,
      user_name: 'Usuario4',
      created_at: '2023-10-26T12:37:56Z',
      updated_at: '2023-10-26T12:37:56Z',
    },
    {
      rec_id: 7890,
      title: 'Ejemplo de título5',
      manufacturer_id: 345,
      sales_team_id: 678,
      sales_team_name: 'Equipo de ventas5',
      user_id: 123,
      user_name: 'Usuario5',
      created_at: '2023-10-26T12:38:56Z',
      updated_at: '2023-10-26T12:38:56Z',
    },
    {
      rec_id: 2345,
      title: 'Ejemplo de título6',
      manufacturer_id: 567,
      sales_team_id: 890,
      sales_team_name: 'Equipo de ventas6',
      user_id: 234,
      user_name: 'Usuario6',
      created_at: '2023-10-26T12:39:56Z',
      updated_at: '2023-10-26T12:39:56Z',
    },
    {
      rec_id: 6789,
      title: 'Ejemplo de título7',
      manufacturer_id: 890,
      sales_team_id: 234,
      sales_team_name: 'Equipo de ventas7',
      user_id: 345,
      user_name: 'Usuario7',
      created_at: '2023-10-26T12:40:56Z',
      updated_at: '2023-10-26T12:40:56Z',
    },
    {
      rec_id: 3457,
      title: 'Ejemplo de título8',
      manufacturer_id: 123,
      sales_team_id: 456,
      sales_team_name: 'Equipo de ventas8',
      user_id: 567,
      user_name: 'Usuario8',
      created_at: '2023-10-26T12:41:56Z',
      updated_at: '2023-10-26T12:41:56Z',
    },
    {
      rec_id: 7891,
      title: 'Ejemplo de título9',
      manufacturer_id: 234,
      sales_team_id: 678,
      sales_team_name: 'Equipo de ventas9',
      user_id: 890,
      user_name: 'Usuario9',
      created_at: '2023-10-26T12:42:56Z',
      updated_at: '2023-10-26T12:42:56Z',
    },
    {
      rec_id: 2346,
      title: 'Ejemplo de título10',
      manufacturer_id: 345,
      sales_team_id: 789,
      sales_team_name: 'Equipo de ventas10',
      user_id: 123,
      user_name: 'Usuario10',
      created_at: '2023-10-26T12:43:56Z',
      updated_at: '2023-10-26T12:43:56Z',
    },
  ];

  const activity = {
    id: 123,
    rec_id: 1234,
    title: 'Ejemplo de título1',
    manufacturer_id: 456,
    sales_team_id: 789,
    sales_team_name: 'Equipo de ventas1',
    user_id: 987,
    user_name: 'Usuario1',
    created_at: new Date('2023-10-26T12:34:56Z'),
    updated_at: new Date('2023-10-26T12:34:56Z'),
    acjd_comment: 'Ejemplo de comentario1',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ActivitiesController,
        ActivitiesService,
        {
          provide: getRepositoryToken(Activity),
          useValue: mockRepository,
        },
      ],
    }).compile();
    controller = module.get<ActivitiesController>(ActivitiesController);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('findAll', () => {
    it('should return an array', async () => {
      mockRepository.find.mockResolvedValue(data);
      expect(await controller.findAll({})).toBe(data);
    });
  });

  describe('findOne', () => {
    it('should return an activity', async () => {
      mockRepository.findOneBy.mockResolvedValue(activity);
      expect(await controller.findOne('1')).toBe(activity);
    });
  });

  describe('create', () => {
    it('should create an activity', async () => {
      mockRepository.create.mockResolvedValue(activity);
      expect(await controller.create(activity)).toBe(activity);
    });
  });

  describe('update', () => {
    it('should update an activity', async () => {
      mockRepository.preload.mockResolvedValue(activity);
      mockRepository.save.mockResolvedValue(activity);
      expect(await controller.update('1', activity)).toBe(activity);
    });
  });

  describe('remove', () => {
    it('should remove an activity', async () => {
      const id = 1;
      mockRepository.remove.mockResolvedValue(`Activity ${id} removed`);
      expect(await controller.remove(`${id}`)).toBe(`Activity ${id} removed`);
    });
  });
});

// describe('findAll', () => {
//   it('should return an array', async () => {
//     jest
//       .spyOn(service, 'findAll')
//       .mockImplementation(() => Promise.resolve(resultFind));

//     expect(await controller.findAll({})).toBe(resultFind);
//   });
// });
