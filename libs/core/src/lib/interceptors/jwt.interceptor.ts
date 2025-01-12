import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { ProfileFacade } from '@lars/profile/domain';
import { iif, map, of, switchMap, tap } from 'rxjs';

const bearer = (token?: string) => `Bearer ${token}` || 'noop';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const profileFacade = inject(ProfileFacade);

  return profileFacade.isAuthenticated()
    .pipe(
      switchMap(
        (isAuthenticated) => iif(
          () => isAuthenticated,
          profileFacade.getUserProfile().pipe(
            map(({ token }) => req.clone({
              setHeaders: { Authorization: bearer(token) }
            }))
          ),
          of(req)
        )
      ),
      tap(console.log),
      switchMap((req) => next(req))
    );
};
