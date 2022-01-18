import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import cookieParser from 'cookie-parser';
// import { HttpExceptionFilter } from './exceptions/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // global exception filter
  // app.useGlobalFilters(new HttpExceptionFilter());
  // app.enableShutdownHooks();
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.use(cookieParser());
  await app.listen(3001);
}
void bootstrap();
