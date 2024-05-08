import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Heroe } from 'src/app/models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';
import { MatPaginator } from '@angular/material/paginator';
import { ModalAgregarHeroeComponent } from '../../components/modal-agregar-heroe/modal-agregar-heroe.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmarBorradoComponent } from 'src/app/components/confirmar-borrado/confirmar-borrado.component';

@Component({
  selector: 'app-lista-superheroes',
  templateUrl: './lista-superheroes.component.html',
  styleUrls: ['./lista-superheroes.component.css'],
})
export class ListaSuperheroesComponent implements OnInit {
  superheroes: Heroe[] = [];
  selectedHeroeId: number | null = null;
  searchText: string = '';
  dataSource = new MatTableDataSource<Heroe>([]);
  displayedColumns: string[] = [
    'nombre',
    'poder',
    'edad',
    'planetaOrigen',
    'archienemigo',
    'estatura',
    'puntoDebil',
    'origenPoderes',
    'editar',
    'borrar',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private heroesService: HeroesService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerSuperheroes();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  obtenerSuperheroes(): void {
    this.heroesService.obtenerHeroes().subscribe((superheroes: Heroe[]) => {
      this.dataSource.data = superheroes;
    });
  }

  aplicarFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  abrirConfirmacionBorrado(heroeId: number): void {
    const dialogRef = this.dialog.open(ConfirmarBorradoComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.borrarHeroe(heroeId);
      }
    });
  }

  borrarHeroe(id: number) {
    this.heroesService.eliminarHeroe(id).subscribe(() => {
      this.obtenerSuperheroes();
    });
  }

  abrirModal(heroe?: Heroe): void {
    const dialogRef = this.dialog.open(ModalAgregarHeroeComponent, {
      width: '400px',
      data: {
        heroe: heroe,
      },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.obtenerSuperheroes();
    });
  }

  seleccionarHeroe(id: number): void {
    this.selectedHeroeId = id;
    this.router.navigate(['/heroes', id]);
  }
}
