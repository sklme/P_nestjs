import { Module } from '@nestjs/common';
import { ModuleRefController } from './module-ref.controller';
import { ModuleRefService } from './module-ref.service';
import { RequstScopeProviderForModuleRefTest } from './providers/request-scope.provider';

@Module({
  controllers: [ModuleRefController],
  providers: [ModuleRefService, RequstScopeProviderForModuleRefTest],
})
export class ModuleRefModule {}
