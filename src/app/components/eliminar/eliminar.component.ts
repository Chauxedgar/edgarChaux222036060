import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent {
  id: number | null = null;

  constructor(private dataService: DataService) {}

  eliminarRegistro(): void {
    if (this.id !== null) {
      this.dataService.delete(this.id).subscribe(() => {
        alert('Registro eliminado con éxito');
      });
    }
  }
}
