import { TranslateService } from '@ngx-translate/core';

export function formlyValidationMessages(ts: TranslateService) {
  return {
    validationMessages: [
      {
        name: 'required',
        message: () => ts.stream('VALIDATION_REQUIRED'),
      },
    ],
  };
}
