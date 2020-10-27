import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MesTeamsComponent} from './mes-teams/mes-teams.component';
import {RegisterComponent} from './register/register.component';
import {EditProfilComponent} from './edit-profil/edit-profil.component';

const routes: Routes = [
  {path: "mes-teams", component: MesTeamsComponent},
  { path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'profil', component: EditProfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
