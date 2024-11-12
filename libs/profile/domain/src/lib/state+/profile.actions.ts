import { createAction, props } from "@ngrx/store";
import { ProfileAuthenticated, ProfileDataProps } from "./profile.models";

const getProfile = createAction('[Profile] Get user profile');
const setProfile = createAction('[Profile] Save user profile', props<ProfileDataProps>());

const getStoredProfile = createAction('[Profile] Get profile stored in localStorage');

const setIsAuthenticatedState = createAction('[Profile] Set authentication state', props<ProfileAuthenticated>())

export const actions = {
    getProfile,
    getStoredProfile,
    setProfile,
    setIsAuthenticatedState
};