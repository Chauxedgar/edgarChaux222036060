import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {
  nuevoRegistro = { nombre: '', descripcion: '' };

  constructor(private dataService: DataService) {}

  crearRegistro(): void {
    this.dataService.create(this.nuevoRegistro).subscribe(() => {
      alert('Registro creado con éxito');
      this.nuevoRegistro = { nombre: '', descripcion: '' };
    });
  }
}
