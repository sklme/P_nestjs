import { Module, Scope } from '@nestjs/common';
import {
  DefaultScopeController,
  InjectionScopesController,
} from './injection-scopes.controller';
import { InjectionScopesService } from './injection-scopes.service';

@Module({
  controllers: [InjectionScopesController, DefaultScopeController],
  providers: [
    InjectionScopesService,
    {
      provide: 'custom-provider-with-scope',
      useValue: 'I am Transient Scope Custom provider',
      scope: Scope.TRANSIENT,
    },
  ],
})
export class InjectionScopesModule {}
