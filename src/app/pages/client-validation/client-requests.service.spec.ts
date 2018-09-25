import { TestBed } from '@angular/core/testing';

import { ClientRequestsService } from './client-requests.service';

describe('ClientRequestsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientRequestsService = TestBed.get(ClientRequestsService);
    expect(service).toBeTruthy();
  });
});
