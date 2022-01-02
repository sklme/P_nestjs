import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { SubDomainRoutingController } from './sub-domain-routing/sub-domain-routing.controller';
import { DogsController } from './dogs/dogs.controller';
import { DogsService } from './dogs/dogs.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    CatsController,
    SubDomainRoutingController,
    DogsController,
  ],
  providers: [AppService, DogsService],
})
export class AppModule {}
