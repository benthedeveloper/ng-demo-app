import { TestBed, inject } from '@angular/core/testing';

import { AdalConfigService } from './adal-config.service';

describe('AdalConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdalConfigService]
    });
  });

  it('should be created', inject([AdalConfigService], (service: AdalConfigService) => {
    expect(service).toBeTruthy();
  }));
});
