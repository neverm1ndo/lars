import { inject, Injectable } from '@angular/core';

import { TranslocoService } from '@jsverse/transloco';

import { Workgroup } from '../entities';

@Injectable()
export class ProfileService {
  private readonly transloco = inject(TranslocoService);

  getWorkgroupName(workgroup: Workgroup): string {
    return this.transloco.translate('profile.A', { workgroup });
  }
}
