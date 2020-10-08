import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MesTeamsComponent} from './mes-teams/mes-teams.component';

const routes: Routes = [
  {path: "mes-teams", component: MesTeamsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
