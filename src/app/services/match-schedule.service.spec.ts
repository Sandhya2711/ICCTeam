import { TestBed } from '@angular/core/testing';

import { MatchScheduleService } from './match-schedule.service';

describe('MatchScheduleService', () => {
  let service: MatchScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
