import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaSuperheroesComponent } from './pages/lista-superheroes/lista-superheroes.component';
import { DetalleSuperheroeComponent } from './pages/detalle-superheroe/detalle-superheroe.component';

const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'heroes', component: ListaSuperheroesComponent },
  { path: 'heroes/:id', component: DetalleSuperheroeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
