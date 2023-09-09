import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'ng16-e-formly-example',
  templateUrl: './formly-example.component.html',
  styleUrls: ['./formly-example.component.scss'],
})
export class FormlyExampleComponent {
  form = new FormGroup({});

  model = { email: '' };

  fields: Array<FormlyFieldConfig> = [
    {
      key: 'email',
      type: 'app-email',
    },
  ];

  onSubmit(model: unknown) {
    console.log(model);
  }
}
