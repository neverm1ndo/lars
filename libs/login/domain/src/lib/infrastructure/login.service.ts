import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { catchError, Observable, take, throwError } from 'rxjs';

import { UseLoginrResponse, UserLoginCredentials } from '../entities';

@Injectable()
export class LoginService {
    private readonly http = inject(HttpClient);

    private urlLogin = '/v2/auth/login';
    private urlLogout = '/v2/auth/logout';

    login(credentials: UserLoginCredentials): Observable<UseLoginrResponse> {
        return this.http.post<UseLoginrResponse>(this.urlLogin, credentials)
            .pipe(
                catchError(({ status, statusText }) => throwError(() => ({ status, statusText }))),
                take(1)
            );
    }

    logout() {
        return this.http.get(this.urlLogout);
    }
}
