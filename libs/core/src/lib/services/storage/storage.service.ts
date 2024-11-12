import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from '../../core.module';

import { isString, toString } from 'lodash-es';

type StorageDataType = 'json' | 'text';

@Injectable()
export class StorageService {
    constructor(@Inject(BROWSER_STORAGE) private storage: Storage) {}


    get(key: string, dataType: StorageDataType = 'json') {
        const raw = this.storage.getItem(key);

        if (!raw) return raw;

        if (dataType === 'json') {
            return JSON.parse(raw);
        }

        return raw;
    }

    set(key: string, value: unknown, dataType: StorageDataType = 'json') {
        if (dataType === 'json') {
            value = JSON.stringify(value)
        }

        if (!isString(value)) {
            value = toString(value);
        }

        this.storage.setItem(key, value as string);
    }

    remove(key: string) {
        this.storage.removeItem(key);
    }

    clear() {
        this.storage.clear();
    }
}
