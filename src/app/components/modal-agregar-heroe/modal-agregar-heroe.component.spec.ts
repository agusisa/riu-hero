import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAgregarHeroeComponent } from './modal-agregar-heroe.component';

describe('ModalAgregarHeroeComponent', () => {
  let component: ModalAgregarHeroeComponent;
  let fixture: ComponentFixture<ModalAgregarHeroeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAgregarHeroeComponent]
    });
    fixture = TestBed.createComponent(ModalAgregarHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
