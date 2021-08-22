import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesasociarExpedienteComponent } from './DesasociarExpediente.component';

describe('DesasociarExpedienteComponent', () => {
  let component: DesasociarExpedienteComponent;
  let fixture: ComponentFixture<DesasociarExpedienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesasociarExpedienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesasociarExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
