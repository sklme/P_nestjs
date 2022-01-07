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
import { LoggerMiddlewareFunc } from './middleware/log-func.middleware';
import { ExceptionModule } from './exceptions/exceptions.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './exceptions/http-exception.filter';
import { PipeModule } from './pipe/pipe.module';
import { ConfigModule } from '@nestjs/config';
import { ModuleConfigTestModule } from './module-config-test/module-config-test.module';
import databaseConfigGroup from './config/databaseConfigGroup';

@Module({
  imports: [
    DogsModule,
    CatsModule,
    ExceptionModule,
    PipeModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfigGroup],
    }),
    ModuleConfigTestModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    LogFunc,
    // {
    //   provide: APP_FILTER,
    //   useClass: HttpExceptionFilter,
    // },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddlewareClass, LoggerMiddlewareFunc)
      .exclude({ path: 'dogs/notApplyMiddleware', method: RequestMethod.GET })
      .forRoutes(
        // 下面每一个匹配都会执行一个middleware
        // routeinfo
        {
          path: 'dogs*',
          method: RequestMethod.GET,
        },
        // wildcard
        'dog*',
        // Controller
        DogsController,
      );
  }
}
