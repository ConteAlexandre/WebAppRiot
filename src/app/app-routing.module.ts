import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MesTeamsComponent} from './mes-teams/mes-teams.component';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: "mes-teams", component: MesTeamsComponent},
  {path: "home", component: HomeComponent},
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
