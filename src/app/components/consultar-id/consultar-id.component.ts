import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-consultar-id',
  templateUrl: './consultar-id.component.html',
  styleUrls: ['./consultar-id.component.css']
})
export class ConsultarIdComponent {
  registro: any | null = null;
  id: number | null = null;

  constructor(private dataService: DataService) {}

  buscarPorId(): void {
    if (this.id !== null) {
      this.dataService.getById(this.id).subscribe(data => {
        this.registro = data;
      });
    }
  }
}

