import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api/v1');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const logger = new Logger('main');
  await app.listen(process.env.SERVER_PORT ?? 3000, () => {
    logger.log(`Server running on port ${process.env.SERVER_PORT ?? 3000}`);
  });
}
bootstrap();
