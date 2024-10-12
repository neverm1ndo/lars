import { DOCUMENT } from '@angular/common';
import { inject, Injectable, signal } from '@angular/core';
import { StorageService } from '../storage/storage.service';

type LarsTheme = 'dark' | 'light' | 'auto';

const STORAGE_KEY = 'lars/theme';

@Injectable()
export class ThemeManagerService {
    private readonly document = inject(DOCUMENT);
    private readonly storage = inject(StorageService);
    private readonly window = this.document.defaultView;

    isDark = signal(false);

    constructor() {
        this.setPrefferedTheme();

        if (this.window === null || !this.window.matchMedia) return;

        this.window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', this.changeEventHandler.bind(this));
    }

    getStoredTheme(): LarsTheme {
        return this.storage.get(STORAGE_KEY, 'text');
    }

    setStoredTheme(theme: LarsTheme): void {
        this.storage.set(STORAGE_KEY, theme, 'text');
    }

    getPreferredTheme(): LarsTheme {
        const storedTheme = this.getStoredTheme();

        if (storedTheme) {
            return storedTheme;
        }

        if (this.window !== null && this.window.matchMedia) {
            return this.window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light';
            }
            
        return 'dark';
    }

    setTheme(theme: string): void {
        if (this.window === null || !this.window.matchMedia) return;
        
        const { matches } = this.window.matchMedia('(prefers-color-scheme: dark)');
        if (theme === 'auto' && matches) {
            this.document.documentElement.setAttribute('data-bs-theme', 'dark');
            this.isDark.set(true);
        } else {
            this.document.documentElement.setAttribute('data-bs-theme', theme);
            this.isDark.set(theme === 'dark');
        }

        this.setMaterialTheme();
    }

    setMaterialTheme(): void {
        if (this.isDark()) {
            const href = 'dark-theme.css';
            getLinkElementForKey('dark-theme').setAttribute('href', href);
            this.document.documentElement.classList.add('dark-theme');

            return;
        }
        
        this.removeStyle('dark-theme');
        this.document.documentElement.classList.remove('dark-theme');
    }

    removeStyle(key: string) {
        const existingLinkElement = getExistingLinkElementByKey(key);
        
        if (existingLinkElement) {
            this.document.head.removeChild(existingLinkElement);
        }
    }
    
    changeTheme(theme: LarsTheme) {
        this.setStoredTheme(theme);
        this.setTheme(theme);
    }

    private setPrefferedTheme(): void {
        const preferredTheme = this.getPreferredTheme();
        this.setTheme(preferredTheme);
    }

    private changeEventHandler() {
        const storedTheme = this.getStoredTheme();
        
        if (storedTheme !== 'light' && storedTheme !== 'dark') {
            this.setPrefferedTheme();
        }
    }
}

function getLinkElementForKey(key: string) {
    return getExistingLinkElementByKey(key) || createLinkElementWithKey(key);
}
  
function getExistingLinkElementByKey(key: string) {
    return document.head.querySelector(
        `link[rel="stylesheet"].${getClassNameForKey(key)}`
    );
}

function createLinkElementWithKey(key: string) {
    const linkEl = document.createElement('link');

    linkEl.setAttribute('rel', 'stylesheet');
    linkEl.classList.add(getClassNameForKey(key));

    document.head.appendChild(linkEl);

    return linkEl;
}
  
function getClassNameForKey(key: string) {
    return `style-manager-${key}`;
}
