import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConnectionComponent} from './connection/connection.component';
import {MesTeamsComponent} from './mes-teams/mes-teams.component';

const routes: Routes = [
  {path: "mes-teams", component: MesTeamsComponent},
  { path: 'connection', component: ConnectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
