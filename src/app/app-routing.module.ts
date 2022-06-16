import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionAdventureComponent } from './action-adventure/action-adventure.component';
import { ArtsFilmPhotographyComponent } from './arts-film-photography/arts-film-photography.component';

const routes: Routes = [
  {path: '', component: ActionAdventureComponent},
  {path: 'artsFilmPhotography', component: ArtsFilmPhotographyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }