import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MesTeamsComponent } from './mes-teams/mes-teams.component';
import { TeamComponent } from './mes-teams/team/team.component';
import { NavbarComponent } from './navbar/navbar.component';
import {LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EditProfilComponent } from './edit-profil/edit-profil.component';
import { CreationTournoiComponent } from './creation-tournoi/creation-tournoi.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    MesTeamsComponent,
    TeamComponent,
    RegisterComponent,
    EditProfilComponent,
    CreationTournoiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
