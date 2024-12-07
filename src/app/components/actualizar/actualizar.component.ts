import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent {
  id: number | null = null;
  registro = { nombre: '', descripcion: '' };

  constructor(private dataService: DataService) {}

  actualizarRegistro(): void {
    if (this.id !== null) {
      this.dataService.update(this.id, this.registro).subscribe(() => {
        alert('Registro actualizado con éxito');
      });
    }
  }
}
