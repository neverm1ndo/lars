import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { ProfileFacade } from '@lars/profile/domain';
import { tap } from 'rxjs';

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
