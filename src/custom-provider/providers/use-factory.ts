import { MyProviderFactory as MyProviderFactoryToken } from './token';
import { useValue as useValueToken } from './token';
import { CustomProviderClass } from './use-class';

const MyProviderFactory = {
  provide: MyProviderFactoryToken,
  useFactory(useValue: string, cpc: CustomProviderClass, test: string) {
    cpc.test();

    return {
      valueProvider: useValue,
      classProvider: cpc,
      test,
    };
  },
  inject: [useValueToken, CustomProviderClass, 'test'], // 这里传入的是token
};

export default MyProviderFactory;
