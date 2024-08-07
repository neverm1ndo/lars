import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from '../../core.module';

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

    set(key: string, value: string, dataType: StorageDataType = 'json') {
        if (dataType === 'json') {
            value = JSON.stringify(value)
        }

        this.storage.setItem(key, value);
    }

    remove(key: string) {
        this.storage.removeItem(key);
    }

    clear() {
        this.storage.clear();
    }
}
