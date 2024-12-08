import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [ReactiveFormsModule, CalendarModule, CommonModule, InputTextModule, DropdownModule],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {
  @Input() Form! : FormGroup

  // constructor(private fb : FormBuilder){
  //   this.licenseForm = this.fb.group({
  //     date_ini : ['', Validators.required],
  //     date_fi : ['', Validators.required],
  //     notes : ['', Validators.required]
  //   })
  // }

  // // Métodos

  // onSubmit(){
  //   if(this.licenseForm.valid){
  //     console.log(this.licenseForm.value)
  //   }else{
  //     console.log('Formulario invalido')
  //   }
  // }
}
