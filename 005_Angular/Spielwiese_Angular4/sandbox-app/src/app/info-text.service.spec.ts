import { TestBed, inject } from '@angular/core/testing';

import { InfoTextService } from './info-text.service';

describe('InfoTextService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfoTextService]
    });
  });

  it('should be created', inject([InfoTextService], (service: InfoTextService) => {
    expect(service).toBeTruthy();
  }));
});
