import { createReducer, on } from '@ngrx/store';
import { ProfileData } from '../entities';
import { actions as ProfileActions } from './profile.actions';

export interface ProfileState {
    profileData: ProfileData;
    isAuthenticated: boolean;
};

export const featureKey = 'Profile';

const initialState: ProfileState = {
    profileData: {},
    isAuthenticated: false
};

export const userReducer = createReducer(
    initialState,
    on(ProfileActions.setProfile, (state, { profile }) => ({ ...state, profileData: profile })),
    on(ProfileActions.setIsAuthenticatedState, (state, { isAuthenticated }) => ({ ...state, isAuthenticated }))
);