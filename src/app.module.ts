import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsModule } from './dogs/dogs.module';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddlewareClass } from './middleware/log-class.middleware';
import { LogFunc } from './middleware/log-provider';
import { DogsController } from './dogs/dogs.controller';

@Module({
  imports: [DogsModule, CatsModule],
  controllers: [AppController],
  providers: [AppService, LogFunc],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddlewareClass).forRoutes(
      // routeinfo
      {
        path: 'dogs',
        method: RequestMethod.GET,
      },
      // wildcard
      'dog*',
      // Controller
      DogsController,
    );
  }
}
