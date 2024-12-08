import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ValidationComponent } from './validation/validation.component';

export const routes: Routes = [
    {
        path : 'formulario_vacaciones',
        component : FormComponent
    },
    {
        path : '',
        redirectTo : 'formulario_vacaciones',
        pathMatch : 'full'
    },
    {
        path : 'validacion',
        component : ValidationComponent
    }
];