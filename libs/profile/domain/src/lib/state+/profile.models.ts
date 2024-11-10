import { ProfileData } from '../entities';

export interface ProfileDataProps {
  profile: ProfileData;
}

export interface ProfileAuthenticated {
  isAuthenticated: boolean;
}