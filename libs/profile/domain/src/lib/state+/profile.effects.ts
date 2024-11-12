import { inject, Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, createEffect, ofType, OnInitEffects } from "@ngrx/effects";

import { filter, map, switchMap, tap } from "rxjs";

import { StorageService } from '@lars/core';

import { actions } from "./profile.actions";
import { LOCALSTORAGE_USER_PROFILE_DATA_KEY } from "../constants";

@Injectable()
export class ProfileEffects implements OnInitEffects {
    private readonly actions$ = inject(Actions);
    private readonly localStorageService = inject(StorageService);

    getStoredProfile$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.getStoredProfile),
            map(() => this.localStorageService.get(LOCALSTORAGE_USER_PROFILE_DATA_KEY)),
            filter((profile) => profile),
            switchMap((profile) => [
                actions.setIsAuthenticatedState({ isAuthenticated: profile ? true : false }),
                actions.setProfile({ profile })
            ])
        )
    );

    setUserProfile$ = createEffect(
        () => this.actions$.pipe(
            ofType(actions.setProfile),
            tap(({ profile }) => {
                this.localStorageService.set(LOCALSTORAGE_USER_PROFILE_DATA_KEY, profile);
            }),
            map(() => actions.setIsAuthenticatedState({ isAuthenticated: true }))
        ),
        // { dispatch: false }
    );

    ngrxOnInitEffects(): Action {
        return actions.getStoredProfile();
    }
}