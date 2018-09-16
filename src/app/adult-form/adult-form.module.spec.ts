import { AdultFormModule } from './adult-form.module';

describe('AdultFormModule', () => {
  let adultFormModule: AdultFormModule;

  beforeEach(() => {
    adultFormModule = new AdultFormModule();
  });

  it('should create an instance', () => {
    expect(adultFormModule).toBeTruthy();
  });
});
