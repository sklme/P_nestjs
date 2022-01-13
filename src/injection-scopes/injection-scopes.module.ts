import { Module } from '@nestjs/common';
import { InjectionScopesController } from './injection-scopes.controller';
import { InjectionScopesService } from './injection-scopes.service';

@Module({
  controllers: [InjectionScopesController],
  providers: [InjectionScopesService],
})
export class InjectionScopesModule {}
