import { TestBed } from '@angular/core/testing';

import { ClinicHistoriesService } from './clinic-histories.service';

describe('ClinicHistoriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClinicHistoriesService = TestBed.get(ClinicHistoriesService);
    expect(service).toBeTruthy();
  });
});
