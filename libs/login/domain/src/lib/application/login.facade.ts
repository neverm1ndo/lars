import { inject, Injectable } from '@angular/core';
import { LoginService } from '../infrastructure/login.service';
import { UserLoginCredentials } from '../entities';

@Injectable()
export class LoginFacade {
    private readonly loginService = inject(LoginService);

    login(credentials: UserLoginCredentials) {
        return this.loginService.login(credentials);
    }

    logout() {
        return this.loginService.logout();
    }
}
