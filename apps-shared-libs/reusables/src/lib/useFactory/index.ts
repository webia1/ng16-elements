import { HttpClient } from '@angular/common/http';
import {
  APP_LANGUAGES,
  I18N_FILE_EXTENSION,
  I18N_PATH,
} from './../config/index';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function appInitializerFactory(translate: TranslateService) {
  return () =>
    new Promise<void>((resolve) => {
      translate.use(APP_LANGUAGES.DE).subscribe(() => {
        resolve();
      });
    });
}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, I18N_PATH, I18N_FILE_EXTENSION);
}
