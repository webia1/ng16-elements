import { HttpClient } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { APP_LANGUAGES, I18N_FILE_EXTENSION, I18N_PATH } from './config';
import { DemosModule } from './routed/demos/demos.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    TranslateModule.forRoot({
      defaultLanguage: APP_LANGUAGES.DE,
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    DemosModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [TranslateService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/**
 * FACTORY FUNCTIONS
 * - App Initializer - Setting default language
 * - TranslateHttpLoader- Loading translation files
 */

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
