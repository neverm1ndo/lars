import { TestBed } from '@angular/core/testing';

import { ThemeManagerService } from './theme-manager.service';
import { CoreModule } from '@lars/core';

describe('ThemeManagerService', () => {
  let service: ThemeManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule]
    });
    service = TestBed.inject(ThemeManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
