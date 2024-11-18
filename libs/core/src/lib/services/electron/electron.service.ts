import { Injectable } from '@angular/core';

// If you import a module but never use any of the imported values other than as TypeScript types,
// the resulting javascript file will look as if you never imported the module at all.
import { ipcRenderer, webFrame, shell } from 'electron';

import * as childProcess from 'child_process';
import * as fs from 'fs/promises';
import * as os from 'os';

import { combineLatest, from, map, of } from 'rxjs';

@Injectable()
export class ElectronService {
    ipcRenderer!: typeof ipcRenderer;
    webFrame?: typeof webFrame;
    childProcess?: typeof childProcess;
    fs?: typeof fs;
    shell?: typeof shell;
    os?: typeof os;

    get isElectron(): boolean {
        return !!(window && window.process && window.process.type);
    }

    constructor() {
        // Conditional imports
        if (this.isElectron) {
            this.ipcRenderer = window.require('electron').ipcRenderer;
            this.webFrame = window.require('electron').webFrame;
            this.shell = window.require('electron').shell;
            this.childProcess = window.require('child_process');
            this.fs = window.require('fs');
            this.os = window.require('os');
        }
    }

    invoke(channel: string, ...args: any[]): Promise<any> {
        return this.ipcRenderer.invoke(channel, args);
    }

    getPlatformVersion() {
        return combineLatest([
            from(this.invoke('version')),
            of({
                host: this.os?.version,
                release: this.os?.release(),
                platform: this.os?.platform()
            })
        ]).pipe(
            map(([version, { host, release, platform }]) => ({
                version,
                host,
                release,
                platform
            }))
        )
    }
}
