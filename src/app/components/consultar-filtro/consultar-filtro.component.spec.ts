import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarFiltroComponent } from './consultar-filtro.component';

describe('ConsultarFiltroComponent', () => {
  let component: ConsultarFiltroComponent;
  let fixture: ComponentFixture<ConsultarFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarFiltroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
