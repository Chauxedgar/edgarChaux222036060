import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-consultar-filtro',
  templateUrl: './consultar-filtro.component.html',
  styleUrls: ['./consultar-filtro.component.css']
})
export class ConsultarFiltroComponent {
  registros: any[] = [];
  nombre: string = '';

  constructor(private dataService: DataService) {}

  buscarPorNombre(): void {
    this.dataService.getByFilter(this.nombre).subscribe(data => {
      this.registros = data;
    });
  }
}
