import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';
import { BROWSER_STORAGE } from '../../core.module';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StorageService,
        { provide: BROWSER_STORAGE, useClass: LocalStorageMock }
      ]
    });

    service = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

class LocalStorageMock {

  store: Record<string, unknown> = {};

  getItem(key: string): unknown {
    return this.store[key];
  };

  setItem(key: string, value: unknown) {
    this.store[key] = value;
  };

  clear() {
   this. store = {};
  };

  removeItem(key: string) {
    delete this.store[key];
  };

  getAll() {
    return this.store;
  };
};
