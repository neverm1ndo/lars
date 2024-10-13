import { inject, Injectable } from '@angular/core';
import { ElectronService } from '../electron/electron.service';

@Injectable()
export class ExternalLinksService {
  private readonly electron = inject(ElectronService);

  openExternal(url: URL | string, params?: URLSearchParams): void {
    if (url instanceof URL) {
      if (params) {
        url = this.applySearchParams(url, params);
      }
      
      url = url.toString();
    }

    this.electron.shell?.openExternal(url);
  }

  private applySearchParams(url: URL, params: URLSearchParams): URL {
    for (const [key, value] of params) {
      url.searchParams.append(key, value);
    }

    return url;
  }
}
