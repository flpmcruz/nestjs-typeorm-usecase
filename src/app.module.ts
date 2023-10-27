import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActivitiesModule } from './activities/activities.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
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
      synchronize: true, //set false in production
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
