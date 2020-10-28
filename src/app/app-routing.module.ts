import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MesTeamsComponent} from './mes-teams/mes-teams.component';
import {ListTournoisComponent} from "./list-tournois/list-tournois.component";

const routes: Routes = [
  {path: "mes-teams", component: MesTeamsComponent},
  { path: 'login', component: LoginComponent },
  { path: 'listTournois', component: ListTournoisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
