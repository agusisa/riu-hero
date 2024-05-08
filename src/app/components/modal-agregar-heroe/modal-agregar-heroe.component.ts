import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Heroe } from 'src/app/models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-modal-agregar-heroe',
  templateUrl: './modal-agregar-heroe.component.html',
  styleUrls: ['./modal-agregar-heroe.component.css'],
})
export class ModalAgregarHeroeComponent implements OnInit {
  heroeForm: FormGroup = new FormGroup({});
  edicion: any;

  constructor(
    public dialogRef: MatDialogRef<ModalAgregarHeroeComponent>,
    private heroesService: HeroesService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.edicion = this.data && this.data.heroe;
    this.inicializarFormulario();
  }

  inicializarFormulario() {
    if (this.edicion) {
      this.heroeForm = this.fb.group({
        id: [this.data.heroe.id],
        nombre: [this.data.heroe.nombre, Validators.required],
        poder: [this.data.heroe.poder, Validators.required],
        edad: [
          this.data.heroe.edad,
          [Validators.required, Validators.pattern(/^\d+$/)],
        ],
        planetaOrigen: [this.data.heroe.planetaOrigen, Validators.required],
        archienemigo: [this.data.heroe.archienemigo],
        estatura: [
          this.data.heroe.estatura,
          [Validators.required, Validators.pattern(/^\d+$/)],
        ],
        puntoDebil: [this.data.heroe.puntoDebil],
        origenPoderes: [this.data.heroe.origenPoderes],
      });
    } else {
      this.heroeForm = this.fb.group({
        nombre: ['', Validators.required],
        poder: ['', Validators.required],
        edad: [0, [Validators.required, Validators.pattern(/^\d+$/)]],
        planetaOrigen: ['', Validators.required],
        archienemigo: [''],
        estatura: [0, [Validators.required, Validators.pattern(/^\d+$/)]],
        puntoDebil: [''],
        origenPoderes: [''],
      });
    }
  }

  anadirHeroe() {
    if (this.heroeForm.valid) {
      const nuevoHeroe: Heroe = this.heroeForm.value;
      if (this.edicion) {
        this.heroesService.modificarHeroe(nuevoHeroe).subscribe(() => {
          this.dialogRef.close();
        });
      } else {
        this.heroesService.registrarHeroe(nuevoHeroe).subscribe(() => {
          this.dialogRef.close();
        });
      }
    }
  }

  cerrar() {
    this.dialogRef.close();
  }
}
