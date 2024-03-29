import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, TemplateRef } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

type ToastType = 'success' | 'danger' | 'warning' | 'default';
export interface IToast {
  type: ToastType;
  body: string | TemplateRef<any>,
  subtext?: string | Error,
  icon?: IconDefinition,
  lifetime?: number,
}

@Injectable()
export class ToastService {

  public toasts: IToast[] = [];

  public show(
    type: ToastType,
    body: string | TemplateRef<any>,
    subtext?: string | Error,
    icon?: IconDefinition,
    lifetime?: number,
  ) {
      this.toasts.push({
        type, 
        body,
        subtext: subtext instanceof HttpErrorResponse ? `${subtext.error.code} ${subtext.error.path}` : subtext,
        icon,
        lifetime
      });
  }

  public remove(toast: IToast) {
    this.toasts = this.toasts.filter(t => t !== toast);
    console.log(this.toasts)
  }
}
