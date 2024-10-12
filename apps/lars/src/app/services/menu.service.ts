import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

    constructor(private readonly http: HttpClient) {}

    buildMenu(permitions: any) {
        /** not implemented */
    }
}
