import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSuperheroesComponent } from './lista-superheroes.component';

describe('ListaSuperheroesComponent', () => {
  let component: ListaSuperheroesComponent;
  let fixture: ComponentFixture<ListaSuperheroesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaSuperheroesComponent]
    });
    fixture = TestBed.createComponent(ListaSuperheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
