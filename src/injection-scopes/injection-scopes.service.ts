import { Injectable, Scope } from '@nestjs/common';

@Injectable({
  scope: Scope.REQUEST,
})
export class InjectionScopesService {
  printSelf() {
    console.log('I am a Request Scope Provider');
  }
}
