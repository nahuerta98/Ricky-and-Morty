import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterComponent } from './components/character/character.component';
import { CharactersComponent } from './components/characters/characters.component';

const routes: Routes = [
  { path: 'characters', component: CharactersComponent },

  { path: 'characters/:id', component: CharacterComponent },

  { path: '', pathMatch: 'full', redirectTo: 'characters'},

  { path: '**', pathMatch: 'full', redirectTo: 'characters'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
