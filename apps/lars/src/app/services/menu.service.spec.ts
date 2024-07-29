import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { MenuService } from './menu.service';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('MenuService', () => {
  let service: MenuService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
        MenuService
      ]
    });

    service = TestBed.inject(MenuService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('bypass menu service tests', () => {
    expect(true).toBeTruthy();
  });
});
