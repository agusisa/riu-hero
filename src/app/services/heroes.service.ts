import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Heroe } from '../models/heroe.model';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private heroes: Heroe[] = [
    {
      id: 1,
      nombre: 'Superman',
      poder: 'Volar',
      edad: 35,
      planetaOrigen: 'Krypton',
      archienemigo: 'Lex Luthor',
      estatura: 191,
      puntoDebil: 'Kryptonita',
      origenPoderes: 'Exposición al Sol amarillo',
    },
    {
      id: 2,
      nombre: 'Batman',
      poder: 'Inteligencia',
      edad: 40,
      planetaOrigen: 'Tierra',
      archienemigo: 'Joker',
      estatura: 188,
      puntoDebil: 'Humano',
      origenPoderes: 'Entrenamiento riguroso',
    },
    {
      id: 3,
      nombre: 'Spiderman',
      poder: 'Telarañas',
      edad: 25,
      planetaOrigen: 'Tierra',
      archienemigo: 'Green Goblin',
      estatura: 178,
      puntoDebil: 'Su sentido de responsabilidad',
      origenPoderes: 'Picadura de araña radiactiva',
    },
    {
      id: 4,
      nombre: 'Hulk',
      poder: 'Fuerza sobrehumana',
      edad: 45,
      planetaOrigen: 'Tierra',
      archienemigo: 'Abominación',
      estatura: 240,
      puntoDebil: 'Control emocional',
      origenPoderes: 'Exposición a rayos gamma',
    },
    {
      id: 5,
      nombre: 'La Mujer Maravilla',
      poder: 'Fuerza, agilidad y combate',
      edad: 30,
      planetaOrigen: 'Themyscira',
      archienemigo: 'Ares',
      estatura: 183,
      puntoDebil: 'Sin debilidades humanas',
      origenPoderes: 'Divino, entrenamiento',
    },
    {
      id: 6,
      nombre: 'Linterna Verde',
      poder: 'Control de la energía verde',
      edad: 32,
      planetaOrigen: 'Tierra',
      archienemigo: 'Sinestro',
      estatura: 182,
      puntoDebil: 'Pérdida de concentración',
      origenPoderes: 'Anillo de poder',
    },
    {
      id: 7,
      nombre: 'Aquaman',
      poder: 'Control del agua y vida marina',
      edad: 35,
      planetaOrigen: 'Atlantis',
      archienemigo: 'Black Manta',
      estatura: 185,
      puntoDebil: 'Deshidratación',
      origenPoderes: 'Atlante y divino',
    },
  ];

  constructor() {}

  registrarHeroe(heroe: Heroe): Observable<boolean> {
    try {
      this.heroes.push({ ...heroe, id: this.heroes.length + 1 });
      return of(true);
    } catch (error) {
      return of(false);
    }
  }

  obtenerHeroes(): Observable<Heroe[]> {
    return of(this.heroes);
  }

  obtenerHeroePorId(id: number): Observable<Heroe | undefined> {
    return of(this.heroes.find((heroe) => heroe.id === id));
  }

  buscarHeroesPorNombre(nombre: string): Observable<Heroe[]> {
    return of(
      this.heroes.filter((heroe) =>
        heroe.nombre.toLowerCase().includes(nombre.toLowerCase())
      )
    );
  }

  modificarHeroe(heroeModificado: Heroe): Observable<Heroe[]> {
    this.heroes = this.heroes.map((heroe) => {
      if (heroe.id === heroeModificado.id) {
        return heroeModificado;
      } else {
        return heroe;
      }
    });
    return of(this.heroes);
  }

  eliminarHeroe(id: number): Observable<Heroe[]> {
    const index = this.heroes.findIndex((heroe) => heroe.id === id);
    if (index !== -1) {
      this.heroes.splice(index, 1);
    }
    this.reasignarIds();
    return of(this.heroes);
  }

  private reasignarIds(): void {
    this.heroes.forEach((heroe, index) => {
      heroe.id = index + 1;
    });
  }
}
