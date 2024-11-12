import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProfileState, featureKey } from "./profile.reducer";

const profileSelectFeature = createFeatureSelector<ProfileState>(featureKey)

const selectUserProfileData = createSelector(profileSelectFeature, ({ profileData }) => profileData);
const selectIsAuthenticated = createSelector(profileSelectFeature, ({ isAuthenticated }) => isAuthenticated);

export const selectors = {
    selectUserProfileData,
    selectIsAuthenticated,
};