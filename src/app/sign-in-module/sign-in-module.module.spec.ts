import { SignInModuleModule } from './sign-in-module.module';

describe('SignInModuleModule', () => {
  let signInModuleModule: SignInModuleModule;

  beforeEach(() => {
    signInModuleModule = new SignInModuleModule();
  });

  it('should create an instance', () => {
    expect(signInModuleModule).toBeTruthy();
  });
});
