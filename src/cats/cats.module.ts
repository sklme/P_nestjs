import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { SubDomainRoutingModule } from './sub-domain-routing/sub-domain-routing.module';

@Module({
  imports: [SubDomainRoutingModule],
  controllers: [CatsController],
  exports: [SubDomainRoutingModule],
})
export class CatsModule {}
