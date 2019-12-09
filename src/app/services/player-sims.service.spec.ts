import { TestBed } from '@angular/core/testing';

import { PlayerSimsService } from './player-sims.service';

describe('PlayerSimsService', () => {
  let service: PlayerSimsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerSimsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
