import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

import { iif, map, switchMap } from 'rxjs';

import { ProfileFacade } from '@lars/profile/domain';

const bearer = (token?: string) => `Bearer ${token}` || 'noop';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  /** Bypass localization files request */
  if (req.url.includes('i18n')) {
    return next(req);
  }

  const profileFacade = inject(ProfileFacade);
  const authorizedRequest$ = profileFacade.getUserProfile().pipe(
    map(({ token }) =>
      req.clone({
        setHeaders: { Authorization: bearer(token) }
      })
    ),
    switchMap((req) => next(req))
  );

  return profileFacade
    .isAuthenticated()
    .pipe(switchMap((isAuthenticated) => iif(() => isAuthenticated, authorizedRequest$, next(req))));
};
