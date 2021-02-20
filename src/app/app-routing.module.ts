import { PersonagemDetailsComponent } from './personagem-details/personagem-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonagensListComponent } from './personagens-list/personagens-list.component';

const routes: Routes = [
  {path: '', component: PersonagensListComponent},
  {path: 'personagens', component: PersonagensListComponent},
  {path: 'personagens/details', component: PersonagemDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
