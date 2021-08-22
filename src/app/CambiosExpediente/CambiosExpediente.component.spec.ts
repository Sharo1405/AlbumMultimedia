import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiosExpedienteComponent } from './CambiosExpediente.component';

describe('CambiosExpedienteComponent', () => {
  let component: CambiosExpedienteComponent;
  let fixture: ComponentFixture<CambiosExpedienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiosExpedienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiosExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
