import { inject, Injectable } from '@angular/core';
import { ElectronService } from '../electron/electron.service';

@Injectable()
export class ExternalLinksService {
  private readonly electron = inject(ElectronService);

  openExternal(url: URL | string, params?: Record<string, string>): void {
    if (typeof url === 'string') {
      url = new URL(url);
    }

    if (url instanceof URL) {
      if (params) {
        const urlParams = new URLSearchParams(params);

        url = this.applySearchParams(url, urlParams);
      }
    }

    url = url.toString();

    this.electron.shell?.openExternal(url);
  }

  private applySearchParams(url: URL, params: URLSearchParams): URL {
    for (const [key, value] of params) {
      url.searchParams.append(key, value);
    }

    return url;
  }
}
