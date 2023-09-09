import { TranslateService } from '@ngx-translate/core';

export function formlyCustomTypes(ts: TranslateService) {
  return {
    types: [
      {
        name: 'app-email',
        extends: 'input',
        defaultOptions: {
          props: {
            type: 'email',
            required: true,
          },
          expressionProperties: {
            'props.label': () => ts.instant('FORM_EMAIL_LABEL'),
            'props.placeholder': () => ts.instant('FORM_EMAIL_PLACEHOLDER'),
          },
        },
      },
    ],
  };
}
