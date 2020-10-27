import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MesTeamsComponent} from './mes-teams/mes-teams.component';
import {CreateTeamComponent} from "./create-team/create-team.component";

const routes: Routes = [
  {path: "mes-teams", component: MesTeamsComponent},
  { path: 'login', component: LoginComponent },
  { path: 'createTeam', component: CreateTeamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
