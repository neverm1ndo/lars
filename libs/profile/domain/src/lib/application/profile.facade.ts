import { inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";

import { Observable } from "rxjs"; 

import { selectors as ProfileSelectors } from "../state+/profile.selectors";
import { actions as ProfileActions } from "../state+/profile.actions";
import { ProfileData, Workgroup } from "../entities";
import { ProfileService } from "../infrastructure/profile.service";

@Injectable()
export class ProfileFacade {
    private readonly store = inject(Store);
    private readonly profileService = inject(ProfileService);

    /**
     * Возвращает данные профиля текущего пользователя
     */
    getUserProfile(): Observable<ProfileData> {
        return this.store.select(ProfileSelectors.selectUserProfileData);
    }

    setUserProfile(profile: ProfileData): void {
        this.store.dispatch(ProfileActions.setProfile({ profile }));
    }

    isAuthenticated(): Observable<boolean> {
        return this.store.select(ProfileSelectors.selectIsAuthenticated);
    }

    getWorkgroupName(workgroup: Workgroup): string {
        return this.profileService.getWorkgroupName(workgroup);
    }
}