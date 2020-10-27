import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MesTeamsComponent } from './mes-teams/mes-teams.component';
import { TeamComponent } from './mes-teams/team/team.component';
import { NavbarComponent } from './navbar/navbar.component';
import {LoginComponent} from './login/login.component';
import { CreateTeamComponent } from './create-team/create-team.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    MesTeamsComponent,
    TeamComponent,
    CreateTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
