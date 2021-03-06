import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
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
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ModuleConfigTestModule } from './module-config-test/module-config-test.module';
import { MyConfigModuleModule } from './my-config-module/my-config-module.module';
import { CustomProviderModule } from './custom-provider/custom-provider.module';
import { GuideModule } from './guard-test/guard.module';
import { InterceptorTestModule } from './interceptor-test/interceptor-test.module';
import { CustomDecoratorsModule } from './custom-decorators/custom-decorators.module';
import { InjectionScopesModule } from './injection-scopes/injection-scopes.module';
import { CircularDenModule } from './circular-den/circular-den.module';
import { ModuleRefModule } from './module-ref/module-ref.module';
import { LifeCycleModule } from './life-cycle/life-cycle.module';
import { TypeormModule } from './typeorm/typeorm.module';
import { MyCacheModule } from './cache/cache.module';
import { SerializationModule } from './serialization/serialization.module';
import { QueuesModule } from './queues/queues.module';
import { VersioningModule } from './versioning/versioning.module';
import { TaskScheduleModule } from './task-schedule/task-schedule.module';
import databaseConfigGroup from './config/databaseConfigGroup';
import githubConfigNamespace from './config/githubConfigNamespace';
import { BullModule } from '@nestjs/bull';
import { CookieModule } from './cookie/cookie.module';
import { EventsModule } from './events/events.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { HttpMoModule } from './http-mo/http-mo.module';

@Module({
  imports: [
    DogsModule,
    CatsModule,
    ExceptionModule,
    PipeModule,
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      load: [databaseConfigGroup, githubConfigNamespace],
    }),
    ModuleConfigTestModule,
    MyConfigModuleModule.register({
      folder: '.',
    }),
    CustomProviderModule,
    GuideModule,
    InterceptorTestModule,
    CustomDecoratorsModule,
    InjectionScopesModule,
    CircularDenModule,
    ModuleRefModule,
    LifeCycleModule,
    TypeormModule,
    MyCacheModule,
    SerializationModule,
    QueuesModule,
    VersioningModule,
    TaskScheduleModule,
    ScheduleModule.forRoot(),
    // BullModule.forRoot({
    //   redis: {
    //     host: 'localhost',
    //     port: 6379,
    //   },
    // }),
    BullModule.forRootAsync({
      imports: [ConfigModule],
      async useFactory(configService: ConfigService) {
        return new Promise((resolve) => {
          const redisHost: string = configService.get('REDIS_HOST');
          const redisPort: string = configService.get('REDIS_PORT');

          setTimeout(() => {
            resolve({
              redis: {
                host: redisHost,
                port: parseInt(redisPort, 10),
              },
            });
          }, 0);
        });
      },
      inject: [ConfigService],
    }),
    CookieModule,
    EventEmitterModule.forRoot({
      wildcard: true,
    }),
    EventsModule,
    HttpMoModule,
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
        // ???????????????????????????????????????middleware
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
