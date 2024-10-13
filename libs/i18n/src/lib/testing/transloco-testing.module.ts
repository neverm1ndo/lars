import { TranslocoTestingModule, TranslocoTestingOptions } from '@jsverse/transloco';

export function getTranslocoTestingModule(options: TranslocoTestingOptions = {}) {
  return TranslocoTestingModule.forRoot({
    langs: { ru: {}},
    translocoConfig: {
      availableLangs: ['ru'],
      defaultLang: 'ru',
    },
    preloadLangs: true,
    ...options,
  });
}