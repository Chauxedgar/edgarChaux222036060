import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-manager',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, ButtonModule, CommonModule],
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.css'
})
export class ManagerComponent {
  @Input() vacationsForm!: FormGroup

  // constructor(private fb : FormBuilder){
  //   this.gerenteForm = this.fb.group({
  //     name_g : ['', Validators.required],
  //     email : ['', [Validators.required, Validators.email]]
  //   })
  // }
  
  // //Método
  // onSubmit(){
  //   if(this.gerenteForm.valid){
  //     console.log(this.gerenteForm.value)
  //   }else{
  //     console.log('Formulario invalido')
  //   }
  // }
}
