import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ActivitiesModule } from './activities/activities.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';

const imports = [
  ActivitiesModule,
  ConfigModule.forRoot(),
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: +process.env.POSTGRES_POR,
    database: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASS,
    autoLoadEntities: true,
    synchronize: process.env.NODE_ENV !== 'production',
  }),
  CommonModule,
];

// Don't load the seed module in production
process.env.NODE_ENV !== 'production' && imports.push(SeedModule);

@Module({ imports })
export class AppModule {}
