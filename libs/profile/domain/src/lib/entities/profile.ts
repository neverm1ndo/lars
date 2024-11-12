import { Workgroup } from "./workgroup";

export interface ProfileData {
    id?: number;
    username?: string;
    avatar?: string;
    main_group?: Workgroup;
    secondary_group?: Workgroup;
    token?: string;
};