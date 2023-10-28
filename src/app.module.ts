import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ActivitiesModule } from './activities/activities.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { EnvConfiguration } from './config/envs.config';

const imports = [
  ConfigModule.forRoot({
    load: [EnvConfiguration],
  }),
  ActivitiesModule,
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: EnvConfiguration().postgres_host,
    port: EnvConfiguration().postgres_port,
    database: EnvConfiguration().postgres_db,
    username: EnvConfiguration().postgres_user,
    password: EnvConfiguration().postgres_pass,
    autoLoadEntities: true,
    synchronize: process.env.NODE_ENV !== 'production',
  }),
  CommonModule,
];

// Don't load the seed module in production
process.env.NODE_ENV !== 'production' && imports.push(SeedModule);

@Module({ imports })
export class AppModule {}
