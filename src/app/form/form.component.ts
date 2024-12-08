import { Component } from '@angular/core';
import { ManagerComponent } from '../manager/manager.component';
import { UserComponent } from '../user/user.component';
import { DataComponent } from '../data/data.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RequiredService } from '../required.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-Form',
  standalone: true,
  imports: [ManagerComponent, UserComponent, DataComponent, CommonModule, ReactiveFormsModule, ButtonModule, HttpClientModule],
  templateUrl: './Form.component.html',
  styleUrl: './Form.component.css'
})
export class FormComponent {
  Form : FormGroup;

  constructor(private fb : FormBuilder, private registerService : RequiredService){
    this.Form = this.fb.group(
      {
        name_g : ['', Validators.required],
        email : ['', [Validators.required, Validators.email]],
        name : ['', Validators.required],
        lastname : ['', Validators.required],
        email_g : ['', [Validators.required, Validators.email]],
        phone : ['', [Validators.required]],
        date_ini : ['', Validators.required],
        date_fi : ['', Validators.required],
        notes : ['', Validators.required]
      }
    )
  }

  onSubmit(){
    if (this.Form.valid){
      const {name,lastname,email,phone,name_g,email_g,date_ini,date_fi,notes} = this.Form.value;
      this.registerService.register(name,lastname,email,phone,name_g,email_g,date_ini,date_fi,notes).subscribe(
        {
          next: (response) => {
            {console.log('Exitoso',response)};
        },
          error: error => {
          console.error('Error en el registro', error);
        },
          complete:() => {
          console.log("Registro enviado")
        }
        });
        console.log(this.Form.value);

    }else{
      console.log('Formulario no valido');
    }
  };
}
