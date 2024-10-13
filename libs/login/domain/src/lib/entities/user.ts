export enum Workgroup {
    CHALLENGER = 9,
    DEVELOPER,
    ADMIN,
    MAPPER,
    CONFIGURATOR,
    BACKUPER
}

export type UserLoginCredentials = {
    email: string;
    password: string;
}

export interface UseLoginrResponse {
    id: number;
    username: string;
    avatar: string;
    main_group: Workgroup;
    permissions: Workgroup[];
    token: string;
}