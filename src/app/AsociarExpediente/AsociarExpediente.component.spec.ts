import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsociarExpedienteComponent } from './AsociarExpediente.component';

describe('AsociarExpedienteComponent', () => {
  let component: AsociarExpedienteComponent;
  let fixture: ComponentFixture<AsociarExpedienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsociarExpedienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsociarExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
