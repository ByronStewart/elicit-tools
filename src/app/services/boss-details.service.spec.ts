import { TestBed } from '@angular/core/testing';

import { BossDetailsService } from './boss-details.service';

describe('BossDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BossDetailsService = TestBed.get(BossDetailsService);
    expect(service).toBeTruthy();
  });
});
