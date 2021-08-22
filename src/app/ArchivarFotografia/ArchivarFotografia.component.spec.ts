import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivarFotografiaComponent } from './ArchivarFotografia.component';

describe('ArchivarFotografiaComponent', () => {
  let component: ArchivarFotografiaComponent;
  let fixture: ComponentFixture<ArchivarFotografiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivarFotografiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivarFotografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
