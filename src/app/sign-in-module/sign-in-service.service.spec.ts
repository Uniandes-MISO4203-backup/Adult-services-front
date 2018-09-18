import { TestBed } from '@angular/core/testing';

import { SignInServiceService } from './sign-in-service.service';

describe('SignInServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignInServiceService = TestBed.get(SignInServiceService);
    expect(service).toBeTruthy();
  });
});
