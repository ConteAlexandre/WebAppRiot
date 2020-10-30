import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MesTeamsComponent} from './mes-teams/mes-teams.component';
import {TotalComponent} from './stats/total/total.component';
import {RegisterComponent} from './register/register.component';
import {EditProfilComponent} from './edit-profil/edit-profil.component';
import {CreationTournoiComponent} from './creation-tournoi/creation-tournoi.component';
import {CreateTeamComponent} from "./create-team/create-team.component";
import {HomeComponent} from "./home/home.component";
import {ListTournoisComponent} from "./list-tournois/list-tournois.component";
import {TournoisComponent} from "./tournois/tournois.component";
import {StatsMatchComponent} from "./stats/stats-match/stats-match.component";
import {MatchComponent} from "./match/match.component";

const routes: Routes = [
  { path: "mes-teams", component: MesTeamsComponent },
  { path: "", component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'createTeam', component: CreateTeamComponent },
  { path: 'listTournois', component: ListTournoisComponent },
  { path: 'tournois', component: TournoisComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profil', component: EditProfilComponent },
  { path: 'creation-tournoi', component: CreationTournoiComponent },
  { path: 'recent', component: TotalComponent },
  { path: 'statsMatch', component: StatsMatchComponent},
  { path: 'match', component: MatchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
