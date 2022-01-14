import { Module } from '@nestjs/common';
import { ModuleRefController } from './module-ref.controller';
import { ModuleRefService } from './module-ref.service';
import { AnotherScopeProviderForModuleRefTest } from './providers/another-scope-provider.provider';
import { RequstScopeProviderForModuleRefTest } from './providers/request-scope.provider';

@Module({
  controllers: [ModuleRefController],
  providers: [
    ModuleRefService,
    RequstScopeProviderForModuleRefTest,
    AnotherScopeProviderForModuleRefTest,
  ],
})
export class ModuleRefModule {}
