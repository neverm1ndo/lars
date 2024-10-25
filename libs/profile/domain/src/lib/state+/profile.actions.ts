import { createAction, props } from "@ngrx/store";
import { ProfileDataProps } from "./profile.models";

const getProfile = createAction('[Profile] Get user profile');
const setProfile = createAction('[Profile] Save user profile', props<ProfileDataProps>());

export const actions = {
    getProfile,
    setProfile
};