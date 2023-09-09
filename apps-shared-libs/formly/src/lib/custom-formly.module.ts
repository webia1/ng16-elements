import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FORMLY_CONFIG, FormlyModule } from '@ngx-formly/core';
import { FormlyMatInputModule } from '@ngx-formly/material/input';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { formlyCustomTypes } from './formly-custom-types/factory-types';
import { formlyValidationMessages } from './formly-validation-messages/factory-messages';

@NgModule({
  imports: [
    FormlyModule.forRoot(),
    FormlyMatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],

  providers: [
    {
      provide: FORMLY_CONFIG,
      multi: true,
      useFactory: formlyValidationMessages,
      deps: [TranslateService],
    },
    {
      provide: FORMLY_CONFIG,
      multi: true,
      useFactory: formlyCustomTypes,
      deps: [TranslateService],
    },
  ],

  exports: [
    FormlyModule,
    FormlyMatInputModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
})
export class CustomFormlyModule {}
