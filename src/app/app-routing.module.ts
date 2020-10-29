import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MesTeamsComponent} from './mes-teams/mes-teams.component';
import {RegisterComponent} from './register/register.component';
import {EditProfilComponent} from './edit-profil/edit-profil.component';
import {CreateTeamComponent} from "./create-team/create-team.component";
import {HomeComponent} from "./home/home.component";
import {ListTournoisComponent} from "./list-tournois/list-tournois.component";

const routes: Routes = [
  {path: "mes-teams", component: MesTeamsComponent},
  {path: "home", component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'createTeam', component: CreateTeamComponent },
  { path: 'listTournois', component: ListTournoisComponent }
  { path: 'register', component: RegisterComponent },
  { path: 'profil', component: EditProfilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
