import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  formJuicio = new FormGroup({});
  modelJuicio = { email: 'email@gmail.com' };
  optionsJuicio: FormlyFormOptions = {};
  fieldsJuicio: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email addressk',
        placeholder: 'Enter email',
        required: true,
      },
    },
  ];

  onSubmit() {
    alert(JSON.stringify(this.modelJuicio, null, 4));
  }
}
