import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-consultar-todos',
  templateUrl: './consultar-todos.component.html',
  styleUrls: ['./consultar-todos.component.css']
})
export class ConsultarTodosComponent implements OnInit {
  registros: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getAll().subscribe(data => {
      this.registros = data;
    });
  }
}
