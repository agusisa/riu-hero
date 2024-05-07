import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarBorradoComponent } from './confirmar-borrado.component';

describe('ConfirmarBorradoComponent', () => {
  let component: ConfirmarBorradoComponent;
  let fixture: ComponentFixture<ConfirmarBorradoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmarBorradoComponent]
    });
    fixture = TestBed.createComponent(ConfirmarBorradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
