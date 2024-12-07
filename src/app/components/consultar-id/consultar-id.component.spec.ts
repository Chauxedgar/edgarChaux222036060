import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarIdComponent } from './consultar-id.component';

describe('ConsultarIdComponent', () => {
  let component: ConsultarIdComponent;
  let fixture: ComponentFixture<ConsultarIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
