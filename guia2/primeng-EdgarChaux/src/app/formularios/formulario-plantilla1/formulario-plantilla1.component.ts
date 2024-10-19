import { Component } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-plantilla1',
  standalone: true,
  imports: [InputTextModule, FormsModule],
  templateUrl: './formulario-plantilla1.component.html',
  styleUrl: './formulario-plantilla1.component.css'
})
export class FormularioPlantilla1Component {
  value: string = '';
  password: string = '';
}
