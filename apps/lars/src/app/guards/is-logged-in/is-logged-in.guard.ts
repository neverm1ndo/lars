import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { tap } from 'rxjs';

import { ProfileFacade } from '@lars/profile/domain';

export const isLoggedInGuard: CanActivateFn = () => {
  const router = inject(Router);
  const profile = inject(ProfileFacade);
  
  return profile.isAuthenticated()
    .pipe(
      tap((isAuthenticated) => {
        if (!isAuthenticated) router.navigate(['/login']);
      })
    );
};
