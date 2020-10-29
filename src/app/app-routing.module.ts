import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MesTeamsComponent} from './mes-teams/mes-teams.component';
import {TotalComponent} from './stats/total/total.component';

const routes: Routes = [
  {path: 'mes-teams', component: MesTeamsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'recent', component: TotalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
