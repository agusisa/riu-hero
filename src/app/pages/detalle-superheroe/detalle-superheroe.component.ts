import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from 'src/app/models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-detalle-superheroe',
  templateUrl: './detalle-superheroe.component.html',
  styleUrls: ['./detalle-superheroe.component.css'],
})
export class DetalleSuperheroeComponent implements OnInit {
  heroeId: number | undefined;
  heroe: Heroe | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroesService: HeroesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.heroeId = +params['id'];
      this.obtenerHeroe();
    });
  }

  obtenerHeroe(): void {
    if (this.heroeId) {
      this.heroesService.obtenerHeroePorId(this.heroeId).subscribe((heroe) => {
        this.heroe = heroe;
        console.log(this.heroe);
      });
    }
  }
}
