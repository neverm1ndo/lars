import { Workgroup } from '@lars/profile/domain';

export type UserLoginCredentials = {
    email: string;
    password: string;
}

export interface UseLoginResponse {
    id: number;
    username: string;
    avatar: string;
    main_group: Workgroup;
    permissions: Workgroup[];
    token: string;
}