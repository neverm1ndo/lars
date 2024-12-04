import { Workgroup } from "./workgroup";

export interface ProfileData {
    id?: number;
    username?: string;
    avatar?: string;
    main_group?: Workgroup;
    permissions?: Workgroup[];
    token?: string;
};