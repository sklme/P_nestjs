import { Injectable, Scope } from '@nestjs/common';

@Injectable({
  scope: Scope.REQUEST,
})
export class RequstScopeProviderForModuleRefTest {
  test() {
    return 'I am RequstScopeProviderForModuleRefTest';
  }
}
