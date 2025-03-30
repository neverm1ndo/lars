import { TestBed } from '@angular/core/testing';
import { HttpInterceptorFn } from '@angular/common/http';

import { of } from 'rxjs';

import { ProfileFacade } from '@lars/profile/domain';

import { jwtInterceptor } from './jwt.interceptor';

const mockProfileFacade = {
  isAuthenticated: () => of(true)
};

describe('jwtInterceptor', () => {
  const interceptor: HttpInterceptorFn = (req, next) => 
    TestBed.runInInjectionContext(() => jwtInterceptor(req, next));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ProfileFacade, useValue: mockProfileFacade }
      ]
    });
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
