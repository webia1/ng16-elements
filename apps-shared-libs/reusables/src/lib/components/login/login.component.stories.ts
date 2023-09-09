import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomFormlyModule } from '@app-shared-libs/formly';
import { CustomMaterialModule } from '@app-shared-libs/material';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { Meta, Story, moduleMetadata } from '@storybook/angular';

import { APP_LANGUAGES } from '../../config';
import { LoginComponent } from './login.component';
import { HttpLoaderFactory, appInitializerFactory } from '../../useFactory';

export default {
  title: 'LoginComponent',
  component: LoginComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CustomFormlyModule,
        CustomMaterialModule,
        ReactiveFormsModule,
        HttpClientModule,
        TranslateModule.forRoot({
          defaultLanguage: APP_LANGUAGES.DE,
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
          },
        }),
      ],
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: appInitializerFactory,
          deps: [TranslateService],
          multi: true,
        },
      ], // Hier hinzugefügt
    }),
  ],
} as Meta;

export const Primary: Story<LoginComponent> = (args: LoginComponent) => ({
  component: LoginComponent,
  props: args,
});
