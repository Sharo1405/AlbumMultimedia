import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarExpedienteComponent } from './VisualizarExpediente.component';

describe('VisualizarExpedienteComponent', () => {
  let component: VisualizarExpedienteComponent;
  let fixture: ComponentFixture<VisualizarExpedienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarExpedienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
