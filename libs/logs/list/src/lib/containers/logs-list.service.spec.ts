import { TestBed } from '@angular/core/testing';

import { LogsGridService } from './logs-grid.service';

describe('LogsGridService', () => {
  let service: LogsGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogsGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
