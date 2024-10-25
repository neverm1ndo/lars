import { createReducer } from "@ngrx/store";
import { ProfileData } from "../entities";

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
    initialState
);