import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
// import { HttpExceptionFilter } from './exceptions/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // global exception filter
  // app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3001);
}
void bootstrap();
