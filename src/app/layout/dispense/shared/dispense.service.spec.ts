import { TestBed, inject } from '@angular/core/testing';

import { DispenseService } from './dispense.service';

describe('DispenseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DispenseService]
    });
  });

  it('should be created', inject([DispenseService], (service: DispenseService) => {
    expect(service).toBeTruthy();
  }));
});
