import { TestBed, inject } from '@angular/core/testing';

import { SchemasService } from './schemas.service';

describe('SchemasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchemasService]
    });
  });

  it('should be created', inject([SchemasService], (service: SchemasService) => {
    expect(service).toBeTruthy();
  }));
});
