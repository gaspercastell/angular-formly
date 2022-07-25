import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  formDemanda = new FormGroup({});
  modelDemanda = {
    email: 'email@gmail.com',
    junta: 'prueba',
    noExpediente: '23232',
  };
  optionsDemanda: FormlyFormOptions = {};
  fieldsDemanda: FormlyFieldConfig[] = [
    {
      className: 'col-sm-1 ',
    },
    {
      // className: 'col-sm-11 ',
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-sm-12',
          key: 'junta',
          type: 'select',
          templateOptions: {
            label: 'Junta *',
          },
        },
        {
          className: 'col-sm-3',
          key: 'noExpediente',
          type: 'input',
          templateOptions: {
            label: 'Número de expediente',
            required: true,
          },
        },
        {
          className: 'col-sm-3',
          key: 'anioExpediente',
          type: 'input',
          templateOptions: {
            label: 'Año del expediente',
            required: true,
          },
        },
        {
          className: 'section-label col-sm-3',
          template: '¿Procede de una incompetencia?:',
        },
        {
          className: 'col-sm-3',
          key: 'esIncompetencia',
          type: 'radio',
          templateOptions: {
            required: true,
            options: [
              { value: 1, label: 'No' },
              { value: 2, label: 'Si' },
              // { value: 3, label: 'Option 3' },
              // { value: 4, label: 'Option 4', disabled: true },
            ],
          },
        },
        {
          className: 'col-sm-3',
          key: 'noExpediente2',
          type: 'input',
          templateOptions: {
            label: 'Número de expediente',
            disabled: true,
            // required: true,
          },
        },
        {
          className: 'col-sm-3',
          key: 'anioExpediente2',
          type: 'input',
          templateOptions: {
            label: 'Año del expediente',
            disabled: true,
            // required: true,
          },
        },
        {
          className: 'col-sm-6',
          key: 'junta2',
          type: 'select',
          templateOptions: {
            label: 'Junta *',
            disabled: true,
          },
        },
      ],
    },
  ];

  formActorPrincipal = new FormGroup({});
  modelActorPrincipal = {
    email: 'email@gmail.com',
    junta: 'prueba',
    noExpediente: '23232',
  };
  optionsActorPrincipal: FormlyFormOptions = {};
  fieldsActorPrincipal: FormlyFieldConfig[] = [];

  onSubmit() {
    // alert(JSON.stringify(this.modelJuicio, null, 4));
  }
}
