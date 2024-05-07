import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleSuperheroeComponent } from './detalle-superheroe.component';

describe('DetalleSuperheroeComponent', () => {
  let component: DetalleSuperheroeComponent;
  let fixture: ComponentFixture<DetalleSuperheroeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleSuperheroeComponent]
    });
    fixture = TestBed.createComponent(DetalleSuperheroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
